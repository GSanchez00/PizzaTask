import styled from 'styled-components/macro';

import { space } from '../../styles/helpers';
import { mainSectionWidth } from '../../styles/variables';

const WrapperBase = styled.div`
  display: flex;
  width: ${mainSectionWidth}px;
`;

export const SizeOptionsWrapper = styled(WrapperBase)`
  justify-content: space-between;
  margin-top: ${space(3)};
`;

export const PizzaOptionsWrapper = styled(WrapperBase)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: ${space(3)};
`;
