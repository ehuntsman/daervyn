import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Oirae from './components/Oirae';
import Thinningveil from './components/Thinningveil';
import Kalnu from './components/Kalnu';
import Tergria from './components/Tergria';
import Eldrith from './components/Eldrith';
import Deepcaves from './components/Deepcaves';
import Geirank from './components/Geirank';
import Bjorvax from './components/Bjorvax';
import Sleepingphantom from './components/Sleepingphantom';
import Rgra from './components/Rgra';
import Annalay from './components/Annalay';
import Aerkyn from './components/Aerkyn';
import Cliffaerkyn from './components/Cliffaerkyn';
import Reijah from './components/Reijah';
import Southern from './components/Southern';
import Skaro from './components/Skaro';
import Hringir from './components/Hringir';
import Skies from './components/Skies';
import Shards from './components/Shards';
import Races from './components/Races';
import Bestiary from './components/Home';

export default(
  <Switch>
    <Route component={Home} exact path='/' />

    <Route component={Shards} path='/story/shards' />
    <Route component={Races} path='/story/races' />
    <Route component={Bestiary} path='/story/bestiary' />

    <Route component={Kalnu} path="/melsenshir/kalnu" />
    <Route component={Tergria} path="/melsenshir/tergria" />
    <Route component={Eldrith} path="/melsenshir/eldrith" />
    <Route component={Deepcaves} path='/melsenshir/deepcaves' />
    <Route component={Geirank} path="/melsenshir/geirank" />

    <Route component={Sleepingphantom} path="/sirena/sleepingphantom" />
    <Route component={Rgra} path="/sirena/rgra" />
    <Route component={Annalay} path="/sirena/annalay" />
    <Route component={Aerkyn} path="/sirena/aerkyn" />
    <Route component={Cliffaerkyn} path="/sirena/aerkyncliff" />

    <Route component={Oirae} path='/kvilna/oirae' />
    <Route component={Bjorvax} path='/kvilna/bjorvax' />
    <Route component={Thinningveil} path="/kvilna/thinningveil" />
    <Route component={Reijah} path="/kvilna/reijah" />
    <Route component={Southern} path="/kvilna/southernharbor" />

    <Route component={Hringir} path="/hringir" />
    <Route component={Skies} path="/skies" />
    <Route component={Skaro} path="/skaro" />
  </Switch>
)