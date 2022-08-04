import React, { Component } from 'react';
import '../Country.scss';
import { Link } from 'react-router-dom';

import pattern from '../Home/images/patternsolid.svg';
import snow from './images/snow.svg';
import mooncloud from './images/moon-cloud.svg';

import hero from './images/kalnuheader.png';
import kalnu from './images/kalnu.png';
import dorni from './images/dorni.jpg';
import cadadra from './images/cadadra.jpg'
import kalnumap from './images/kalnumap.png';

export default class Kalnu extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="the shards" />
          <h1>Kalnu</h1>
          <p className="subheader">Home of the Dorni</p>
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

        <div className="container">
          <h2>Weather</h2>
          <div className="weather-box">
            <h3>Winter Weather</h3>
            <div>
              <img src={snow} alt="snow" />
              <h2>34-37 °F</h2>
            </div>
            <p>Very cold with occasional white out blizzards</p>
          </div>
          <div className="weather-box">
            <h3>Summer Weather</h3>
            <div>
              <img src={mooncloud} alt="snow" />
              <h2>68-73 °F</h2>
            </div>
            <p>Mild days with Cloudy Nights</p>
          </div>
        </div>

        <div className="container">
          <div className="passage-box">
            <div className="passage">
              <img src={kalnumap} alt="Kalnu map" />
              <div>
                <h3>Contains passage to:</h3>
                <ul>
                  <li><Link to='/melsenshir/tergria'>
                    <h4>Tergria</h4>
                    <p>Tergria is just to the South of Kalnu.</p>
                  </Link></li>
                  <li><Link to='/melsenshir/eldrith'>
                    <h4>Eldrith</h4>
                    <p>Eldrith is much further South.</p>  
                  </Link></li>
                  <li><Link to='/skies'>
                    <h4>Daervyn Skies</h4>
                    <p>There is a flight point in Kalnu that has flying serpents available for public use.</p>
                  </Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
