import React, { Component } from 'react';
import '../Country.scss';
import { Link } from 'react-router-dom';

import pattern from '../Home/images/patternsolid.svg';

import hero from './images/kalnuheader.png';
import kalnu from './images/kalnu.png';
import weather from '../Kvilna/images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import quartox from './images/quartox.png';
import dorni from './images/dorni.jpg';
import cadadra from './images/cadadra.jpg'

export default class Kalnu extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="the shards" />
          <h1>The Shards</h1>
          <p className="subheader">The Elemental Gods of Daervyn</p>
          <img src={pattern} alt="pattern" className="melsensir-color pattern-image" />
        </div>

        <div className="container my">
          <div className="half-container shard-text">
            <p><span className="first-letter">T</span>his is the center of the Dwarven kingdom, home to the seven Dwarven clans. Currently, the Sishan clan is in charge with the Dorni ruling over the entire continent. There is unrest throughout the land as the Dorni is elderly and his health is declining. Most are curious of what will happen to the current leadership structure and who will be next in charge. The Dorni's Daughter is set to take her father's place, but is currently unable to do so.</p>
            <p>Here is where the greatest members of each area such as artists and metalsmiths live and perfect their crafts. It is the dream of every Dwarf to better themselves so they may one day live here.</p>
          </div>
          <div className="half-container">
            <img src={kalnu} alt="Kalnu" />
          </div>
        </div>

        <div className="country-races container">
          <h2>Races</h2>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="kalnu-segment-1" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="90 10" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">90%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Dwarves</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="kalnu-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="8 92" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">8%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Orcs</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="kalnu-segment-3" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="2 98" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">2%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Humans</tspan>   
                </text>
              </g>
            </svg>
          </div>
        </div>

        <div className="country-trivia grid-3">
          <div>
            <h4>Lanuages</h4>
            <p>Dwarvish and Common</p>
          </div>
          <div>
            <h4>Terrain</h4>
            <p>Mountainous region and always covered in snow.</p>
          </div>
          <div>
            <h4>Capital</h4>
            <p>The port city of Holmny</p>
          </div>
        </div>

        <img src={pattern} alt="pattern" className="melsensir-color pattern-image" />

        <div className="container">
          <h2>Notable NPCs</h2>
          <div className="grid-3 local-info">
            <div>
              <img src={dorni} alt="Dorni"/>
              <h4>Lythur Sishan</h4>
              <p className="npc-sub">King, or ‘Dorni’, of Melsenshir</p>
              <p>An elderly dwarf very blunt to new faces, fiercely loyal to allies.</p>
            </div>
            <div>
              <img src={cadadra} alt="Cadadra" />
              <h4>Cadadra Sishan</h4>
              <p className="npc-sub">Princess of Melsenshir</p>
              <p>Learning to one day take her father's place once she's either married or passed the trial of strength. </p>
            </div>
          </div>
        </div>


        <div className="country-container">
          <h1>Kalnu</h1>
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
      </div>
    )
  }
}
