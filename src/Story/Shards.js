import React, { Component } from 'react';
import './Shards.scss';
import { Link } from 'react-router-dom';

import pattern from '../Home/images/patternsolid.svg';
import hero from './images/shardsheader.png';
import shards from './images/shards.png';

import wind from './images/wind.svg';
import cas from './images/caspian.jpg';
import windmap from './images/WindMap-01.png';

import water from './images/water.svg';
import watermap from './images/waterportal-01.png';

import fire from './images/fire.svg';
import ember from './images/ember.png';
import firemap from './images/Firemap-01.png';

import earth from './images/earth.svg';
import earthmap from './images/Earth Map-01.png';

import dark from './images/dark.svg';
import darkmap1 from './images/darkportal-01.png';
import darkmap2 from './images/darkprimal-01.png';

import light from './images/light.svg';
import lightmap from './images/Lightmap-01.png';

export default class Shards extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="shards">
        <div className="container">
          <img src={hero} alt="the shards" />
          <h1>The Shards</h1>
          <p className="subheader">The Elemental Gods of Daervyn</p>
          <img src={pattern} alt="pattern" className="story-color" />
        </div>
        <div className="container my">
          <div className="half-container shard-text">
            <p><span className="first-letter">T</span>he Shards are known throughout Daervyn. Some people call them deities and temples to these deities can be found in most major cities and shrines in any town. There is a Shard for each of the elements: Light, Dark, Earth, Wind, Fire, Water. </p>
            <p>Every thousand years or so, the shards would awaken and attempt to merge together. This causes great chaos and destruction all over the planes. Last year, the Syndicate was able to keep the shards asleep so their primal forms didn't wake and cause terror through the plane.</p>
            <p>During a previous attempt to merge, the Wind primal shard was destroyed.</p>
            <p>Now, the shards project themselves as a human form to wander the planes. Though peices of their primal form have been known to be stolen and used as great magical objects.</p>
          </div>
          <div className="half-container">
            <img src={shards} alt="The shards" />
          </div>
        </div>

        <img src={pattern} alt="pattern" className="story-color" />

        <div className="container">
          <div className="shard-container">
            <div className="shard-two-thirds">
              <img src={wind} alt="Wind" className="shard-icon" />
              <h2>Wind</h2>
              <p className="shard-name">The Emerald King <span className="divider">-</span> Caspian*</p>
              <p>The God of the Journey, Art and Life</p>
              <p className="asterik">*Not well known.</p>
              <div className="shard-description">
                <div>
                  <h4>History</h4>
                  <p>Gods and higher beings have many different types of ways to attain godhood. Some are born into it and some attain it through great acts. The same cannot be said for the Wind Shard. The Emerald King was once a foot soldier who fell in battle, and while bleeding to death, he stumbled into godhood. Few know what that truly means.</p>
                  <p>The wind primal was destroyed due to an unnamed God stealing away a portion of the wind shards's being. Making it weaker than the other primal forms and destroying the wind shard, sending the Emerald King back to his original plane. This stolen piece, which was found out to be the Emerald King's kindness and later named Caspian was sealed into an emerald Gem and entrusted to the Dwarves Dorni for safe keeping. Lacking his ability to be kind, the Emerald King then bided his time gathering forces to break back into the plane and conquer it.</p>
                  <p>Over the thousands of years trapped in the gem, even the good part of Wind started to sour. His wind powers were used for the Dorni’s will, and it wasn’t until it was placed in the hands of the Syndicate did he find himself free. With freedom, he took upon the name Caspian, and vowed to help save Daervyn from the destruction the shards had done.</p>
                </div>
                <div>
                  <h4>Primal Form</h4>
                  <p>The primal form of Wind was an Emerald. It has been broken and most of the pieces are gone and sealed away with the Emerald King in his own dimension.</p>
                  <p>The effects of the primal on the land are unknown, since it’s missing.</p>
                  <h4>Temple</h4>
                  <p>The Wind temple was mostly destroyed, and lays in ruins. Few people venture there.</p>
                  <h4>Portal</h4>
                  <p>The wind portal to the spirit realm is still open and active. It is guarded by the Wind Tribe of Kitsune.</p>
                </div>
              </div>
            </div>
            <div className="shard-one-third">
              <img src={cas} alt="Caspian" />
              <img src={windmap} alt="Wind Map" />
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="shard-container">
            <div className="shard-one-third">
              <img src={watermap} alt="Water Portal" className="left-image" />
            </div>
            <div className="shard-two-thirds">
              <img src={water} alt="Water" className="shard-icon" />
              <h2>Water</h2>
              <p>The God of War, Power and the Empire</p>
              <div className="shard-description">
                <div>
                  <h4>Primal Form</h4>
                  <p>The primal form is located off the Southern shore of Njor’Fur. Proximity close to the primal has a loss of all sound. Leaves blow silently. People can’t or rarely speak. All sound is removed from the object/person.</p>
                </div>
                <div>
                  <h4>Portal</h4>
                  <p>The Water Portal is still there and guarded by its tribe of Kitsune. However, it’s located on a small island in the middle of the Northern Ocean</p>
                </div>
              </div>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="shard-container">
            <div className="shard-two-thirds">
              <img src={fire} alt="Fire" className="shard-icon" />
              <h2>Fire</h2>
              <p className="shard-name">Ember*</p>
              <p>Goddess of Love, Passion and Destruction</p>
              <p className="asterik">*Not well known.</p>
              <div className="shard-description">
                <div>
                  <h4>History</h4>
                  <p> On the brink of death due to starvation, Fire found a wounded Phoenix. Her hunger overtaking her, she struck the bird and set to eat it. Before she could begin her meal, the Phoenix started to burn to ash and rise from it. Determined to have a meal and stave off death a little longer, Fire killed the Phoenix an unknown number of times until the bird of flame could not return from its ashes. Upon consuming the Phoenix, Fire awoken her powers.</p>
                </div>
                <div>
                  <h4>Primal Form</h4>
                  <p>The primal form is made up of Ruby and sits in a pool of lava without melting or breaking down. The effects of being close to the primal form is colorless and invisible fire that leaves no smoke. Its heat is so intense that it burns organic and inorganic material down to a molten pool. The heat waves can be seen, but other than that, it’s impossible to see this fire.</p>
                  <p>The effects of the primal on the land are unknown, since it’s missing.</p>
                  <h4>Temple</h4>
                  <p>Located in the Southern most part of Sir’ena.</p>
                  <h4>Portal</h4>
                  <p>The Fire Portal is still there and guarded by its tribe of Kitsune.</p>
                </div>
              </div>
            </div>
            <div className="shard-one-third">
              <img src={ember} alt="Ember" />
              <img src={firemap} alt="Wind Map" />
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="shard-container">
            <div className="shard-one-third">
              <img src={earthmap} alt="Water Portal" className="left-image" />
            </div>
            <div className="shard-two-thirds">
              <img src={earth} alt="Earth" className="shard-icon" />
              <h2>Earth</h2>
              <p>God of Honor, Growth and the Seasons</p>
              <div className="shard-description">
                <div>
                  <h4>Primal Form</h4>
                  <p>The primal form is made up of Malachite and covered in roots and moss. It’s located under the large mountains in the Northern part of Mel Senshir.</p>
                </div>
                <div>
                  <h4>Portal</h4>
                  <p>The Earth Portal is still there and guarded by it’s tribe of Kitsune.It is located about the halfway point of Mel Senshir.</p>
                </div>
              </div>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="shard-container">
            <div className="shard-two-thirds">
              <img src={dark} alt="Dark" className="shard-icon" />
              <h2>Dark</h2>
              <p className="shard-name">Hades*</p>
              <p>God of Thought, The Lost and the Underworld (Spirit Realm)</p>
              <p className="asterik">*Not well known.</p>
              <div className="shard-description">
                <div>
                  <h4>History</h4>
                  <p>Thousands of years ago, the human version of Dark was going to be married. His wedding was ruined by an onslaught of dark creatures. His bride-to-be and family were all turned into monsters due to a plague the monsters carried that tried to hunt and kill him as well. In his attempt to escape, the purest sense of grief and terror overwhelmed him when his godlike powers awakened. Or so is the story he tell if pressed.</p>
                </div>
                <div>
                  <h4>Primal Form</h4>
                  <p>Hades' primal form is dormant under the mountains of Gen’Ru and is made of Obsidian. The effect of the primal is memory issues in exchange for power depending on the importance of the memory. Those who wander in the presence of the primal too long face memory issues, and the prophet himself has collected a piece of the primal that he uses to alter memories of those in his following. "Taking away their painful and scarring memories to bring them peace."</p>
                  <h4>Temple</h4>
                  <p>The Dark Temple is located in the mountains of Gen’Ru, and is usually visited by dark elves. There is a current cult growing on the islands of Lake Vie that is led by the Prophet..</p>
                  <h4>Portal</h4>
                  <p>The Dark Portal and protective Kitsune tribe were attacked and destroyed by a dark infused creature. While the Syndicate was able to save a small boy from the tribe, the rest of the tribe and the portal itself were lost. The other tribes and sending some of their own members to restore tribe's numbers. The Dark Portal was up in the mountains of Gen’Ru.</p>
                </div>
              </div>
            </div>
            <div className="shard-one-third">
              <img src={darkmap1} alt="Dark Portal" />
              <img src={darkmap2} alt="Dark Primal" />
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="shard-container">
            <div className="shard-one-third">
              <img src={lightmap} alt="Light Portal" className="left-image" />
            </div>
            <div className="shard-two-thirds">
              <img src={light} alt="Light" className="shard-icon" />
              <h2>Light</h2>
              <p>Goddess of Reflection, Truth and Knowledge</p>
              <div className="shard-description">
                <div>
                  <h4>History</h4>
                  <p>While at Dark’s wedding, Light was close to the portal that let in all the evil beings. Too terrified to stop the attack, she ran away and hid from the other shards. Once they reached Daervyn, she kept to herself until she was imprisoned and her soul was torn in half. Half of her was placed in a physical prison, and the other half was placed in a mirror prison.</p>
                  <h4>Primal Form</h4>
                  <p>Light’s Primal form is made out of marble, and it lays under Lake Vie. It’s effect on the land is removing all hue. The land and animals on the southern half of the lake are completely colorless.</p>
                </div>
                <div>
                  <h4>Temple</h4>
                  <p>Though mostly forgotten and reduced to ruins, this underground temple resides to the East of Lake Vie and is protected by jackwolves.</p>
                  <h4>Portal</h4>
                  <p>The Light Portal is still open and active, and has a Kitsune Tribe guarding it. The portal is located on a Northern island of Lake Vie.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
