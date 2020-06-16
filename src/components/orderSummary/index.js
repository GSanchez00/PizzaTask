import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LinkElement from '../linkElement';
import { ItemName, ItemPrice } from '../../styles/common';
import {
  Aside,
  AsideInner,
  SummaryTitle,
  EmptyBasketInfo,
  OrderItem,
  TotalPrice,
  CurrentItemPrice,
  CancelIem,
  LabelProduct
} from './style';

import { capitalize, currency } from '../../helpers';
import { deletePizza, changePizzaQuantity } from '../../store/actions/actions';
import ModalDelete from '../modals/modalDelete';
import Counter from '../counter';

const OrderSummary = ({ path, isAligned, readOnly=false }) => {
  const dispatch = useDispatch();
  const pizzas = useSelector(state => state.selectedPizzas);

  let subTotalPrice = pizzas.reduce((total, pizza) => (total + pizza.price * pizza.quantity) , 0);
  const selectedCurrency = useSelector(state => state.currency);
  const menuData = useSelector(state => state.menuData);
  
  let shippingPrice =  (menuData && menuData.parameters.length>0) ? menuData.parameters.find(el => el.name === "deliveryCost") : 0;
  let _shippingPrice=parseInt(shippingPrice.value);
  if(selectedCurrency==="EUR")
  {
    _shippingPrice=parseInt(shippingPrice.value) *0.5;
  }


  const totalPrice = subTotalPrice + _shippingPrice;

  const removeItem = i => dispatch(deletePizza(i));
  const onPlusClick = (count, i) => dispatch(changePizzaQuantity(count, i));
  const onMinusClick = (count, i) => dispatch(changePizzaQuantity(count, i));
  const onChange = (count, i) => dispatch(changePizzaQuantity(count, i));
  
  return (
    <Aside>
      <AsideInner>
        {readOnly && <SummaryTitle>Your order</SummaryTitle>}

        {!readOnly && (
          <LinkElement linkTo="/checkout" isDisabled={!pizzas.length}>
            Go to checkout
          </LinkElement>
        )}

        {pizzas.length ? (
          <>
            <div>
              {pizzas.map(({ price, size, type, quantity}, i) => (
                <OrderItem key={i}>
                  <LabelProduct>
                    <ItemName>{capitalize(size.label)} {capitalize(type.label)}</ItemName>
                  </LabelProduct>
                  <Counter readOnly={readOnly} onChange={(count=>onChange(count,i))} quantity={quantity} onPlusClick={(count)=>onPlusClick(count,i)} onMinusClick={(count)=>onMinusClick(count,i)} />
                  <CurrentItemPrice>
                    <ItemPrice>{currency(price, selectedCurrency)}</ItemPrice>
                    {path === '/' && (
                      <CancelIem type="button" /*onClick={() => removeItem(i)}*/>
                        
                        <ModalDelete onYesClick={() => removeItem(i)}></ModalDelete>
                      </CancelIem>
                    )}
                  </CurrentItemPrice>
                </OrderItem>
              ))}
            </div>
            <TotalPrice>
              <ItemName>SubTotal</ItemName>
              <ItemPrice isAligned={isAligned}>
                {currency(subTotalPrice, selectedCurrency)}
              </ItemPrice>
            </TotalPrice>
            {path !== '/' && (
            <div>
            <OrderItem>
              <ItemName>Shipping</ItemName>
              <ItemPrice isAligned={isAligned}>
                {currency(_shippingPrice, selectedCurrency)}
              </ItemPrice>
            </OrderItem>
            <OrderItem>
              <ItemPrice>Total</ItemPrice>
              <ItemPrice isAligned={isAligned}>
                {currency(totalPrice, selectedCurrency)}
              </ItemPrice>
            </OrderItem>
            </div>
            )}

          </>
        ) : (
          <EmptyBasketInfo>Your basket is empty</EmptyBasketInfo>
        )}
      </AsideInner>
    </Aside>
  );
};

export default OrderSummary;
