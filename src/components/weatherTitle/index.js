import React, { Component } from 'react';
import './index.css';



class WeatherTitle extends Component {
  render() {
    return (
      <div className="WeatherTitle">
        <h1> Enter the city <br/> and country <br/> to check the <br/> local weather!<br/><br/>
        e.g.(Boston US)</h1>
      </div>
    );
  }
}

export default WeatherTitle;
