import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from './images/annalayheader.png';
import annalay from './images/annalay.png';
import annalaymap from './images/rgramap.png';
import pattern from '../Home/images/patternsolid.svg';
import snow from './images/snow.svg';
import mooncloud from './images/moon-cloud.svg';

import ron from './images/lis.jpg';
import sarah from './images/sarah.jpg';
import lis from './images/ron.jpg';

export default class Annalay extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="countries">
        <div className="container">
          <img src={hero} alt="Annalay" />
          <h1>Annalay</h1>
          <p className="subheader">The harbor town and country!</p>
          <img src={pattern} alt="pattern" className="sirena-color pattern-image" />
        </div>

        <div className="container my">
          <div className="half-container shard-text">
            <p><span className="first-letter">T</span>his overgrown tavern looks like civilization and nature intertwined. Ethereal servers serve weary travelers sat at various tables. Creatures of myth and man relaxing together with an occasional wager. The scent of fresh vegetaion and spices fills the air. A bar rests on the middle of the room that looks more like a theater stage than a place to make drinks. Stairs lead to a second floor for those staying the night and rumors among the usual customers say that the arrangement of the tavern is in constant change and growth, so don't get too used to the layout for it may be completely different the next time you visit. A perfect match to her owner.</p>
          </div>
          <div className="half-container">
            <img src={annalay} alt="Annalay" />
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
                  <tspan x="50%" text-anchor="middle" class="donut-data">Humans</tspan>   
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
                  <tspan x="50%" text-anchor="middle" class="donut-data">Others</tspan>   
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
            <p>Ranging from vasts grasslands, dense forests to black sandy beaches</p>
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
              <img src={lis} alt="Lis"/>
              <h4>Lis</h4>
              <p className="npc-sub">Illusionist</p>
              <p>A masked thief that takes jobs usually taking back items wrongfully taken by other thieves and nobles. A master of illusions, he has been known to teach those who seek him out..</p>
            </div>
            <div>
              <img src={ron} alt="Ron" />
              <h4>Ron</h4>
              <p className="npc-sub">Your friendly neighborhood thief</p>
              <p>Friend to Lis and a fellow thief, Ron is the muscle of the pair who works to protect Los from those he steals from. A bit hard on the surface, but goes out of his way for people he likes.</p>
            </div>
            <div>
              <img src={sarah} alt="Sarah" />
              <h4>Sarah</h4>
              <p className="npc-sub">Owner of the magical shop in town, Sarah's Rest.</p>
              <p>A succubus who has long since given up the work of demons and instead prefers to make trades for items rather than souls. Always has something interesting for sale..</p>
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
                <li><Link to='/sirena/sleepingphantom'>
                    <h4>The Sleeping Phantom</h4>
                    <p>The tavern with the portal.</p>
                  </Link></li>
                  <li><Link to='/sirena/rgra'>
                    <h4>R'gra</h4>
                    <p>A desert of spooky scary ghosts and a theme park.</p>
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
