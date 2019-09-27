import {
    FETCH_Item_START,
    FETCH_Item_SUCCESS,
    FETCH_Item_FAILURE,
    ADD_Item_START,
    ADD_Item_SUCCESS,
    ADD_Item_FAILURE
} from './action';

const initialState = {
    items: [],
    errors: '',
    isFetching: false
}




export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_Item_START:
            return {
                ...state,
                errors: '',
                fetching: true
            };
        case FETCH_Item_SUCCESS:
            return {
                ...state,
                errors: '',
                items: payload,
                fetching: false
            };
        case FETCH_Item_FAILURE:
            return {
                ...state,
                errors: payload,
                fetching: false

            };
        case ADD_Item_START:
            return {
                ...state,
                fetching: true,
                error: ''
            };
        case ADD_Item_SUCCESS:
            return {
                ...state,
                items: payload,
                fetching: false,
                error: ''
            };
        case ADD_Item_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}