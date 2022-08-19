import React, { Component } from 'react';
import '../styles/races.scss'
import { Link } from 'react-router-dom';

import pattern from '../images/patternsolid.svg';
import hero from '../images/racesheader.png';

import humans from '../images/humans.png';
import highelves from '../images/highelves.png';
import darkelves from '../images/darkelves.png';
import woodelves from '../images/woodelves.png';
import highfae from '../images/highfae.png';
import pixie from '../images/pixie.png';
import gnome from '../images/gnome.png';
import dwarf from '../images/dwarves.png';
import orcs from '../images/orcs.png';

import dracolytes from '../images/dracolyte.png';
import satyr from '../images/satyr.png';
import kitsune from '../images/kitsune.png'


export default class Races extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="race">
        <div className="container">
          <img src={hero} alt="playable races" />
          <h1>Playable Races of Daervyn</h1>
          <p className="subheader">A list of all playable races in Daervyn</p>
          <img src={pattern} alt="pattern" className="story-color pattern-image" />
        </div>
        <div className="container">
          <div className="half-container">
            <h2>Non-Planar Based</h2>
            <p><span className="first-letter">T</span>hese are the Non-planar races that are found on Daervyn.</p>
            <p>All Half-Breeds: If you wish to play a half/half creature you MUST get your characters abilities passed off by a Shaman</p>
          </div>
        </div>

        <ul className="navi">
          <li><a href="#humans">human</a></li>
          <li><a href="#highelves">high elves</a></li>
          <li><a href="#darkelves">dark elves</a></li>
          <li><a href="#woodelves">wood elves</a></li>
          <li><a href="#highfae">high fae</a></li>
          <li><a href="#pixie">pixie</a></li>
          <li><a href="#gnomes">gnomes</a></li>
          <li><a href="#dwarves">dwarves</a></li>
          <li><a href="#orcs">orcs</a></li>
        </ul>

        <div className="container">
          <div className="race-grid" id="humans">
            <div className="race-third">
              <h3>Human</h3>
              <p>Humans vary in appearance and place of origin. As such, their appearance can vary from short and pale to tall and dark.</p>
              <p>They are located all over Daervyn, though the largest concentration of them in in Bjorvax.</p>
              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Weapons Proficiency: Every Human may choose to start their Favor Sheets with Proficiency 1 and 2 in one weapons class (Example: Proficiency 1 and 2 in Light Blades, Heavy Blades, etc.)</p>
                <h5>Weaknesses</h5>
                <p>Basic: Some people think being a human is boring, but I’m sure you’ll prove them wrong.</p>
              </div>
            </div>
            <div className="race-third">
              <img src={humans} alt="humans" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>Humans are generally in charge of most of K’vilna, and have an overwhelmingly dominant presence in Hringir. While they can easily command an air of respect in Bjorvax, humans in Reijah are usually associated with the Red Glass, a criminal group.</p>
              <h4>Religiously</h4>
              <p>Humans have various religions, with many different temples and groups in Hringir. While there are a few humans who worship the shards, it is not considered common.</p>
              <h4>Geographically</h4>
              <p>Small populations of humans live scattered throughout Daervyn. The University in Candleton R’gra has brought a large influx of humans, and most of K’vilna is made up of human populations.</p>
              <h4>Requirements</h4>
              <p>In order to play a human from Daervyn, you need to have your backstory passed off by a PA.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="highelves">
            <div className="race-third">
              <h3>High Elves</h3>
              <p>High Elves contend with the High Fae as one of the oldest races in existence, and this brings the Elves great pride. They have a highly developed society that relies heavily on bloodline and the upkeep of their history. These beautiful and graceful creatures have mastered the use of light magic and have become an example to all those wishing to master the healing class. Most High Elves are 5-7 feet in height with pointed ears, pale skin, and white or metallic hair colors. They have natural eye colors.</p>
              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Inner Light: High Elves start their favor sheets with Light 1 and Light 2</p>
                <p>Outer Light: High Elves are beautiful and alluring, roll with advantage on seduction checks.</p>
                <h5>Weaknesses</h5>
                <p>Pure Hearts: Casting Dark Magic will deal 1 damage a High Elf per spell cast. Note: Dark spells cast on High Elves do NOT deal extra damage.</p>
              </div>
            </div>
            <div className="race-third">
              <img src={highelves} alt="High Elves" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>High elves care for their standing as much as they do their own lives. Having the best items or carrying the best stories...Whatever it is, the high elves crave it to show off to others. Respect is grown in the High Elven community much like humans and their nobles, only all high elves are nobles. The leader is the one unanimously accepted to be of the highest standing and branch down from there.</p>
              <h4>Religiously</h4>
              <p>While picky in which shard they follow, once one is chosen, the high elves live their lives to elevate their shard believing it to elevate themselves as well in the eyes of their peers.</p>
              <h4>Geographically</h4>
              <p>High Elves are rare on Daervyn, but can be found in the southern parts of K’vilna and Sir’ena.</p>
              <h4>Requirements</h4>
              <p>In order to play a High Elf from Daervyn, you need to have your backstory passed off by a PA</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="darkelves">
            <div className="race-third">
              <h3>Dark Elves</h3>
              <p>Not all the elves had a tendency for the light healing magics of their ancestors, some preferred the darker variety. After many centuries this perversion of the elven societies became unrecognizable from the traditional elf and dark elves were born. These elves are stealthy and malicious creatures that use their powers of persuasion to steal and cheat the ‘lesser races’ which, to an elf, are all races besides themselves. They thrive in the night and are often sharply intelligent. Dark Elves often have darker skin tones, black, brown, or grey eyes and hair, pointed ears, and slightly clawed fingernails.</p>
              <p>Dark Elves can be found on K’vilna in the northern mountain caves.</p>
              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Inner Darkness: Dark Elves start their favor sheets with Dark 1 and Dark 2</p>
                <p>Shadow Vision: Dark Elves have sharp eyes that are used to the night, roll with advantage on perception checks in natural darkness.</p>
                <h5>Weaknesses</h5>
                <p>Dark Heart: Casting Light Magic will deal 1 damage a Dark Elf per spell cast. Note: Light spells cast on Dark Elves do NOT deal extra damage.</p>
              </div>
            </div>
            <div className="race-third">
              <img src={darkelves} alt="Dark Elves" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>Dark elves tend to be secluded due to the perception of dark elves from the other races. They retain their cunning and make tight contracts with nearby Dwarves.</p>
              <h4>Religiously</h4>
              <p>All dark elves follow the dark shard. Due to this faith, they took a different path than those in other planes.</p>
              <h4>Geographically</h4>
              <p>Dark Elves can be found on K’vilna and Mel Senshir throughout the mountains.</p>
              <h4>Requirements</h4>
              <p>In order to play a Dark Elf from Daervyn, you need to have your backstory passed off by a PA.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="woodelves">
            <div className="race-third">
              <h3>Wood Elves</h3>
              <p>Less prideful then their high born cousins Wood Elves have a closer relationship with nature and other races like Humans and Fae. Animals are their kindred spirits and live closely with the elves, though the animals aren’t near as friendly as they are with Dryads or Nymphs. The wood elves have long been renowned for archery and earth magic. Their looks have adapted to their preferred environment and most Wood Elves stand around 6 feet tall, have natural hair colors, pointed ears, and are lithe and slender.</p>
              <p>Wood elves can be found all over Daervyn.</p>

              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Forest Feet: Wood Elves are naturally light-footed and stealthy. Roll with advantage on stealth checks in wooded and forested environments.</p>
                <p>Expert Archer: Wood Elves start their favor sheets with Bows 1</p>
                <h5>Weaknesses</h5>
                <p>Woodland Connection: If attacking a natural plant or animal that has not contracted Lore, roll a d20. If you roll below a 15, -2 from all attack rolls and all spells do -1 damage to the target for the next 3 rounds. You are not required to roll more then once per creature per combat encounter.</p>
              </div>
            </div>
            <div className="race-third">
              <img src={woodelves} alt="Wood Elves" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>Wood Elves travel throughout Daevryn trading with everyone including orcs and dark elves. They have no leadership structure, but do call upon one another when aid is needed.</p>
              <h4>Religiously</h4>
              <p>Wood elves worship all of the shard equally, seeing them all as aspects of nature. They make it their duty to protect the forests and creatures from abnormal changes/threats.</p>
              <h4>Geographically</h4>
              <p>Wood elves can be found throughout Daervyn calling no one place home.</p>
              <h4>Requirements</h4>
              <p>In order to play a Wood Elf from Daervyn, you need to have your backstory passed off by a PA.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="highfae">
            <div className="race-third">
              <h3>High Fae</h3>
              <p>Tall and ethereal creatures with a close tie to the natural magics and a wide variety of appearances that reflect the environment they were born in. They are a proud and arrogant race that are not capable of lying and take deals struck very seriously. High Fae are often 4-7 feet in height with metallic eye colors, slightly clawed fingernails, and oval shaped pupils. Their hair colors vary greatly including all natural colors and even some unnatural colors like blue or green. One of the oldest races in existence, some even believe the fae gave rise to other ancient races such as the elves, but who can know for sure…</p>
              <p>High Fae can be found in the forests of Oirae.</p>
              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Natural Magic: High Fae start their favor sheets with Water and Earth 1 Twisting Truth: Centuries of half-truths and manipulation have made the Fae more alluring over time. Roll with advantage on all persuasion checks.</p>
                <h5>Weaknesses</h5>
                <p>Iron Chains: All Fae are weak to iron, if there is any iron touching a Fae’s bare skin all spells cost twice as much mana Cursed Candor: As a Fae, you cannot lie. If you try to do so the lie will burn its way out of your throat doing 4 damage.</p>
              </div>
            </div>
            <div className="race-third">
              <img src={highfae} alt="High Fae" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>High Fae are tall and ethereal creatures with a close tie to the natural magics and a wide variety of appearances that reflect the environment they were born in. They are a proud and arrogant race that are not capable of lying and take deals struck very seriously.</p>
              <h4>Religiously</h4>
              <p>High fae do not follow the shards as most other races do, feeling their own “Gods” were in power long before the shards left the Elemental River. </p>
              <h4>Geographically</h4>
              <p>High Fae can be found in the forests of Oirae, though a few tend to wander.</p>
              <h4>Requirements</h4>
              <p>In order to play a High Fae from Daervyn, you need to have your backstory passed off by a PA.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="pixie">
            <div className="race-third">
              <h3>Pixies/Sprites</h3>
              <p>A smaller and more mischievous offspring of the High Fae that specialize in playing tricks, often malevolent, on lesser creatures. They are creatures of the moorlands and crave open lands as opposed to the forests of their ancestors that rest between 2-4 feet in height have pointed ears, natural hair colors, and large green eyes. Some say their eyes are green because of the greedy and envious nature of the pixie. Their tricks become much crueler if there’s a prize waiting for them at the end.</p>
              <p>They can be found in the forests of Oirae.</p>

              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Playing Tricks: You roll with advantage on all stealth checks</p>
                <p>Twisting Truth: Centuries of half-truths and manipulation have made the Fae more alluring over time. Roll with advantage on all persuasion checks.</p>
                <h5>Weaknesses</h5>
                <p>Cursed Candor: As a Fae, you cannot lie. If you try to do so the lie will burn its way out of your throat doing 4 damage.</p>
                <p>Iron Chains: All Fae are weak to iron, if there is any iron touching a Fae’s bare skin all spells cost twice as much mana</p>
              </div>
            </div>
            <div className="race-third">
              <img src={pixie} alt="Pixie" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>Pixies and Sprites are smaller and more mischievous offspring of the High Fae that specialize in playing tricks, often malevolent, on lesser creatures. They are creatures of the moorlands and crave open lands as opposed to the forests of their ancestors. Their tricks become much crueler if there’s a prize waiting for them at the end.</p>
              <h4>Religiously</h4>
              <p>Pixies and Sprites tend to not care about big picture things like gods and elevated beings. What matters most is in the moment and the fun that can be had at someone else’s expense.</p>
              <h4>Geographically</h4>
              <p>They can be found in the plains or Oirae and ouside of the desert in Sir'ena.</p>
              <h4>Requirements</h4>
              <p>In order to play a Pixie/Sprite from Daervyn, you need to have your backstory passed off by a PA.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="gnomes">
            <div className="race-third">
              <h3>Gnomes</h3>
              <p>Like the Pixies, Gnomes are a playful and less hard offspring of the Fae, but, unlike the Pixies, Gnomes are more inclined to benevolent and joyful behavior instead of tricks. Whereas their ancestors were more familiar with the forests, Gnomes love the ground nearly as much as the dwarves, they often tunnel into the ground to build their homes. Just slightly taller than their Pixie brethren, Gnomes stand around 3-5 feet tall with light brown skin, brown or black eyes, and brown hair. They’re short, filled with insatiable curiosity, and they aren’t afraid of getting in trouble to sate that curiosity. Gnomes are the only Fae race capable of lying.</p>
              <p>They are mostly found in Bjorvax or Mel Shenshir.</p>
              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Earthen Defense: Gnomes may burrow straight down into the ground to avoid detection or attack, but they must resurface within an hour if out of combat, and three rounds if in combat. A Gnome cannot move engagement levels when in the ground, and if entered in combat they lose their next turn after resurfacing. Burrowing is a full action in combat.</p>
                <h5>Weaknesses</h5>
                <p>Iron Chains: All Fae are weak to iron, if there is any iron touching a Fae’s bare skin all spells cost twice as much mana</p>
                <p>Roots on Land: Gnomes have grown rather fond of the earth, and if they don’t make contact with natural ground for more than 24 hours they become horribly sick. When suffering from this exhaustion they have a -2 on all attack rolls. Once they make contact with natural earth this effect ends</p>
              </div>
            </div>
            <div className="race-third">
              <img src={gnome} alt="Gnomes" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>Gnomes are a society of inventors and scholars seeking the next greatest discovery! While some races look to the past to learn from it, Gnomes take the explosion of a mistake and learn from their own experiences. There is a hierarchy to keep most chaos and finances under control, but most gnomes are their own master.</p>
              <h4>Religiously</h4>
              <p>For a gnome, religion is a fine idea in concept, but who has time? There is far too much to discover and test. Even having a god tell you the answer just ruins the joy of getting there. Some Gnomes try religion and worship the shards, but most gnomes believe in their own machinations more. </p>
              <h4>Geographically</h4>
              <p>They are mostly found in Bjorvax or Mel Shenshir.</p>
              <h4>Requirements</h4>
              <p>In order to play a Gnome from Daervyn, you need to have your backstory passed off by a PA.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="dwarves">
            <div className="race-third">
              <h3>Dwarves</h3>
              <p>Short and stocky, Dwarfs stand around 4 or 5 feet tall and, unlike the pixies of similar height, are a broad shouldered and tough race. The Dwarfs have a culture revolving heavily around the mining than smithing of valuable metals or gems that has bred a people who are thick skinned, blunt, and skilled with wielding hammers. They are often bearded, and their skin, hair, and eye colors are natural (largely shades of brown and black).</p>
              <p>Dwarfs are the original race of Daervyn and are the most common. They are found everywhere, but are extremely dominant on Mel Senshir.</p>
              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Cave Sense: Dwarfs can sense caves and other underground paths in a 300 foot radius around them.</p>
                <p>Hardy: Dwarves take 2 less damage from non-magical attacks.</p>
                <p>Two-Handed: Dwarfs can choose to start their favor sheets with Bludgeons 1 OR Heavy Blades 1.</p>
                <h5>Weaknesses</h5>
                <p>Sturdy: Due to their stocky forms, Dwarfs are less agile than most races. They must -2 from all initiative rolls, and they cannot dash.</p>
              </div>
            </div>
            <div className="race-third">
              <img src={dwarf} alt="Dwarves" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>The nine houses of Dwarves follow the Dorni or the king of dwarves. Whoever is the Dorni usually puts their house in power over all the others, but the current Dorni changed the structure to that based upon merit. Dwarves who are best in their craft live in Kalnu with the Dorni and train those who are beginning their craft. Should they be challenged and beaten, the dwarf who succeeded takes their place. This causes all dwarves to strive to outdo themselves and each other.</p>
              <h4>Religiously</h4>
              <p>Most Dwarves believe in the shards, but specifically the fire and earth shards while some worship minor deities such as the deity of the forge. This worship changes based on the area the Dwarf grows up in.</p>
              <h4>Geographically</h4>
              <p>Dwarves are the original race of Daervyn and are the most common. They are found everywhere, but are extremely dominant on Mel Senshir.</p>
              <h4>Requirements</h4>
              <p>In order to play a Dwarf from Daervyn, you need to have your backstory passed off by a PA.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="orcs">
            <div className="race-third">
              <h3>Orcs</h3>
              <p>Of all the non-planar races Orcs are the most war-like and warrior centric. This brazen race rarely backs down from a fight--and for good reason. Tangling with an Orc is asking for a brutal beating, these creatures have a natural tendency for physical combat. In appearance, Orcs are towering and more muscled than their human counterparts. Most stand over 6 feet tall and their skin tones range from deep blacks and greys to forest greens and all shades in between. Their eyes are brown, blacks, and greys, but very rarely any lighter colors.</p>
              <p>Orcs can be found in caves and just outside the mountains all over K’vilna.</p>
              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Weapons Proficiency: Every Orc may choose to start their Favor Sheets with Proficiency 1 in one weapon class. </p>
                <p>Enhanced Strength: Orcs add +1 to strength rolls. </p>
                <p>Hearty Nature: Their thick skin and hardened muscles give Orcs a +2 to their base HP. </p>
                <h5>Weaknesses</h5>
                <p>Candor: Due to their brash and frank nature, Orcs roll with -1 to all persuasion or performance checks. </p>
              </div>
            </div>
            <div className="race-third">
              <img src={orcs} alt="Orcs" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>Orcs are for the tribe they are born in. All is done for the benefit of the tribe as it is their family blood or no. The chief of each tribe is in charge guided by the shaman who is closely connected to the raw powers of nature. Orcs tend to keep to themselves, rarely trading with those outside their tribe. Due to their way of life and sheer stature, many races find them intimidating.</p>
              <h4>Religiously</h4>
              <p>Orcs follow the guidance of their shaman as their religious leader. While shamans can be in tune with a particular shard, many do not actively seek out shard worship.</p>
              <h4>Geographically</h4>
              <p>Orcs can be found traveling the plains and forests of Daervyn. Some can be found in the major cities, but these are less common.</p>
              <h4>Requirements</h4>
              <p>In order to play an Orc from Daervyn, you need to have your backstory passed off by a PA.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="container">
            <div className="half-container">
              <h2>Daervyn Exclusive Races</h2>
              <p><span className="first-letter">T</span>hese are the Planar races exlusive to Daervyn. They can be found from Daervyn with few exceptions.</p>
            </div>
          </div>

          <ul className="navi">
            <li><a href="#draco">dracolytes</a></li>
            <li><a href="#satyr">satyr</a></li>
            <li><a href="#kitsune">kitsune</a></li>
          </ul>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="draco">
            <div className="race-third">
              <h3>Dracolytes</h3>
              <p>Dracolytes can appear mostly human, but their defining features vary from case to case. As the offspring of ancient dragons, men, and elves that have evolved for generations, Dracolytes often have sparse patches of scales on places like their pointed ears, on their cheeks, their foreheads and noses, their eyebrows, the back of their hands, their forearms, shins, or collarbones. They can sometimes have extruded spinal ridges on their backs, forearms, shins, and scalps or other protrusions like horns. Most people tend to be afraid of Dracolytes, as they resemble some form of monster. With vivid colors in their eyes, scales, and hair they have a hard time hiding.</p>

              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Natural Armor: Due to their naturally tough hide, Dracolytes have a +1 to their Armor Score.</p>
                <p>Fire Lungs: Their draconic heritage grants them the ability to breath fire. Once per day, they can breath a ball of fire that does (character level) fire damage to a target. This ability has no mana cost and they don’t need to tear a scroll in order to use it. This effect can be negated if the Dracolyte is suffering from Wet Scales or by water (blue) spells like Douse. This effect can be used from any stance and counts as using a full action to cast a damaging spell, weapon proficiency is not added to your defense while casting. Range: Out of Reach (roll to hit)</p>
                <p>Fire Resistance: The tough skin of the Dracolytes negates 1pt of fire damage.</p>
                <h5>Weaknesses</h5>
                <p>Wet Scales: Dracolytes don't regulate temperature well and become sluggish and tired if they remain in colder weather like rain or snow for more than 2 hours. If they enter into combat in this state, they automatically lose their first turn. Dracolytes suffering from wet Scales can cure it by either leaving the inclement weather for more than 20 minutes, or standing by a heat source for more than 10.</p>
              </div>
            </div>
            <div className="race-third">
              <img src={dracolytes} alt="Dracolytes" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>All Drakolytes follow the decree of their Pharaoh who protects them and provides for them all of their needs.</p>
              <h4>Religiously</h4>
              <p>The Pharoah is their god giving them even more reason to follow his commands and teachings.</p>
              <h4>Geographically</h4>
              <p>Dracolytes are only found on Skaro.</p>
              <h4>Requirements</h4>
              <p>In order to play a Dracolyte from Daervyn, you must have played in Skaro and be familiar with the country before and have permission from the PAs. An intro quest is required.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="satyr">
            <div className="race-third">
              <h3>Satyr</h3>
              <p>A playful race of half-goat half-human hybrids that have the legs and horns of a goat while all other features are human. They love to drink and run in the woods often playing pranks on any of the people, nymphs, or dryads they encounter. This race is characterized by their nomadic societies, carefree demeanor, and strong connection with nature.</p>
              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Goat legs: Your legs grant you greater agility then your human counter parts, start with agility 2 for your powerful jump and sure footing.</p>
                <p>Horn Attack: Your signature horns grant you a powerful charge attack. When taking a move or dash action, you can charge with your horns and hit one target you end your movement in melee range of. (Doesn’t work with quick step)</p>
                <p>Roll a d20 + rank of horn attack to see if you hit, if you do, damage your target along with the movement. Start at rank 0 doing 1 damage on a hit.</p>
                <p>Horn rank 1: damage 2 cost 1</p>
                <p>Horn rank 2P: damage 3 cost 2</p>
                <p>Horn rank 3: damage 4 cost 3 Horn rank 4: damage 5 cost 4</p>
                <h5>Weaknesses</h5>
                <p>Disorientation: On successful horn attack hit the impact dazes you slightly and you take a -2 to your next attack and initiative roll. If the horn attack misses only take -1 to attack and initiative. If you are reprimanded you are knocked over as well as reprimanded.</p>
              </div>
            </div>
            <div className="race-third">
              <img src={satyr} alt="Satyr" />
            </div>
            <div className="race-third">
              <h4>Politically</h4>
              <p>Satyrs are beings of revelry and song. Many come to satyrs to listen to their tales of warning or triumph. Their wisdom is sought after even to bring them into court as an advisor, but no self respecting Satyr would accept. Satyrs are free spirits who would rather spend an enjoyable evening making others smile than seek to improve their own station.</p>
              <h4>Religiously</h4>
              <p>Satyrs believe in many deities. Some made up for the moment while some are deities are ones that haven’t seen worship in some time. All Satyrs do worship the Dark Shard along with the Light shard with the deity of song and travel being a close third.</p>
              <h4>Geographically</h4>
              <p>Satyrs can be found all throughout Daervyn though less common than most other races.</p>
              <h4>Requirements</h4>
              <p>In order to play a Satyr from Daervyn, you must have an understanding of Daervyn and get permission from the PAs.</p>
            </div>
          </div>

          <img src={pattern} alt="pattern" className="story-color" />

          <div className="race-grid" id="kitsune">
            <div className="race-third">
              <h3>Kitsune</h3>
              <p>Kitsune are a human-like race that have fox ears and tails. They are well known on Daervyn even though they are a rare sight to see.</p>
              <p>Kitsune are the guardians of the spirit realm, where the dead of Daervyn are escorted to. There are five portal entrances to the spirit realm, and each one has a small tribe of Kitsune that guard them and stick to themselves. The rest of the race lives inside the spirit realm.</p>
              <div className="race-stats">
                <h4>Racial Bonuses</h4>
                <h5>Strengths</h5>
                <p>Tails: Each tail represents 2 levels. For example, a level 5 character will have 2 tails, while a level 8 character will have 4. A level 1 starting character will only have 1 tail until level 3.</p>
                <p>Fox Form: Kitsune start with the Fox Animal Shifter Ability which will cost 6 of their starting favor. In this fox form you can mentaly communicate to anyone within 100 ft of you.</p>
                <p>Keen senses: A kitsune has keen senses and starts with +1 to perception and Prof 1 in Perception and can track by scent and sound as well as they can by sight. If their ears are covered in any way (by hiding, a hat, hood, ect) then this bonus is removed.</p>
                <h5>Weaknesses</h5>
                <p>Outcast: In order to play as a Kitsune, your character must be outcast from the spirit world/tribe in Daervyn. You may only visit with the PA’s permission on a specific quest.</p>
              </div>
              <h4>Beliefs</h4>
              <p>Kitsune are the guardians of the dead. As such, they do not take lightly to things that are undead, or restless spirits who refuse to cross over.</p>
              <p>There are Kitsune who help guide these souls to the portals.</p>
              <p>Those in Daervyn know that Kitsune are a rare sight. If one is seen in public, unhidden (their ears or tails exposed), most people treat it like a grim reaper. They will be curious as to who has died.</p>
              <p>Outside of Daervyn, it isn’t well known that Kitsune are the guardians of spirit realm.</p>
              <p>Joining the Syndicate means that the player can respawn, which is sort of taboo to those who guard the spirits. You will be exiled from the spirit realm, but the Kitsune are also aware of the good the Syndicate do so they do not hate those that join. It is up to you if you wish for your character to have a bit of an existential crisis for being able to respawn.</p>
              <p>There are undead/wraiths who live in R’gra. These are figments of the emotion only, and cannot be taken to the spirit realm. While Kitsune are aware that the desert is full of these creatures, they are not ones they pay attention to since they cannot enter the spirit realm.</p>
            </div>
            <div className="race-third">
              <img src={kitsune} alt="Kitsune" />
            </div>
            <div className="race-third">
              <h4>Professions</h4>
              <p>These are some examples of kitsune professions for a backstory. You are not limited to these, but backstory must always be approved by the PA.</p>
              <h5>Spiritual Attendant</h5>
              <p>This is the main occupation of kitsune. They help the dead in the spirit realm, either to keep them happy, help them find lost loved ones, or to give them purpose now that they are dead.</p>
              <p>They also make sure the dead do not leave the spirit realm.</p>
              <p>They are not in service of the dead, but see them as those in their care.</p>
              <h5>Portal Guardian</h5>
              <p>Each of the portals have a small tribe that resides just outside in Daervyn. They are well hidden and guarded by Kitsune.</p>
              <p>Each tribe is represented by the element of the portal they guard. Fire Guardians live at the fire portal, Light Guardians at the light portal, ect. There is no Water portal as it was destroyed thousands of years ago. The Dark Portal tribe was destroyed in a quest last year.</p>
              <p>Guardians make sure no living soul enters the spirit realm (except for kitsune of course) and that no spirit leaves the realm.</p>
              <h5>Spirit Guide/Reapers</h5>
              <p>A guide is one who wanders Daervyn to find those souls who have not moved on for one reason or another. Their job is to convince them to move on and guide them back to the portal. It can get violent at times if the spirit refuses to go.</p>
              <p>They are the most likely to be adverse against undead that have a soul since it’s in their very profession to convince them to move on.</p>
              <h5>Runaway</h5>
              <p>This is extremely rare, but a Kitsune can decide they don’t want to be a part of the culture and self-exile. They are then forbidden to return home (even by a quest).</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
