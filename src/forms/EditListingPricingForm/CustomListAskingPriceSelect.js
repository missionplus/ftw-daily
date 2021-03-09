import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingPricingForm.module.css';

const CustomListAskingPriceSelect = props => {
  const { name, id, askingPrice, acceptOffer, acceptBuyItNow, intl } = props;
  const askingPriceLabel = intl.formatMessage({
    id: 'EditListingPricingForm.askingPriceLabel',
  });
  const askingPricePlaceholder = intl.formatMessage({
    id: 'EditListingPricingForm.askingPricePlaceholder',
  });
  const acceptOfferLabel = intl.formatMessage({
    id: 'EditListingPricingForm.acceptOfferLabel',
  });
  const acceptOfferPlaceholder = intl.formatMessage({
    id: 'EditListingPricingForm.acceptOfferPlaceholder',
  });
  const acceptBuyItNowLabel = intl.formatMessage({
    id: 'EditListingPricingForm.acceptBuyItNowLabel',
  });
  const acceptBuyItNowPlaceholder = intl.formatMessage({
    id: 'EditListingPricingForm.acceptBuyItNowPlaceholder',
  });
//   const askingPriceRequired = required(
//     intl.formatMessage({
//       id: 'EditListingPricingForm.askingPriceRequired',
//     })
//   );
  return askingPrice ? (
    <FieldSelect
      className={css.askingPrice}
      name={name}
      id={id}
      label={askingPriceLabel}
    //   validate={askingPriceRequired}
    >
      <option disabled value="">
        {askingPricePlaceholder}
      </option>
      {askingPrice.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : acceptOffer ? (
    <FieldSelect
      className={css.askingPrice}
      name={name}
      id={id}
      label={acceptOfferLabel}
    >
      <option disabled value="">
        {acceptOfferPlaceholder}
      </option>
      {acceptOffer.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : acceptBuyItNow ? (
    <FieldSelect
      className={css.askingPrice}
      name={name}
      id={id}
      label={acceptBuyItNowLabel}
    >
      <option disabled value="">
        {acceptBuyItNowPlaceholder}
      </option>
      {acceptBuyItNow.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomListAskingPriceSelect;
