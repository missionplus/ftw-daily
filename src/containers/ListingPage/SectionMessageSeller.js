import React from 'react';

import { PrimaryButton } from '../../components';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';

const SectionMessageSeller = props => {
  return (
    <div className={css.SectionWatchList}>
      <PrimaryButton type="submit">
        <FormattedMessage id="ListingPage.ctaButtonMessageSeller" />
      </PrimaryButton>
    </div>
  );
};

export default SectionMessageSeller;
