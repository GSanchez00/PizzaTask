import React from 'react';

import Input from './input';

import { inputWidthLarge } from '../styles/variables';
import { FormLabel, FormSectionWrapper } from '../styles/common';

const ContactDetails = props => {
  const {
    contactState: { fullName, phoneNumber },
    handleContactChange,
    contactError
  } = props;

  return (
    <FormSectionWrapper>
      <h2>Delivery Details</h2>

      <FormLabel htmlFor="fullName">Name</FormLabel>
      <Input
        type="text"
        name="fullName"
        id="fullName"
        value={fullName}
        onChange={handleContactChange}
        width={inputWidthLarge}
        hasError={contactError}
      />

      <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
      <Input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        value={phoneNumber}
        onChange={handleContactChange}
        width={inputWidthLarge}
        hasError={contactError}
      />
    </FormSectionWrapper>
  );
};

export default ContactDetails;
