import React, { Component } from 'react';
import './country.css';
import { Link } from 'react-router-dom';

import hero from './images/thinning.jpg';
import weather from './images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import grimole from './images/grimole.png';

export default class Thinningveil extends Component {
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Oirae" />
        <h1>Thinning Veil</h1>
        <h4>/thin/ - /ing/ /veyl/</h4>
        <div className="description">
          <h5>This is a quest only area. You may only come here with a QM or if you have been here previously on a quest</h5>
          <p>A dark and foggy forest where time used to be thin.</p>
          <h6>Known animals in the area</h6>
          <ul>
            <li><img src={grimole} alt="Grimole" />Grimoles</li>
          </ul>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Dense forest with thick fog
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Weather is cold and foggy
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            No population
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/kvilna/oirae'>Oirae</Link></li>
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
