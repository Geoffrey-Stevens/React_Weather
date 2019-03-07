import React, { Component } from 'react';
import './index.css';

class F1Item extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.DriverTable.Drivers.givenName}</td>
        <td>{this.props.DriverTable.Drivers.familyName}</td>
        <td>{this.props.DriverTable.Drivers.url}</td>
        <td>{this.props.DriverTable.Drivers.nationality}</td>
      </tr>
    );
  }
}

export default F1Item;
