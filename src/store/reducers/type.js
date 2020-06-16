import initialState from '../initialState';
import * as actionTypes from '../actions/actionTypes';

export default (state = initialState.type, action) => {
  switch (action.type) {
    case actionTypes.SET_TYPE:
      return {
        ...state,
        type: action.data.idPizza,
        price: action.data.price,
        label: action.data.name,
      };
    case actionTypes.SET_CURRENCY:
      return {
        ...state,
        price: ((action.data.currency==="EUR") ? state.price * 0.5 : state.price * 2)
      };
    case actionTypes.DELETE_TYPE:
      return {
        ...initialState.type,
      };

    default:
      return state;
  }
};
