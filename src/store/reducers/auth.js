import initialState from '../initialState';
import * as actionTypes from '../actionTypes';
import isEmpty from 'is-empty'

export default (state = initialState.auth, action) => {
  console.log("ReducerSetCurrentUser")
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      console.log(state)
      console.log("isAuthenticated: " + !isEmpty(action.data))
        return{
        ...state,
        isAuthenticated: !isEmpty(action.data),
        user: action.data
    }
    default:
      return state;
  }
};
