import React from 'react';
import styled from 'styled-components/macro';

import Input from './input';
import { colors, inputWidthLarge, inputWidthMedium } from '../styles/variables';
import {
  FormLabel,
  FormSectionWrapper,
  FormElementsWrapper,
} from '../styles/common';

const ErrorMsg = styled.p`
  color: ${colors.red};
`;

const PaymentDetails = props => {
  const {
    paymentState: { cardNumber, expDate, cvvNumber },
    handlePaymentChange,
    cardError,
  } = props;

  return (
    <FormSectionWrapper>
      <h2>Payment Details</h2>

      {cardError && <ErrorMsg>Please check your card details!</ErrorMsg>}

      <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
      <Input
        type="number"
        name="cardNumber"
        id="cardNumber"
        value={cardNumber}
        onChange={handlePaymentChange}
        width={inputWidthLarge}
        hasError={cardError}
      />

      <FormElementsWrapper>
        <div>
          <FormLabel htmlFor="expDate">Expiry Date</FormLabel>
          <Input
            type="text"
            name="expDate"
            id="expDate"
            value={expDate}
            onChange={handlePaymentChange}
            placeholder="MM/YY"
            width={inputWidthMedium}
            hasError={cardError}
          />
        </div>

        <div>
          <FormLabel htmlFor="cvvNumber">Security Code</FormLabel>
          <Input
            type="number"
            name="cvvNumber"
            id="cvvNumber"
            value={cvvNumber}
            onChange={handlePaymentChange}
            placeholder="CVV"
            width={inputWidthMedium}
            hasError={cardError}
          />
        </div>
      </FormElementsWrapper>
    </FormSectionWrapper>
  );
};

export default PaymentDetails;
