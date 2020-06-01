import React from 'react';
import styled, { css } from 'styled-components/macro';

import { space } from '../styles/helpers';
import { colors } from '../styles/variables';

const StyledInput = styled.input`
  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
      height: 36px;
      margin-top: ${space(0.5)};
      padding-left: ${space()};
    `};

  ${props =>
    props.isHidden &&
    css`
      visibility: hidden;
      position: absolute;
    `};

  ${props =>
    props.hasError &&
    css`
      border: 1px solid ${colors.red};
    `};
`;

const Input = props => {
  const {
    name,
    id,
    type,
    value,
    onChange,
    checked,
    isHidden,
    width,
    placeholder,
    hasError,
  } = props;

  return (
    <StyledInput
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      checked={checked}
      isHidden={isHidden}
      width={width}
      placeholder={placeholder}
      hasError={hasError}
    />
  );
};

export default Input;
