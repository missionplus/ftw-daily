import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditListingPoliciesForm, EditListingMicPairForm } from '../../forms';
import { findOptionsForSelectFilter } from '../../util/search';
import config from '../../config';

import css from './EditListingPoliciesPanel.module.css';

const EditListingPoliciesPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingPoliciesPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingPoliciesPanel.createListingTitle" />
  );
  const conditionOptions = findOptionsForSelectFilter('condition', config.custom.filters);
  const sellingPairOptions = findOptionsForSelectFilter('sellingPair', config.custom.filters);
  const sequentSerialOptions = findOptionsForSelectFilter('sequentSerial', config.custom.filters);
  const originalOptions = findOptionsForSelectFilter('original', config.custom.filters);
  const micPairOptions = findOptionsForSelectFilter('micPair', config.custom.filters);

  const microphones = publicData && publicData.category == 'microphones';
  const form = !microphones ? (
    <EditListingPoliciesForm
      className={css.form}
      publicData={publicData}
      initialValues={{
        brand: publicData.brand,
        model: publicData.model,
        year: publicData.year,
        color: publicData.color,
        quantity: publicData.quantity,
        serial: publicData.serial,
        condition: publicData.condition,
      }}
      onSubmit={values => {
        const { brand, model, year, color, quantity, serial, condition } = values;
        const updateValues = {
          publicData: {
            brand,
            model,
            year,
            color,
            quantity,
            serial,
            condition,
          },
        };
        onSubmit(updateValues);
      }}
      onChange={onChange}
      disabled={disabled}
      ready={ready}
      saveActionMsg={submitButtonText}
      updated={panelUpdated}
      updateInProgress={updateInProgress}
      fetchErrors={errors}
      condition={conditionOptions}
    />
  ) : (
    <EditListingMicPairForm
      className={css.form}
      publicData={publicData}
      initialValues={{
        sellingPair: publicData.sellingPair,
        sequentSerial: publicData.sequentSerial,
        brandMicPair: publicData.brandMicPair,
        modelMicPair: publicData.modelMicPair,
        serialMicPair: publicData.serialMicPair,
        yearMicPair: publicData.yearMicPair,
        colorMicPair: publicData.colorMicPair,
        conditionMicPair: publicData.conditionMicPair,
        originalTube: publicData.originalTube,
        modelTube: publicData.modelTube,
        originalCapsule: publicData.originalCapsule,
        modelCapsule: publicData.modelCapsule,
        originalTransformer: publicData.originalTransformer,
        modelTransformer: publicData.modelTransformer,
        powerSupply: publicData.powerSupply,
        originalSupply: publicData.originalSupply,
        modelSupply: publicData.modelSupply,
        cabling: publicData.cabling,
        originalCabling: publicData.originalCabling,
        modelCabling: publicData.modelCabling,
        shockMount: publicData.shockMount,
        originalShockMount: publicData.originalShockMount,
        modelShockMount: publicData.modelShockMount,
        micCase: publicData.micCase,
        originalMicCase: publicData.originalMicCase,
        modelMicCase: publicData.modelMicCase,
        carryCase: publicData.carryCase,
        originalCarryCase: publicData.originalCarryCase,
        modelCarryCase: publicData.modelCarryCase,
        yearMicPairA: publicData.yearMicPairA,
        yearMicPairB: publicData.yearMicPairB,
        colorMicPairA: publicData.colorMicPairA,
        colorMicPairB: publicData.colorMicPairB,
        conditionMicPairA: publicData.conditionMicPairA,
        conditionMicPairB: publicData.conditionMicPairB,
        originalTubeA: publicData.originalTubeA,
        originalTubeB: publicData.originalTubeB,
        modelTubeA: publicData.modelTubeA,
        modelTubeB: publicData.modelTubeB,
        originalCapsuleA: publicData.originalCapsuleA,
        originalCapsuleB: publicData.originalCapsuleB,
        modelCapsuleA: publicData.modelCapsuleA,
        modelCapsuleB: publicData.modelCapsuleB,
        originalTransformerA: publicData.originalTransformerA,
        originalTransformerB: publicData.originalTransformerB,
        modelTransformerA: publicData.modelTransformerA,
        modelTransformerB: publicData.modelTransformerB,
        powerSupplyA: publicData.powerSupplyA,
        powerSupplyB: publicData.powerSupplyB,
        originalSupplyA: publicData.originalSupplyA,
        originalSupplyB: publicData.originalSupplyB,
        modelSupplyA: publicData.modelSupplyA,
        modelSupplyB: publicData.modelSupplyB,
        cablingA: publicData.cablingA,
        cablingB: publicData.cablingB,
        originalCablingA: publicData.originalCablingA,
        originalCablingB: publicData.originalCablingB,
        modelCablingA: publicData.modelCablingA,
        modelCablingB: publicData.modelCablingB,
        shockMountA: publicData.shockMountA,
        shockMountB: publicData.shockMountB,
        originalShockMountA: publicData.originalShockMountA,
        originalShockMountB: publicData.originalShockMountB,
        modelShockMountA: publicData.modelShockMountA,
        modelShockMountB: publicData.modelShockMountB,
        micCaseA: publicData.micCaseA,
        micCaseB: publicData.micCaseB,
        originalMicCaseA: publicData.originalMicCaseA,
        originalMicCaseB: publicData.originalMicCaseB,
        modelMicCaseA: publicData.modelMicCaseA,
        modelMicCaseB: publicData.modelMicCaseB,
        carryCaseA: publicData.carryCaseA,
        carryCaseB: publicData.carryCaseB,
        originalCarryCaseA: publicData.originalCarryCaseA,
        originalCarryCaseB: publicData.originalCarryCaseB,
        modelCarryCaseA: publicData.modelCarryCaseA,
        modelCarryCaseB: publicData.modelCarryCaseB,
      }}
      onSubmit={values => {
        const {
          sellingPair,
          sequentSerial,
          brandMicPair,
          modelMicPair,
          serialMicPair,
          yearMicPair,
          colorMicPair,
          conditionMicPair,
          originalTube,
          modelTube,
          originalCapsule,
          modelCapsule,
          originalTransformer,
          modelTransformer,
          powerSupply,
          originalSupply,
          modelSupply,
          cabling,
          originalCabling,
          modelCabling,
          shockMount,
          originalShockMount,
          modelShockMount,
          micCase,
          originalMicCase,
          modelMicCase,
          carryCase,
          originalCarryCase,
          modelCarryCase,
          yearMicPairA,
          yearMicPairB,
          colorMicPairA,
          colorMicPairB,
          conditionMicPairA,
          conditionMicPairB,
          originalTubeA,
          originalTubeB,
          modelTubeA,
          modelTubeB,
          originalCapsuleA,
          originalCapsuleB,
          modelCapsuleA,
          modelCapsuleB,
          originalTransformerA,
          originalTransformerB,
          modelTransformerA,
          modelTransformerB,
          powerSupplyA,
          powerSupplyB,
          originalSupplyA,
          originalSupplyB,
          modelSupplyA,
          modelSupplyB,
          cablingA,
          cablingB,
          originalCablingA,
          originalCablingB,
          modelCablingA,
          modelCablingB,
          shockMountA,
          shockMountB,
          originalShockMountA,
          originalShockMountB,
          modelShockMountA,
          modelShockMountB,
          micCaseA,
          micCaseB,
          originalMicCaseA,
          originalMicCaseB,
          modelMicCaseA,
          modelMicCaseB,
          carryCaseA,
          carryCaseB,
          originalCarryCaseA,
          originalCarryCaseB,
          modelCarryCaseA,
          modelCarryCaseB,
        } = values;
        const updateValues = {
          publicData: {
            sellingPair,
            sequentSerial,
            brandMicPair,
            modelMicPair,
            serialMicPair,
            yearMicPair,
            colorMicPair,
            conditionMicPair,
            originalTube,
            modelTube,
            originalCapsule,
            modelCapsule,
            originalTransformer,
            modelTransformer,
            powerSupply,
            originalSupply,
            modelSupply,
            cabling,
            originalCabling,
            modelCabling,
            shockMount,
            originalShockMount,
            modelShockMount,
            micCase,
            originalMicCase,
            modelMicCase,
            carryCase,
            originalCarryCase,
            modelCarryCase,
            yearMicPairA,
            yearMicPairB,
            colorMicPairA,
            colorMicPairB,
            conditionMicPairA,
            conditionMicPairB,
            originalTubeA,
            originalTubeB,
            modelTubeA,
            modelTubeB,
            originalCapsuleA,
            originalCapsuleB,
            modelCapsuleA,
            modelCapsuleB,
            originalTransformerA,
            originalTransformerB,
            modelTransformerA,
            modelTransformerB,
            powerSupplyA,
            powerSupplyB,
            originalSupplyA,
            originalSupplyB,
            modelSupplyA,
            modelSupplyB,
            cablingA,
            cablingB,
            originalCablingA,
            originalCablingB,
            modelCablingA,
            modelCablingB,
            shockMountA,
            shockMountB,
            originalShockMountA,
            originalShockMountB,
            modelShockMountA,
            modelShockMountB,
            micCaseA,
            micCaseB,
            originalMicCaseA,
            originalMicCaseB,
            modelMicCaseA,
            modelMicCaseB,
            carryCaseA,
            carryCaseB,
            originalCarryCaseA,
            originalCarryCaseB,
            modelCarryCaseA,
            modelCarryCaseB,
          },
        };
        onSubmit(updateValues);
      }}
      onChange={onChange}
      disabled={disabled}
      ready={ready}
      saveActionMsg={submitButtonText}
      updated={panelUpdated}
      updateInProgress={updateInProgress}
      fetchErrors={errors}
      sellingPair={sellingPairOptions}
      sequentSerial={sequentSerialOptions}
      conditionMicPair={conditionOptions}
      original={originalOptions}
      micPairOptions={micPairOptions}
    />
  );
  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      {form}
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingPoliciesPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingPoliciesPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingPoliciesPanel;
