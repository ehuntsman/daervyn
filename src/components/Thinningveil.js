import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import hero from '../images/thinningveilheader.png';
import thinningveil from '../images/thinningveil.png';
import pattern from '../images/patternsolid.svg';
import snow from '../images/snow.svg';
import mooncloud from '../images/moon-cloud.svg';
import oiraemap from '../images/oiraemap.png';

export default function Thinningveil() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="countries">
      <div className="container">
        <img src={hero} alt="Thinning Veil" />
        <h1>The Thinnging Veil</h1>
        <p className="subheader">Wibble Wobbly Timey Whimey</p>
        <img src={pattern} alt="pattern" className="kvilna-color pattern-image" />
      </div>

      <div className="container my">
        <div className="half-container shard-text">
          <p><span className="first-letter">A</span> dark and foggy forest where time used to be thin.</p>
        </div>
        <div className="half-container">
          <img src={thinningveil} alt="Thinning Veil" />
        </div>
      </div>

      <div className="country-races container">
        <h2>Races</h2>
        <div className="race-chart">
          <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
            <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#171717"></circle>
            <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
            <circle className="ring-100" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray="100 0" strokeDashoffset="25"></circle>
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

      <div className="container">
        <div className="passage-box">
          <div className="passage">
            <img src={oiraemap} alt="Oirae map" />
            <div>
              <h3>Contains passage to:</h3>
              <ul>
                <li><Link to='/kvilna/bjorvax'>
                  <h4>Bjorvax</h4>
                  <p>Bjorvax is just West of the forest</p>
                  </Link>
                </li>
                <li><Link to='/kvilna/oirae'>
                    <h4>Oirae</h4>
                    <p>Oirae is to the South of the forest</p>
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
