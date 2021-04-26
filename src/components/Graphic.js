import React, { useEffect, useContext } from 'react';
import ApiContext from '../context/ApiContext';
import { Chart } from 'chart.js';
import Grid from '@material-ui/core/Grid';
import Spinner from './Spinner';
import '../assets/scss/graphic.scss';

const Graphic = () => {
    const apiContext = useContext(ApiContext);
    const { loading, data } = apiContext;

    useEffect(() => {
        if (!loading && data) {
            createChart();
        }
    }, [loading])

    const createChart = () => {
        var ctx = document.getElementById('apiChart');
        new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: data.map(element => element.Fecha),
                datasets: [{
                    label: 'Dólar',
                    data: data.map(element => element.Valor.replace(',','.')),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                animation: false,
                scales: {
                    xAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    }

    return (
        <Grid container className="canvas-container-grid">
            <Grid item xs={10}>
                {
                    loading
                        ? <Spinner />
                        : <canvas id="apiChart"></canvas>
                }
            </Grid>
        </Grid>
    );
}

export default Graphic;