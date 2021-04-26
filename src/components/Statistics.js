import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getMinValue, getAvgValue, getMaxValue } from '../helpers/statistics';
import '../assets/scss/statistics.scss';

const Statistics = () => {
    const apiContext = useContext(ApiContext);
    const { loading, data } = apiContext;

    return (
        <>
            {
                !loading && data &&
                <Grid container className="statistics-container-grid">
                    <Grid item xs={2}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    <IconButton>
                                        <ExpandMoreIcon />
                                    </IconButton>
                                        Valor Mínimo
                                    </Typography>
                                <Typography variant="h5" component="h2">
                                    {getMinValue(data)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    <IconButton>
                                        <UnfoldLessIcon />
                                    </IconButton>
                                        Valor Promedio
                                    </Typography>
                                <Typography variant="h5" component="h2">
                                    {getAvgValue(data)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    <IconButton>
                                        <ExpandLessIcon />
                                    </IconButton>
                                        Valor Máximo
                                    </Typography>
                                <Typography variant="h5" component="h2">
                                    {getMaxValue(data)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </>
    );
}

export default Statistics;