import initialState from '../initialState';
import * as actionTypes from '../actions/actionTypes';


export default (state = initialState.currency, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENCY:
      return action.data.currency;
    default:
      return state;
  }
};
