import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/skaromap.jpg';
import weather from '../Kvilna/images/weather.svg';
import note from '../Kvilna/images/music.png';
import terrain from '../Kvilna/images/terrain.png';
import path from '../Kvilna/images/path.png';

import person from '../Kvilna/images/person.png';


export default class Skaro extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Skaro" />
        <h1>Skaro</h1>
        <h4>/scar/ - /ro/</h4>
        <div className="description">
          <p>Skaro is located in the Southern Daervyn Ocean.</p>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Desert Island with mostly sand and very few oasis
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Hot and Dry
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
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
