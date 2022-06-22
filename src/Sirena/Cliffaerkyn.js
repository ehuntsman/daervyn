import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/cliifaerkyn.jpg'
import weather from '../Kvilna/images/weather.svg';
import note from '../Kvilna/images/music.png';
import terrain from '../Kvilna/images/terrain.png';
import path from '../Kvilna/images/path.png';
import person from '../Kvilna/images/person.png';


export default class Cliffaerkyn extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Aerkyn" />
        <h1>Cliff Dwellings of Aerkyn</h1>
        <h4>/clif/ /dwel/ - /ings/ /of/ /air/ - /kin/</h4>
        <div className="description">
          <p>Makeshift structures cling to the side of the mountanous walls. Home to research facilities who study the spectres of R'gra desert.</p>
          {/* <h2>Notable NPCs</h2>
          <ul>
            <li>Gosinda - incredibly perky dwarf</li>
          </ul>
          <h6>Known animals in the area</h6>
          <ul>
            <li><img src={quartox} alt="Quartox" />Quadulas</li>
          </ul> */}
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Cliffs sides out mountains
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Seasonal weather with lower temperatures
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Human, Drax and Valran
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/sirena/aerkyn'>Aerkyn</Link></li>
            <li><Link to='/sirena/rgra'>R'gra</Link></li>
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
