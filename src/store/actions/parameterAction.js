import * as actionTypes from './parameterActionTypes';
import {getParameters} from '../../service/parameterService';

export const fetchParametersStarted = () => ({
    type:  actionTypes.FETCH_PARAMETERS_START
});

export const fetchParametersSuccess = parameters => ({
    type: actionTypes.FETCH_PARAMETERS_SUCCESS,
    parameters
});

export const fetchParametersError = errorMessage => ({
    type: actionTypes.FETCH_PARAMETERS_ERROR,
    errorMessage
});

export const fetchParameters =  () => async dispatch => {
  dispatch(fetchParametersStarted())
    try{
          let parameters = await getParameters();
          dispatch(fetchParametersSuccess(parameters));
    }
    catch(error){
        dispatch(fetchParametersError(error.message));
    }
}