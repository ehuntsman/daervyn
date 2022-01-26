import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/tergria.png'
import weather from '../Kvilna/images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import quartox from './images/quartox.png';
import dorni from './images/dorni.jpg';
import cadadra from './images/cadadra.jpg'

import kalnu2 from './images/kalnu2.png';
import kalnu3 from './images/kalnu3.jpg';

export default class Tergria extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Kalnu" />
        <h1>Tergria</h1>
        <h4>/teer/ - /gree/ - /a/</h4>
        <div className="description">
          <p>Tergria is just south of Kalnu and is home to many smaller houses of the Dwarves. These are still higher up on the wealth chain as the mines of Tergria hold a great many metals and gems.</p>
          <p>Here Dwarves and craftsmen of other races who have proven themselves come to learn from the masters from Kalnu to better their craft. During specific times of the year, Dwarves who feel they are ready may challenge the current highest ranking Dwarf in their respective field.</p>
          <h2>Known animals in the area</h2>
          <ul>
            <li><img src={quartox} alt="Quartox" />Quadulas</li>
          </ul>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            This mountainous region is always covered in snow and home to a clan of dwarves who carve their home into the mountain.
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Cold with occasion blizzards in winter months
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Dense population of Dwarves
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/melsenshir/kalnu'>Kalnu</Link></li>
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
