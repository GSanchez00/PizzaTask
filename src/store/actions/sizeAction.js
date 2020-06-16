import * as actionTypes from './sizeActionTypes';
import {getSizes} from '../../service/sizeService';

export const fetchSizesStarted = () => ({
    type:  actionTypes.FETCH_SIZES_START
});

export const fetchSizesSuccess = sizes => ({
    type: actionTypes.FETCH_SIZES_SUCCESS,
    sizes
});

export const fetchSizesError = errorMessage => ({
    type: actionTypes.FETCH_SIZES_ERROR,
    errorMessage
});

export const fetchSizes =  () => async dispatch => {
  dispatch(fetchSizesStarted())
    try{
          let sizes = await getSizes();
          dispatch(fetchSizesSuccess(sizes));
    }
    catch(error){
        dispatch(fetchSizesError(error.message));
    }
}