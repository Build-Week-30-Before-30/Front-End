import axios from 'axios';
export const FETCH_Item_START = ' FETCH_SMURF_START';
export const FETCH_Item_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_Item_FAILURE = 'FETCH_SMURF_FAILURE';

export const ADD_Item_START = 'ADD_SMURF_START';
export const ADD_Item_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_Item_FAILURE = 'ADD_SMURF_FAILURE';

export const fetchItem = (Item) => dispatch => {
    dispatch({ type: FETCH_Item_START });
    axios
        .get('', thirtybythirty)
        .then(res => {
            dispatch({
                type: FETCH_Item_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({ type: FETCH_Item_FAILURE, payload: err }))
};
export const addingItems = (item) => dispatch => {
    dispatch({ type: ADD_Item_START });
    return axios
        .post('', thirtybythirty)
        .then(res => {
            dispatch({
                type: ADD_Item_SUCCESS,
                payload: res.datas
            })
        }, true)
        .catch(err => dispatch({ type: ADD_Item_FAILURE, payload: err }))
};