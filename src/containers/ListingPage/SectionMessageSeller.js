import React from 'react';

import { PrimaryButton } from '../../components';
import { FormattedMessage } from '../../util/reactIntl';
import { Modal } from '../../components';
import { EnquiryForm } from '../../forms';

import css from './ListingPage.module.css';

const SectionMessageSeller = props => {
  const {
    title,
    authorDisplayName,
    showContactUser,
    onContactUser,
    isEnquiryModalOpen,
    onCloseEnquiryModal,
    sendEnquiryError,
    sendEnquiryInProgress,
    onSubmitEnquiry,
    onManageDisableScrolling,
  } = props;
  return (
    <div className={css.SectionWatchList}>
      {showContactUser ? (
        <span className={css.contactWrapper}>
          <PrimaryButton type="submit" className={css.btn} onClick={onContactUser}>
            <FormattedMessage id="ListingPage.ctaButtonMessageSeller" />
          </PrimaryButton>
        </span>
      ) : null}
      <Modal
        id="ListingPage.enquiry"
        contentClassName={css.enquiryModalContent}
        isOpen={isEnquiryModalOpen}
        onClose={onCloseEnquiryModal}
        usePortal
        onManageDisableScrolling={onManageDisableScrolling}
      >
        <EnquiryForm
          className={css.enquiryForm}
          submitButtonWrapperClassName={css.enquirySubmitButtonWrapper}
          listingTitle={title}
          authorDisplayName={authorDisplayName}
          sendEnquiryError={sendEnquiryError}
          onSubmit={onSubmitEnquiry}
          inProgress={sendEnquiryInProgress}
        />
      </Modal>
    </div>
  );
};

export default SectionMessageSeller;
