import styled, { css } from 'styled-components/macro';

import { colors, radius } from './variables';
import { font, space } from './helpers';

export const ClickAreaBase = styled.span`
  display: flex;
  align-items: center;
  border-radius: ${radius}px;
  background-color: ${colors.white};
  cursor: pointer;
`;

export const ItemName = styled.span`
  font: ${font({ size: 'medium' })};
`;

export const ItemPrice = styled.span`
  font: ${font({ size: 'medium', weight: 'bold' })};
  padding-right: ${props => props.isAligned && `${space(2)}`};
`;

export const ItemPizzaName = styled.span`
  font: ${font({ size: 'medium' })};
  border-radius: 10px;
  background-color: lightgrey;
  padding: 5px;
  border: 1px solid grey;
`;

export const ItemPizzaPrice = styled.span`
  font: ${font({ size: 'medium', weight: 'bold' })};
  padding-right: ${props => props.isAligned && `${space(2)}`};
  border-radius: 10px;
  background-color: lightgrey;
  padding: 5px;
  border: 1px solid grey;
`;

export const CallToActionStyles = css`
  font: ${font({ size: 'medium' })};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  border-radius: ${radius}px;
  background: ${props => (props.disabled ? colors.greyDark : colors.red)};
  color: ${colors.white};
`;

export const PageWidthStyles = css`
  width: 1200px;
  margin: 0 auto;
`;

export const Layout = styled.div`
  ${PageWidthStyles}
  display: flex;
  justify-content: space-between;
  margin-bottom: ${space(10)};
`;

export const FormLabel = styled.label`
  margin-top: ${space(4)};
  display: block;
`;

export const FormSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormElementsWrapper = styled.div`
  display: flex;
  div {
    &:nth-of-type(2) {
      margin-left: ${space(2)};
    }
  }
`;

export const LayoutSecondary = styled.div`
  ${PageWidthStyles}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-top: ${space(20)};
  }
  a {
    width: auto;
    margin-top: ${space(4)};
    padding: 0 ${space(4)};
  }
`;
