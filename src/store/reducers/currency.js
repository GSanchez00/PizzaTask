import initialState from '../initialState';
import * as actionTypes from '../actionTypes';


export default (state = initialState.currency, action) => {
  //console.log("ReducerSetCurrency")
  switch (action.type) {
    case actionTypes.SET_CURRENCY:
      return action.data.currency;
    default:
      return state;
  }
};
