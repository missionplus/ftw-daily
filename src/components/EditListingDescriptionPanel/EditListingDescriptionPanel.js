import React from 'react';
import { bool, func, object, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ListingLink } from '../../components';
import { EditListingDescriptionForm } from '../../forms';
import pickBy from 'lodash/pickBy';

import css from './EditListingDescriptionPanel.module.css';

const EditListingDescriptionPanel = props => {
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
    images,
    onImageUpload,
    onRemoveImage,
    onUpdateImageOrder
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { description, title, publicData } = currentListing.attributes;

  const paragraph = publicData && publicData.paragraph ? publicData.paragraph : [];
  let discripttions = {}
  if (paragraph.length > 0) {
    for (let i of paragraph) {
      discripttions= {...discripttions, ...i}
    }
  }
  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingDescriptionPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingDescriptionPanel.createListingTitle" />
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingDescriptionForm
        className={css.form}
        initialValues={{ title, description, ...discripttions }}
        saveActionMsg={submitButtonText}
        onSubmit={values => {
          const { title, description } = values;
          const paragraph = []
          const newDescription = pickBy(values, (value, key) => key.startsWith('description_'));
          for (const [key, value] of Object.entries(newDescription)) {
            paragraph.push({[key]: value})
          }


          const updateValues = {
            title: title.trim(),
            description,
            publicData: { paragraph },
          };
          onSubmit(updateValues);
        }}
        images={images}
        onImageUpload={onImageUpload}
        onRemoveImage={onRemoveImage}
        onUpdateImageOrder={onUpdateImageOrder}
        onChange={onChange}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        listing={listing}
      />
    </div>
  );
};

EditListingDescriptionPanel.defaultProps = {
  className: null,
  rootClassName: null,
  errors: null,
  listing: null,
};

EditListingDescriptionPanel.propTypes = {
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
  onImageUpload: func.isRequired,
  onRemoveImage: func.isRequired,
  onUpdateImageOrder: func.isRequired
};

export default EditListingDescriptionPanel;
