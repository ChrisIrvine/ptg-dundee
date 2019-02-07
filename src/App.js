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
      {id: "CI-BA", name: "Chris", points: 0, army: "Blood Angels", units: [
        {number: "HQ-1", name: "Captain", xp: 0, wargear: ["Thunder Hammer", "Combi-Melta", "Jump Pack (Angels Wing)"], comments: "Warlord - Artisan of War"},
        {number: "Elite-1", name: "Company Champion", xp: 0, wargear: ["Combat Shield", "Jump Pack", "Master-Crafted Power Sword"]},
        {number: "Troop-1", name: "Scout Squad", xp: 0, wargear: ["3x Sniper and Cloak", "1x Missile Launcher and Cloak", "1x Sniper, Combi-Flamer and Cloak"]},
        {number: "Flyer-1", name: "Stormraven Gunship", xp: 0, wargear: ["2x Stormstrike Missile Launcher", "Twin Heavy Plasma Cannon", "Two Hurricane Bolters, Typhoon Missile Launcher"]}
      ]},
      {id: "JM-EC", name: "John", points: 0, army: "Emperor's Children", units: [
        {number: "HQ-1", name: "Chaos Lord", xp: 0, wargear: ["2x Lightning Claws", "JumpPack", "Intoxicating Elixir"], comments: "Warlord - Unholy Fortitude"},
        {number: "Troop-1", name: "Chaos Marine Squad", xp: 0, wargear: ["7x Boltgun", "2x Plasma Gun", "Power Fist"]},
        {number: "Heavy-1", name: "Havoc Marine Squad", xp: 0, wargear: ["4x Plasma Gun", "1x Combi-Plasma", "1x Power Sword"]},
        {number: "Heavy-2", name: "Havoc Marine Squad", xp: 0, wargear: ["4x Lascannon", "1x Power Sword"]}
      ]},
      {id: "DM-RG", name: "Dave", points: 0, army: "Raven Guard", units: [
        {number: "HQ-1", name: "Captain", xp: 0, wargear: ["Thunder Hammer", "Storm Shield (The Shield Eternal)", "Jump Pack"], comments: "Warlord - Silent Stalker"},
        {number: "HQ-2", name: "Techmarine", xp: 0, wargear: ["Power Axe", "Bolt Pistol"]},
        {number: "Troop-1", name: "Scout Squad", xp: 0, wargear: ["5x Camo Cloaks and Snipers"]},
        {number: "Fast-1", name: "Land Speeder", xp: 0, wargear: ["Assault Cannon", "Heavy Bolter"]}
      ]},
      {id: "RM-WE", name: "Ryan", points: 0, army: "World Eaters", units: [
        {number: "HQ-1", name: "Chaos Lord", xp: 0, wargear: ["Power Axe (Axe of Blind Fury)", "Plasma Pistol"], comments: "Warlord - Slaughterborn"},
        {number: "Flyer-1", name: "Heldrake", xp: 0, wargear: ["Standard"]},
        {number: "Heavy-1", name: "Predator", xp: 0, wargear: ["Standard"]},
        {number: "Troop-1", name: "Chaos Marine Squad", xp: 0, wargear: ["8x Boltgun", "Autocannon", "Plasma Gun"]}
      ]},
      {id: "CF-TA", name: "Craig", points: 0, army: "Tallarn", units: [
        {number: "HQ-1", name: "Company Commander", xp: 0, wargear: ["Power Sword (Claws of the Desert Tigers)", "Laspistol"], comments: "Warlord - Grand Strategist"},
        {number: "Elite-1", name: "Officer of the Fleet", xp: 0, wargear: ["Standard"]},
        {number: "Transport-1", name: "Taurox", xp: 0, wargear: ["Standard"]},
        {number: "Troop-1", name: "Imperial Guardsmen", xp: 0, wargear: ["9x Lasgun", "Laspistol and Chainsword"]},
        {number: "Troop-2", name: "Imperial Guardsmen", xp: 0, wargear: ["9x Lasgun", "Laspistol and Chainsword"]}
      ]},
      {id: "GL-NC", name: "Gavin", points: 0, army: "Sautekh Necrons", units: [
        {number: "HQ-1", name: "Overlord", xp: 0, wargear: ["Voidscythe", "Resurrecton Orb", "Veil of Darkness"], comments: "Warlord - Hyperlogical Strategist"},
        {number: "HQ-2", name: "Destroyer Lord", xp: 0, wargear: ["Warscythe", "Phylactary"]},
        {number: "Elite-1", name: "Triarch Stalker", xp: 0, wargear: ["Twin Heavy Gauss Cannon"]},
        {number: "Fast-1", name: "Scarabs", xp: 0, wargear: []}
      ]},
      {id: "DF-TS", name: "Declan", points: 0, army: "Thousand Sons", units: [
        {number: "HQ-1", name: "Exalted Sorceror on Disc", xp: 0, wargear: ["Helm of the Third Eye", "Force Staff"], comments: "Warlord - High Magister"},
        {number: "Troop-1", name: "Rubaric Marines", xp: 0, wargear: ["10 x Standard Wargear"]},
        {number: "Heavy-1", name: "Forgefiend", xp: 0, wargear: []},
        {number: "Trans-1", name: "Rhino", xp: 0, wargear: []}
      ]},
      {id: "JH-DG", name: "James", points: 0, army: "Death Guard", units: [
        {number: "HQ-1", name: "Chaos Lord", xp: 0, wargear: ["Supperating Plate", "Plague Sword"], comments: "Warlord - Tainted Regeneration"},
        {number: "Elite-1", name: "Biologis Putriyer", xp: 0, wargear: []},
        {number: "Elite-2", name: "Foul Blightspawn", xp: 0, wargear: []},
        {number: "Trans-1", name: "Rhino", xp: 0, wargear: []}
      ]},
      {id: "DR-DG", name: "Dave", points: 0, army: "Death Guard", units: [
        {number: "HQ-1", name: "Chaos Lord in Terminator Armor", xp: 0, wargear: ["Combi-Plasma", "Chainfist"], comments: "Warlord - Arch Contaminator"},
        {number: "Elite-1", name: "Tallyman", xp: 0, wargear: []},
        {number: "Elite-2", name: "Biologyis Putrifyer", xp: 0, wargear: []},
        {number: "Troop-1", name: "Cultists", xp: 0, wargear: ["10 x standard"]}
      ]},
      {id: "MW-TU", name: "Mike", points: 0, army: "T'au", units: [
        {number: "HQ-1", name: "XV-8 Commander", xp: 0, wargear: ["Iridium Armour", "2x Shield Drones", "3x Cyclic Ion Blasters", "Engram Neuro Chip"], comments: "Warlord - Strength through Unity"},
        {number: "HQ-2", name: "Ethereal", xp: 0, wargear: ["Markerlight Drone"]},
        {number: "Fast-1", name: "XV4 Piranhas", xp: 0, wargear: ["2 Models", "2x Fusion Blasters"]},
        {number: "Troop-1", name: "Kroot Carnivores", wargear: []}
      ]}
    ]
  }

  render() {
    return ( 
      <div className="Background">
        <BrowserRouter basename="/ptg-dundee/">
          <div className="App">
            <ul className="navbar background-dim">
                <li ><NavLink className="border" exact to="/" >Home</NavLink></li>
                <li ><NavLink className="border" to="/rules" >Rules</NavLink></li>
                <li ><NavLink className="border" to="/armies" >Armies</NavLink></li>
                <li ><NavLink className="border" to="/leaderboard">Leaderboard</NavLink></li>
                <li ><NavLink className="border" to="/matches" >Matches</NavLink></li>
                <li ><NavLink to="/recruit" >Recruit</NavLink></li>
            </ul>
            <div className="content-section">
              <Route exact path="/" component={Home} />
              <Route path="/rules" component={Rules} />
              <Route path="/armies" component={( props ) => <Armies {...props} players={this.state.players}/>} />
              <Route path="/leaderboard" component={Leaderboard} />
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