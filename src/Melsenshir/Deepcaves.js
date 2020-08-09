import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/deepcaves.jpg';
import weather from '../Kvilna/images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import quartox from './images/quartox.png';
import dorni from './images/dorni.jpg';
import cadadra from './images/cadadra.jpg'

import caves2 from './images/deepcaves2.jpg'
import caves3 from './images/deepcaves3.jpg'

export default class Deepcaves extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Kalnu" />
        <h1>Deep Caves of Eldrith</h1>
        <h4>/deep/ /keyvs/ /of/ /el/-/drith/</h4>
        <div className="description">
          <h5>This is a quest only area. You may only come here with a QM or if you have been here previously on a quest</h5>
          {/* <p>needs a description</p> */}
          <h6>Notable NPCs</h6>
          <ul>
            <li>????</li>
          </ul>
          <img src={caves2} alt="Deep Caves atmosphere" />
          <img src={caves3} alt="Deep Caves atmosphere" />
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Deep dark caves
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Wet and cold
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            None?
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/melsenshir/eldrith'>Eldrith</Link></li>
            </ul>
          </div>
          <div className="brief-item">
            <img src={note} alt="music" className="icon" />
            Musical Playlists
            <ul>
            <li><iframe src="https://open.spotify.com/embed/playlist/48OZ4wmKCZhF1LibdZ9zlE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
            <li><iframe src="https://open.spotify.com/embed/playlist/6kzpY1fVnFkwMUKPZKtuQc" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
            <li><iframe src="https://open.spotify.com/embed/playlist/3I29jXuUnaRKYhAYpVUHAa" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
