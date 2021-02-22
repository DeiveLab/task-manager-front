import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '../pages/signup';
import Login from '../pages/login';
import Mural from '../pages/mural';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/mural' component={Mural} isPrivate />
    </Switch>
);

export default Routes;