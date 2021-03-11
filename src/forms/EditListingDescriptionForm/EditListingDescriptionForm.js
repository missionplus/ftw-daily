import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput } from '../../components';
import { FieldArray } from 'react-final-form-arrays';
import arrayMutators from 'final-form-arrays';

import * as validators from '../../util/validators';
import css from './EditListingDescriptionForm.module.css';
import { Fragment } from 'react';

const TITLE_MAX_LENGTH = 60;
export const EditListingDescriptionFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{
      ...arrayMutators,
    }}
    render={formRenderProps => {
      const {
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
        form: {
          mutators: { push, pop },
        },
      } = formRenderProps;

      // title
      const titleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.title' });
      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titlePlaceholder',
      });
      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titleRequired',
      });
      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );
      const titleRequired = validators.required(titleRequiredMessage);

      const titleMaxlength = validators.maxLength(maxLengthMessage, TITLE_MAX_LENGTH);

      const titleValidators = validators.composeValidators(titleRequired, titleMaxlength);

      // description

      const descriptionMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.description',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionPlaceholder',
      });

      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionRequired',
      });
      const descriptionRequired = validators.required(descriptionRequiredMessage);
      const descriptionValidators = validators.composeValidators(descriptionRequired);

      // link Image
      const linkImagesMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.linkImages',
      });
      const linkImagesPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.linkImagesPlaceholder',
      });

      const linkImagesRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.linkImagesRequired',
      });
      const linkImagesValidUrlMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.linkImagesValidUrl',
      });

      const linkImagesRequired = validators.required(linkImagesRequiredMessage);

      const linkImagesValidUrl = validators.validUrl(linkImagesValidUrlMessage);

      const linkImagesValidators = validators.composeValidators(
        linkImagesRequired,
        linkImagesValidUrl
      );

      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
        </p>
      ) : null;

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageCreateListingDraft}
          {errorMessageUpdateListing}
          {errorMessageShowListing}
          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={titleValidators}
            autoFocus
          />
          <FieldTextInput
            id="description"
            name="description"
            className={css.description}
            type="textarea"
            label={descriptionMessage}
            placeholder={descriptionPlaceholderMessage}
            validate={descriptionValidators}
          />
          <FieldTextInput
            id="linkImages"
            name="linkImages"
            className={css.linkImages}
            type="textarea"
            label={linkImagesMessage}
            placeholder={linkImagesPlaceholderMessage}
            validate={linkImagesValidators}
          />
          <FieldArray name="paragraph">
            {({ fields }) =>
              fields.map((name, index) => (
                <Fragment key={name}>
                  <FieldTextInput
                    id={`${name}.description`}
                    name={`${name}.description`}
                    className={css.description}
                    type="textarea"
                    label={descriptionMessage}
                    placeholder={descriptionPlaceholderMessage}
                    validate={descriptionValidators}
                  />
                  <FieldTextInput
                    id={`${name}.linkImages`}
                    name={`${name}.linkImages`}
                    className={css.description}
                    type="textarea"
                    label={linkImagesMessage}
                    placeholder={linkImagesPlaceholderMessage}
                    validate={linkImagesValidators}
                  />
                  <Button
                    className={css.removeParagraph}
                    type="button"
                    onClick={() => fields.remove(index)}
                  >
                    <FormattedMessage id="EditListingDescriptionForm.deleteParagraph" />
                  </Button>
                </Fragment>
              ))
            }
          </FieldArray>

          <Button
            className={css.paragraph}
            type="button"
            onClick={() => push('paragraph', undefined)}
          >
            <FormattedMessage id="EditListingDescriptionForm.addNewParagraph" />
          </Button>
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

EditListingDescriptionFormComponent.defaultProps = { className: null, fetchErrors: null };

EditListingDescriptionFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};

export default compose(injectIntl)(EditListingDescriptionFormComponent);
