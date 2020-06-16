import * as actionTypes from './actionTypes';

export const setSize = data => {
  return {
    type: actionTypes.SET_SIZE,
    data,
  };
};

export const deleteSize = () => {
  return {
    type: actionTypes.DELETE_SIZE,
  };
};

export const setType = data => {
  return {
    type: actionTypes.SET_TYPE,
    data,
  };
};

export const deleteType = () => {
  return {
    type: actionTypes.DELETE_TYPE,
  };
};

export const createPizza = data => {
  return {
    type: actionTypes.CREATE_PIZZA,
    data,
  };
};

export const deletePizza = index => {
  return {
    type: actionTypes.DELETE_PIZZA,
    index,
  };
};

export const changePizzaQuantity = (quantity, index) => {
  return {
    type: actionTypes.QUANTITY_PIZZA,
    quantity,
    index,
  };
};


export const deletePizzas = () => {
  return {
    type: actionTypes.DELETE_PIZZAS,
  };
};

export const setCurrency = data => {
  return {
    type: actionTypes.SET_CURRENCY,
    data,
  };
};

export const setShippingPrice = data => {
  return {
    type: actionTypes.SET_SHIPPINGPRICE,
    data,
  };
};

// Set logged in user
export const setCurrentUser = data => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    data
  };
};

export const setMenuData = data => {
  return {
    type: actionTypes.SET_MENU_DATA,
    data
  };
};
