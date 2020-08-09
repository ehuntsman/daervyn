import React, { Component } from 'react';
import './country.css';
import { Link } from 'react-router-dom';

import hero from './images/portal.jpg';
import weather from './images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import reijah2 from './images/reijah2.jpg';
import reijah3 from './images/reijah3.jpg';
import quads from './images/quad.png';

export default class Portal extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Selnata Portal" />
        <h1>Selnata Portal</h1>
        <h4>/sell/ - /nah/ - /tah/ /pohr/ - /til/</h4>
        <div className="description">
          <p>Well traveled and well-known portal ot Selnata</p>
          <h6>Known animals in the area</h6>
          <ul>
            <li><img src={quads} alt="Quadulas" />Quadulas</li>
          </ul>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Flatlands backed to a mountain next to the city
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Seasonal
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/kvilna/bjorvax'>Bjorvax</Link></li>
            <li><Link to='/skies'>Daervyn Skies</Link></li>
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
