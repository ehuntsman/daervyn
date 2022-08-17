import React, { Component } from 'react';
import '../Country.scss';
import { Link } from 'react-router-dom';

import pattern from '../Home/images/patternsolid.svg';
import snow from './images/snow.svg';
import mooncloud from './images/moon-cloud.svg';

import hero from './images/tergriaheader.png';
import tergria from './images/tergria.png';
import path from './images/path.png';
import dorni from './images/dorni.jpg';
import cadadra from './images/cadadra.jpg'
import kalnumap from './images/kalnumap.png';

export default class Tergria extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="the shards" />
          <h1>Tergria</h1>
          <p className="subheader">Home of Dwarven craftsman</p>
          <img src={pattern} alt="pattern" className="melsensir-color pattern-image" />
        </div>

        <div className="container my">
          <div className="half-container shard-text">
            <p><span className="first-letter">T</span>ergria is just south of Kalnu and is home to many smaller houses of the Dwarves. These are still higher up on the wealth chain as the mines of Tergria hold a great many metals and gems.</p>
            <p>Here Dwarves and craftsmen of other races who have proven themselves come to learn from the masters from Kalnu to better their craft. During specific times of the year, Dwarves who feel they are ready may challenge the current highest ranking Dwarf in their respective field.</p>
          </div>
          <div className="half-container">
            <img src={tergria} alt="Tergria" />
          </div>
        </div>

        <div className="country-races container">
          <h2>Races</h2>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="ring-85" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="85 15" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">85%</tspan>   
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
              <circle class="ring-8" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="8 92" stroke-dashoffset="25"></circle>
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
              <circle class="ring-5" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="5 95" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">5%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Elves</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="ring-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="2 98" stroke-dashoffset="25"></circle>
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
          <h2>Weather</h2>
          <div className="weather-box">
            <h3>Winter Weather</h3>
            <div>
              <img src={snow} alt="snow" />
              <h2>34-40 °F</h2>
            </div>
            <p>Very cold with occasional white out blizzards</p>
          </div>
          <div className="weather-box">
            <h3>Summer Weather</h3>
            <div>
              <img src={mooncloud} alt="snow" />
              <h2>68-82 °F</h2>
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
                  <li><Link to='/melsenshir/kalnu'>
                    <h4>Kalnu</h4>
                    <p>Kalnu is just to the South of Tergria.</p>
                  </Link></li>
                  <li><Link to='/melsenshir/eldrith'>
                    <h4>Eldrith</h4>
                    <p>Eldrith is to the South.</p>  
                  </Link></li>
                  <li><Link to='/skies'>
                    <h4>Daervyn Skies</h4>
                    <p>There is a flight point in Tergria that has flying serpents available for public use.</p>
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
