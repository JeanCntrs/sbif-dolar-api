import React, { useReducer } from 'react';
import ApiContext from './ApiContext';
import ApiReducer from './ApiReducer';
import axiosClient from '../config/axios';

const ApiState = ({ children }) => {
    const initialState = {
        loading: false,
        data: null
    }

    const [state, dispatch] = useReducer(ApiReducer, initialState);

    const getDolar = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const format = 'json'
        try {
            const response = await axiosClient.get(`/recursos_api/dolar/periodo/2011/01/dias_i/04/2011/02/dias_f/05?apikey=${apiKey}&formato=${format}`);
            console.log('response', response);
        } catch (error) {
            console.log('error', error.response.data)
        }
    }

    return (
        <ApiContext.Provider
            value={{
                loading: state.loading,
                data: state.data,
                getDolar
            }}
        >
            {children}
        </ApiContext.Provider>
    );
}

export default ApiState;