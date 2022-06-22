import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from '../Home/images/races.png';

export default class Races extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        {/* <img src={hero} alt="Kalnu" /> */}
        <h1>Playable Races of Daervyn</h1>
        <div className="description">
          <ul>
            <li>
                <h3>Dwarves</h3>
                <p>Dwarves are a people that have for many years found their pride in one of the seven clans.</p>
                <p>Throughout all of history until recently one of the clans would be in charge and build their empire upon the ruins of the last not wanting any other clans' style be in the present architecture. Their reign would last until one of the clans rose up and conquered the current one and the cycle would repeat.</p>
                <p>The current Dorni or leader of the Dwarves restructured what it meant to be in charge and took power away from the clans and put it in the individual Dwarf.</p>
                <p>Dwarven society now is structured based upon the individual's ability in their craft and all are trained to one day challenge those who are at the top to ever improve.</p>
                <p>As a Dwarf, a chosen craft is the highest importance as one's ability is the measure of a Dwarf. To improve and better oneself is their lifelong pursuit.</p>
                <h3>Kitsune</h3>
                <p>Kitsune are guardians of the spirit world. They tend to live outside of society in towns/villages near the portals leading into the spirit world. There's one for each element. They do this to prevent any necromancers from having a field day with the sheer amount of souls that reside there in peace.</p>
                <p>Kitsune jobs tend to those that protect the village itself, those that venture out and seek souls that have become lost and guide them back to the portals so they move on, or those that actively seek out and fight necromancers.</p>
                <p>Most don't like necromancy as they are the ones that give them the most trouble in life, but there's nothing to say a kitsune can't learn it. Fight fire with fire.</p>
                <p>Kitsune are rare to be seen in public as most live away from society, so they are taken notice of if they venture out, but they tend to know why and are grateful to know their loves ones are being tended to.</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
