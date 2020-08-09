import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/skies.jpg';
import weather from '../Kvilna/images/weather.svg';
import note from '../Kvilna/images/music.png';
import terrain from '../Kvilna/images/terrain.png';
import path from '../Kvilna/images/path.png';
import person from '../Kvilna/images/person.png';
import hringir2 from './images/hringir2.jpg';

export default class Portal extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Hringir" />
        <h1>Daervyn Skies</h1>
        <h4>/dhair/ - /vihn/ /skahyz/</h4>
        <div className="description">
          <p>The skies that hang over Daervyn, where sky serpants soar taking passangers from location to location.</p>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/'>All of Daervyn</Link></li>
            </ul>
          </div>
          <div className="brief-item">
            <img src={note} alt="music" className="icon" />
            Musical Playlist
          </div>
        </div>
      </div>
    )
  }
}
