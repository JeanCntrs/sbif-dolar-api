import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../assets/scss/statistics.scss';

const Statistics = () => {
    return (
        <Grid container xs={12} className="statistics-container-grid">
            <Grid item xs={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        <IconButton>
                            <ExpandMoreIcon />
                        </IconButton>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            benevolent
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
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            benevolent
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
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            benevolent
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Statistics;