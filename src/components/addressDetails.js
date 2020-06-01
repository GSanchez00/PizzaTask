import React from 'react';

import Input from './input';
import {
  inputWidthLarge,
  inputWidthMedium,
  inputWidthSmall,
} from '../styles/variables';
import {
  FormLabel,
  FormSectionWrapper,
  FormElementsWrapper,
} from '../styles/common';

const AddressDetails = props => {
  const {
    addressState: { street, houseNumber, zipCode },
    handleAddressChange,
    addressError
  } = props;

  return (
    <FormSectionWrapper>
      <FormElementsWrapper>
        <div>
          <FormLabel htmlFor="street">Street</FormLabel>
          <Input
            type="text"
            name="street"
            id="street"
            value={street}
            onChange={handleAddressChange}
            width={inputWidthLarge}
            hasError={addressError}
          />
        </div>

        <div>
          <FormLabel htmlFor="houseNumber">House No</FormLabel>
          <Input
            type="text"
            name="houseNumber"
            id="houseNumber"
            value={houseNumber}
            onChange={handleAddressChange}
            width={inputWidthSmall}
            hasError={addressError}
          />
        </div>
      </FormElementsWrapper>

      <FormElementsWrapper>
        <div>
          <FormLabel htmlFor="zipCode">Post Code</FormLabel>
          <Input
            type="text"
            name="zipCode"
            id="zipCode"
            value={zipCode}
            onChange={handleAddressChange}
            width={inputWidthMedium}
            hasError={addressError}
          />
        </div>

      </FormElementsWrapper>
    </FormSectionWrapper>
  );
};

export default AddressDetails;
