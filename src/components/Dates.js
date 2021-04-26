import React, { useState, useContext, useEffect } from 'react';
import ApiContext from '../context/ApiContext';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import es from 'date-fns/locale/es'
import '../assets/scss/dates.scss';

const Dates = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const apiContext = useContext(ApiContext);
    const { getDolar } = apiContext;

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        getDolar();
    }, [])

    return (
        <MuiPickersUtilsProvider locale={es} utils={DateFnsUtils}>
            <Grid container className="dates-container-grid">
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog-start"
                    label="Fecha Inicio"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog-end"
                    label="Fecha Término"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

export default Dates;