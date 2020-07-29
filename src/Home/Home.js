import React, { Component } from 'react'
import "./home.css"
import { Link } from 'react-router-dom';

import background from './images/forest.jpg';
import map from './images/map.svg';
import books from './images/books.svg';
import bino from './images/binoculars.svg';
import daervyn from './images/Daervyn.jpg';

import thinningveil from './images/thinningveilsmall.jpg';
import oiraesmall from './images/oiraesmall.jpg';

export default class Home extends Component {
  render() {
    var homeHeaderStyle = {
      width: "100%",
      height: "50vh",
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      paddingTop: "40vh",
      minHeight: '500px',
      backgroundPosition: "bottom",
      backgroundAttachment: "fixed"
    }
    var viel = {
      backgroundImage: `url(${thinningveil})`,
      backgroundSize: 'cover'
    }
    var oirae = {
      backgroundImage: `url(${oiraesmall})`,
      backgroundSize: 'cover'
    }
    return (
      <div className="home">
        <div className="page-intro" style={homeHeaderStyle}>
          <div className="intro-inner-wrapper">
            <h1>Welcome to Daervyn</h1>
            <p>Ours is a world unlike any other.<br />
            Enhance your visit with information, sights and sounds.</p>
          </div>
        </div>
        <section className="introduction">
          <img src={map} alt="map" className="icon" />
          <h2>The Overview of Daervyn</h2>
          <p>Please select a location below for more information. Should some information go here?</p>
          <div className="map-container">
            <div className="map">
              <img src={daervyn} alt="map of Daervyn" />
            </div>
            <div className="map-description">
              <p>In the beginning there were the dwarves. Dwarves of all different abilities and cultures. But wars and in-fighting wiped out many of the other tribes until the Ice dwarves of  Mel Senshir were all that remained. At least that's how the Dwarves tell it in Nordic style oral tellings.</p>
              <p>Daervyn is made up of three continents.They are listed below, from left to right on the map.</p>
              <p>Mel Senshir is a large mountainous continent. Some of the mountains are so high that they never see anything but ice and snow. These mountains are home to the seven tribes of the Senshirian Dwarves.</p>
              <p>Sir’ena is the continent most commonly shown in the center of the map The central mountain range of Sir’ena is called Aerkyn and is home to the Drax and Valravn peoples. Both bird like humanoids, the Drax are light and gold in color and Valravns are dark and inky.</p>
              <p>The countries of Gen’ru, Bjorvax, Oirae and Njor’fur make up different regions of K'vilna.  There is a very large lake called Vie in the north east corner of Oirae. Rumors are that Vie used to be home to Merfolk and sirens  but there is no evidence to support this aside from strange human-like bones and scales that get found fossilized in the rocks. The area that lays to the south of Gen’ru and Bjorvax. A mainly flat grasslands filled with agricultural communities.</p>
            </div>
          </div>
        </section>

        <section>
          <img src={bino} alt="countries" className="icon" />
          <h2>Mel Senshir</h2>
          <div className="places-container">
            <div className="country">
              Kalnu
            </div>
            <div className="country">
              Tergria
            </div>
            <div className="country">
              Eldrith
            </div>
            <div className="country">
              Deep Caves of Eldrith
            </div>
          </div>
          <h2>Sir'ena</h2>
          <div className="places-container">
            <div className="country">
              The Sleeping Phantom
            </div>
            <div className="country">
              Annalay
            </div>
            <div className="country">
              R'gra desert
            </div>
            <div className="country">
              Aerkyn
            </div>
            <div className="country">
              Cliff Dwellings of Aerkyn
            </div>
          </div>
          <h2>K'vilna</h2>
          <div className="places-container">
            <Link to='/kvilna/oirae' className="country" style={oirae}>
              <h4>Oiráe</h4>
            </Link>
            <div className="country">
              Bjorvax
            </div>
            <Link to="/kvilna/thinningveil" className="country" style={viel}>
              <h4>Thinning Veil</h4>
            </Link>
            <div className="country">
              Reijah Harbor
            </div>
            <div className="country">
              Southern Harbor
            </div>
            <div className="country">
              Selnata Daervyn Portal on Bjorvax
            </div>
            <div className="country">
              Reijah Daervyn Minereth Portal
            </div>
          </div>
        </section>
        <h2>Other Areas</h2>
        <ul>
          <li>Hringir</li>
          <li>Daervyn Skies</li>
        </ul>
      </div>
    )
  }
}
