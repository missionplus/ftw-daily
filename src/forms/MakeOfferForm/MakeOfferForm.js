import React from 'react';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { Form, Button, FieldCurrencyInput } from '../../components';
import config from '../../config';

import css from './MakeOfferForm.module.css';

export const MakeOfferFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const { className, handleSubmit } = formRenderProps;

      const classes = classNames(css.root, className);

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          <FieldCurrencyInput
            id="makeOffer"
            name="makeOffer"
            className={css.makeOffer}
            autoFocus
            currencyConfig={config.currencyConfig}
            label="Make Offer"
          />

          <Button className={css.submitButton} type="submit">
            <FormattedMessage id="MakeOffer.ctaButtonMessage" />
          </Button>
        </Form>
      );
    }}
  />
);

export default compose(injectIntl)(MakeOfferFormComponent);
