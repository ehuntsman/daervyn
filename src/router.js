import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Oirae from './Kvilna/Oirae';
import Thinningveil from './Kvilna/Thinningveil';
import Kalnu from './Melsenshir/Kalnu';
import Tergria from './Melsenshir/Tergria';
import Eldrith from './Melsenshir/Eldrith';
import Deepcaves from './Melsenshir/Deepcaves';
import Geirank from './Melsenshir/Geirank';
import Bjorvax from './Kvilna/Bjorvax';
import Sleepingphantom from './Sirena/Sleepingphantom';
import Rgra from './Sirena/Rgra';
import Annalay from './Sirena/Annalay';
import Aerkyn from './Sirena/Aerkyn';
import Cliffaerkyn from './Sirena/Cliffaerkyn';
import Reijah from './Kvilna/Reijah';
import Southern from './Kvilna/Southern';
import Brokenportal from './Kvilna/Brokenportal';
import Portal from './Kvilna/Portal';
import Hringir from './Home/Hringir';
import Skies from './Home/Skies';
import Shards from './Story/Shards';

export default(
  <Switch>
    <Route component={Home} exact path='/' />

    <Route component={Shards} path='/story/shards' />

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
    <Route component={Brokenportal} path="/kvilna/brokenportal" />
    <Route component={Portal} path="/kvilna/selnataportal" />

    <Route component={Hringir} path="/hringir" />
    <Route component={Skies} path="/skies" />
  </Switch>
)