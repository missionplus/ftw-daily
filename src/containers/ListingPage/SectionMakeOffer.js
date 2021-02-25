import React from 'react';

import css from './ListingPage.module.css';
import { MakeOfferForm } from '../../forms';

const SectionMakeOffer = props => {
  const {} = props;

  return (
    <div id="offer" className={css.sectionHost}>
        <MakeOfferForm onSubmit={values => {}} />
    </div>
  );
};

export default SectionMakeOffer;
