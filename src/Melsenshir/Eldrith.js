import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import pattern from '../Home/images/patternsolid.svg';
import snow from './images/snow.svg';
import mooncloud from './images/moon-cloud.svg';

import hero from './images/eldrithheader.png';
import eldrith from './images/eldrith.png';
import weather from '../Kvilna/images/weather.svg';
import note from './images/music.png';
import terrain from './images/terrain.png';
import path from './images/path.png';
import person from './images/person.png';
import quartox from './images/quartox.png';
import kalnumap from './images/kalnumap.png';

import kalnu2 from './images/kalnu2.png';
import kalnu3 from './images/kalnu3.jpg';

export default class Eldrith extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="the shards" />
          <h1>Eldrith</h1>
          <p className="subheader">Coral and Pearl Haven</p>
          <img src={pattern} alt="pattern" className="melsensir-color pattern-image" />
        </div>

        <div className="container my">
          <div className="half-container shard-text">
            <p><span className="first-letter">O</span>n the continent of Mel Senshir, the Southern mountain region is also known as the land of lakes. The people here are known for their coral and pearl farms within the lakes. Covered in misty mountain tops lush with trails littered with prayer flags and totems. Eldrith is considered the smaller Kingdom, and doesn’t hold as much power as the Northern Kingdom Mel Senshir. They are constantly attacked, but have managed to keep their stronghold for thousands of years.</p>
            <p>Here is where those who wish to begin their journey a craftsman learn the basics of their trade. Dwarves and those of other races may prove themselves worthy to receive proper training by competing against other potential crafters in games set throughout the year.</p>
          </div>
          <div className="half-container">
            <img src={eldrith} alt="Eldrith" />
          </div>
        </div>

        <div className="country-races container">
          <h2>Races</h2>
          <div class="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
              <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle class="ring-50" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="50 50" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">50%</tspan>   
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
              <circle class="ring-20" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="20 80" stroke-dashoffset="25"></circle>
              <g class="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" text-anchor="middle" class="donut-percent">20%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" text-anchor="middle" class="donut-data">Gnomes</tspan>   
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
                  <tspan x="50%" text-anchor="middle" class="donut-data">Elves</tspan>   
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
                  <tspan x="50%" text-anchor="middle" class="donut-data">Orcs</tspan>   
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
            <p>Mountainous region with valleys of large lakes.</p>
          </div>
          <div>
            <h4>Known For</h4>
            <p>Skilled craftsmen, Pearls and Coral</p>
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
                  <li><Link to='/melsenshir/tergria'>
                    <h4>Tergria</h4>
                    <p>Tergria is just to the South of Kalnu.</p>
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
