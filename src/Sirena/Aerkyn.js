import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/Aerkyn.jpg'
import weather from '../Kvilna/images/weather.svg';
import note from '../Kvilna/images/music.png';
import terrain from '../Kvilna/images/terrain.png';
import path from '../Kvilna/images/path.png';
import person from '../Kvilna/images/person.png';

import aerkyn2 from './images/Aerkyn2.jpg';
import aerkyn3 from './images/Aerkyn3.jpg';

export default class Aerkyn extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Aerkyn" />
        <h1>Aerkyn</h1>
        <h4>/air/ - /kin/</h4>
        <div className="description">
          <p>Central mountain range of Sir’ena. Home to sparse villages. Currently dealing with widespread cases of Baskerot.</p>
          <h2>Atmospheric Imagry</h2>
          <img src={aerkyn2} alt="Aerkyn atmosphere" />
          <img src={aerkyn3} alt="Aerkyn atmosphere" />
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Mountains with dense forest
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Seasonal with lower temperatures
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Human, Drax and Valran
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/sirena/rgra'>R'gra</Link></li>
            <li><Link to='/sirena/annalay'>Annalay</Link></li>
            <li><Link to='/sirena/aerkyncliff'>Cliff Dwellings of Aerkyn</Link></li>
            <li><Link to='/skies'>Daervyn Skies</Link></li>
            </ul>
          </div>
          <div className="brief-item">
            <img src={note} alt="music" className="icon" />
            Musical Playlists
          </div>
        </div>
      </div>
    )
  }
}
