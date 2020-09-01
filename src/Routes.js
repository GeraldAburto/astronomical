import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import APODPage from './pages/APODPage/APODPage'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/apod" component={APODPage} />
        </Switch>
    </Router>
);

export default Routes;
