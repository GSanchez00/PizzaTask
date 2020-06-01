import React from 'react';
import styled from 'styled-components/macro';

import { space } from '../styles/helpers';
import { CallToActionStyles } from '../styles/common';

const Button = styled.button`
  ${CallToActionStyles}
  border: 0;
  padding: 0;
  margin-top: ${space(4)};
`;

export const CustomContent = styled.span`
  display: ${props => props.isHidden && 'none'};
`;

const ButtonElement = ({ children, isDisabled, onClick, type }) => (
  <Button disabled={isDisabled} onClick={onClick} type={type}>
    {children}
  </Button>
);

export default ButtonElement;
