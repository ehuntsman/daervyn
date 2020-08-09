import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/eldrith.jpg';
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

export default class Eldrith extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Kalnu" />
        <h1>Eldrith</h1>
        <h4>/el/ - /drith/</h4>
        <div className="description">
          <p>On the continent of Mel Senshir, the Southern mountain region is also known as the land of lakes. The people here are known for their coral and pearl farms within the lakes. Covered in misty mountain tops lush with trails littered with prayer flags and totems. Eldrith is considered the smaller Kingdom, and doesn’t hold as much power as the Northern Kingdom Mel Senshir. They are constantly attacked, but have managed to keep their stronghold for thousands of years.</p>
          {/* <h6>Notable NPCs</h6>
          <ul>
            <li><img src={dorni} alt="Dorni"/>Lythur Sishan- King, or ‘Dorni’, of Eldrith. An elderly dwarf very blunt to new faces, fiercely loyal to allies</li>
            <li><img src={cadadra} alt="Cadadra" />Cadadra Sishan-Princess of Eldrith Learning to one day take her father's place once she's either married or passed the trial of strength.</li>
          </ul> */}
          <h6>Known animals in the area</h6>
          <ul>
            <li><img src={quartox} alt="Quartox" />Quadulas</li>
          </ul>
          {/* <img src={kalnu2} alt="Kalnu atmosphere" />
          <img src={kalnu3} alt="Kalnu atmosphere" /> */}
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            This mountainous region is dotted with lakes, many which are salt water getting their water directly from the ocean.
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Fair and usually sunny
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Dense population of Dwarves
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/melsenshir/tergria'>Tergria</Link></li>
            <li><Link to='/melsenshir/geirank'>Geirank</Link></li>
            <li><Link to='/melsenshir/kalnu'>Kalnu</Link></li>
            <li><Link to='/melsenshir/deepcaves'>Deep Caves of Eldrith</Link></li>
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
