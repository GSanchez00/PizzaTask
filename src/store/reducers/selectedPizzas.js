import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

export default (state = initialState.selectedPizzas, action) => {

  switch (action.type) {
    case actionTypes.CREATE_PIZZA:
      return [...state, { ...action.data }];

    case actionTypes.DELETE_PIZZA:
      return state.filter((_, i) => i !== action.index);

      
    case actionTypes.QUANTITY_PIZZA:
      state[action.index].quantity=action.quantity;
      return [...state];

    case actionTypes.SET_CURRENCY:
      for(let i=0; i<state.length;i++)  
      {
        state[i].price = ((action.data.currency==="EUR") ? state[i].price * 0.5 : state[i].price * 2)
      }
      return state;

    case actionTypes.DELETE_PIZZAS:
      return [...initialState.selectedPizzas];

    default:
      return state;
  }
};
