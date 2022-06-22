import React, { Component } from 'react';
import '../Kvilna/country.css';
import { Link } from 'react-router-dom';

import hero from '../Melsenshir/images/kalnu.jpg';

export default class Shards extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="country-container">
        {/* <img src={hero} alt="Kalnu" /> */}
        <h1>The Shards</h1>
        <h4>/shaardz/</h4>
        <div className="description">
          <p>The Shards are known throughout Daervyn. Some people call them deities and temples to these deities can be found in most major cities and shrines in any town. There is a Shard for each of the elements: Light, Dark, Earth, Wind, Fire, Water. </p>
          <p>Every thousand years or so, the shards would awaken and attempt to merge together. This causes great chaos and destruction all over the planes. Last year, the Syndicate was able to keep the shards asleep so their primal forms didn't wake and cause terror through the plane.</p>
          <p>During a previous attempt to merge, the Wind primal shard was destroyed.</p>
          <p>Now, the shards project themselves as a human form to wander the planes. Though peices of their primal form have been known to be stolen and used as great magical objects.</p>
          <h3>Elements</h3>
          <ul>
            <li><h5>Wind</h5>
            <p>The wind shard was destroyed during the last attempt of the shards to come together.</p>
            <p>Currently, a being claiming to be the wind shard goes by the name of the Emerald Kind and is attempting to reenter the plane.</p>
            <p>Caspian is a spirit in an amulet said to be a part of the wind shard that was trapped before the last time the shards tried to join and is thought to be the reason the shard was destroyed.</p></li>
          </ul>
        </div>
      </div>
    )
  }
}
