import React, { Component } from 'react';
import './country.css';
import { Link } from 'react-router-dom';

import hero from './images/oirae.jpg';
import weather from './images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import oirae2 from './images/oirae2.jpg';
import oirae3 from './images/oirae3.jpg';
import grimole from './images/grimole.png';
import quads from './images/quad.png';
import fae from './images/fae.png'

export default class Oirae extends Component {
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Oirae" />
        <h1>Oiráe</h1>
        <h4>/oi/ - /ray/</h4>
        <div className="description">
          <p>This is the least edgy of the countries on this continent. When Ofurian refugees came through the portal and they are safe here and travel as normal citizens. The government system is an Ofurian monarchy stabilized with the military of the Hallowed Vangaurd and has been around with them for 300 years though the Ofurian kingdom is 900. The culture is very pro-Vangaurd and has festivals to celebrate the seasons. The country is a melting pot where Ofurian roam as free citizens. Oftentimes Ofurian will serve a short term in the vanguard Ian military. The base is in the center of the territory. In the north most islands the secret selfie slave trade is running but not as strong as in the other country. Stabilized by the Hallowed Vanguard and mostly overrun by Ofurian refuges.</p>
          <h6>Notable NPCs</h6>
          <ul>
            <li>Halaa - Greatmother of the plains. The Eldest Centaur</li>
          </ul>
          <h6>Known animals in the area</h6>
          <ul>
            <li><img src={grimole} alt="Grimole" />Grimoles</li>
            <li><img src={quads} alt="Quadulas" />Quadulas</li>
            <li><img src={fae} alt="Fae Dragons" />Fae Dragons</li>
          </ul>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Mostly grasslands with rolling hills gets rocky towards the mountain bases
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Weather is generally sunny and warm.
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Sparse Population of mostly Centaurs and Humans
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/kvilna/thinningveil'>Thinning Veil</Link></li>
            <li><Link to='/'>Bjorvax</Link></li>
            <li><Link to='/'>Reijah Harbor</Link></li>
            <li><Link to='/'>Southern Harbor</Link></li>
            <li><Link to='/'>Daervyn Skies</Link></li>
            </ul>
          </div>
          <div className="brief-item">
            <img src={note} alt="music" className="icon" />
            Musical Playlist
          </div>
          <div className="brief-item">
            <img src={oirae2} alt="Oirae atmosphere" />
          </div>
          <div className="brief-item">
            <img src={oirae3} alt="Oirae atmosphere" />
          </div>
        </div>
      </div>
    )
  }
}
