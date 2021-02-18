import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDetailMaybe = props => {
  const { rules, model, year, color, quantity, serial, condition } = props;
  return rules ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.detailTitle" />
      </h2>
      <ul className={css.sectionDetail}>
        <li className={css.detail}>
          <FormattedMessage id="ListingPage.brand" />
          {richText(rules, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          <FormattedMessage id="ListingPage.model" />
          {richText(model, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          <FormattedMessage id="ListingPage.year" />
          {richText(year, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          <FormattedMessage id="ListingPage.color" />
          {richText(color, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          <FormattedMessage id="ListingPage.quantity" />
          {richText(quantity, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          <FormattedMessage id="ListingPage.serial" />
          {richText(serial, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          <FormattedMessage id="ListingPage.condition" />
          {richText(condition, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
      </ul>
    </div>
  ) : null;
};

export default SectionDetailMaybe;
