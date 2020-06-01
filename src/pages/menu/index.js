import React from 'react';
import { SizeOptionsWrapper, PizzaOptionsWrapper } from './style';
import { Layout } from '../../styles/common';
import {
  OrderSummary,
  SizeOption,
  PizzaOption,
  PizzaGenerator,
  Header,
} from '../../components';


const Menu = ({ match, pizzas=[], sizes=[] }) => {
  return (
  <>
    <Header />
    <Layout>
      <main>
        <h2>Choose your pizza</h2>
        <p>All pizzas come with tomato sauce and mozzarella</p>
        <PizzaOptionsWrapper>
          {pizzas.map(option => (
            <PizzaOption key={option.id} {...option} />
          ))}
        </PizzaOptionsWrapper>
        
        <h2>Choose your size</h2>
        <SizeOptionsWrapper>
          {sizes.map(option => (
            <SizeOption key={option.id} {...option} />
          ))}
        </SizeOptionsWrapper>
        
        <PizzaGenerator />
      </main>

      <OrderSummary {...match} isAligned />
    </Layout>
  </>
);
}
export default Menu;
