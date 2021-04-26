import React, { useReducer } from 'react';
import { useSnackbar } from 'notistack';
import ApiContext from './ApiContext';
import ApiReducer from './ApiReducer';
import axiosClient from '../config/axios';
import { GET_DOLAR, SET_LOADING } from '../actions';

const ApiState = props => {
    const initialState = {
        loading: false,
        data: null
    }

    const [state, dispatch] = useReducer(ApiReducer, initialState);
    const { enqueueSnackbar } = useSnackbar();

    const getDolar = async (startDate, endtDate) => {
        const startDay = startDate.getDate();
        const startMonth = startDate.getMonth() + 1;
        const startYear = startDate.getFullYear();
        const endDay = endtDate.getDate();
        const endMonth = endtDate.getMonth() + 1;
        const endYear = endtDate.getFullYear();
        const apiKey = process.env.REACT_APP_API_KEY;
        const format = 'json'

        try {
            setLoading(true);
            const response = await axiosClient.get(`/recursos_api/dolar/periodo/${startYear}/${startMonth}/dias_i/${startDay}/${endYear}/${endMonth}/dias_f/${endDay}?apikey=${apiKey}&formato=${format}`);
            dispatch({
                type: GET_DOLAR,
                payload: response.data.Dolares
            });
        } catch (error) {
            setLoading(false);
            enqueueSnackbar(error.response.data.Mensaje, { variant: 'error' });
        }
    }

    const setLoading = loading => {
        dispatch({
            type: SET_LOADING,
            payload: loading
        });
    }

    return (
        <ApiContext.Provider
            value={{
                loading: state.loading,
                data: state.data,
                getDolar
            }}
        >
            {props.children}
        </ApiContext.Provider>
    );
}

export default ApiState;