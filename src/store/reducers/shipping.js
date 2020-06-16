import initialState from '../initialState';
import * as actionTypes from '../actions/actionTypes';

export default (state = initialState.shippingPrice, action) => {
  switch (action.type) {
    case actionTypes.SET_SHIPPINGPRICE:
      return action.data;
    case actionTypes.SET_CURRENCY:
      return ((action.data.currency==="EUR") ? state * 0.5 : state * 2);
    default:
      return state;
  }
};

