import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Rules from './Containers/Rules';
import Armies from './Containers/Armies';
import Leaderboard from './Containers/Leaderboard';
import Matches from './Containers/Matches';
import Recruit from './Containers/Recruit';

class App extends Component {
  state = {
    players : [
      {id: "CI-BA", name: "Chris", points: 2, army: "Blood Angels", units: [
        {number: "HQ-1", name: "Captain in Cataphractii Armour", wargear: ["Relic Blade", "Combi-Melta"], comments: ["Warlord - Artisan of War", "Finely Balanced (+1 Attack with Relic Blade)", "Hero"]},
        {number: "HQ-2", name: "Lieutenant", wargear: ["2x Lightning Claw", "Jump Pack"], comments: []},
        {number: "Elite-1", name: "Company Champion", wargear: ["Combat Shield", "Jump Pack (Angels Wing)", "Master-Crafted Power Sword"], comments: []},
        {number: "Elite-2", name: "Sternguard Veteran", wargear: ["3x Special Issue Boltgun", "Heavy Bolter", "Combi-Melta", "Power Sword"], comments: []},
        {number: "Troop-1", name: "Scout Squad", wargear: ["3x Sniper & Cloack", "1x Missile Launcher & Cloak", "Sniper, Storm Bolter & Cloak"], comments: []},
        {number: "Troop-2", name: "Scout Squad", wargear: ["3x Sniper & Cloack", "1x Missile Launcher & Cloak", "Sniper, Storm Bolter & Cloak"], comments: []},
        {number: "Troop-3", name: "Scout Squad", wargear: ["3x Bolter & Cloack", "1x Heavy Bolter & Cloak", "Storm Bolter, Chainsword & Cloak"], comments: []},
        {number: "Troop-4", name: "Scout Squad", wargear: ["3x Bolter & Cloack", "1x Heavy Bolter & Cloak", "Storm Bolter, Chainsword & Cloak"], comments: []},
        {number: "Heavy-1", name: "Stalker", wargear: ["2x Icarus Stormcannon", "Storm Bolter", "Hunter-Killer Missile"], comments: []},
        {number: "Heavy-2", name: "Stalker", wargear: ["2x Icarus Stormcannon", "Storm Bolter", "Hunter-Killer Missile"], comments: []},
        {number: "Flyer-1", name: "Stormraven Gunship", wargear: ["2x Stormstrike Missile Launcher", "Twin Heavy Plasma Cannon", "Two Hurricane Bolters", "Typhoon Missile Launcher"], comments: []},
        {number: "Trans-1", name: "Drop Pod", wargear: ["Deathwind Launcher"], comments: []}
      ]},
      {id: "JM-EC", name: "John", points: 3, army: "Emperor's Children", units: [
        {number: "HQ-1", name: "Chaos Lord", wargear: ["2x Lightning Claws", "Jump Pack", "Intoxicating Elixir", "Mark of Slaanesh"], comments: ["Warlord - Unholy Fortitude", "Heroic Constitution", "Heroic", "Ferocious Combatant", "Inspirational Leader"]},
        {number: "HQ-2", name: "Dark Apostle", wargear: ["Combi-melta", "Mark of Slaanesh", "Power Maul"], comments: []},
        {number: "HQ-3", name: "Cypher", wargear: ["Cypher's Bolt Pistol", "Cypher's Plasma Pistol"], comments: []},
        {number: "Elite-1", name: "Chosen", wargear: ["5x Combi-melta & Power Sword"], comments: []},
        {number: "Troop-1", name: "Chaos Marine Squad", wargear: ["7x Boltgun", "2x Plasma Gun", "Sgt: Combi-Plasma & Power Fist"], comments: []},
        {number: "Fast-1", name: "Raptor Squad", wargear: ["2x Chainsword and Bolt Pistol", "2x Meltagun", "Champ with 2 Lightning Claws"], comments: []},
        {number: "Heavy-1", name: "Havoc Marine Squad", wargear: ["4x Plasma Gun", "Combi-Plasma", "Power Sword"], comments: []},
        {number: "Heavy-2", name: "Havoc Marine Squad", wargear: ["4x Lascannon", "Power Sword"], comments: []},
        {number: "Flyer-1", name: "Heldrake", wargear: ["Claws"], comments: []},
        {number: "Trans-1", name: "Chaos Rhino", wargear: ["2x Combi-bolter", "Havoc Launcher", "Mark of Slaanesh"], comments: []}
      ]},
      {id: "DM-RG", name: "Dave", points: 2, army: "Raven Guard", units: [
        {number: "HQ-1", name: "Captain", wargear: ["Thunder Hammer", "Storm Shield", "Jump Pack (Raven's Fury)"], comments: ["Warlord - Silent Stalker", "Heirloom (Thunder Hammer)"]},
        {number: "HQ-2", name: "Techmarine", wargear: ["Power Axe", "Bolt Pistol"], comments: []},
        {number: "HQ-3", name: "Lieutentants", wargear: ["Jump Pack", "Storm Bolter", "Thunder Hammer"], comments: []},
        {number: "Elite-1", name: "Chapter Champion", wargear: ["Thunder Hammer", "Bolter"], comments: []},
        {number: "Elite-2", name: "Company Champion", wargear: ["Jump Pack", "Relic Blade", "Combat Shield"], comments: []},
        {number: "Troop-1", name: "Scout Squad", wargear: ["4x Cloaks & Snipers", "Missile Launcher & Cloak", "1x Boltgun"], comments: []},
        {number: "Troop-2", name: "Scout Squad", wargear: ["4x Cloaks & Snipers", "Missile Launcher & Cloak", "1x Boltgun"], comments: []},
        {number: "Troop-3", name: "Tactical Squad", wargear: ["7x Boltguns", "Missile Launcher", "Plasma Gun", "Storm Bolter", "Power Sword", "Melta Bombs"], comments: []},
        {number: "Troop-4", name: "Intecessor Squad", wargear: ["5x Models"], comments: []},
        {number: "Fast-1", name: "Land Speeder", wargear: ["Typhoon Missile Launcher", "Heavy Bolter"], comments: []},
        {number: "Fast-2", name: "Land Speeder", wargear: ["Typhoon Missile Launcher", "Heavy Bolter"], comments: []},
        {number: "Trans-1", name: "Drop Pod", wargear: ["Storm Bolter"], comments: []}
      ]},
      {id: "RM-WE", name: "Ryan", points: 1, army: "World Eaters", units: [
        {number: "HQ-1", name: "Chaos Lord", wargear: ["Power Axe (Axe of Blind Fury)", "Plasma Pistol"], comments: ["Warlord - Slaughterborn", "Toughened Armour", "Deadly Charge", "Strike and Fade", "Artificer Weapon"]},
        {number: "Elite-1", name: "Possessed", wargear: ["Icon of Wrath", "5 Models"], comments: []},
        {number: "Troop-1", name: "Chaos Marine Squad", wargear: ["8x Boltgun", "Autocannon", "Plasma Gun"], comments: []},
        {number: "Troop-2", name: "Chaos Marine Squad", wargear: ["8x Boltgun", "Autocannon", "Plasma Gun"], comments: []},
        {number: "Fast-1", name: "Chaos Bikers", wargear: ["3x Combi-Bolter", "Lightning Claw", "Flamer", "Chainsword"], comments: []},
        {number: "Heavy-1", name: "Predator", wargear: ["Twin Lascannon", "2x Heavy Bolter Sponson"], comments: []},
        {number: "Heavy-2", name: "Chaos Land Raider", wargear: ["2x Twin Lascannon", "Twin Heavy Bolter"], comments: []},
        {number: "Flyer-1", name: "Heldrake", wargear: ["Baleflamer"], comments: []},
        {number: "Trans-1", name: "Chaos Rhino", wargear: ["Combi-bolter", "Combi-Plasma", "Havoc Launcher"], comments: []},
        {number: "Trans-2", name: "Chaos Rhino", wargear: ["Combi-bolter", "Combi-Plasma", "Havoc Launcher"], comments: []}
      ]},
      {id: "CF-TA", name: "Craig", points: 1, army: "Tallarn", units: [
        {number: "HQ-1", name: "Company Commander", wargear: ["Power Sword", "Plasma Pistol"], comments: ["Warlord - Swift Attacker"]},
        {number: "Elite-1", name: "Officer of the Fleet", wargear: ["Standard"], comments: []},
        {number: "Elite-2", name: "Ogryn Bodyguard", wargear: ["Bullgryn Plate", "Grenadier Guantlet", "The Deathmask of Ollanius", "Slabshield"], comments: []},
        {number: "Troop-1", name: "Infantry Squad", wargear: ["8x Lasgun", "Plasma Pistol", "Power Sword", "Plasma Gun", "Vox-Caster"], comments: []},
        {number: "Troop-2", name: "Infantry Squad", wargear: ["8x Lasgun", "Plasma Pistol", "Power Sword", "Plasma Gun", "Vox-Caster"], comments: []},
        {number: "Troop-3", name: "Infantry Squad", wargear: ["8x Lasgun", "Plasma Pistol", "Power Sword", "Plasma Gun", "Vox-Caster"], comments: []},
        {number: "Troop-4", name: "Infantry Squad", wargear: ["8x Lasgun", "Plasma Pistol", "Power Sword", "Plasma Gun", "Vox-Caster"], comments: []},
        {number: "Trans-1", name: "Taurox", wargear: ["2x Autocannon", "Heavy Stubber"], comments: []},
        {number: "Trans-2", name: "Taurox", wargear: ["2x Autocannon", "Heavy Stubber"], comments: []},
      ]},
      {id: "GL-NC", name: "Gavin", points: 4, army: "Sautekh Necrons", units: [
        {number: "HQ-1", name: "Overlord", wargear: ["Voidscythe", "Resurrecton Orb", "Veil of Darkness"], comments: ["Warlord - Hyperlogical Strategist", "Ferocious Combatant", "Artificer Weapon", "Shredder", "Brutal"]},
        {number: "HQ-2", name: "Destroyer Lord", wargear: ["Warscythe", "Phylactary"], comments: []},
        {number: "Elite-1", name: "Triarch Stalker", wargear: ["Twin Heavy Gauss Cannon"], comments: []},
        {number: "Elite-2", name: "Deathmarks", wargear: ["5 Models"], comments: []},
        {number: "Elite-3", name: "Triarch Praetorians", wargear: ["5x Voidblade and Particle Caster"], comments: []},
        {number: "Troop-1", name: "Necron Warriors", wargear: ["20 Models"], comments: []},
        {number: "Fast-1", name: "Canoptek Scarabs", wargear: ["3 Models"], comments: []},
        {number: "Heavy-1", name: "Transcendent C'tan", wargear: [], comments: []},
        {number: "Trans-1", name: "Ghost Ark", wargear: ["Standard"], comments: []}
      ]},
      {id: "RK-TU", name: "Ross", points: 0, army: "T'au", units: [
        {number: "HQ-1", name: "XV-8 Commander" , wargear: ["3x Cyclic Ion Blaster", "2x MV4 Shield Drone", "Shield Generator", "Vectored Manouevering Thursters"], comments: ["Warlord - Strength of Belief"]},
        {number: "Elite-1", name: "Krootox Riders", wargear: [], comments: []},
        {number: "Troop-1", name: "Kroot Carnivores", wargear: ["10 models"], comments: []},
        {number: "Troop-2", name: "Kroot Carnivores", wargear: ["10 models"], comments: []},
        {number: "Fast-1", name: "TX4 Pirhanhas", wargear: ["2x MV1 Gun Drone", "Burst Cannon", "2x Seeker Missile"], comments: []},
        {number: "Fast-2", name: "TX4 Pirhanhas", wargear: ["2x MV1 Gun Drone", "Burst Cannon", "2x Seeker Missile"], comments: []},
        {number: "Fast-3", name: "Kroor Hounds", wargear: ["4 models"], comments: []},
        {number: "Fly-1", name: "AX39 Sun Shark Bomber", wargear: ["Markerlight", "2 Missile Pods", "2 MV17 Interceptor Drone", "2x Seeker Missile"], comments: []},
        {number: "Trans-1", name: "TV7 Devilfish", wargear: ["2x Smart missile system", "Burst Cannon", "2x Seeker Missile"], comments: []}
      ]},
      {id: "LM-DW", name: "Lee", points: 0, army: "Deathwatch", units: [
        {number: "HQ-1", name: "Primaris Watch Captain", wargear: ["Plasma Pistol", "The Theif of Secrets (Relic Power Sword)"], comments: ["Warlord - Lord of Hidden Knowledge"]},
        {number: "Elite-1", name: "Reiver Squad", wargear: ["5 models", "Heavy Bolt Pistols", "Combat Knives", "Grav Chutes", "Grapnel Hooks"], comments: []},
        {number: "Troop-1", name: "Intecessor Squad", wargear: ["5x Bolt Rifles", "Power Sword"], comments: []},
        {number: "Troop-2", name: "Intecessor Squad", wargear: ["5x Bolt Rifles", "Power Sword"], comments: []},
        {number: "Troop-3", name: "Veteran Squad", wargear: ["4x Terminator with Assault Cannon + Chain Fist", "1x Vanguard with Heavy Thunder Hammer", "1x Bike with Power Maul", "4x Frag Cannon", "1 Sergeant with Combi-Plasma and Xenophase Blade"], comments: []},
        {number: "Heavy-1", name: "Hellblaster Squad", wargear: ["5x Plasma Incinerator"], comments: []},
        {number: "Trans-1", name: "Razorback", wargear: ["Twin Lascannon", "Storm Bolter", "Hunter Killer Missile"], comments: []}
      ]},
      {id: "YM-TA", name: "Yans", points: 1, army: "T'au (Bork'an)", units: [
        {number: "HQ-1", name: "XV-8 Commander", wargear: ["2x MV1 Gun Drone", "Plasma Accelerator Rifle (Plasma Rifle)", "3x Plasma Rifle", "Shield Generator", "Iridium Battlesuit"], comments: ["Warlord - Seeker of Perfection", "Inspirational Leader", "Hero (4 Rolls in Round 3)"]},
        {number: "HQ-2", name: "Ethereal", wargear: ["Hover Drone", "Honour Blade", "2x Marker Drones"], comments: []},
        {number: "Elite-1", name: "XV-104 Riptide Battlesuit", wargear: ["2 SMS", "Advanced Targetting System", "Heavy Burst Cannon", "2x MV84 Shielded Missile Drone", "Target Lock"], comments: []},
        {number: "Elite-2", name: "Ghostkeel Battlesuit", wargear: ["2x Fusion Blaster", "Fusion Collider", "Target Lock", "Shield Generator", "2x Stealth Drones"], comments: []},
        {number: "Troop-1", name: "Strike Team", wargear: ["2 MV7 Marker Drone", "DS8 Tactical Support Turret (SMS)", "9x Fire warrior", "Shas'ui"], comments: []},
        {number: "Fast-1", name: "Pathfinder Team", wargear: ["MB3 Reacon Drone", "MV31 Pulse Accelerator Drone", "2x Markerlight", "3x Rail Rifle"], comments: []},
        {number: "Fast-2", name: "Kroot Hounds", wargear: ["Mouths"], comments: []},
        {numbre: "Fast-3", name: "TVX Piranhas", wargear: ["2 Models", "Gun Drone", "Fusion Blaster", "2 Seeker Missile"], comments: []},
        {numbre: "Fast-4", name: "TVX Piranhas", wargear: ["2 Models", "Gun Drone", "Fusion Blaster", "2 Seeker Missile"], comments: []},
        {number: "Trans-1", name: "TY7 Devilifsh", wargear: ["2x MV1 Gun Drone", "Burst Cannon", "2x Seeker Missile"], comments: []}
      ]},
      {id: "KC-SW", name: "Kev", points: 1, army: "Space Wolves", units: [
        {number: "HQ-1", name: "Wolf Lord", wargear: ["Armour of Russ", "Jump Pack", "Storm Shield", "Thunder Hammer"], comments: ["Warlord - Saga of the Wolfkin"]},
        {number: "HQ-2", name: "Wolf Guard Battle Leader on Thunderwolf", wargear: ["Storm Shield", "Thunder Hammer"], comments: []},
        {number: "Elite-1", name: "Aggressor Squad", wargear: ["3x Boltstorm Guantlets and Auto Launchers"], comments: []},
        {number: "Elite-2", name: "Lone Wolf in Terminator Armour", wargear: ["Storm Shield, Thunder Hammer"], comments: []},
        {number: "Elite-3", name: "Wolf Guard", wargear: ["Jump Packs", "5x Combi-melta", "5x Thunder Hammer"], comments: []},
        {number: "Troop-1", name: "Blood Claws", wargear: ["6 Bolter & Chainsword", "Power Fist", "Plasma Pistol", "Meltagun", "Terminator /w Stormshield and Thunder Hammer"], comments: []},
        {number: "Fast-1", name: "Landspeeder", wargear: ["Heavy Bolter", "Typhoon Missile Launcher"], comments: []},
        {number: "Fast-2", name: "Landspeeder", wargear: ["Heavy Bolter", "Typhoon Missile Launcher"], comments: []}
      ]},
      {id: "SC-DG", name: "Simon", points: 1, army: "Death Guard", units: [
        {number: "HQ-1", name: "Lord in Terminator Armour", wargear: ["Fugaris Helm", "Combi-bolter", "Power Axe"], comments: ["Warlord - Living Plague", "+1 Str to Combi-Bolter", "Hero"]},
        {number: "HQ-2", name: "Malignant Plaguecaster", wargear: ["Corrupted Staff"], comments: []},
        {number: "Elite-1", name: "Deathshroud Terminators", wargear: ["3x Manreaper Plaguespurt Guantlet and Scythe"], comments: []},
        {number: "Elite-2", name: "Terminator Blightlords", wargear: ["5x Bubonic Axe and Comib-melta"], comments: []},
        {number: "Elite-3", name: "Foul Blightspawn", wargear: ["Plague Sprayer"], comments: []},
        {number: "Elite-4", name: "Noxious Blightbringer", wargear: ["Cursed Plague Bell", "Plasma Pistol"], comments: []},
        {number: "Elite-5", name: "Plague Surgeon", wargear: ["Bolt Pistol", "Balesword"], comments: []},
        {number: "Elite-6", name: "Biologus Putrifier", wargear: ["Hyper Blight Grenades", "Plague Knife"], comments: []},
        {number: "Troop-1", name: "Poxwalkers", wargear: ["10 models"], comments: []},
        {number: "Fast-1", name: "Blight Hualer", wargear: ["Multimelta", "Missile Launcher", "Bile spurt", "Gnashing Maw"], comments: []}
      ]},
      {id: "AH-CW", name: "Alan", points: 2, army: "Altioc Craftworld", units: [
        {number: "HQ-1", name: "Autarch Skyrunner", wargear: ["Howling Bankshee Mask", "Fusion Gun", "Laser Lance", "The Shimmer Plume of Achillrial"], comments: ["Warlord - Mark of the Incomparable Hunter", "+1 to Cover Saves in Cover"]},
        {number: "HQ-2", name: "Farseer Skyrunner", wargear: ["Shuriken Pistol", "Singing Spear", "Twin Shuriken Catapult"], comments: ["Powers - Guide and Doom"]},
        {number: "Elite-1", name: "Fire Dragons", wargear: ["4x Fusion Gun", "Dragon's Breath Flamer"], comments: []},
        {number: "Troop-1", name: "Guardian Defenders", wargear: ["Heavy Weapons Platform: Bright Lance"], comments: []},
        {number: "Troop-2", name: "Guardian Defenders", wargear: ["Heavy Weapons Platform: Bright Lance"], comments: []},
        {number: "Fast-1", name: "Warp Spiders", wargear: ["Exarch - Twin Death Spinners"], comments: []},
        {number: "Heavy-1", name: "Fire Prism", wargear: ["Crystal Targeting Matrix", "Shuriken Cannon", "Spirit Stones", "Star Engines", "Vectored Engines"], comments: []},
        {number: "Trans-1", name: "Wave Serpent", wargear: ["2x Brigt Lance", "Shuriken Cannon", "Spirit Stones", "Vectored Engines", "Star Engines", "Crystal Targeting Matrix"], comments: []}
      ]},
      {id: "CB-DG", name: "Colin", points: 1, army: "Death Guard", units: [
        {number: "HQ-1", name: "Chaos Lord", wargear: ["Balesword", "Combi-melta", "Fugaris' Helm"], comments: ["Warlord - Arch-Contaminator", "Terrifying"]},
        {number: "HQ-2", name: "Malignant Plaguecaster", wargear: ["Corrupted Staff"], comments: ["Blades of Putrifaction", "Putrescent Vitality"]},
        {number: "Elite-1", name: "Beast of Nurgle", wargear: ["1 model"], comments: []},
        {number: "Elite-2", name: "Deathshroud Terminators", wargear: ["3 Manreapers", "2 Plaguespurt Gauntlets"], comments: []},
        {number: "Elite-3", name: "Deathshroud Terminators", wargear: ["3 Manreapers", "2 Plaguespurt Gauntlets"], comments: []},
        {number: "Elite-4", name: "Helbrute", wargear: ["Helbrute Fist", "Multi-melta"], comments: []},
        {number: "Elite-5", name: "Biologus Putrifier", wargear: ["Hyper Blight Grenades",  "Plauge Knife"], comments: []},
        {number: "Troop-1", name: "Poxwalkers", wargear: ["20 models"], comments: []},
        {number: "Fast-1", name: "Chaos Spawn", wargear: ["1 Model"], comments: []},
        {number: "Heavy-1", name: "Plagueburst Crawler", wargear: ["2 Plaguespitter", "Heavy Slugger"], comments: []}
      ]}
    ]
  }

  render() {
    return ( 
      <div className="Background">
        <BrowserRouter basename="/ptg-dundee/">
          <div className="App">
            <ul className="navbar background-dim">
                <li><NavLink className="border" exact to="/" >Home</NavLink></li>
                <li><NavLink className="border" to="/rules" >Rules</NavLink></li>
                <li><NavLink className="border" to="/armies" >Armies</NavLink></li>
                <li><NavLink className="border" to="/leaderboard">Leaderboard</NavLink></li>
                <li><NavLink className="border" to="/matches" >Matches</NavLink></li>
                <li><NavLink to="/recruit" >Recruit</NavLink></li>
            </ul>
            <div className="content-section">
              <Route exact path="/" component={Home} />
              <Route path="/rules" component={Rules} />
              <Route path="/armies" render={( props ) => <Armies {...props} players={this.state.players}/>} />
              <Route path="/leaderboard" render={( props ) => <Leaderboard {...props} players={this.state.players} />} />
              <Route path="/matches" render={( props ) => <Matches {...props} players={this.state.players}/>} />
              <Route path="/recruit" component={Recruit} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
