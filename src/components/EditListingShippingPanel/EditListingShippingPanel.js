import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ensureOwnListing } from '../../util/data';
import { EditListingShippingForm } from '../../forms';

import css from './EditListingShippingPanel.module.css';

const EditListingShippingPanel = props => {
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

  return (
    <div className={classes}>
      <EditListingShippingForm
        className={css.form}
        publicData={publicData}
        initialValues={{ rules: publicData.rules, shipping: publicData.shipping, domestic: publicData.rules, international: publicData.international, payment: publicData.payment }}
        onSubmit={values => {
          const { rules = '', shipping, domestic, international, payment } = values;
          const updateValues = {
            publicData: {
              rules,
              shipping,
              domestic,
              international,
              payment
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
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingShippingPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingShippingPanel.propTypes = {
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

export default EditListingShippingPanel;
