import unionWith from 'lodash/unionWith';
import { storableError } from '../../util/errors';
import { addMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { convertUnitToSubUnit, unitDivisor } from '../../util/currency';
import { formatDateStringToUTC, getExclusiveEndDate } from '../../util/dates';
import config from '../../config';

// ================ Action types ================ //

export const LANDING_LISTINGS_REQUEST = 'app/LandingPage/LANDING_LISTINGS_REQUEST';
export const LANDING_LISTINGS_SUCCESS = 'app/LandingPage/LANDING_LISTINGS_SUCCESS';
export const LANDING_LISTINGS_ERROR = 'app/LandingPage/LANDING_LISTINGS_ERROR';

export const LANDING_MAP_LISTINGS_REQUEST = 'app/LandingPage/LANDING_MAP_LISTINGS_REQUEST';
export const LANDING_MAP_LISTINGS_SUCCESS = 'app/LandingPage/LANDING_MAP_LISTINGS_SUCCESS';
export const LANDING_MAP_LISTINGS_ERROR = 'app/LandingPage/LANDING_MAP_LISTINGS_ERROR';

export const LANDING_MAP_SET_ACTIVE_LISTING = 'app/LandingPage/LANDING_MAP_SET_ACTIVE_LISTING';

// ================ Reducer ================ //

const initialState = {
  pagination: null,
  landingParams: null,
  landingInProgress: false,
  landingListingsError: null,
  currentPageResultIds: [],
  searchMapListingIds: [],
  landingMapListingsError: null,
};

const resultIds = data => data.data.map(l => l.id);

const landingPageReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LANDING_LISTINGS_REQUEST:
      return {
        ...state,
        landingParams: payload.landingParams,
        landingInProgress: true,
        searchMapListingIds: [],
        landingListingsError: null,
      };
    case LANDING_LISTINGS_SUCCESS:
      return {
        ...state,
        currentPageResultIds: resultIds(payload.data),
        pagination: payload.data.meta,
        landingInProgress: false,
      };
    case LANDING_LISTINGS_ERROR:
      // eslint-disable-next-line no-console
      console.error(payload);
      return { ...state, landingInProgress: false, landingListingsError: payload };

    case LANDING_MAP_LISTINGS_REQUEST:
      return {
        ...state,
        landingMapListingsError: null,
      };
    case LANDING_MAP_LISTINGS_SUCCESS: {
      const searchMapListingIds = unionWith(
        state.searchMapListingIds,
        resultIds(payload.data),
        (id1, id2) => id1.uuid === id2.uuid
      );
      return {
        ...state,
        searchMapListingIds,
      };
    }
    case LANDING_MAP_LISTINGS_ERROR:
      // eslint-disable-next-line no-console
      console.error(payload);
      return { ...state, landingMapListingsError: payload };

    case LANDING_MAP_SET_ACTIVE_LISTING:
      return {
        ...state,
        activeListingId: payload,
      };
    default:
      return state;
  }
};

export default landingPageReducer;

// ================ Action creators ================ //

export const landingListingsRequest = landingParams => ({
  type: LANDING_LISTINGS_REQUEST,
  payload: { landingParams },
});

export const landingListingsSuccess = response => ({
  type: LANDING_LISTINGS_SUCCESS,
  payload: { data: response.data },
});

export const landingListingsError = e => ({
  type: LANDING_LISTINGS_ERROR,
  error: true,
  payload: e,
});

export const landingMapListingsRequest = () => ({ type: LANDING_MAP_LISTINGS_REQUEST });

export const landingMapListingsSuccess = response => ({
  type: LANDING_MAP_LISTINGS_SUCCESS,
  payload: { data: response.data },
});

export const landingMapListingsError = e => ({
  type: LANDING_MAP_LISTINGS_ERROR,
  error: true,
  payload: e,
});

export const landingListings = landingParams => (dispatch, getState, sdk) => {
  dispatch(landingListingsRequest(landingParams));

  const priceSearchParams = priceParam => {
    const inSubunits = value =>
      convertUnitToSubUnit(value, unitDivisor(config.currencyConfig.currency));
    const values = priceParam ? priceParam.split(',') : [];
    return priceParam && values.length === 2
      ? {
          price: [inSubunits(values[0]), inSubunits(values[1]) + 1].join(','),
        }
      : {};
  };

  const datesSearchParams = datesParam => {
    const values = datesParam ? datesParam.split(',') : [];
    const hasValues = datesParam && values.length === 2;
    const startDate = hasValues ? values[0] : null;
    const isNightlyBooking = config.bookingUnitType === 'line-item/night';
    const endDate =
      hasValues && isNightlyBooking ? values[1] : hasValues ? getExclusiveEndDate(values[1]) : null;

    return hasValues
      ? {
          start: formatDateStringToUTC(startDate),
          end: formatDateStringToUTC(endDate),
          // Availability can be full or partial. Default value is full.
          availability: 'full',
        }
      : {};
  };

  const { perPage, price, dates, ...rest } = landingParams;
  const priceMaybe = priceSearchParams(price);
  const datesMaybe = datesSearchParams(dates);

  const params = {
    ...rest,
    ...priceMaybe,
    ...datesMaybe,
    per_page: perPage,
  };

  return sdk.listings
    .query(params)
    .then(response => {
      dispatch(addMarketplaceEntities(response));
      dispatch(landingListingsSuccess(response));
      return response;
    })
    .catch(e => {
      dispatch(landingListingsError(storableError(e)));
      throw e;
    });
};

export const setActiveListing = listingId => ({
  type: LANDING_MAP_SET_ACTIVE_LISTING,
  payload: listingId,
});

export const landingMapListings = landingParams => (dispatch, getState, sdk) => {
  dispatch(landingMapListingsRequest(landingParams));

  const { perPage, ...rest } = landingParams;
  const params = {
    ...rest,
    per_page: perPage,
  };

  return sdk.listings
    .query(params)
    .then(response => {
      dispatch(addMarketplaceEntities(response));
      dispatch(landingMapListingsSuccess(response));
      return response;
    })
    .catch(e => {
      dispatch(landingMapListingsError(storableError(e)));
      throw e;
    });
};
