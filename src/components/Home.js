import React, { Component } from 'react'
import "../styles/home.css";
import { Link } from 'react-router-dom';

import background from '../images/mountains.jpg';
import logo from "../images/daervynicon.svg";
import pattern from '../images/pattern.svg';
import solidPattern from '../images/patternsolid.svg';

import racessmall from '../images/raceshome.png';
import shardsmall from '../images/shardshome.png';
import beastsmall from '../images/beasthome.png';

import daervyn from '../images/Daervyn.png';
import kalnusmall from '../images/kalnuhome.png';
import bjorvaxsmall from '../images/bjorvaxsmall.jpg';
import reijahharbor from '../images/reijahhome.png';
import southernharbor from '../images/southernharborhome.png';

import phantom from '../images/sleepingphantomhome.png';
import rgra from '../images/rgrahome.png';
import anna from '../images/annalayhome.png';
import aer from '../images/aerkynhome.png';
import cliff from '../images/cliffhome.png';

import deepcavessmall from '../images/deepcaveshome.png';
import geiranksmall from '../images/geirankhome.png';
import veilsmall from '../images/thinningveilhome.png';
import oiraesmall from '../images/oiraehome.png';
import tergriasmall from '../images/tergriahome.png';
import eldrithsmall from '../images/eldrithhome.png';

import hringir from '../images/hringirhome.png';
import skaro from '../images/skarohome.png';
import sky from '../images/skieshome.png';

