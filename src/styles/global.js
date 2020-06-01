import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components/macro';

import { font, space } from './helpers';
import { colors } from './variables';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font: ${font()};
    background-color: ${colors.grey};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font: ${font({ size: 'heading' })};
  }
  h2 {
    font: ${font({ size: 'large' })};
    margin-top: ${space(5)};
    margin-bottom: 0;
  }
  p{
    margin-top: ${space()};
    margin-bottom: 0;
  }
`;

export default GlobalStyle;
