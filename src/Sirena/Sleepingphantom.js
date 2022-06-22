import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/sleepingphantom.jpeg'
import weather from '../Kvilna/images/weather.svg';
import note from '../Kvilna/images/music.png';
import terrain from '../Kvilna/images/terrain.png';
import path from '../Kvilna/images/path.png';
import person from '../Kvilna/images/person.png';
import vincent from './images/vincent.jpg';
import akirhen from './images/akirhen.png';

import sleeping from './images/sleepingphantom2 copy.jpg'

export default class Sleepingphantom extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Kalnu" />
        <h1>Sleeping Phantom</h1>
        <h4>/slee/ - /ping/ /fan/ - /t<i>u</i>hm/</h4>
        <div className="description">
          <p>This overgrown tavern looks like civilization and nature intertwined. Ethereal servers serve weary travelers sat at various tables. Creatures of myth and man relaxing together with an occasional wager. The scent of fresh vegetaion and spices fills the air. A bar rests on the middle of the room that looks more like a theater stage than a place to make drinks. Stairs lead to a second floor for those staying the night and rumors among the usual customers say that the arrangement of the tavern is in constant change and growth, so don't get too used to the layout for it may be completely different the next time you visit. A perfect match to her owner.</p>
          <h2>Notable NPCs</h2>
          <ul>
            <li><img src={vincent} alt="Vincent" /><h3>Vincent</h3>
            <p>Tavern owner and barkeep</p></li>
            <li><img src={akirhen} alt="Akirhen" /><h3>Akirhen</h3>
            <p>An illusionist and electromancy master all bundled into a young kitsune who enjoys games.</p></li>
          </ul>
          <h2>Atmospheric Imagry</h2>
          <img src={sleeping} alt="Tavern atmosphere" />
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Staffed by centaurs and driads and wisps
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/sirena/annalay'>Annalay</Link></li>
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
