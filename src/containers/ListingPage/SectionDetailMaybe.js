import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDetailMaybe = props => {
  const { publicData } = props;
  if (!publicData) {
    return null;
  }
  const brand = publicData && publicData.brand;
  const model = publicData && publicData.model;
  const year = publicData && publicData.year;
  const color = publicData && publicData.color;
  const quantity = publicData && publicData.quantity;
  const serial = publicData && publicData.serial;
  const condition = publicData && publicData.condition;
  return (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.detailTitle" />
      </h2>
      <ul className={css.sectionDetail}>
        <li className={css.detail}>
          {brand && brand.length > 0 ? <FormattedMessage id="ListingPage.brand" /> : null}
          {richText(brand, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          { model && model.length > 0 ? <FormattedMessage id="ListingPage.model" /> : null }
          {richText(model, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          { year && year.length > 0 ? <FormattedMessage id="ListingPage.year" /> : null }
          {richText(year, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          { color && color.length > 0 ? <FormattedMessage id="ListingPage.color" /> : null }
          {richText(color, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          { quantity && quantity.length > 0 ? <FormattedMessage id="ListingPage.quantity" /> : null }
          {richText(quantity, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          { serial && serial.length > 0 ? <FormattedMessage id="ListingPage.serial" /> : null }
          {richText(serial, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
        <li className={css.detail}>
          { condition && condition.length > 0 ? <FormattedMessage id="ListingPage.condition" /> : null }
          {richText(condition, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </li>
      </ul>
    </div>
  );
};

export default SectionDetailMaybe;
