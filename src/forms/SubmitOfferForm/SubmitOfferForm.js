import React, { Component } from 'react';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { Form, Button, FieldCurrencyInput, PrimaryButton } from '../../components';
import config from '../../config';

import css from './SubmitOfferForm.module.css';

export class SubmitOfferFormComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FinalForm
        {...this.props}
        render={formRenderProps => {
          const { className, handleSubmit, offerValue } = formRenderProps;

          const classes = classNames(css.root, className);

          return (
            <Form className={classes} onSubmit={handleSubmit}>
              <div>{offerValue}</div>

              <p className={css.modalMessage}>
                  <FormattedMessage id="ListingPage.confirmOffer" />
                </p>
              <PrimaryButton className={css.submitButton} type="submit">
                <FormattedMessage id="SubmitOffer.submitOffer" />
              </PrimaryButton>
            </Form>
          );
        }}
      />
    );
  }
}

export default compose(injectIntl)(SubmitOfferFormComponent);
