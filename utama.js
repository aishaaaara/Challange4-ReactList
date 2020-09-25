import React from 'react';
import {Switch, Route} from 'react-router-dom';

import belanja from './belanja';

const utama = () =>(
    <Switch>
        <Route exact path="/belanja" component={belanja} />
    </Switch>
)
export default utama;