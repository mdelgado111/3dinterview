import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function WeatherVisualizer(props) {
    return (
        <Grid container direction='row'>
            <Grid item xs={6} md={6}>
                <div>
                    {JSON.stringify(props.dataset[props.index], undefined, 4)}
                </div>
            </Grid>
            <Grid item xs={6} md={6}>
                <div>
                    {JSON.stringify(props.dataset[props.index], undefined, 4)}
                </div>
            </Grid>
            <Grid item xs={6} md={6}>
                <Button color='primary' onClick={() => {props.decrementIndex();}}>Previous</Button>
            </Grid>
            <Grid item xs={6} md={6}>
                <Button color='primary' onClick={() => {props.incrementIndex();}}>Next</Button>
            </Grid>
        </Grid>
    );
}
