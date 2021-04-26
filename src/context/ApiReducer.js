import { GET_DOLAR, SET_LOADING } from '../actions';

export default (state, action) => {
    switch (action.type) {
        case GET_DOLAR:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state;
    }
}