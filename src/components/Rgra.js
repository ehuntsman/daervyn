import React, { Component } from 'react';
import '../styles/country.scss';
import { Link } from 'react-router-dom';

import hero from '../images/rgraheader.png';
import rgra from '../images/rgra.png';
import annalaymap from '../images/rgramap.png';
import pattern from '../images/patternsolid.svg';
import snow from '../images/snow.svg';
import mooncloud from '../images/moon-cloud.svg';

export default class Rgra extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="R'gra" />
          <h1>R'gra</h1>
          <p className="subheader">Even the dead are not allowed to rest</p>
          <img src={pattern} alt="pattern" className="sirena-color pattern-image" />
        </div>

        <div className="container my">
          <div className="half-container shard-text">
            <p><span className="first-letter">T</span>he desert in Sir’ena is called R’gra and is not often traveled as it is a sanctuary for spectres, ghosts and wraiths.</p>
          </div>
          <div className="half-container">
            <img src={rgra} alt="R'gra" />
          </div>
        </div>

        <div className="country-races container">
          <h2>Races</h2>
          <div className="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
              <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
              <circle className="ring-99" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray="99 1" strokeDashoffset="25"></circle>
              <g className="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" textAnchor="middle" className="donut-percent">99%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" textAnchor="middle" className="donut-data">Undead</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div className="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
              <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
              <circle className="ring-1" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray="1 99" strokeDashoffset="25"></circle>
              <g className="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" textAnchor="middle" className="donut-percent">1%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" textAnchor="middle" className="donut-data">Necromancers</tspan>   
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
            <p>Desert</p>
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
              <img src={annalaymap} alt="Annalay map" />
              <div>
                <h3>Contains passage to:</h3>
                <ul>
                  <li><Link to='/sirena/annalay'>
                    <h4>Annalay</h4>
                    <p>Annalay is the town and country outside the tavern.</p>
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
