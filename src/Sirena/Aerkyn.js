import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/aerkynheader.png'
import aerkyn from './images/aerkyn.png';
import aerkynmap from './images/aerkynmap.png';
import pattern from '../Home/images/patternsolid.svg';
import snow from './images/snow.svg';
import mooncloud from './images/moon-cloud.svg';

export default class Aerkyn extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="Aerkyn" />
          <h1>Aerkyn</h1>
          <p className="subheader">Do you like mountains and trees?</p>
          <img src={pattern} alt="pattern" className="sirena-color pattern-image" />
        </div>

        <div className="container my">
          <div className="half-container shard-text">
            <p><span className="first-letter">C</span>entral mountain range of Sir’ena. Home to sparse villages. Currently dealing with widespread cases of Baskerot.</p>
          </div>
          <div className="half-container">
            <img src={aerkyn} alt="Aerkyn" />
          </div>
        </div>

        <div className="country-races container">
          <h2>Races</h2>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="ring-40" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="40 60" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">40%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Human</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="ring-30" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="30 70" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">30%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Elven</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="ring-10" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="10 90" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">10%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Gnome</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="ring-10" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="10 90" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">10%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Orc</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="ring-10" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="10 90" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">10%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Other</tspan>   
                </text>
              </g>
            </svg>
          </div>
        </div>

        <div className="country-trivia grid-3">
          <div>
            <h4>Lanuages</h4>
            <p>Common</p>
          </div>
          <div>
            <h4>Terrain</h4>
            <p>Mountains with dense forest</p>
          </div>
          <div>
            <h4>Capital</h4>
            <p>The port city of Holmny</p>
          </div>
        </div>

        <img src={pattern} alt="pattern" className="sirena-color pattern-image" />

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
              <img src={aerkynmap} alt="Aerkyn map" />
              <div>
                <h3>Contains passage to:</h3>
                <ul>
                  <li><Link to='/sirena/rgra'>
                    <h4>R'gra</h4>
                    <p>The desert to the South of Aerkyn</p>
                  </Link></li>
                  <li><Link to='/sirena/aerkyncliff'>
                    <h4>Cliff Dwellings of Aerkyn</h4>
                    <p>Town against the cliffsides of Aerkyn.</p>
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
