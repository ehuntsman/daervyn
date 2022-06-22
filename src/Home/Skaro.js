import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/skaromap.jpg';
import weather from '../Kvilna/images/weather.svg';
import note from '../Kvilna/images/music.png';
import terrain from '../Kvilna/images/terrain.png';
import path from '../Kvilna/images/path.png';
import pharoah from './images/pharoah.jpg';
import queen from './images/queen.jpg'

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
          <p>Skaro is located in the Southern Daervyn Ocean that has recently appeared in Daervyn after the destruction of another plane. Currently ruled by the Pharoah, a being released by the syndicate after a raid into an unknown tomb. the citizens of skaro worship and revere the pharoah. Many associations work out of Skaro, each specialized in their own area and are willing to provide beneifts to any who have earned their respect.</p>
          <h2>Notable NPCs</h2>
          <ul>
            <li><img src={pharoah} alt="Pharoah"/>
              <h3>The Pharoah</h3>
              <p>Regarded as a kind and caring ruler to those under his charge, the pharoah comes off as well mannered and tactful unless his people are threatened in any way. </p>
            </li>
            <li><img src={queen} alt="Queen" />
              <h3>The Queen</h3>
              <p>The mad queen long since believed to be sealed away by the Pharoah when she was committing horrible autrosities. She has recently been released and claims to have repented and wants the best for her people, even if that means putting her own husband in the same seal she was once in.</p>
            </li>
          </ul>
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
              <li>
                <Link to='/skies'>Daervyn Skies</Link>  
              </li>
            </ul>
          </div>
          {/* <div className="brief-item">
            <img src={note} alt="music" className="icon" />
            Musical Playlist
          </div> */}
        </div>
      </div>
    )
  }
}
