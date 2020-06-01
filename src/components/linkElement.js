import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { CallToActionStyles } from '../styles/common';

const StyledLink = styled(Link)`
  ${CallToActionStyles}
  text-decoration: none;
  pointer-events: ${props => props.disabled && 'none'};
`;

const LinkElement = ({ children, linkTo, isDisabled }) => (
  <StyledLink disabled={isDisabled} to={linkTo}>
    {children}
  </StyledLink>
);

export default LinkElement;
