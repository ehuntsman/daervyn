import React, { Component } from 'react';
import '../styles/country.scss';
import { Link } from 'react-router-dom';

import pattern from '../images/patternsolid.svg';
import snow from '../images/snow.svg';
import mooncloud from '../images/moon-cloud.svg';

import hero from '../images/eldrithheader.png';
import eldrith from '../images/eldrith.png';
import eldrithmap from '../images/eldrithmap.png';


export default class Eldrith extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="Eldrith" />
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
          <div className="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
              <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
              <circle className="ring-50" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray="50 50" strokeDashoffset="25"></circle>
              <g className="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" textAnchor="middle" className="donut-percent">50%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" textAnchor="middle" className="donut-data">Dwarves</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div className="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
              <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
              <circle className="ring-20" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray="20 80" strokeDashoffset="25"></circle>
              <g className="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" textAnchor="middle" className="donut-percent">20%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" textAnchor="middle" className="donut-data">Gnomes</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div className="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
              <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
              <circle className="ring-10" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray="10 90" strokeDashoffset="25"></circle>
              <g className="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" textAnchor="middle" className="donut-percent">10%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" textAnchor="middle" className="donut-data">Elves</tspan>   
                </text>
              </g>
            </svg>
          </div>
          <div className="race-chart">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
              <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
              <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
              <circle className="ring-10" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray="10 90" strokeDashoffset="25"></circle>
              <g className="donut-text">
                <text y="50%" transform="translate(0, 2)">
                  <tspan x="50%" textAnchor="middle" className="donut-percent">10%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 3)">
                  <tspan x="50%" textAnchor="middle" className="donut-data">Orcs</tspan>   
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
              <img src={eldrithmap} alt="Eldrith map" />
              <div>
                <h3>Contains passage to:</h3>
                <ul>
                  <li><Link to='/melsenshir/tergria'>
                    <h4>Tergria</h4>
                    <p>Tergria is just to the North of Eldrith.</p>
                  </Link></li>
                  <li><Link to='/melsenshir/geirank'>
                    <h4>Geirank</h4>
                    <p>Eldrith is North West of Geirank.</p>
                  </Link></li>
                  <li><Link to='/skies'>
                    <h4>Daervyn Skies</h4>
                    <p>There is a flight point in Geirank that has flying serpents available for public use.</p>
                  </Link></li>
                  <li><Link to='/melsenshir/deepcaves'>
                    <h4>Deep Caves of Eldrith</h4>
                    <p>In the mountains of Eldrith</p>  
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
