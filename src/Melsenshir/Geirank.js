import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/geirank.jpg';
import weather from '../Kvilna/images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import quartox from './images/quartox.png';

import geirank2 from './images/geirank2.jpg';
import geirank3 from './images/geirank3.jpg';

export default class Geirank extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Kalnu" />
        <h1>Geirank</h1>
        <h4>/gair/ - /rangk/</h4>
        <div className="description">
          <p>Grasslands Country in Mel Senshir that holds the largest Harbor on Mel Senshir in the city of Stuth. Home to the crafters and artisans of the dwarves. Any who have a desire to join the trades make pilgrimage here to learn from the many masters. Extravagance is simply a byproduct of their passion, though there are some with aspirations to be the best in their field </p>
          <h6>Known animals in the area</h6>
          <ul>
            <li><img src={quartox} alt="Quartox" />Quadulas</li>
          </ul>
          <img src={geirank2} alt="Kalnu atmosphere" />
          <img src={geirank3} alt="Kalnu atmosphere" />
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Lush region covered in soft fertile soil perfect for farming
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Moderate temperature with high chance for rain
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Dense population of Dwarves
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/melsenshir/eldrith'>Eldrith</Link></li>
            <li><Link to='/skies'>Daervyn Skies</Link></li>
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
