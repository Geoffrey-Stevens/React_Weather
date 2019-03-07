import React, { Component } from 'react';
import './index.css';
import F1Form from '../../components/f1Form';
import F1Info from '../../components/f1Info';



class F1 extends Component {
  constructor() {
    super();
    this.state = {
      'standings': []
    }
  }

  getSpeedyBois = async(e) => {
    e.preventDefault();

      let year = e.target.elements.year.value;
      let season = e.target.elements.season.value;
      if (year === '' || year === null) {
        year = '2018';
      }
      const url = `https://ergast.com/api/f1/${year}/${season}/driverStandings.json`;

      let response = await fetch(url);

      let data = await response.json();

      this.setState({'standings': data.MRData.StandingsTable.StandingsLists[0].DriverStandings});
  }

  render() {
    return (
      <div>
        <h1>very fast speedy bois</h1>
        <F1Form getSpeedyBois={this.getSpeedyBois}/>
        <F1Info
        standings={this.state.standings}/>
      </div>
    );
  }
}


export default F1;
