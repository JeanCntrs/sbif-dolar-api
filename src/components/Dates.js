import React, { useState, useContext, useEffect } from 'react';
import ApiContext from '../context/ApiContext';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import es from 'date-fns/locale/es'
import '../assets/scss/dates.scss';
import { getLastWeek } from '../helpers/dates';

const Dates = () => {
    const apiContext = useContext(ApiContext);
    const { getDolar } = apiContext;
    
    const [startDate, setStartDate] = useState(getLastWeek());
    const [endtDate, setEndDate] = useState(new Date());

    const handleChangeStartDate = date => {
        setStartDate(date);
    };

    const handleChangeEndtDate = date => {
        setEndDate(date);
    };

    useEffect(() => {
        getDolar(startDate, endtDate);
    }, [startDate, endtDate])

    return (
        <MuiPickersUtilsProvider locale={es} utils={DateFnsUtils}>
            <Grid container className="dates-container-grid">
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog-start"
                    label="Fecha Inicio"
                    format="dd/MM/yyyy"
                    value={startDate}
                    onChange={handleChangeStartDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog-end"
                    label="Fecha Término"
                    format="dd/MM/yyyy"
                    value={endtDate}
                    onChange={handleChangeEndtDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

export default Dates;