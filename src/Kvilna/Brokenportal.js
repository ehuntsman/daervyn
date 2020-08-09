import React, { Component } from 'react';
import './country.css';
import { Link } from 'react-router-dom';

import hero from './images/broken.jpg';
import weather from './images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';

export default class Brokenportal extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Broken Portal" />
        <h1>Broken Portal</h1>
        <h4>/broh/ - /khen/ /pohr/ - /til/</h4>
        <div className="description">
          <h5>This is a quest only area. You may only come here with a QM or if you have been here previously on a quest</h5>
          <p>Once a functioning portal to a lost plane, this portal stands waiting to be reused once more.</p>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Rocky coastline
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Seasonal
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/kvilna/reijah'>Reijah Harbor</Link></li>
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
