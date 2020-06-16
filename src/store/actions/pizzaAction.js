import * as actionTypes from './pizzaActionTypes';
import {getPizzas} from '../../service/pizzaService';

export const fetchPizzasStarted = () => ({
    type:  actionTypes.FETCH_PIZZAS_START
});

export const fetchPizzasSuccess = pizzas => ({
    type: actionTypes.FETCH_PIZZAS_SUCCESS,
    pizzas
});

export const fetchPizzasError = errorMessage => ({
    type: actionTypes.FETCH_PIZZAS_ERROR,
    errorMessage
});

export const fetchPizzas =  () => async dispatch => {
  dispatch(fetchPizzasStarted())
    try{
          let pizzas = await getPizzas();
          dispatch(fetchPizzasSuccess(pizzas));
    }
    catch(error){
        dispatch(fetchPizzasError(error.message));
    }
}