import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import APODPage from './pages/APODPage/APODPage'
import EPICPage from './pages/EPICPage/EPICPage'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/apod" component={APODPage} />
            <Route path="/epic" component={EPICPage} />
        </Switch>
    </Router>
);

export default Routes;
