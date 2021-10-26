import './App.css';
import React from 'react';
import MapContainer from './components/MapContainer';
import CarSale from './components/CarSale'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { store } from './store'
import { Provider } from 'react-redux'
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 40px;
  color: black;
`

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <AppBar position="static">
              <Toolbar variant="dense">
                <StyledLink to="/">
                  <Typography variant="h6" color="white" component="div">
                    Map
                  </Typography>
                </StyledLink>
                <StyledLink to="/sale">
                  <Typography variant="h6" color="white" component="div">
                    Car sale
                  </Typography>
                </StyledLink>
              </Toolbar>
            </AppBar>
          </nav>
          <Switch>
            <Route path="/map">
              <MapContainer />
            </Route>
            <Route path="/sale">
              <CarSale />
            </Route>
            <Route path="/">
              <MapContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
