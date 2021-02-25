import React from 'react';

import { Button } from '../../components';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';

const SectionWatchList = props => {
  return (
    <div className={css.SectionWatchList}>
      <Button type="submit" className={css.btn}>
        <FormattedMessage id="ListingPage.ctaButtonWatchList" />
      </Button>
    </div>
  );
};

export default SectionWatchList;