export default class Home extends Component {
  render() {
    var homeHeaderStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: "cover"
    }
    return (
      <div className="home">
        <div className="gold-lines">
          <div className="gold1 gradient"></div>
          <div className="gold2 gradient"></div>
        </div>
        <div className="home-banner"  style={homeHeaderStyle}>
          <div className="logo-header-container">
            <img src={logo} alt="Daervyn" />
          </div>
        </div>
        <section className="container">
          <h1>Explore the World of Daervyn</h1>
          <img src={pattern} alt="pattern" className="pattern-image" />
          <p className="subheader">Ours is a world unlike any other.</p>
          <h5>Enhance your visit with information, sights and sounds.</h5>
          <div className="map">
            <img src={daervyn} alt="map of Daervyn" className="homemap" />
          </div>
          <div className="map-description">
            <p>In the beginning there were the dwarves. Dwarves of all different abilities and cultures. But wars and in-fighting wiped out many of the other tribes until the Ice dwarves of  Mel Senshir were all that remained. At least that's how the Dwarves tell it in Nordic style oral tellings.</p>
            <p>Daervyn is made up of three continents.They are listed below, from left to right on the map.</p>
          </div>
        </section>


        <section>
          <img src={solidPattern} alt="pattern" className="story-color pattern-image" />
          <h1>Story Information</h1>
          <div className="places-container story">
            <Link to='/story/shards' className='country'>
              <img src={shardsmall} alt="shards" />
              <h5>The Shards</h5>
            </Link>
            <Link to='/story/races' className='country'>
              <img src={racessmall} alt="races" />
              <h5>Races</h5>
            </Link>
            <Link to='/story/bestiary' className='country'>
              <img src={beastsmall} alt="bestiary" />
              <h5>Bestiary (coming soon)</h5>
            </Link>
          </div>
          <img src={solidPattern} alt="pattern" className="melsensir-color pattern-image" />
          <h1>Mel Senshir</h1>
          <div className="places-container melsenshir">
            <Link to='/melsenshir/kalnu' className="country">
              <img src={kalnusmall} alt="kalnu" />
              <h5>Kalnu</h5>
            </Link>
            <Link to='/melsenshir/tergria' className="country">
              <img src={tergriasmall} alt="tergria" />
              <h5>Tergria</h5>
            </Link>
            <Link to='/melsenshir/eldrith' className="country">
              <img src={eldrithsmall} alt="eldrith" />
              <h5>Eldrith</h5>
            </Link>
            <Link to='/melsenshir/deepcaves' className="country">
              <img src={deepcavessmall} alt="deepcaves" />
              <h5>Deep Caves</h5>
            </Link>
            <Link to='/melsenshir/geirank' className="country">
              <img src={geiranksmall} alt="geirank" />
              <h5>Geirank</h5>
            </Link>
          </div>
          <div className="map-description">
            <p>Mel Senshir is a large mountainous continent. Some of the mountains are so high that they never see anything but ice and snow. These mountains are home to the seven tribes of the Senshirian Dwarves.</p>
          </div>
          <img src={solidPattern} alt="pattern" className="sirena-color pattern-image" />
          <h1>Sir'ena</h1>
          <div className="places-container sirena">
            <Link to='/sirena/sleepingphantom' className="country">
              <img src={phantom} alt="sleeping phantom" />
              <h5>Sleeping Phantom</h5>
            </Link>
            <Link to='/sirena/annalay' className="country">
              <img src={anna} alt="annalay" />
              <h5>Annalay</h5>
            </Link>
            <Link to='/sirena/rgra' className="country">
              <img src={rgra} alt="rgra" />
              <h5>R'gra desert</h5>
            </Link>
            <Link to='/sirena/aerkyn' className="country">
              <img src={aer} alt="aerkyn" />
              <h5>Aerkyn</h5>
            </Link>
            <Link to='/sirena/aerkyncliff' className="country">
              <img src={cliff} alt="aerkyn cliff" />
              <h5>Cliff Dwellings</h5>
            </Link>
          </div>
          <div className="map-description">
            <p>Sir’ena is the continent most commonly shown in the center of the map The central mountain range of Sir’ena is called Aerkyn and is home to the Drax and Valravn peoples. Both bird like humanoids, the Drax are light and gold in color and Valravns are dark and inky.</p>
          </div>
          <img src={solidPattern} alt="pattern" className="kvilna-color pattern-image" />
          <h1>K'vilna</h1>
          <div className="places-container kvilna">
            <Link to='/kvilna/oirae' className="country">
              <img src={oiraesmall} alt="oirae" />
              <h5>Oiráe</h5>
            </Link>
            <Link to='/kvilna/bjorvax' className="country" >
              <img src={bjorvaxsmall} alt="bjorvax" />
              <h5>Bjorvax</h5>
            </Link>
            <Link to="/kvilna/thinningveil" className="country">
              <img src={veilsmall} alt="viel" />
              <h5>Thinning Veil</h5>
            </Link>
            <Link to="/kvilna/reijah" className="country">
              <img src={reijahharbor} alt="reijah" />
              <h5>Reijah Harbor</h5>
            </Link>
            <Link to="/kvilna/southernharbor" className="country">
              <img src={southernharbor} alt="southern harbor" />
              <h5>Southern Harbor</h5>
            </Link>
          </div>
          <div className="map-description">
            <p>The countries of Gen’ru, Bjorvax, Oirae and Njor’fur make up different regions of K'vilna.  There is a very large lake called Vie in the north east corner of Oirae. Rumors are that Vie used to be home to Merfolk and sirens  but there is no evidence to support this aside from strange human-like bones and scales that get found fossilized in the rocks. The area that lays to the south of Gen’ru and Bjorvax. A mainly flat grasslands filled with agricultural communities.</p>
          </div>
          <img src={solidPattern} alt="pattern" className="story-color pattern-image" />
          <h1>Other Areas</h1>
          <div className="places-container story">
            <Link to="/hringir" className="country">
              <img src={hringir} alt="hringir" />
              <h5>Hringir</h5>
            </Link>
            <Link to="/skies" className="country">
              <img src={sky} alt="skies" />
              <h5>Daervyn Skies</h5>
            </Link>
            <Link to="/skaro" className="country">
              <img src={skaro} alt="skaro" />
              <h5>Skaro</h5>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}
