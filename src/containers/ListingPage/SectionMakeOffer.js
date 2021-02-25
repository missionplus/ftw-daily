import React from 'react';

import css from './ListingPage.module.css';
import { MakeOfferForm } from '../../forms';

const SectionMakeOffer = props => {
  const {
    onSubmit
  } = props;

  return (
    <div id="offer" className={css.sectionMakeOffer}>
        <MakeOfferForm onSubmit={onSubmit} />
    </div>
  );
};

export default SectionMakeOffer;
