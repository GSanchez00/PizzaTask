import initialState from '../initialState';
import * as actionTypes from '../actions/actionTypes';
import * as sizeActionTypes from '../actions/sizeActionTypes';
import * as typeActionTypes from '../actions/pizzaActionTypes';
import * as parameterActionTypes from '../actions/parameterActionTypes';

export default (state = initialState.menuData, action) => {
  
  switch (action.type) {
    
    case actionTypes.SET_MENU_DATA:
        return{
        ...state,
        pizzas:action.data.pizzas,
        sizes:action.data.sizes,
        parameters:action.data.parameters
    }


    
    case sizeActionTypes.FETCH_SIZES_START:
      return {
        ...state,
        isFetching: true
      };
    case sizeActionTypes.FETCH_SIZES_SUCCESS:
    console.log("FETCH_SIZES_SUCCESS")  
    console.log(action)  
    return {
        ...state,
        isFetching: false,
        sizes: action.sizes
      };
    case sizeActionTypes.FETCH_SIZES_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage + " - FETCH_SIZES_ERROR"
      };

      case typeActionTypes.FETCH_PIZZAS_START:
        return {
          ...state,
          isFetching: true
        };
      case typeActionTypes.FETCH_PIZZAS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          pizzas: action.pizzas
        };
      case typeActionTypes.FETCH_PIZZAS_ERROR:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.errorMessage + " - FETCH_PIZZAS_ERROR"
        };

        case parameterActionTypes.FETCH_PARAMETERS_START:
          return {
            ...state,
            isFetching: true
          };
        case parameterActionTypes.FETCH_PARAMETERS_SUCCESS:
          return {
            ...state,
            isFetching: false,
            parameters:action.parameters
          };
        case parameterActionTypes.FETCH_PARAMETERS_ERROR:
          return {
            ...state,
            isFetching: false,
            errorMessage: action.errorMessage + " - FETCH_PARAMETERS_ERROR"
          };
    default:
      return state;
  }
};
