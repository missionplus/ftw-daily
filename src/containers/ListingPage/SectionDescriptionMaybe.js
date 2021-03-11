import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';
import { ExternalLink } from '../../components';

import css from './ListingPage.module.css';
import { Fragment } from 'react';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDescriptionMaybe = props => {
  const { description, publicData } = props;
  if (!publicData) {
    return null;
  }
  const linkImages = publicData.linkImages;
  const paragraph = publicData.paragraph;

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
      <ExternalLink href={linkImages}>
        {richText(linkImages, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
      </ExternalLink>
      {paragraph && paragraph.length > 0
        ? paragraph.map(el => (
            <Fragment>
              <p className={css.description}>
                {richText(el.description, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </p>
              <ExternalLink href={linkImages}>
                {richText(el.linkImages, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </ExternalLink>
            </Fragment>
          ))
        : null}
    </div>
  ) : null;
};

export default SectionDescriptionMaybe;
