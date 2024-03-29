import React, { Component } from 'react';
import '../styles/country.scss';
import { Link } from 'react-router-dom';

import hero from '../images/deepcavesheader.png';
import deepcaves from '../images/deepcaves.png';
import eldrithmap from '../images/eldrithmap.png';
import pattern from '../images/patternsolid.svg';
import snow from '../images/snow.svg';
import mooncloud from '../images/moon-cloud.svg';

export default class Deepcaves extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="the shards" />
          <h1>Deep Caves of Eldrith</h1>
          <p className="subheader">There be bones here</p>
          <img src={pattern} alt="pattern" className="melsensir-color pattern-image" />
        </div>

        <div className="container my">
          <div className="half-container shard-text">
            <p><span className="first-letter">T</span>his is a quest only area. You may only come here with a QM or if you have been here previously on a quest</p>
          </div>
          <div className="half-container">
            <img src={deepcaves} alt="Deep Caves" />
          </div>
        </div>

        <div className="country-races container">
          <h2>Races</h2>
          <div className="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
              <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
              <circle className="ring-100" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray="100 100" strokeDashoffset="25"></circle>
              <g className="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" textAnchor="middle" className="donut-percent">100%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" textAnchor="middle" className="donut-data">???</tspan>   
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
            <p>Dark caves in dwarven ruins</p>
          </div>
          <div>
            <h4>Known For</h4>
            <p>The best dragon ever</p>
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
              <img src={eldrithmap} alt="Eldrith map" />
              <div>
                <h3>Contains passage to:</h3>
                <ul>
                  <li><Link to='/melsenshir/eldrith'>
                    <h4>Eldrith</h4>
                    <p>Eldrith is much further South.</p>  
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
