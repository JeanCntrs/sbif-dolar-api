import React, { useEffect } from 'react';
import { Chart } from 'chart.js';
import Grid from '@material-ui/core/Grid';
import '../assets/scss/graphic.scss';

const Graphic = () => {
    useEffect(() => {
        createChart();
    }, [])

    const createChart = () => {
        var ctx = document.getElementById('apiChart');
        new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                // labels: bands.map(band => band.name),
                labels: ['label-2', 'label-2', 'label-3', 'label-2', 'label-2', 'label-3', 'label-2', 'label-2', 'label-3', 'label-2', 'label-2', 'label-3'],
                datasets: [{
                    label: 'Dólar',
                    data: ['1', '2', '3', '1', '2', '3', '1', '2', '3', '1', '2', '3'],
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
        <Grid container xs={12} className="canvas-container-grid">
            <Grid item xs={10}>
                <canvas id="apiChart"></canvas>
            </Grid>
        </Grid>
    );
}

export default Graphic;