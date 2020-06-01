export default {
  size: {
    size:  1,
    price: 0,
    label: 'Individual'
  },
  type: {
    type: '',
    price: null,
    label: ''
  },
  currency: 'USD',
  shippingPrice: 0,
  selectedPizzas: [],
  auth:{
    isAuthenticated: false,
    user: {}
  },
  menuData:
  {
    pizzas:[],
    sizes:[],
    parameters:[]
  }
};
