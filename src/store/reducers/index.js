import { combineReducers } from 'redux';

import size from './size';
import currency from './currency';
import shipping from './shipping';
import type from './type';
import selectedPizzas from './selectedPizzas';
import menuData from './menuData';
import auth from './auth';


export default combineReducers({
  type,
  size,
  selectedPizzas,
  currency,
  shipping,
  menuData,
  auth
});
