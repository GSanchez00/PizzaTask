import initialState from '../initialState';
import * as actionTypes from '../actions/actionTypes';

export default (state = initialState.size, action) => {
  switch (action.type) {
    case actionTypes.SET_SIZE:
      return {
        ...state,
        size: action.data.idSize,
        price: action.data.price,
        label: action.data.name,
      };
    case actionTypes.SET_CURRENCY:
      return {
          ...state,
          price: ((action.data.currency==="EUR") ? state.price * 0.5 : state.price * 2)
        };
    case actionTypes.DELETE_SIZE:
      return {
        ...initialState.size,
      };


    default:
      return state;
  }
};
