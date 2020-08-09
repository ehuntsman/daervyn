import React, { Component } from 'react';
import './country.css';
import { Link } from 'react-router-dom';

import hero from './images/southern.jpg';
import weather from './images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import reijah2 from './images/southern2.jpg';
import reijah3 from './images/southern3.jpg';
import quads from './images/quad.png';
import sid from './images/sid.jpg';

export default class Reijah extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        <img src={hero} alt="Reijah" />
        <h1>Reijah Harbor</h1>
        <h4>/ray/ - /ja/ /har/ - /bohr/</h4>
        <div className="description">
          <p>The Northern Harbor, also called Reijah, lays in the North West part of Oirae. It's the smaller harbor that has little amounts of agricultural trade. Mostly it deals in slaves, stolen goods and other Black Market objects, which pass through without much notice. They are openly allies with Bjorvax, but several deals take place under the table away from the Vanguard’s eyes.</p>
          <p>Harbormaster Sideon Kil'Sorrow takes a large percentage of all deals within harbor limits, and is open to more…creative merchandise. This is also the main hideout for the Red Glass.</p>
          <p>The Reijah doesn't look much at first glance. It would easily be confused for an abandoned area if it weren't for all the people. A few dirty ports and seaweed encrusted piers venture off in sporadic directions. There's a broken half of a ship attacked to the main port, where the Harbormaster keeps his office and overlooks all incoming ships. Masts tower all over with crows nests for the guards to keep an eye on everything below. </p>
          <p>There is a small tavern here, as well as the Harbormasters office. Other points of interested are the Red Glass hideout and a broken Portal to a lost plane.</p>
          <h6>Notable NPCs</h6>
          <ul>
            <li><img src={sid} alt="Sid" />Sid Kil’Sorrow - Harbor Master</li>
          </ul>
          <h6>Known animals in the area</h6>
          <ul>
            <li><img src={quads} alt="Quadulas" />Quadulas</li>
          </ul>
          <div className="brief-item">
            <img src={reijah2} alt="Reijah atmosphere" />
          </div>
          <div className="brief-item">
            <img src={reijah3} alt="Reijah atmosphere" />
          </div>
        </div>
        <div className="brief">
          <div className="brief-item">
            <img src={terrain} alt="terrain" className="icon" />
            Rocky coastline
          </div>
          <div className="brief-item">
            <img src={weather} alt="weather" className="icon" />
            Seasonal
          </div>
          <div className="brief-item">
            <img src={person} alt="NPCs" className="icon" />
            Mostly human
          </div>
          <div className="brief-item">
            <img src={path} alt="passage" className="icon" />
              Contains Passage to:
            <ul>
            <li><Link to='/kvilna/oirae'>Oiráe</Link></li>
            <li><Link to='/kvilna/brokenportal'>Broken Portal</Link></li>
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
