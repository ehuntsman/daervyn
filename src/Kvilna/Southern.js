import React, { Component } from 'react';
import './country.css';
import { Link } from 'react-router-dom';

import hero from './images/reijah.jpg';
import weather from './images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import southern2 from './images/reijah2.jpg';
import southern3 from './images/reijah3.jpg';

export default class Southern extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Southern Harbor" />
        <h1>Southern Harbor</h1>
        <h4>/suhth/ - /ern/ /har/ - /bohr/</h4>
        <div className="description">
          <p>The largest and more prominent harbor, The Southern Harbor is busy 22 hours out of any given day. While it's mostly used for agricultural and travel related comings and goings, it also has the reputation of being very well connected to the Hallowed Vanguard.</p>
          {/* <h6>Notable NPCs</h6>
          <ul>
            <li>Harbor Master</li>
          </ul> */}
          <h6>Known animals in the area</h6>
          <div className="brief-item">
            <img src={southern2} alt="Southern Harbor atmosphere" />
          </div>
          <div className="brief-item">
            <img src={southern3} alt="Southern Harbor atmosphere" />
          </div>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Cobblestone streets, well structures builings and a well-kept harbor
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Seasonal
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Mostly human
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/kvilna/oirae'>Oiráe</Link></li>
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