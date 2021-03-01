import React from 'react';
import { Fragment } from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDetailMaybe = props => {
  const { publicData } = props;
  if (!publicData) {
    return null;
  }
  const category = publicData && publicData.category;
  const brand = publicData && publicData.brand;
  const model = publicData && publicData.model;
  const year = publicData && publicData.year;
  const color = publicData && publicData.color;
  const quantity = publicData && publicData.quantity;
  const serial = publicData && publicData.serial;
  const condition = publicData && publicData.condition;

  const sellingPair = publicData && publicData.sellingPair;
  const sequentSerial = publicData && publicData.sequentSerial;
  const serialMicPair = publicData && publicData.serialMicPair;
  const brandMicPair = publicData && publicData.brandMicPair;
  const modelMicPair = publicData && publicData.modelMicPair;
  const yearMicPair = publicData && publicData.yearMicPair;
  const colorMicPair = publicData && publicData.colorMicPair;
  const conditionMicPair = publicData && publicData.conditionMicPair;
  const originalTube = publicData && publicData.originalTube;
  const modelTube = publicData && publicData.modelTube;
  const originalCapsule = publicData && publicData.originalCapsule;
  const modelCapsule = publicData && publicData.modelCapsule;
  const originalTransformer = publicData && publicData.originalTransformer;
  const modelTransformer = publicData && publicData.modelTransformer;
  const powerSupply = publicData && publicData.powerSupply;
  const originalSupply = publicData && publicData.originalSupply;
  const modelSupply = publicData && publicData.modelSupply;
  const cabling = publicData && publicData.cabling;
  const originalCabling = publicData && publicData.originalCabling;
  const modelCabling = publicData && publicData.modelCabling;
  const shockMount = publicData && publicData.shockMount;
  const originalShockMount = publicData && publicData.originalShockMount;
  const modelShockMount = publicData && publicData.modelShockMount;
  const micCase = publicData && publicData.micCase;
  const originalMicCase = publicData && publicData.originalMicCase;
  const modelMicCase = publicData && publicData.modelMicCase;
  const carryCase = publicData && publicData.carryCase;
  const originalCarryCase = publicData && publicData.originalCarryCase;
  const modelCarryCase = publicData && publicData.modelCarryCase;
  return (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.detailTitle" />
      </h2>
      {category && category == 'microphones' ? (
        <Fragment>
          <h5 className={css.categoryTitle}>
            <FormattedMessage id="ListingPage.categoryTitle" values={{ category }} />
          </h5>
          <input type="checkbox" className={css.readMoreState} id="post" />
          <ul className={css.sectionDetail}>
            <li className={css.detail}>
              {sellingPair && sellingPair.length > 0 ? (
                <FormattedMessage id="ListingPage.sellingPair" />
              ) : null}
              {richText(sellingPair, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                longWordClass: css.longWord,
              })}
            </li>
            <li className={css.detail}>
              {sequentSerial && sequentSerial.length > 0 ? (
                <FormattedMessage id="ListingPage.sequentSerial" />
              ) : null}
              {richText(sequentSerial, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                longWordClass: css.longWord,
              })}
            </li>
            <li className={css.detail}>
              {serialMicPair && serialMicPair.length > 0 ? (
                <FormattedMessage id="ListingPage.serial" />
              ) : null}
              {richText(serialMicPair, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                longWordClass: css.longWord,
              })}
            </li>
            <li className={css.detail}>
              {brandMicPair && brandMicPair.length > 0 ? (
                <FormattedMessage id="ListingPage.brand" />
              ) : null}
              {richText(brandMicPair, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                longWordClass: css.longWord,
              })}
            </li>
            <li className={css.detail}>
              {modelMicPair && modelMicPair.length > 0 ? (
                <FormattedMessage id="ListingPage.model" />
              ) : null}
              {richText(modelMicPair, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                longWordClass: css.longWord,
              })}
            </li>
            <ul className={css.readMoreTarget}>
              <li className={css.detail}>
                {yearMicPair && yearMicPair.length > 0 ? (
                  <FormattedMessage id="ListingPage.year" />
                ) : null}
                {richText(yearMicPair, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {colorMicPair && colorMicPair.length > 0 ? (
                  <FormattedMessage id="ListingPage.color" />
                ) : null}
                {richText(colorMicPair, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {conditionMicPair && conditionMicPair.length > 0 ? (
                  <FormattedMessage id="ListingPage.condition" />
                ) : null}
                {richText(conditionMicPair, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <h5 className={css.categoryTitle}>
                {(originalTube && originalTube.length > 0) ||
                (modelTube && modelTube.length > 0) ? (
                  <FormattedMessage id="ListingPage.tube" />
                ) : null}
              </h5>
              <li className={css.detail}>
                {originalTube && originalTube.length > 0 ? (
                  <FormattedMessage id="ListingPage.original" />
                ) : null}
                {richText(originalTube, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {modelTube && modelTube.length > 0 ? (
                  <FormattedMessage id="ListingPage.makeModel" />
                ) : null}
                {richText(modelTube, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <h5 className={css.categoryTitle}>
                {(originalCapsule && originalCapsule.length > 0) ||
                (modelCapsule && modelCapsule.length > 0) ? (
                  <FormattedMessage id="ListingPage.capsule" />
                ) : null}
              </h5>
              <li className={css.detail}>
                {originalCapsule && originalCapsule.length > 0 ? (
                  <FormattedMessage id="ListingPage.original" />
                ) : null}
                {richText(originalCapsule, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {modelCapsule && modelCapsule.length > 0 ? (
                  <FormattedMessage id="ListingPage.makeModel" />
                ) : null}
                {richText(modelCapsule, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <h5 className={css.categoryTitle}>
                {(originalTransformer && originalTransformer.length > 0) ||
                (modelTransformer && modelTransformer.length > 0) ? (
                  <FormattedMessage id="ListingPage.transformer" />
                ) : null}
              </h5>
              <li className={css.detail}>
                {originalTransformer && originalTransformer.length > 0 ? (
                  <FormattedMessage id="ListingPage.original" />
                ) : null}
                {richText(originalTransformer, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {modelTransformer && modelTransformer.length > 0 ? (
                  <FormattedMessage id="ListingPage.makeModel" />
                ) : null}
                {richText(modelTransformer, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <h5 className={css.categoryTitle}>
                {(powerSupply && powerSupply.length > 0) ||
                (originalSupply && originalSupply.length > 0) ||
                (modelSupply && modelSupply.length > 0) ? (
                  <FormattedMessage id="ListingPage.supply" />
                ) : null}
              </h5>
              <li className={css.detail}>
                {powerSupply && powerSupply.length > 0 ? (
                  <FormattedMessage id="ListingPage.powerSupply" />
                ) : null}
                {richText(powerSupply, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {originalSupply && originalSupply.length > 0 ? (
                  <FormattedMessage id="ListingPage.original" />
                ) : null}
                {richText(originalSupply, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {modelSupply && modelSupply.length > 0 ? (
                  <FormattedMessage id="ListingPage.makeModel" />
                ) : null}
                {richText(modelSupply, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <h5 className={css.categoryTitle}>
                {(cabling && cabling.length > 0) ||
                (originalCabling && originalCabling.length > 0) ||
                (modelCabling && modelCabling.length > 0) ? (
                  <FormattedMessage id="ListingPage.cabling" />
                ) : null}
              </h5>
              <li className={css.detail}>
                {cabling && cabling.length > 0 ? (
                  <FormattedMessage id="ListingPage.cablingSmall" />
                ) : null}
                {richText(cabling, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {originalCabling && originalCabling.length > 0 ? (
                  <FormattedMessage id="ListingPage.original" />
                ) : null}
                {richText(originalCabling, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {modelCabling && modelCabling.length > 0 ? (
                  <FormattedMessage id="ListingPage.makeModel" />
                ) : null}
                {richText(modelCabling, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <h5 className={css.categoryTitle}>
                {(shockMount && shockMount.length > 0) ||
                (originalShockMount && originalShockMount.length > 0) ||
                (modelShockMount && modelShockMount.length > 0) ? (
                  <FormattedMessage id="ListingPage.shockMount" />
                ) : null}
              </h5>
              <li className={css.detail}>
                {shockMount && shockMount.length > 0 ? (
                  <FormattedMessage id="ListingPage.shockMountSmall" />
                ) : null}
                {richText(shockMount, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {originalShockMount && originalShockMount.length > 0 ? (
                  <FormattedMessage id="ListingPage.original" />
                ) : null}
                {richText(originalShockMount, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {modelShockMount && modelShockMount.length > 0 ? (
                  <FormattedMessage id="ListingPage.makeModel" />
                ) : null}
                {richText(modelShockMount, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <h5 className={css.categoryTitle}>
                {(micCase && micCase.length > 0) ||
                (originalMicCase && originalMicCase.length > 0) ||
                (modelMicCase && modelMicCase.length > 0) ? (
                  <FormattedMessage id="ListingPage.micCase" />
                ) : null}
              </h5>
              <li className={css.detail}>
                {micCase && micCase.length > 0 ? (
                  <FormattedMessage id="ListingPage.micCaseSmall" />
                ) : null}
                {richText(micCase, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {originalMicCase && originalMicCase.length > 0 ? (
                  <FormattedMessage id="ListingPage.original" />
                ) : null}
                {richText(originalMicCase, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {modelMicCase && modelMicCase.length > 0 ? (
                  <FormattedMessage id="ListingPage.makeModel" />
                ) : null}
                {richText(modelMicCase, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <h5 className={css.categoryTitle}>
                {(carryCase && carryCase.length > 0) ||
                (originalCarryCase && originalCarryCase.length > 0) ||
                (modelCarryCase && modelCarryCase.length > 0) ? (
                  <FormattedMessage id="ListingPage.carryCase" />
                ) : null}
              </h5>
              <li className={css.detail}>
                {carryCase && carryCase.length > 0 ? (
                  <FormattedMessage id="ListingPage.carryCaseSmall" />
                ) : null}
                {richText(carryCase, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {originalCarryCase && originalCarryCase.length > 0 ? (
                  <FormattedMessage id="ListingPage.original" />
                ) : null}
                {richText(originalCarryCase, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
              <li className={css.detail}>
                {modelCarryCase && modelCarryCase.length > 0 ? (
                  <FormattedMessage id="ListingPage.makeModel" />
                ) : null}
                {richText(modelCarryCase, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                  longWordClass: css.longWord,
                })}
              </li>
            </ul>
          </ul>
          <label htmlFor="post" className={css.readMoreTrigger}></label>
        </Fragment>
      ) : (
        <ul className={css.sectionDetail}>
          <li className={css.detail}>
            {brand && brand.length > 0 ? <FormattedMessage id="ListingPage.brand" /> : null}
            {richText(brand, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord,
            })}
          </li>
          <li className={css.detail}>
            {model && model.length > 0 ? <FormattedMessage id="ListingPage.model" /> : null}
            {richText(model, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord,
            })}
          </li>
          <li className={css.detail}>
            {year && year.length > 0 ? <FormattedMessage id="ListingPage.year" /> : null}
            {richText(year, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord,
            })}
          </li>
          <li className={css.detail}>
            {color && color.length > 0 ? <FormattedMessage id="ListingPage.color" /> : null}
            {richText(color, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord,
            })}
          </li>
          <li className={css.detail}>
            {quantity && quantity.length > 0 ? (
              <FormattedMessage id="ListingPage.quantity" />
            ) : null}
            {richText(quantity, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord,
            })}
          </li>
          <li className={css.detail}>
            {serial && serial.length > 0 ? <FormattedMessage id="ListingPage.serial" /> : null}
            {richText(serial, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord,
            })}
          </li>
          <li className={css.detail}>
            {condition && condition.length > 0 ? (
              <FormattedMessage id="ListingPage.condition" />
            ) : null}
            {richText(condition, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord,
            })}
          </li>
        </ul>
      )}
    </div>
  );
};

export default SectionDetailMaybe;
