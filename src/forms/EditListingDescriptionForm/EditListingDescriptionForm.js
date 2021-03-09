import React, { Component } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm, Field } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { maxLength, required, composeValidators, nonEmptyArray } from '../../util/validators';
import { Form, Button, FieldTextInput, AddImages, ValidationError } from '../../components';
import { FieldArray } from 'react-final-form-arrays';
import arrayMutators from 'final-form-arrays'

import css from './EditListingDescriptionForm.module.css';
import { Fragment } from 'react';

const TITLE_MAX_LENGTH = 60;
const ACCEPT_IMAGES = 'image/*';
export class EditListingDescriptionFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { imageUploadRequested: false };
    this.onImageUploadHandler = this.onImageUploadHandler.bind(this);
    this.submittedImages = [];
  }

  onImageUploadHandler(file) {
    if (file) {
      this.setState({ imageUploadRequested: true });
      this.props
        .onImageUpload({ id: `${file.name}_${Date.now()}`, file })
        .then(() => {
          this.setState({ imageUploadRequested: false });
        })
        .catch(() => {
          this.setState({ imageUploadRequested: false });
        });
    }
  }
  render() {
    return (
      <FinalForm
        {...this.props}
        onImageUploadHandler={this.onImageUploadHandler}
        imageUploadRequested={this.state.imageUploadRequested}
        mutators={{
          ...arrayMutators
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
            images,
            onImageUploadHandler,
            onRemoveImage,
            imageUploadRequested,
            form: {
              mutators: { push, pop }
            },
            values
          } = formRenderProps;
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

          const descriptionMessage = intl.formatMessage({
            id: 'EditListingDescriptionForm.description',
          });
          const descriptionPlaceholderMessage = intl.formatMessage({
            id: 'EditListingDescriptionForm.descriptionPlaceholder',
          });
          const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
          const descriptionRequiredMessage = intl.formatMessage({
            id: 'EditListingDescriptionForm.descriptionRequired',
          });

          const descriptionImage = intl.formatMessage({
            id: 'EditListingDescriptionForm.descriptionImage',
          });

          const { updateListingError, createListingDraftError, showListingsError } =
            fetchErrors || {};
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
          const submitDisabled = invalid || disabled || submitInProgress || imageUploadRequested;

          const chooseImageText = (
            <span className={css.chooseImageText}>
              <span className={css.chooseImage}>
                <FormattedMessage id="EditListingPhotosForm.chooseImage" />
              </span>
              <span className={css.imageTypes}>
                <FormattedMessage id="EditListingPhotosForm.imageTypes" />
              </span>
            </span>
          );

          const imageRequiredMessage = intl.formatMessage({
            id: 'EditListingPhotosForm.imageRequired',
          });
          
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
                validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
                autoFocus
              />
              <FieldTextInput
                id="description"
                name="description"
                className={css.description}
                type="textarea"
                label={descriptionMessage}
                placeholder={descriptionPlaceholderMessage}
                validate={composeValidators(required(descriptionRequiredMessage))}
              />
              <AddImages
                className={css.imagesField}
                label={descriptionImage}
                // images={images}
                thumbnailClassName={css.thumbnail}
                savedImageAltText={intl.formatMessage({
                  id: 'EditListingPhotosForm.savedImageAltText',
                })}
                onRemoveImage={onRemoveImage}
              >
                <Field
                  id="addImage"
                  name="addImage"
                  accept={ACCEPT_IMAGES}
                  form={null}
                  label={chooseImageText}
                  type="file"
                  disabled={imageUploadRequested}
                >
                  {fieldprops => {
                    const { accept, input, label, disabled: fieldDisabled } = fieldprops;
                    const { name, type } = input;
                    const onChange = e => {
                      const file = e.target.files[0];
                      form.change(`addImage`, file);
                      form.blur(`addImage`);
                      onImageUploadHandler(file);
                    };
                    const inputProps = { accept, id: name, name, onChange, type };
                    return (
                      <div className={css.addImageWrapper}>
                        <div className={css.aspectRatioWrapper}>
                          {fieldDisabled ? null : (
                            <input {...inputProps} className={css.addImageInput} />
                          )}
                          <label htmlFor={name} className={css.addImage}>
                            {label}
                          </label>
                        </div>
                      </div>
                    );
                  }}
                </Field>

                <Field
                  component={props => {
                    const { input, meta } = props;
                    return (
                      <div className={css.imageRequiredWrapper}>
                        <input {...input} />
                        <ValidationError fieldMeta={meta} />
                      </div>
                    );
                  }}
                  name="images"
                  type="hidden"
                  // validate={composeValidators(nonEmptyArray(imageRequiredMessage))}
                />
              </AddImages>

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
                      validate={composeValidators(required(descriptionRequiredMessage))}
                    />
                    <AddImages
                      className={css.imagesField}
                      label={descriptionImage}
                      // images={images}
                      thumbnailClassName={css.thumbnail}
                      savedImageAltText={intl.formatMessage({
                        id: 'EditListingPhotosForm.savedImageAltText',
                      })}
                      onRemoveImage={onRemoveImage}
                    >
                      <Field
                        id="addImage"
                        name="addImage"
                        accept={ACCEPT_IMAGES}
                        form={null}
                        label={chooseImageText}
                        type="file"
                        disabled={imageUploadRequested}
                      >
                        {fieldprops => {
                          const { accept, input, label, disabled: fieldDisabled } = fieldprops;
                          const { name, type } = input;
                          const onChange = e => {
                            const file = e.target.files[0];
                            form.change(`addImage`, file);
                            form.blur(`addImage`);
                            onImageUploadHandler(file);
                          };
                          const inputProps = { accept, id: name, name, onChange, type };
                          return (
                            <div className={css.addImageWrapper}>
                              <div className={css.aspectRatioWrapper}>
                                {fieldDisabled ? null : (
                                  <input {...inputProps} className={css.addImageInput} />
                                )}
                                <label htmlFor={name} className={css.addImage}>
                                  {label}
                                </label>
                              </div>
                            </div>
                          );
                        }}
                      </Field>

                      <Field
                        component={props => {
                          const { input, meta } = props;
                          return (
                            <div className={css.imageRequiredWrapper}>
                              <input {...input} />
                              <ValidationError fieldMeta={meta} />
                            </div>
                          );
                        }}
                        name="images"
                        type="hidden"
                        // validate={composeValidators(nonEmptyArray(imageRequiredMessage))}
                      />
                    </AddImages>
                  </Fragment>
                  ))
                }
              </FieldArray>

              <Button className={css.paragraph} type="button" onClick={() => push('paragraph', undefined)}>
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
  }
}

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
  onImageUpload: func.isRequired,
  onUpdateImageOrder: func.isRequired,
  onRemoveImage: func.isRequired,
};

export default compose(injectIntl)(EditListingDescriptionFormComponent);
