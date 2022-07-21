import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import axios from 'axios';

import { Latlonform } from './Widgets/latlonform.js';
import { WeatherVisualizer } from './Widgets/weathervisualizer.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            dataset: [],
            index: 0
        };
    }

    onLatChange(e) {
        this.setState(
            {
                latitude: e.target.value
            }
        );
    }

    onLonChange(e) {
        this.setState(
            {
                longitude: e.target.value
            }
        );
    }

    onLatLonSubmit() {
        axios.post(
            'http://127.0.0.1:5000/',
            {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            }
        ).then((response) => {
            this.setState(
                {
                    index: 0,
                    dataset: response.data.daily
                }
            );
        }).catch((error) => {
            alert(error);
        });
    }

    incrementIndex() {
        if(this.state.index < 6) {
            this.setState(
                {
                    index: this.state.index + 1
                }
            );
        }
    }

    decrementIndex() {
        if(this.state.index > 0) {
            this.setState(
                {
                    index: this.state.index - 1
                }
            );
        }
    }

    render() {
        if(this.state.dataset.length === 0) {
            return (
                <Container>
                    <Latlonform
                        onLatChange={(e) => {this.onLatChange(e);}}
                        onLonChange={(e) => {this.onLonChange(e);}}
                        onLatLonSubmit={() => {this.onLatLonSubmit();}}
                    />
                </Container>
            );
        } else {
            return (
                <Container>
                    <Latlonform
                        onLatChange={(e) => {this.onLatChange(e);}}
                        onLonChange={(e) => {this.onLonChange(e);}}
                        onLatLonSubmit={() => {this.onLatLonSubmit();}}
                    />
                    <WeatherVisualizer incrementIndex={() => {this.incrementIndex();}} decrementIndex={() => {this.decrementIndex(); }} index={this.state.index} dataset={this.state.dataset} />
                </Container>
            );
        }
    }
}

export default App;
