import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDescriptionMaybe = props => {
  const { description, publicData } = props;
  if (!publicData) {
    return null;
  }
  const paragraph = publicData.paragraph;
  const paragraphText = paragraph && paragraph.length > 0 ? paragraph.map(el => Object.values(el)) : null;
  return description ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.descriptionTitle" />
      </h2>
      <p className={css.description}>
        {richText(description, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
      </p>
      {paragraph && paragraph.length > 0 ? (
        <p className={css.description}>
          {richText(paragraphText, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </p>
      ) : null}
    </div>
  ) : null;
};

export default SectionDescriptionMaybe;
