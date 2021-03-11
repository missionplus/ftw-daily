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

  // yes
  const yearMicPairA = publicData && publicData.yearMicPairA;
  const colorMicPairA = publicData && publicData.colorMicPairA;
  const conditionMicPairA = publicData && publicData.conditionMicPairA;
  const originalTubeA = publicData && publicData.originalTubeA;
  const modelTubeA = publicData && publicData.modelTubeA;
  const originalCapsuleA = publicData && publicData.originalCapsuleA;
  const modelCapsuleA = publicData && publicData.modelCapsuleA;
  const originalTransformerA = publicData && publicData.originalTransformerA;
  const modelTransformerA = publicData && publicData.modelTransformerA;
  const powerSupplyA = publicData && publicData.powerSupplyA;
  const originalSupplyA = publicData && publicData.originalSupplyA;
  const modelSupplyA = publicData && publicData.modelSupplyA;
  const cablingA = publicData && publicData.cablingA;
  const originalCablingA = publicData && publicData.originalCablingA;
  const modelCablingA = publicData && publicData.modelCablingA;
  const shockMountA = publicData && publicData.shockMountA;
  const originalShockMountA = publicData && publicData.originalShockMountA;
  const modelShockMountA = publicData && publicData.modelShockMountA;
  const micCaseA = publicData && publicData.micCaseA;
  const originalMicCaseA = publicData && publicData.originalMicCaseA;
  const modelMicCaseA = publicData && publicData.modelMicCaseA;
  const carryCaseA = publicData && publicData.carryCaseA;
  const originalCarryCaseA = publicData && publicData.originalCarryCaseA;
  const modelCarryCaseA = publicData && publicData.modelCarryCaseA;

  const yearMicPairB = publicData && publicData.yearMicPairB;
  const colorMicPairB = publicData && publicData.colorMicPairB;
  const conditionMicPairB = publicData && publicData.conditionMicPairB;
  const originalTubeB = publicData && publicData.originalTubeB;
  const modelTubeB = publicData && publicData.modelTubeB;
  const originalCapsuleB = publicData && publicData.originalCapsuleB;
  const modelCapsuleB = publicData && publicData.modelCapsuleB;
  const originalTransformerB = publicData && publicData.originalTransformerB;
  const modelTransformerB = publicData && publicData.modelTransformerB;
  const powerSupplyB = publicData && publicData.powerSupplyB;
  const originalSupplyB = publicData && publicData.originalSupplyB;
  const modelSupplyB = publicData && publicData.modelSupplyB;
  const cablingB = publicData && publicData.cablingB;
  const originalCablingB = publicData && publicData.originalCablingB;
  const modelCablingB = publicData && publicData.modelCablingB;
  const shockMountB = publicData && publicData.shockMountB;
  const originalShockMountB = publicData && publicData.originalShockMountB;
  const modelShockMountB = publicData && publicData.modelShockMountB;
  const micCaseB = publicData && publicData.micCaseB;
  const originalMicCaseB = publicData && publicData.originalMicCaseB;
  const modelMicCaseB = publicData && publicData.modelMicCaseB;
  const carryCaseB = publicData && publicData.carryCaseB;
  const originalCarryCaseB = publicData && publicData.originalCarryCaseB;
  const modelCarryCaseB = publicData && publicData.modelCarryCaseB;

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
            <li className={css.readMoreTarget}>
              {sellingPair && sellingPair == 'yes' ? (
                <Fragment>
                  <ul className={css.col}>
                    <h5 className={css.category}>
                      {(yearMicPairA && yearMicPairA.length > 0) ||
                      (colorMicPairA && colorMicPairA.length > 0) ||
                      (conditionMicPairA && conditionMicPairA.length > 0) ? (
                        <FormattedMessage id="ListingPage.a" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {yearMicPairA && yearMicPairA.length > 0 ? (
                        <FormattedMessage id="ListingPage.year" />
                      ) : null}
                      {richText(yearMicPairA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {colorMicPairA && colorMicPairA.length > 0 ? (
                        <FormattedMessage id="ListingPage.color" />
                      ) : null}
                      {richText(colorMicPairA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {conditionMicPairA && conditionMicPairA.length > 0 ? (
                        <FormattedMessage id="ListingPage.condition" />
                      ) : null}
                      {richText(conditionMicPairA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(originalTubeA && originalTubeA.length > 0) ||
                      (modelTubeA && modelTubeA.length > 0) ? (
                        <FormattedMessage id="ListingPage.tube" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {originalTubeA && originalTubeA.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalTubeA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelTubeA && modelTubeA.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(modelTubeA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(originalCapsuleA && originalCapsuleA.length > 0) ||
                      (modelCapsuleA && modelCapsuleA.length > 0) ? (
                        <FormattedMessage id="ListingPage.capsule" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {originalCapsuleA && originalCapsuleA.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalCapsuleA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelCapsuleA && modelCapsuleA.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelCapsuleA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(originalTransformerA && originalTransformerA.length > 0) ||
                      (modelTransformerA && modelTransformerA.length > 0) ? (
                        <FormattedMessage id="ListingPage.transformer" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {originalTransformerA && originalTransformerA.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalTransformerA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelTransformerA && modelTransformerA.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelTransformerA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(powerSupplyA && powerSupplyA.length > 0) ||
                      (originalSupplyA && originalSupplyA.length > 0) ||
                      (modelSupplyA && modelSupplyA.length > 0) ? (
                        <FormattedMessage id="ListingPage.supply" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {powerSupplyA && powerSupplyA.length > 0 ? (
                        <FormattedMessage id="ListingPage.powerSupply" />
                      ) : null}
                      {richText(powerSupplyA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalSupplyA && originalSupplyA.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalSupplyA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelSupplyA && modelSupplyA.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelSupplyA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(cablingA && cablingA.length > 0) ||
                      (originalCablingA && originalCablingA.length > 0) ||
                      (modelCablingA && modelCablingA.length > 0) ? (
                        <FormattedMessage id="ListingPage.cabling" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {cablingA && cablingA.length > 0 ? (
                        <FormattedMessage id="ListingPage.cablingSmall" />
                      ) : null}
                      {richText(cablingA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalCablingA && originalCablingA.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalCablingA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelCablingA && modelCablingA.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelCablingA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(shockMountA && shockMountA.length > 0) ||
                      (originalShockMountA && originalShockMountA.length > 0) ||
                      (modelShockMountA && modelShockMountA.length > 0) ? (
                        <FormattedMessage id="ListingPage.shockMount" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {shockMountA && shockMountA.length > 0 ? (
                        <FormattedMessage id="ListingPage.shockMountSmall" />
                      ) : null}
                      {richText(shockMountA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalShockMountA && originalShockMountA.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalShockMountA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelShockMountA && modelShockMountA.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelShockMountA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(micCaseA && micCaseA.length > 0) ||
                      (originalMicCaseA && originalMicCaseA.length > 0) ||
                      (modelMicCaseA && modelMicCaseA.length > 0) ? (
                        <FormattedMessage id="ListingPage.micCase" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {micCaseA && micCaseA.length > 0 ? (
                        <FormattedMessage id="ListingPage.micCaseSmall" />
                      ) : null}
                      {richText(micCaseA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalMicCaseA && originalMicCaseA.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalMicCaseA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelMicCaseA && modelMicCaseA.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelMicCaseA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(carryCaseA && carryCaseA.length > 0) ||
                      (originalCarryCaseA && originalCarryCaseA.length > 0) ||
                      (modelCarryCaseA && modelCarryCaseA.length > 0) ? (
                        <FormattedMessage id="ListingPage.carryCase" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {carryCaseA && carryCaseA.length > 0 ? (
                        <FormattedMessage id="ListingPage.carryCaseSmall" />
                      ) : null}
                      {richText(carryCaseA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalCarryCaseA && originalCarryCaseA.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalCarryCaseA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelCarryCaseA && modelCarryCaseA.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelCarryCaseA, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                  </ul>
                  <ul className={css.col}>
                    <h5 className={css.category}>
                      {(yearMicPairB && yearMicPairB.length > 0) ||
                      (colorMicPairB && colorMicPairB.length > 0) ||
                      (conditionMicPairB && conditionMicPairB.length > 0) ? (
                        <FormattedMessage id="ListingPage.b" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {yearMicPairB && yearMicPairB.length > 0 ? (
                        <FormattedMessage id="ListingPage.year" />
                      ) : null}
                      {richText(yearMicPairB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {colorMicPairB && colorMicPairB.length > 0 ? (
                        <FormattedMessage id="ListingPage.color" />
                      ) : null}
                      {richText(colorMicPairB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {conditionMicPairB && conditionMicPairB.length > 0 ? (
                        <FormattedMessage id="ListingPage.condition" />
                      ) : null}
                      {richText(conditionMicPairB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(originalTubeB && originalTubeB.length > 0) ||
                      (modelTubeB && modelTubeB.length > 0) ? (
                        <FormattedMessage id="ListingPage.tube" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {originalTubeB && originalTubeB.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalTubeB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelTubeB && modelTubeB.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(modelTubeB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(originalCapsuleB && originalCapsuleB.length > 0) ||
                      (modelCapsuleB && modelCapsuleB.length > 0) ? (
                        <FormattedMessage id="ListingPage.capsule" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {originalCapsuleB && originalCapsuleB.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalCapsuleB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelCapsuleB && modelCapsuleB.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelCapsuleB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(originalTransformerB && originalTransformerB.length > 0) ||
                      (modelTransformerB && modelTransformerB.length > 0) ? (
                        <FormattedMessage id="ListingPage.transformer" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {originalTransformerB && originalTransformerB.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalTransformerB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelTransformerB && modelTransformerB.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelTransformerB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(powerSupplyB && powerSupplyB.length > 0) ||
                      (originalSupplyB && originalSupplyB.length > 0) ||
                      (modelSupplyB && modelSupplyB.length > 0) ? (
                        <FormattedMessage id="ListingPage.supply" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {powerSupplyB && powerSupplyB.length > 0 ? (
                        <FormattedMessage id="ListingPage.powerSupply" />
                      ) : null}
                      {richText(powerSupplyB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalSupplyB && originalSupplyB.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalSupplyB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelSupplyB && modelSupplyB.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelSupplyB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(cablingB && cablingB.length > 0) ||
                      (originalCablingB && originalCablingB.length > 0) ||
                      (modelCablingB && modelCablingB.length > 0) ? (
                        <FormattedMessage id="ListingPage.cabling" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {cablingB && cablingB.length > 0 ? (
                        <FormattedMessage id="ListingPage.cablingSmall" />
                      ) : null}
                      {richText(cablingB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalCablingB && originalCablingB.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalCablingB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelCablingB && modelCablingB.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelCablingB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(shockMountB && shockMountB.length > 0) ||
                      (originalShockMountB && originalShockMountB.length > 0) ||
                      (modelShockMountB && modelShockMountB.length > 0) ? (
                        <FormattedMessage id="ListingPage.shockMount" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {shockMountB && shockMountB.length > 0 ? (
                        <FormattedMessage id="ListingPage.shockMountSmall" />
                      ) : null}
                      {richText(shockMountB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalShockMountB && originalShockMountB.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalShockMountB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelShockMountB && modelShockMountB.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelShockMountB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(micCaseB && micCaseB.length > 0) ||
                      (originalMicCaseB && originalMicCaseB.length > 0) ||
                      (modelMicCaseB && modelMicCaseB.length > 0) ? (
                        <FormattedMessage id="ListingPage.micCase" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {micCaseB && micCaseB.length > 0 ? (
                        <FormattedMessage id="ListingPage.micCaseSmall" />
                      ) : null}
                      {richText(micCaseB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalMicCaseB && originalMicCaseB.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalMicCaseB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelMicCaseB && modelMicCaseB.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelMicCaseB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <h5 className={css.category}>
                      {(carryCaseB && carryCaseB.length > 0) ||
                      (originalCarryCaseB && originalCarryCaseB.length > 0) ||
                      (modelCarryCaseB && modelCarryCaseB.length > 0) ? (
                        <FormattedMessage id="ListingPage.carryCase" />
                      ) : null}
                    </h5>
                    <li className={css.detail}>
                      {carryCaseB && carryCaseB.length > 0 ? (
                        <FormattedMessage id="ListingPage.carryCaseSmall" />
                      ) : null}
                      {richText(carryCaseB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {originalCarryCaseB && originalCarryCaseB.length > 0 ? (
                        <FormattedMessage id="ListingPage.original" />
                      ) : null}
                      {richText(originalCarryCaseB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                    <li className={css.detail}>
                      {modelCarryCaseB && modelCarryCaseB.length > 0 ? (
                        <FormattedMessage id="ListingPage.makeModel" />
                      ) : null}
                      {richText(modelCarryCaseB, {
                        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
                        longWordClass: css.longWord,
                      })}
                    </li>
                  </ul>
                </Fragment>
              ) : (
                <Fragment>
                  <ul className={css.column}>
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
                </Fragment>
              )}
            </li>
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
