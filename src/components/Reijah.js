import React, { useEffect } from 'react'
import '../styles/country.scss';
import { Link } from 'react-router-dom';

import hero from '../images/reijahheader.png';
import reijah from '../images/reijah.png';
import pattern from '../images/patternsolid.svg';
import snow from '../images/snow.svg';
import mooncloud from '../images/moon-cloud.svg';
import oiraemap from '../images/oiraemap.png';

export default function Reijah() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="countries">
      <div className="container">
        <img src={hero} alt="Reijah Harbor" />
        <h1>Reijah Harbor</h1>
        <p className="subheader">All coin is good here, even if there's a little blood on it</p>
        <img src={pattern} alt="pattern" className="kvilna-color pattern-image" />
      </div>

      <div className="container my">
        <div className="half-container shard-text">
          <p><span className="first-letter">T</span>he Northern Harbor, also called Reijah, lays in the North West part of Oirae. It's the smaller harbor that has little amounts of agricultural trade. Mostly it deals in slaves, stolen goods and other Black Market objects, which pass through without much notice. They are openly allies with Bjorvax, but several deals take place under the table away from the Vanguard’s eyes.</p>
          <p>Harbormaster Sideon Kil'Sorrow takes a large percentage of all deals within harbor limits, and is open to more…creative merchandise. This is also the main hideout for the Red Glass.</p>
          <p>The Reijah doesn't look much at first glance. It would easily be confused for an abandoned area if it weren't for all the people. A few dirty ports and seaweed encrusted piers venture off in sporadic directions. There's a broken half of a ship attacked to the main port, where the Harbormaster keeps his office and overlooks all incoming ships. Masts tower all over with crows nests for the guards to keep an eye on everything below.</p>
          <p>There is a small tavern here, as well as the Harbormasters office. Other points of interested are the Red Glass hideout and a broken Portal to a lost plane.</p>
        </div>
        <div className="half-container">
          <img src={reijah} alt="reijah" />
        </div>
      </div>

      <div className="country-races container">
        <h2>Races</h2>
        <div className="race-chart">
          <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
            <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
            <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
            <circle className="ring-60" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray="60 40" strokeDashoffset="25"></circle>
            <g className="donut-text">
              <text y="50%" transform="translate(0, 2)">
                <tspan x="50%" textAnchor="middle" className="donut-percent">60%</tspan>   
              </text>
              <text y="60%" transform="translate(0, 3)">
                <tspan x="50%" textAnchor="middle" className="donut-data">Human</tspan>   
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
                <tspan x="50%" textAnchor="middle" className="donut-data">Elves</tspan>   
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
                <tspan x="50%" textAnchor="middle" className="donut-data">Orcs</tspan>   
              </text>
            </g>
          </svg>
        </div>

        <div className="country-trivia grid-3">
          <div>
            <h4>Lanuages</h4>
            <p>Common</p>
          </div>
          <div>
            <h4>Terrain</h4>
            <p>Flat grassy lands and farms in valleys</p>
          </div>
          <div>
            <h4>Prominent Groups</h4>
            <p>Red Glass</p>
          </div>
        </div>

        <img src={pattern} alt="pattern" className="kvilna-color pattern-image" />

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
            <img src={oiraemap} alt="Oirae map" />
            <div>
              <h3>Contains passage to:</h3>
              <ul>
                <li><Link to='/kvilna/oirae'>
                  <h4>Oirae</h4>
                  <p>Oirae is to the East of the harbor</p>
                  </Link>
                </li>
                <li><Link to='/skies'>
                  <h4>Daervyn Skies</h4>
                  <p>There is a flight point that has flying serpents available for public use.</p>
                </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
