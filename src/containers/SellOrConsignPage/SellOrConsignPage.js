import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import config from '../../config';
import { createResourceLocatorString } from '../../util/routes';
import routeConfiguration from '../../routeConfiguration';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape, FormattedMessage } from '../../util/reactIntl';
import { isScrollingDisabled, manageDisableScrolling } from '../../ducks/UI.duck';
import { TopbarContainer } from '../../containers';
import classNames from 'classnames';
import {
  Page,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  PrimaryButton,
} from '../../components';

import { ensureCurrentUser } from '../../util/data';
import { Modal, NamedRedirect, Tabs, StripeConnectAccountStatusBox } from '../../components';
import { StripeConnectAccountForm } from '../../forms';

import css from './SellOrConsign.module.css';

export class SellOrConsignPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      draftId: null,
      showPayoutDetails: false,
    };
    this.handlePayoutModalClose = this.handlePayoutModalClose.bind(this);
    this.handlePayoutSubmit = this.handlePayoutSubmit.bind(this);
  }

  handlePayoutModalClose() {
    this.setState({ showPayoutDetails: false });
  }

  handlePayoutSubmit(values) {
    this.props
      .onPayoutDetailsSubmit(values)
      .then(response => {
        this.props.onManageDisableScrolling('EditListingWizard.payoutModal', false);
      })
      .catch(() => {
        // do nothing
      });
  }

  render() {
    const {
      scrollingDisabled,
      rootClassName,
      onManageDisableScrolling,
      onPayoutDetailsFormSubmit,
      onPayoutDetailsFormChange,
      onGetStripeConnectAccountLink,
      currentUser,
      getAccountLinkError,
      createStripeAccountError,
      updateStripeAccountError,
      fetchStripeAccountError,
      stripeAccount,
      stripeAccountFetched,
      fetchInProgress,
      getAccountLinkInProgress,
      params,
      intl,
      page,
      className,
      ...rest
    } = this.props;

    const createReturnURL = (returnURLType, rootURL, routes, pathParams) => {
      const path = createResourceLocatorString(
        'SellOrConsignPage',
        routes,
        { ...pathParams, returnURLType },
        {}
      );  
      const root = rootURL.replace(/\/$/, '');
      return `${root}${path}`;
    };

    const STRIPE_ONBOARDING_RETURN_URL_SUCCESS = 'success';
    const STRIPE_ONBOARDING_RETURN_URL_FAILURE = 'failure';

    const rootURL = config.canonicalRootURL;
    const { returnURLType, ...pathParams } = params;
    const routes = routeConfiguration();

    const successURL = createReturnURL(
      STRIPE_ONBOARDING_RETURN_URL_SUCCESS,
      rootURL,
      routes,
      pathParams
    );
    const failureURL = createReturnURL(
      STRIPE_ONBOARDING_RETURN_URL_FAILURE,
      rootURL,
      routes,
      pathParams
    );
    
    const stripeAccountError = createStripeAccountError || updateStripeAccountError || fetchStripeAccountError
    
    const ensuredCurrentUser = ensureCurrentUser(currentUser);
    const currentUserLoaded = !!ensuredCurrentUser.id;
    const getStripeAccountData = stripeAccount =>
      stripeAccount.attributes.stripeAccountData || null;

    // Get last 4 digits of bank account returned in Stripe account
    const getBankAccountLast4Digits = stripeAccountData =>
      stripeAccountData && stripeAccountData.external_accounts.data.length > 0
        ? stripeAccountData.external_accounts.data[0].last4
        : null;
        
    const stripeConnected = currentUserLoaded && !!stripeAccount && !!stripeAccount.id;

    const accountId = stripeConnected ? stripeAccount.id : null;
    const stripeAccountData = stripeConnected ? getStripeAccountData(stripeAccount) : null;

    const requirementsMissing =
      stripeAccount &&
      (hasRequirements(stripeAccountData, 'past_due') ||
        hasRequirements(stripeAccountData, 'currently_due'));

    const savedCountry = stripeAccountData ? stripeAccountData.country : null;

    const formDisabled = getAccountLinkInProgress;


    const returnedNormallyFromStripe = returnURLType === STRIPE_ONBOARDING_RETURN_URL_SUCCESS;
    const returnedAbnormallyFromStripe = returnURLType === STRIPE_ONBOARDING_RETURN_URL_FAILURE;

    const classes = classNames(rootClassName || css.root, className);
    const sellTitle = <FormattedMessage id="SellOrConsignPage.sellTitle" />;
    const consignTitle = <FormattedMessage id="SellOrConsignPage.consignTitle" />;
    const textDescription = <FormattedMessage id="SellOrConsignPage.textDescription" />;
    const sellDescription = <FormattedMessage id="SellOrConsignPage.sellDescription" />;
    const consignDescription = <FormattedMessage id="SellOrConsignPage.consignDescription" />;
    const processDescription = <FormattedMessage id="SellOrConsignPage.processDescription" />;
    const feeDescription = <FormattedMessage id="SellOrConsignPage.feeDescription" />;
    const faqsDescription = <FormattedMessage id="SellOrConsignPage.faqsDescription" />;

    const handleGetStripeConnectAccountLinkFn = (getLinkFn, commonParams) => type => () => {
      getLinkFn({ type, ...commonParams })
        .then(url => {
          window.location.href = url;
        })
        .catch(err => console.error(err));
    };

    const handleGetStripeConnectAccountLink = handleGetStripeConnectAccountLinkFn(
      onGetStripeConnectAccountLink,
      {
        accountId,
        successURL,
        failureURL,
      }
    );
    return (
      <div className={classes}>
        <Page
          title="Sell Or Consign"
          scrollingDisabled={scrollingDisabled}
          contentType="website"
          schema={{
            '@context': 'http://schema.org',
            '@type': 'SellOrConsignPage',
            description: 'Sell Or Consign',
            name: 'Sell Or Consign',
          }}
        >
          <LayoutSingleColumn>
            <LayoutWrapperTopbar>
              <TopbarContainer />
            </LayoutWrapperTopbar>
            <LayoutWrapperMain>
              <div className={css.SellOrConsignWrapper}>
                <div className={css.SellOrConsignContainer}>
                  <div className={css.SellOrConsignContent}>
                    <div className={css.SellOrConsignColumn}>
                      <h1 className={css.title}>{sellTitle}</h1>
                      <div className={css.SellOrConsignDescription}>
                        <p>{textDescription}</p>
                        <p>{sellDescription}</p>
                        <p>{processDescription}</p>
                        <p>{feeDescription}</p>
                        <p>{faqsDescription}</p>
                      </div>
                      <NamedLink className={css.createSellLink} name="NewListingPage">
                        <PrimaryButton rootClassName={css.routeButton} type="submit">
                          <FormattedMessage id="SellOrConsignPage.ctaButtonSell" />
                        </PrimaryButton>
                      </NamedLink>
                    </div>
                    <div className={css.SellOrConsignColumn}>
                      <h1 className={css.title}>{consignTitle}</h1>
                      <div className={css.SellOrConsignDescription}>
                        <p>{textDescription}</p>
                        <p>{consignDescription}</p>
                        <p>{processDescription}</p>
                        <p>{feeDescription}</p>
                        <p>{faqsDescription}</p>
                      </div>
                      {/* <NamedLink className={css.createListingLink} name="NewListingPage"> */}
                      <PrimaryButton rootClassName={css.routeButton} type="submit">
                        <FormattedMessage id="SellOrConsignPage.ctaButtonConsign" />
                      </PrimaryButton>
                      {/* </NamedLink> */}
                    </div>
                  </div>
                </div>
              </div>
            </LayoutWrapperMain>
            <LayoutWrapperFooter>
              <div className={css.hidden}>
                <Footer />
              </div>
            </LayoutWrapperFooter>
          </LayoutSingleColumn>
        </Page>
        <Modal
          id="EditListingWizard.payoutModal"
          isOpen={this.state.showPayoutDetails}
          onClose={this.handlePayoutModalClose}
          onManageDisableScrolling={onManageDisableScrolling}
          usePortal
        >
          <div className={css.modalPayoutDetailsWrapper}>
            <h1 className={css.modalTitle}>
              <FormattedMessage id="EditListingWizard.payoutModalTitleOneMoreThing" />
              <br />
              <FormattedMessage id="EditListingWizard.payoutModalTitlePayoutPreferences" />
            </h1>
            {!currentUserLoaded ? (
              <FormattedMessage id="StripePayoutPage.loadingData" />
            ) : returnedAbnormallyFromStripe && !stripeAccountLinkError ? (
              <p className={css.modalMessage}>
                <RedirectToStripe redirectFn={handleGetStripeConnectAccountLink} />
              </p>
            ) : (
              <>
                <p className={css.modalMessage}>
                  <FormattedMessage id="EditListingWizard.payoutModalInfo" />
                </p>
                <StripeConnectAccountForm
                  disabled={formDisabled}
                  inProgress={page.payoutDetailsSaveInProgress}
                  ready={page.payoutDetailsSaved}
                  currentUser={ensuredCurrentUser}
                  stripeBankAccountLastDigits={getBankAccountLast4Digits(stripeAccountData)}
                  savedCountry={savedCountry}
                  submitButtonText={intl.formatMessage({
                    id: 'StripePayoutPage.submitButtonText',
                  })}
                  stripeAccountError={stripeAccountError}
                  stripeAccountFetched={stripeAccountFetched}
                  stripeAccountLinkError={getAccountLinkError}
                  onChange={onPayoutDetailsFormChange}
                  onSubmit={rest.onPayoutDetailsSubmit}
                  onGetStripeConnectAccountLink={handleGetStripeConnectAccountLink}
                  stripeConnected={stripeConnected}
                >
                  {stripeConnected && !returnedAbnormallyFromStripe && showVerificationNeeded ? (
                    <StripeConnectAccountStatusBox
                      type="verificationNeeded"
                      inProgress={getAccountLinkInProgress}
                      onGetStripeConnectAccountLink={handleGetStripeConnectAccountLink(
                        'custom_account_verification'
                      )}
                    />
                  ) : stripeConnected && savedCountry && !returnedAbnormallyFromStripe ? (
                    <StripeConnectAccountStatusBox
                      type="verificationSuccess"
                      inProgress={getAccountLinkInProgress}
                      disabled={page.payoutDetailsSaveInProgress}
                      onGetStripeConnectAccountLink={handleGetStripeConnectAccountLink(
                        'custom_account_update'
                      )}
                    />
                  ) : null}
                </StripeConnectAccountForm>
              </>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

const { bool, object } = PropTypes;

SellOrConsignPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  // from injectIntl
  intl: intlShape.isRequired,
  rootClassName: string,
  className: string,
};

const mapStateToProps = state => {
  const page = state.EditListingPage;

  const {
    getAccountLinkInProgress,
    getAccountLinkError,
    createStripeAccountInProgress,
    createStripeAccountError,
    updateStripeAccountError,
    fetchStripeAccountError,
    stripeAccount,
    stripeAccountFetched,
  } = state.stripeConnectAccount;

  const { currentUser } = state.user;

  const fetchInProgress = createStripeAccountInProgress;

  return {
    getAccountLinkInProgress,
    getAccountLinkError,
    createStripeAccountError,
    updateStripeAccountError,
    fetchStripeAccountError,
    stripeAccount,
    stripeAccountFetched,
    currentUser,
    fetchInProgress,
    page,
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
  onPayoutDetailsFormChange: () => dispatch(stripeAccountClearError()),
  onPayoutDetailsSubmit: values => dispatch(createStripeAccount(values)),
  onPayoutDetailsFormSubmit: (values, isUpdateCall) =>
    dispatch(savePayoutDetails(values, isUpdateCall)),
  onGetStripeConnectAccountLink: params => dispatch(getStripeConnectAccountLink(params)),
});

const SellOrConsignPage = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
)(SellOrConsignPageComponent);

export default SellOrConsignPage;
