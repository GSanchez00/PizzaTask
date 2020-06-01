import { fontSizes } from './variables';

export const space = (multiplier = 1, baseUnit = 8) => {
  return `${multiplier * baseUnit}px`;
};

export const font = ({
  weight = 400,
  size = 'small',
  lineHeight = 1.25,
} = {}) => {
  const fontSize = fontSizes[size] || size;

  return `${weight} ${fontSize}px / ${lineHeight} 'Trebuchet MS', Tahoma, Arial, Verdana`;
};
