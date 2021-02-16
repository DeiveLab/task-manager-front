import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from '../pages/signup';
import Login from '../pages/login';
import Mural from '../pages/mural';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/signup' component={SignUp}/>
        <Route path='/mural' component={Mural} />
    </Switch>
);

export default Routes;