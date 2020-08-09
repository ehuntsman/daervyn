import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/hringir.jpg';
import weather from '../Kvilna/images/weather.svg';
import note from '../Kvilna/images/music.png';
import terrain from '../Kvilna/images/terrain.png';
import path from '../Kvilna/images/path.png';
import person from '../Kvilna/images/person.png';
import hringir2 from './hringir2.png';
import hringir3 from './hringir3.jpg';
import hringir4 from './images/hringir2.jpg';
;
export default class Portal extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Hringir" />
        <h1>Hringir</h1>
        <h4>/rhing/ - /gehr/</h4>
        <div className="description">
          <p>On this small island, hundreds of thousands of shines to various gods could be seen spread throughout. Prayer flags were strung across every pathway. Candles and statues were scattered in almost every available space. Various religious buildings are seen all across the small island, as well as what looked like a rather large stone building.</p>
          <p>The Ofurian portal is also found here, if you know how to find it</p>
          <div className="brief-item">
            <img src={hringir2} alt="Hringir atmosphere" />
          </div>
          Temple of Azra
          <p></p>
          <div className="brief-item">
            <img src={hringir4} alt="Hringir atmosphere" />
          </div>
          <div className="brief-item">
            <img src={hringir3} alt="Hringir atmosphere" />
          </div>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Mountain trails with unstable volcanoes and various forests and beaches
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Seasonal
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            All races and religions
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
