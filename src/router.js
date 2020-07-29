import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Oirae from './Kvilna/Oirae';
import Thinningveil from './Kvilna/Thinningveil';

export default(
  <Switch>
    <Route component={Home} exact path='/' />

    <Route component={Oirae} path='/kvilna/oirae' />
    <Route component={Thinningveil} path="/kvilna/thinningveil" />
  </Switch>
)