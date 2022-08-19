import React, { useEffect } from 'react'
import '../styles/country.scss';
import { Link } from 'react-router-dom';

import hero from '../images/skiesheader.png';
import skies from '../images/skies.png';
import pattern from '../images/patternsolid.svg';


export default function Skies() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="countries">
      <div className="container">
        <img src={hero} alt="Skies" />
        <h1>Daervyn Skies</h1>
        <p className="subheader">The skies of Daervyn</p>
        <img src={pattern} alt="pattern" className="kvilna-color pattern-image" />
      </div>

      <div className="container my">
        <div className="half-container shard-text">
          <p><span className="first-letter">T</span>he skies that hang over Daervyn, where sky serpants soar taking passangers from location to location.</p>
        </div>
        <div className="half-container">
          <img src={skies} alt="Daervyn Skies" />
        </div>
      </div>


    </div>
  )
}
