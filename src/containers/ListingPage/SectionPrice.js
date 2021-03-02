import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';

const SectionPrice = props => {
  const { priceTitle, formattedPrice, numberOfOffers } = props;
  const formattedOffer = numberOfOffers ? numberOfOffers : 0;

  return (
    <div className={css.sectionPrice}>
      <div className={css.priceContainer}>
        <div className={`${css.askingPrice} ${css.container}`}>
          <FormattedMessage id="BookingPanel.askingPrice" />
        </div>
        <div className={`${css.priceValue} ${css.container}`} title={priceTitle}>
          {formattedPrice}
        </div>
      </div>
      <div className={css.priceContainer}>
        <div className={`${css.askingPrice} ${css.container}`}>
          <FormattedMessage id="BookingPanel.offer" />
        </div>
        <div className={`${css.priceValue} ${css.container}`}>{formattedOffer}</div>
      </div>
    </div>
  );
};

export default SectionPrice;
