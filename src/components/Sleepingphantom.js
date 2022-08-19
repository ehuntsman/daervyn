import React, { Component } from 'react';
import '../styles/country.scss';
import { Link } from 'react-router-dom';

import pattern from '../images/patternsolid.svg';
import snow from '../images/snow.svg';
import mooncloud from '../images/moon-cloud.svg';

import hero from '../images/sleepingphantomheader.png';
import sleepingphantom from '../images/sleepingphantom.png';
import annalaymap from '../images/rgramap.png';
import vincent from '../images/vincent.jpg';
import akirhen from '../images/akirhen.png';


export default class Sleepingphantom extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="Sleeping Phantom" />
          <h1>Sleeping Phantom</h1>
          <p className="subheader">The portal tavern of Daervyn</p>
          <img src={pattern} alt="pattern" className="sirena-color pattern-image" />
        </div>

        <div className="container my">
          <div className="half-container shard-text">
            <p><span className="first-letter">T</span>his overgrown tavern looks like civilization and nature intertwined. Ethereal servers serve weary travelers sat at various tables. Creatures of myth and man relaxing together with an occasional wager. The scent of fresh vegetaion and spices fills the air. A bar rests on the middle of the room that looks more like a theater stage than a place to make drinks. Stairs lead to a second floor for those staying the night and rumors among the usual customers say that the arrangement of the tavern is in constant change and growth, so don't get too used to the layout for it may be completely different the next time you visit. A perfect match to her owner..</p>
          </div>
          <div className="half-container">
            <img src={sleepingphantom} alt="Sleeping Phantom" />
          </div>
        </div>

        <div className="country-races container">
          <h2>Races</h2>
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
                  <tspan x="50%" textAnchor="middle" className="donut-data">Vincent</tspan>   
                </text>
              </g>
            </svg>
          </div>
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
                  <tspan x="50%" textAnchor="middle" className="donut-data">Everything Else</tspan>   
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

        <img src={pattern} alt="pattern" className="sirena-color pattern-image" />

        <div className="container">
          <h2>Notable NPCs</h2>
          <div className="grid-3 local-info">
            <div>
              <img src={vincent} alt="Vincent"/>
              <h4>Vincent</h4>
              <p className="npc-sub">Tavern owner and barkeep</p>
              <p>Watch his eyes carefully.</p>
            </div>
            <div>
              <img src={akirhen} alt="Akirhen" />
              <h4>Akirhen</h4>
              <p className="npc-sub">The little kitsune</p>
              <p>An illusionist and electromancy master all bundled into a young kitsune who enjoys games. </p>
            </div>
          </div>
        </div>

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
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
