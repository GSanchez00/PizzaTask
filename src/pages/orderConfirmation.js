import React from 'react';

import { Header, LinkElement } from '../components';
import { LayoutSecondary } from '../styles/common';

const OrderConfirmation = ({ match }) => (
  <>
    <Header {...match} />
    <LayoutSecondary>
      <h2>Your pizza is on its way</h2>
      <LinkElement linkTo="/">Go back to homepage</LinkElement>
    </LayoutSecondary>
  </>
);

export default OrderConfirmation;
