import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { setSize } from '../store/actions/actions';
import { ClickAreaBase, ItemName, ItemPrice } from '../styles/common';
import { colors } from '../styles/variables';
import Input from './input';
import { currency } from '../helpers';

const ClickArea = styled(ClickAreaBase)`
  flex-direction: column;
  justify-content: space-around;
  width: 180px;
  height: 140px;
  border: solid
    ${props =>
      props.isSelected ? `2px ${colors.red}` : `1px ${colors.greyDark}`};
`;

const SizeOption = ({ id, price, name }) => {
  const dispatch = useDispatch();
  const selectedSize = useSelector(state => state.size);
  const selectedCurrency = useSelector(state => state.currency);
  let idSize=id;

  if(selectedCurrency==="EUR")
    price=Math.round((price*0.5) * 100) / 100;

  const handleSizeSelection = (idSize, price, name) => {
    dispatch(setSize({ idSize, price, name }));
  };

  return (
    <>
      <label>
        <ClickArea isSelected={idSize === selectedSize.size}>
          <ItemName>{name}</ItemName>

          <Input
            checked={idSize === selectedSize.size}
            type="radio"
            value={idSize}
            name="pizzaSize"
            onChange={() => handleSizeSelection(idSize, parseFloat(price), name)}
            isHidden
          />

          <ItemPrice>{currency(price, selectedCurrency)}</ItemPrice>
        </ClickArea>
      </label>
    </>
  );
};

export default SizeOption;
