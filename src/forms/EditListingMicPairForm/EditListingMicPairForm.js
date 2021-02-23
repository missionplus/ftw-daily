import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput } from '../../components';
import CustomSellingPairSelectFieldMaybe from './CustomSellingPairSelectFieldMaybe';
import CustomOriginalSelectFieldMaybe from './CustomOriginalSelectFieldMaybe';
import CustomMicPairSelectFieldMaybe from './CustomMicpairSelectFieldMaybe';
import CustomConditionSelectFieldMaybe from '../EditListingPoliciesForm/CustomConditionSelectFieldMaybe';

import css from './EditListingMicPairForm.module.css';
import { Fragment } from 'react';

export const EditListingMicPairFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        sellingPair,
        sequentSerial,
        conditionMicPair,
        micPairOptions,
        original,
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        values,
      } = formRenderProps;
      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingPoliciesForm.updateFailed" />
        </p>
      ) : null;
      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingPoliciesForm.showListingFailed" />
        </p>
      ) : null;
      console.log(values);
      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;
      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <CustomSellingPairSelectFieldMaybe
            id="sellingPair"
            name="sellingPair"
            sellingPair={sellingPair}
            intl={intl}
          />

          <CustomSellingPairSelectFieldMaybe
            id="sequentSerial"
            name="sequentSerial"
            sequentSerial={sequentSerial}
            intl={intl}
          />

          <FieldTextInput
            id="serialMicPair"
            name="serialMicPair"
            className={css.micpair}
            type="number"
            label="Serial #s"
          />

          <FieldTextInput
            id="brandMicPair"
            name="brandMicPair"
            className={css.micpair}
            type="textarea"
            label="Brand"
          />

          <FieldTextInput
            id="modelMicPair"
            name="modelMicPair"
            className={css.micpair}
            type="textarea"
            label="Model"
          />

          {values.sellingPair &&
            (values.sellingPair == 'y' ? (
              <Fragment>
                                <div className={css.wrapper}>
                  <div className={css.content}>
                    <h2 className={css.titleContent}>A</h2>
                    <FieldTextInput
                      id="yearMicPairA"
                      name="yearMicPairA"
                      className={css.micpair}
                      type="number"
                      label="Year"
                    />
                    <FieldTextInput
                      id="colorMicPairA"
                      name="colorMicPairA"
                      className={css.micpair}
                      type="textarea"
                      label="Color"
                    />
                    <CustomConditionSelectFieldMaybe
                      id="conditionMicPairA"
                      name="conditionMicPairA"
                      conditionMicPairA={conditionMicPair}
                      intl={intl}
                    />
                  </div>
                  <div className={css.content}>
                    <h2 className={css.titleContent}>B</h2>
                    <FieldTextInput
                      id="yearMicPairB"
                      name="yearMicPairB"
                      className={css.micpair}
                      type="number"
                      label="Year"
                    />
                    <FieldTextInput
                      id="colorMicPairB"
                      name="colorMicPairB"
                      className={css.micpair}
                      type="textarea"
                      label="Color"
                    />
                    <CustomConditionSelectFieldMaybe
                      id="conditionMicPairB"
                      name="conditionMicPairB"
                      conditionMicPairB={conditionMicPair}
                      intl={intl}
                    />
                  </div>
                </div>
                <div className={css.wrapper}>
                  <h2 className={css.titleContent}>TUBE</h2>
                  <div className={css.content}>
                    <CustomOriginalSelectFieldMaybe
                      id="originalTubeA"
                      name="originalTubeA"
                      originalTubeA={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelTubeA"
                      name="modelTubeA"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                  <div className={css.content}>
                    <CustomOriginalSelectFieldMaybe
                      id="originalTubeB"
                      name="originalTubeB"
                      originalTubeB={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelTubeB"
                      name="modelTubeB"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                </div>
                <div className={css.wrapper}>
                  <h2 className={css.titleContent}>CAPSULE</h2>
                  <div className={css.content}>
                    <CustomOriginalSelectFieldMaybe
                      id="originalCapsuleA"
                      name="originalCapsuleA"
                      originalCapsuleA={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelCapsuleA"
                      name="modelCapsuleA"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                  <div className={css.content}>
                    <CustomOriginalSelectFieldMaybe
                      id="originalCapsuleB"
                      name="originalCapsuleB"
                      originalCapsuleB={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelCapsuleB"
                      name="modelCapsuleB"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                </div>
                <div className={css.wrapper}>
                  <h2 className={css.titleContent}>TRANSFORMER</h2>
                  <div className={css.content}>
                    <CustomOriginalSelectFieldMaybe
                      id="originalTransformerA"
                      name="originalTransformerA"
                      originalTransformerA={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelTransformerA"
                      name="modelTransformerA"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                  <div className={css.content}>
                    <CustomOriginalSelectFieldMaybe
                      id="originalTransformerB"
                      name="originalTransformerB"
                      originalTransformerB={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelTransformerB"
                      name="modelTransformerB"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                </div>
                <div className={css.wrapper}>
                  <h2 className={css.titleContent}>POWER SUPPLY</h2>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="powerSupplyA"
                      name="powerSupplyA"
                      powerSupplyA={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalSupplyA"
                      name="originalSupplyA"
                      originalSupplyA={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelSupplyA"
                      name="modelSupplyA"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="powerSupplyB"
                      name="powerSupplyB"
                      powerSupplyB={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalSupplyB"
                      name="originalSupplyB"
                      originalSupplyB={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelSupplyB"
                      name="modelSupplyB"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                </div>
                <div className={css.wrapper}>
                  <h2 className={css.titleContent}>CABLING</h2>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="cablingA"
                      name="cablingA"
                      cablingA={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalCablingA"
                      name="originalCablingA"
                      originalCablingA={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelCablingA"
                      name="modelCablingA"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="cablingB"
                      name="cablingB"
                      cablingB={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalCablingB"
                      name="originalCablingB"
                      originalCablingB={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelCablingB"
                      name="modelCablingB"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                </div>
                <div className={css.wrapper}>
                  <h2 className={css.titleContent}>SHOCKMOUNT</h2>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="shockMountA"
                      name="shockMountA"
                      shockMountA={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalShockMountA"
                      name="originalShockMountA"
                      originalShockMountA={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelShockMountA"
                      name="modelShockMountA"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="shockMountB"
                      name="shockMountB"
                      shockMountB={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalShockMountB"
                      name="originalShockMountB"
                      originalShockMountB={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelShockMountB"
                      name="modelShockMountB"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                </div>
                <div className={css.wrapper}>
                  <h2 className={css.titleContent}>MIC CASE</h2>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="micCaseA"
                      name="micCaseA"
                      micCaseA={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalMicCaseA"
                      name="originalMicCaseA"
                      originalMicCaseA={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelMicCaseA"
                      name="modelMicCaseA"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="micCaseB"
                      name="micCaseB"
                      micCaseB={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalMicCaseB"
                      name="originalMicCaseB"
                      originalMicCaseB={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelMicCaseB"
                      name="modelMicCaseB"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                </div>
                <div className={css.wrapper}>
                  <h2 className={css.titleContent}>CARRYING CASE</h2>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="carryCaseA"
                      name="carryCaseA"
                      carryCaseA={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalCarryCaseA"
                      name="originalCarryCaseA"
                      originalCarryCaseA={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelCarryCaseA"
                      name="modelCarryCaseA"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                  <div className={css.content}>
                    <CustomMicPairSelectFieldMaybe
                      id="carryCaseB"
                      name="carryCaseB"
                      carryCaseB={micPairOptions}
                      intl={intl}
                    />
                    <CustomOriginalSelectFieldMaybe
                      id="originalCarryCaseB"
                      name="originalCarryCaseB"
                      originalCarryCaseB={original}
                      intl={intl}
                    />
                    <FieldTextInput
                      id="modelCarryCaseB"
                      name="modelCarryCaseB"
                      className={css.micpair}
                      type="textarea"
                      label="Make/Model"
                    />
                  </div>
                </div>

              </Fragment>
            ) : (
              <Fragment>
                <FieldTextInput
                  id="yearMicPair"
                  name="yearMicPair"
                  className={css.micpair}
                  type="number"
                  label="Year"
                />

                <FieldTextInput
                  id="colorMicPair"
                  name="colorMicPair"
                  className={css.micpair}
                  type="textarea"
                  label="Color"
                />

                <CustomConditionSelectFieldMaybe
                  id="conditionMicPair"
                  name="conditionMicPair"
                  condition={conditionMicPair}
                  intl={intl}
                />
                <h2 className={css.titleContent}>TUBE</h2>
                <CustomOriginalSelectFieldMaybe
                  id="originalTube"
                  name="originalTube"
                  originalTube={original}
                  intl={intl}
                />
                <FieldTextInput
                  id="modelTube"
                  name="modelTube"
                  className={css.micpair}
                  type="textarea"
                  label="Make/Model"
                />
                <h2 className={css.titleContent}>CAPSULE</h2>
                <CustomOriginalSelectFieldMaybe
                  id="originalCapsule"
                  name="originalCapsule"
                  originalCapsule={original}
                  intl={intl}
                />
                <FieldTextInput
                  id="modelCapsule"
                  name="modelCapsule"
                  className={css.micpair}
                  type="textarea"
                  label="Make/Model"
                />
                <h2 className={css.titleContent}>TRANSFORMER</h2>
                <CustomOriginalSelectFieldMaybe
                  id="originalTransformer"
                  name="originalTransformer"
                  originalTransformer={original}
                  intl={intl}
                />
                <FieldTextInput
                  id="modelTransformer"
                  name="modelTransformer"
                  className={css.micpair}
                  type="textarea"
                  label="Make/Model"
                />
                <h2 className={css.titleContent}>POWER SUPPLY</h2>
                <CustomMicPairSelectFieldMaybe
                  id="powerSupply"
                  name="powerSupply"
                  powerSupply={micPairOptions}
                  intl={intl}
                />

                <CustomOriginalSelectFieldMaybe
                  id="originalSupply"
                  name="originalSupply"
                  originalSupply={original}
                  intl={intl}
                />
                <FieldTextInput
                  id="modelSupply"
                  name="modelSupply"
                  className={css.micpair}
                  type="textarea"
                  label="Make/Model"
                />
                <h2 className={css.titleContent}>CABLING</h2>
                <CustomMicPairSelectFieldMaybe
                  id="cabling"
                  name="cabling"
                  cabling={micPairOptions}
                  intl={intl}
                />
                <CustomOriginalSelectFieldMaybe
                  id="originalCabling"
                  name="originalCabling"
                  originalCabling={original}
                  intl={intl}
                />
                <FieldTextInput
                  id="modelCabling"
                  name="modelCabling"
                  className={css.micpair}
                  type="textarea"
                  label="Make/Model"
                />
                <h2 className={css.titleContent}>SHOCKMOUNT</h2>
                <CustomMicPairSelectFieldMaybe
                  id="shockMount"
                  name="shockMount"
                  shockMount={micPairOptions}
                  intl={intl}
                />
                <CustomOriginalSelectFieldMaybe
                  id="originalShockMount"
                  name="originalShockMount"
                  originalShockMount={original}
                  intl={intl}
                />
                <FieldTextInput
                  id="modelShockMount"
                  name="modelShockMount"
                  className={css.micpair}
                  type="textarea"
                  label="Make/Model"
                />
                <h2 className={css.titleContent}>MIC CASE</h2>
                <CustomMicPairSelectFieldMaybe
                  id="micCase"
                  name="micCase"
                  micCase={micPairOptions}
                  intl={intl}
                />
                <CustomOriginalSelectFieldMaybe
                  id="originalMicCase"
                  name="originalMicCase"
                  originalMicCase={original}
                  intl={intl}
                />
                <FieldTextInput
                  id="modelMicCase"
                  name="modelMicCase"
                  className={css.micpair}
                  type="textarea"
                  label="Make/Model"
                />
                <h2 className={css.titleContent}>CARRYING CASE</h2>
                <CustomMicPairSelectFieldMaybe
                  id="carryCase"
                  name="carryCase"
                  carryCase={micPairOptions}
                  intl={intl}
                />
                <CustomOriginalSelectFieldMaybe
                  id="originalCarryCase"
                  name="originalCarryCase"
                  originalCarryCase={original}
                  intl={intl}
                />
                <FieldTextInput
                  id="modelCarryCase"
                  name="modelCarryCase"
                  className={css.micpair}
                  type="textarea"
                  label="Make/Model"
                />
              </Fragment>
            ))}

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingMicPairFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingMicPairFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

export default compose(injectIntl)(EditListingMicPairFormComponent);
