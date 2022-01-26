import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/kalnu.jpg';
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

export default class Kalnu extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Kalnu" />
        <h1>Kalnu</h1>
        <h4>/cal/ - /new/</h4>
        <div className="description">
          <p>This is the center of the Dwarven kingdom, home to the seven Dwarven clans. Currently, the Sishan clan is in charge with the Dorni ruling over the entire continent. There is unrest throughout the land as the Dorni is elderly and his health is declining. Most are curious of what will happen to the current leadership structure and who will be next in charge. The Dorni's Daughter is set to take her father's place, but is currently unable to do so.</p>
          <p>Here is where the greatest members of each area such as artists and metalsmiths live and perfect their crafts. It is the dream of every Dwarf to better themselves so they may one day live here.</p>
          <h2>Notable NPCs</h2>
          <ul>
            <li><img src={dorni} alt="Dorni"/>
              <h3>Lythur Sishan- King, or ‘Dorni’, of Melsenshir.</h3>
              <p>An elderly dwarf very blunt to new faces, fiercely loyal to allies. </p>
            </li>
            <li><img src={cadadra} alt="Cadadra" />
              <h3>Cadadra Sishan-Princess of Melsenshir</h3>
              <p>Learning to one day take her father's place once she's either married or passed the trial of strength.</p>
            </li>
          </ul>
          <h2>Known animals in the area</h2>
          <ul>
            <li><img src={quartox} alt="Quartox" />Quadulas</li>
          </ul>
          <h2>Atmospheric imagry</h2>
          <img src={kalnu2} alt="Kalnu atmosphere" />
          <img src={kalnu3} alt="Kalnu atmosphere" />
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
            <li><Link to='/melsenshir/tergria'>Tergria</Link></li>
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
