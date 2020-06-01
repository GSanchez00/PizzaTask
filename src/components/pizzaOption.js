import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../store/actions';
import styled from 'styled-components/macro';
import { ClickAreaBase, ItemPizzaName, ItemPizzaPrice } from '../styles/common';
import { colors } from '../styles/variables';
import Input from './input';
import { currency } from '../helpers';



const ClickArea = styled(ClickAreaBase)`
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  height: 200px;
  border: solid
    ${props =>
      props.isSelected ? `2px ${colors.red}` : `1px ${colors.greyDark}`};
    ${props =>
      `background-image: url(${require(`../assets/img/${props.img}`)});
      background-repeat: no-repeat;
      background-size: 350px 200px;
      `};
`;

const PizzaOption = ({ id, price, name}) => {
  const selectedType = useSelector(state => state.type);
  const selectedCurrency = useSelector(state => state.currency);
  const dispatch = useDispatch();
  let img=id + ".jpg";
  let idPizza=id;

  if(selectedCurrency==="EUR")
    price=Math.round((price*0.5) * 100) / 100;

  const handleTypeSelection = (idPizza, price, name) => {
    dispatch(setType({ idPizza, price, name}));
  };

  return (
    <>
      <label>
        <ClickArea img={img} isSelected={idPizza === selectedType.type}>
          <ItemPizzaName>{name}</ItemPizzaName>

          <Input
            checked={idPizza === selectedType.type}
            type="radio"
            value={idPizza}
            name="pizzaType"
            onChange={() => handleTypeSelection(idPizza, parseFloat(price), name)}
            isHidden
          />

          <ItemPizzaPrice>{currency(price, selectedCurrency)}</ItemPizzaPrice>
        </ClickArea>
      </label>
    </>
  );
};

export default PizzaOption;