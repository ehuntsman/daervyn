import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/rgra.jpg';
import weather from '../Kvilna/images/weather.svg';
import note from '../Kvilna/images/music.png';
import terrain from '../Kvilna/images/terrain.png';
import path from '../Kvilna/images/path.png';
import person from '../Kvilna/images/person.png';

import rgra from './images/rgra.jpg'

export default class Rgra extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Kalnu" />
        <h1>R'gra</h1>
        <h4>/ra/ - /gra/</h4>
        <div className="description">
          <p>The desert in Sir’ena is called R’gra and is not often traveled as it is a sanctuary for spectres, ghosts and wraiths.</p>
          {/* <h6>Notable NPCs</h6>
          <ul>
            <li>Gosinda - incredibly perky dwarf</li>
          </ul>
          <h6>Known animals in the area</h6>
          <ul>
            <li><img src={quartox} alt="Quartox" />Quadulas</li>
          </ul> */}
          {/* <img src={rgra} alt="Tavern atmosphere" /> */}
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Sandy and rocky
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Incredibly hot and dry with possible sandstorms. Cold at night.
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Undead population
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/sirena/annalay'>Annalay</Link></li>
            <li><Link to='/sirena/aerkyn'>Aerkyn</Link></li>
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
