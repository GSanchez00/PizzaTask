import React from 'react';

import { Header } from '../components';
import { LayoutSecondary } from '../styles/common';
import LinkElement from './linkElement';

const NotFound = () => (
  <>
    <Header />
    <LayoutSecondary>
      <h2>This page doesn't exist</h2>
      <LinkElement linkTo="/">Go back to homepage</LinkElement>
    </LayoutSecondary>
  </>
);

export default NotFound;
