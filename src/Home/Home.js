import React, { Component } from 'react'
import "./home.css"
import { Link } from 'react-router-dom';

import background from './images/forest.jpg';
import map from './images/map.svg';
import books from './images/books.svg';
import bino from './images/binoculars.svg';

import daervyn from './images/Daervyn.jpg';
import kalnusmall from './images/kalnusmall.jpg';
import bjorvaxsmall from './images/bjorvaxsmall.jpg';
import reijahharbor from './images/reijahsmall.jpg';
import southernharbor from './images/southernsmall.jpg';
import portalbjorvax from './images/portalsmall.jpg';
import broken from './images/brokensmall.jpg';

import phantom from './images/sleepingphantomsmall.jpg';
import desert from './images/rgrasmall.jpg';
import anna from './images/annalaysmall.jpg';
import aer from './images/Aerkynsmall.jpg';
import cliff from './images/cliifaerkynsmall.jpg';

import deepcavessmall from './images/deepcavessmall.jpg';
import geiranksmall from './images/geiranksmall.jpg';
import thinningveil from './images/thinningveilsmall.jpg';
import oiraesmall from './images/oiraesmall.jpg';
import tergriasmall from './images/tergriasmall.png';
import eldrithsmall from './images/eldrithsmall.jpg';

import hringirsmall from './images/hringirsmall.jpg';
import sky from './images/skiessmall.jpg';

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
    var kalnu = {
      backgroundImage: `url(${kalnusmall})`,
      backgroundSize: 'cover'
    }
    var tergria = {
      backgroundImage: `url(${tergriasmall})`,
      backgroundSize: 'cover'
    }
    var eldrith = {
      backgroundImage: `url(${eldrithsmall})`,
      backgroundSize: 'cover'
    }
    var caves = {
      backgroundImage: `url(${deepcavessmall})`,
      backgroundSize: 'cover'
    }
    var geirank = {
      backgroundImage: `url(${geiranksmall})`,
      backgroundSize: 'cover'
    }
    var sleeping = {
      backgroundImage: `url(${phantom})`,
      backgroundSize: 'cover'
    }
    var rgra = {
      backgroundImage: `url(${desert})`,
      backgroundSize: 'cover'
    }
    var annalay = {
      backgroundImage: `url(${anna})`,
      backgroundSize: 'cover'
    }
    var aerkyncliff = {
      backgroundImage: `url(${cliff})`,
      backgroundSize: 'cover'
    }
    var aerkyn = {
      backgroundImage: `url(${aer})`,
      backgroundSize: 'cover'
    }
    var bjorvax = {
      backgroundImage: `url(${bjorvaxsmall})`,
      backgroundSize: 'cover'
    }
    var viel = {
      backgroundImage: `url(${thinningveil})`,
      backgroundSize: 'cover'
    }
    var oirae = {
      backgroundImage: `url(${oiraesmall})`,
      backgroundSize: 'cover'
    }
    var reijah = {
      backgroundImage: `url(${reijahharbor})`,
      backgroundSize: 'cover'
    }
    var southern = {
      backgroundImage: `url(${southernharbor})`,
      backgroundSize: 'cover'
    }
    var portal = {
      backgroundImage: `url(${portalbjorvax})`,
      backgroundSize: 'cover'
    }
    var brokenportal = {
      backgroundImage: `url(${broken})`,
      backgroundSize: 'cover'
    }
    var hringir = {
      backgroundImage: `url(${hringirsmall})`,
      backgroundSize: 'cover'
    }
    var skies = {
      backgroundImage: `url(${sky})`,
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
          <p>Please select a location below the map for more information.</p>
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

        <section className="country-section">
          <img src={bino} alt="countries" className="icon" />
          <h2>Mel Senshir</h2>
          <div className="places-container">
            <Link to='/melsenshir/kalnu' className="country" style={kalnu}>
              <h4>Kalnu</h4>
            </Link>
            <Link to='/melsenshir/tergria' className="country" style={tergria}>
              <h4>Tergria</h4>
            </Link>
            <Link to='/melsenshir/eldrith' className="country" style={eldrith}>
              <h4>Eldrith</h4>
            </Link>
            <Link to='/melsenshir/deepcaves' className="country" style={caves}>
              <h4>Deep Caves of Eldrith</h4>
            </Link>
            <Link to='/melsenshir/geirank' className="country" style={geirank}>
              <h4>Geirank</h4>
            </Link>
          </div>
          <h2>Sir'ena</h2>
          <div className="places-container">
            <Link to='/sirena/sleepingphantom' className="country" style={sleeping}>
              <h4>The Sleeping Phantom</h4>
            </Link>
            <Link to='/sirena/annalay' className="country" style={annalay}>
              <h4>Annalay</h4>
            </Link>
            <Link to='/sirena/rgra' className="country" style={rgra}>
              <h4>R'gra desert</h4>
            </Link>
            <Link to='/sirena/aerkyn' className="country" style={aerkyn}>
              <h4>Aerkyn</h4>
            </Link>
            <Link to='/sirena/aerkyncliff' className="country" style={aerkyncliff}>
              <h4>Cliff Dwellings of Aerkyn</h4>
            </Link>
          </div>
          <h2>K'vilna</h2>
          <div className="places-container">
            <Link to='/kvilna/oirae' className="country" style={oirae}>
              <h4>Oiráe</h4>
            </Link>
            <Link to='/kvilna/bjorvax' className="country" style={bjorvax}>
              <h4>Bjorvax</h4>
            </Link>
            <Link to="/kvilna/thinningveil" className="country" style={viel}>
              <h4>Thinning Veil</h4>
            </Link>
            <Link to="/kvilna/reijah" className="country" style={reijah}>
              <h4>Reijah Harbor</h4>
            </Link>
            <Link to="/kvilna/southernharbor" className="country" style={southern}>
              <h4>Southern Harbor</h4>
            </Link>
            <Link to="/kvilna/selnataportal" className="country" style={portal}>
              <h4>Selnata Portal</h4>
            </Link>
            <Link to="/kvilna/brokenportal" className="country" style={brokenportal}>
              <h4>Broken Portal</h4>
            </Link>
          </div>
          <h2>Other Areas</h2>
          <div className="places-container">
            <Link to="/hringir" className="country" style={hringir}>
              <h4>Hringir</h4>
            </Link>
            <Link to="/skies" className="country" style={skies}>
              <h4>Daervyn Skies</h4>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}
