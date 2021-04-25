import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/img/svg/sbif-logo.svg';
import '../assets/scss/header.scss';

const Header = () => {
    return (
        <AppBar className="appBar">
            <Toolbar>
                <Typography variant="h5">Dólar de EE.UU.</Typography>
                <img src={logo} alt="logo"></img>
            </Toolbar>
        </AppBar>
    );
}

export default Header;