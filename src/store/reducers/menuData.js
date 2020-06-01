import initialState from '../initialState';
import * as actionTypes from '../actionTypes';
//import isEmpty from 'is-empty'

export default (state = initialState.menuData, action) => {
  
  switch (action.type) {
    case actionTypes.SET_MENU_DATA:
        console.log("******************ReducerSetmenuData")
        console.log(action.data)
        return{
        ...state,
        pizzas:action.data.pizzas,
        sizes:action.data.sizes,
        parameters:action.data.parameters
    }
    default:
      return state;
  }
};
