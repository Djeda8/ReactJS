import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { store } from './store';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import { setCity } from './actions';
import './App.css';

const cities = [
  'Valencia,es',
  'Sevilla,es',
  'Barcelona,es',
  'Madrid,es',
]

class App extends Component {
  constructor(){
    super();
    this.state = {city:null}
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);

    store.dispatch(setCity(city));
  };

  render(){
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="App">
                <LocationList cities={cities}
                              onSelectedLocation={this.handleSelectedLocation}>
                </LocationList>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
              {city && <ForecastExtended city={city}></ForecastExtended>}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
