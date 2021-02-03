import React from 'react';
import PropTypes, { string } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape, FormattedMessage } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
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

import css from './SellOrConsign.module.css';

export const SellOrConsignPageComponent = props => {
  const { scrollingDisabled, rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  const sellTitle = <FormattedMessage id="SellOrConsignPage.sellTitle" />;
  const consignTitle = <FormattedMessage id="SellOrConsignPage.consignTitle" />;
  const textDescription = <FormattedMessage id="SellOrConsignPage.textDescription" />;
  const sellDescription = <FormattedMessage id="SellOrConsignPage.sellDescription" />;
  const consignDescription = <FormattedMessage id="SellOrConsignPage.consignDescription" />;
  const processDescription = <FormattedMessage id="SellOrConsignPage.processDescription" />;
  const feeDescription = <FormattedMessage id="SellOrConsignPage.feeDescription" />;
  const faqsDescription = <FormattedMessage id="SellOrConsignPage.faqsDescription" />;
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
    </div>
  );
};
const { bool, object } = PropTypes;

SellOrConsignPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  // from injectIntl
  intl: intlShape.isRequired,
  rootClassName: string,
  className: string,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const SellOrConsignPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(SellOrConsignPageComponent);

export default SellOrConsignPage;
