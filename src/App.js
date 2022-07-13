import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import router from './router';
import Header from './Header';
import logo from './Home/images/daervynicon.svg';

function App() {
  return (
    <div className="App">
      <Header />
      {router}
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-left">
            <ul>
              <li><h4>Story Information</h4></li>
              <li>
                <Link to="/story/shards">
                  The Shards
                </Link>
              </li>
              <li>
                <Link to="/story/races">
                  Races
                </Link>
              </li>
              <li><h4>Mel Senshir</h4></li>
              <li>
                <Link to="/melsenshir/kalnu">
                  Kalnu
                </Link>
              </li>
              <li>
                <Link to="/melsenshir/tergria">
                  Tergria
                </Link>
              </li>
              <li>
                <Link to="/melsenshir/eldrith">
                  Eldrith
                </Link>
              </li>
              <li>
                <Link to="/melsenshir/deepcaves">
                  The Deep Caves of Eldrith
                </Link>
              </li>
              <li>
                <Link to="/melsenshir/geirank">
                  Geirank
                </Link>
              </li>
              <li><h4>Sir'ena</h4></li>
              <li>
                <Link to="/sirena/sleepingphantom">
                  The Sleeping Phantom
                </Link>
              </li>
              <li>
                <Link to="/sirena/annalay">
                  Annalay
                </Link>
              </li>
              <li>
                <Link to="/sirena/rgra">
                  R'gra Desert
                </Link>
              </li>
              <li>
                <Link to="/sirena/aerkyn">
                  Aerkyn
                </Link>
              </li>
              <li>
                <Link to="/sirena/aerkyncliff">
                  Cliff Dwellings of Aerkyn
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-logo">
            <img src={logo} alt="Daervyn" />
          </div>
          <div className="footer-right">
            <ul>
              <li><h4>K'vilna</h4></li>
              <li>
                <Link to="/kvilna/oirae">
                  Oiráe
                </Link>
              </li>
              <li>
                <Link to="/kvilna/bjorvax">
                  Bjorvax
                </Link>
              </li>
              <li>
                <Link to="/kvilna/thinningveil">
                  Thinning Veil
                </Link>
              </li>
              <li>
                <Link to="/kvilna/reijah">
                  Reijah Harbor
                </Link>
              </li>
              <li>
                <Link to="/kvilna/southernharbor">
                  Southern Harbor
                </Link>
              </li>
              <li>
                <Link to="/kvilna/selnataportal">
                  Selnata Portal
                </Link>
              </li>
              <li><h4>Other Areas</h4></li>
              <li>
                <Link to="/hringir">
                  Hringir
                </Link>
              </li>
              <li>
                <Link to="/skies">
                  Daervyn Skies
                </Link>
              </li>
              <li>
                <Link to="/skaro">
                  Skaro
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
