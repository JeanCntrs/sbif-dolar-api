import React, { useContext, useEffect } from 'react';
import ApiContext from '../context/ApiContext';

const Dates = () => {
    const apiContext = useContext(ApiContext);
    const { getDolar } = apiContext;

    useEffect(() => {
        getDolar();
    }, [])

    return (
        <h1>Dates</h1>
    );
}

export default Dates;