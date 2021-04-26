import React from 'react';
import ApiState from './context/ApiState';
import Header from './components/Header';
import Dates from './components/Dates';
import Graphic from './components/Graphic';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

const App = () => {
    return (
        <ApiState>
            <Header />
            <Dates />
            <Graphic />
            <Statistics />
            <Footer />
        </ApiState>
    );
}

export default App;
