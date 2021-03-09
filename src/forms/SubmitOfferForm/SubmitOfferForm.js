import React, { Component } from 'react';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { Form, Button, FieldCurrencyInput, PrimaryButton } from '../../components';
import config from '../../config';
import { formatMoney } from '../../util/currency';
import { types as sdkTypes } from '../../util/sdkLoader';

const { Money } = sdkTypes;

import css from './SubmitOfferForm.module.css';

export class SubmitOfferFormComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const priceData = (price, intl) => {
      if (price && price.currency === config.currency) {
        const formattedPrice = formatMoney(intl, price);
        return { formattedPrice, priceTitle: formattedPrice };
      } else if (price) {
        return {
          formattedPrice: `(${price.currency})`,
          priceTitle: `Unsupported currency (${price.currency})`,
        };
      }
      return {};
    };

    const offerPrice = new Money(this.props.offerValue, config.currency);

    const formattedOfferPrice = priceData(offerPrice, this.props.intl);

    return (
      <FinalForm
        {...this.props}
        render={formRenderProps => {
          const { className, handleSubmit } = formRenderProps;

          const classes = classNames(css.root, className);

          return (
            <Form
              className={classes}
              onSubmit={handleSubmit}
            >
              <div>
                <div className={css.offerValue}>{formattedOfferPrice.formattedPrice}</div>
                <p className={css.modalMessage}>
                  <FormattedMessage id="ListingPage.confirmOffer" />
                </p>
                <PrimaryButton className={css.submitButton} type="button" onClick={handleSubmit}>
                  <FormattedMessage id="SubmitOffer.submitOffer" />
                </PrimaryButton>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

export default compose(injectIntl)(SubmitOfferFormComponent);
