import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/annalay1.jpg'
import weather from '../Kvilna/images/weather.svg';
import note from '../Kvilna/images/music.png';
import terrain from '../Kvilna/images/terrain.png';
import path from '../Kvilna/images/path.png';
import person from '../Kvilna/images/person.png';

import annalay2 from './images/annalay2.jpg';
import annalay3 from './images/annalay3.jpg';

export default class Annalay extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Kalnu" />
        <h1>Annalay</h1>
        <h4>/an/ - /nuh/ - /ley/</h4>
        <div className="description">
          <p>Several tall off-white columns rose up above the area, with decorations of blue against the white stucco buildings. Pink and peach coral walls and arches line most of the area, with several crushed shells in the streets. People walking throughout this central plaza on their way to various occupations. Guards clad in full plate walk on patrol and speak with the various merchants whose stores dot the buildings in the ground floor.</p>
          <h2>Atmospheric Imagry</h2>
          <img src={annalay2} alt="Annalay atmosphere" />
          <img src={annalay3} alt="Annalay atmosphere" />
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Ranging from vasts grasslands, dense forests to black sandy beaches
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Seasonal weather
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Dense population with mostly human and tribal orcs
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/sirena/sleepingphantom'>The Sleeping Phantom</Link></li>
            <li><Link to='/sirena/rgra'>R'gra</Link></li>
            <li><Link to='/sirena/aerkyn'>Aerkyn</Link></li>
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
