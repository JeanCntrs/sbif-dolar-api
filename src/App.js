import React from 'react';
import ApiState from './context/ApiState';
import Header from './components/Header';
import Dates from './components/Dates';

const App = () => {
    return (
        <ApiState>
            <Header />
            <Dates />
        </ApiState>
    );
}

export default App;
