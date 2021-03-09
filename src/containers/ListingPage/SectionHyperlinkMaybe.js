import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';
import { ExternalLink } from '../../components';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionHyperlinkMaybe = props => {
  const { publicData } = props;
  if (!publicData) {
    return null;
  }
  const hyperlink = publicData && publicData.hyperlink;
  return hyperlink ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.hyperlinkTitle" />
      </h2>
      <ExternalLink href={hyperlink} className={css.hyperlink}>
        {richText(hyperlink, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
      </ExternalLink>
    </div>
  ) : null;
};

export default SectionHyperlinkMaybe;
