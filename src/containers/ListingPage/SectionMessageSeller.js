import React from 'react';

import { PrimaryButton } from '../../components';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';

const SectionMessageSeller = props => {
  const { showContactUser, onContactUser } = props;
  return (
    <div className={css.SectionWatchList}>
        {showContactUser ? (
          <span className={css.contactWrapper}>
            <PrimaryButton type="submit" className={css.btn} onClick={onContactUser}>
              <FormattedMessage id="ListingPage.ctaButtonMessageSeller" />
            </PrimaryButton>
          </span>
        ) : null}
    </div>
  );
};

export default SectionMessageSeller;
