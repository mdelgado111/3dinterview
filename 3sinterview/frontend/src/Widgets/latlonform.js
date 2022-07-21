import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function Latlonform(props) {
    return (
        <Grid container direction='row'>
            <Grid item xs={12} md={2}>
                Latitude:
            </Grid>
            <Grid item xs={12} md={10}>
                <TextField id="latitude" label="Latitude" variant="outlined" onChange={(e) => {props.onLatChange(e);}}/>
            </Grid>
            <Grid item xs={12} md={2}>
                Longitude:
            </Grid>
            <Grid item xs={12} md={10}>
                <TextField id="longitude" label="Longitude" variant="outlined" onChange={(e) => {props.onLonChange(e);}}/>
            </Grid>
            <Grid item xs={12} md={12}>
                <Button variant="contained" onClick={() => {props.onLatLonSubmit();}}>Submit</Button>
            </Grid>
        </Grid>
    );
}
