import React, { Component } from 'react';
import './index.css';



class F1Info extends Component {



  render() {
    return (
      <div className="row">
        <div className="col-md-12">
            <table className="table table-dark">
              <thead>
                <tr>
                  <td>Position</td>
                  <td>Name</td>
                  <td>Nationality</td>
                  <td>Sponsor</td>
                  <td>Points</td>
                </tr>
              </thead>
              <tbody>
                {this.props.standings &&
                          this.props.standings.map(
                            driver =>
                              <tr>
                                <td>{driver.position}</td>
                                <td>
                                  <a target="_blank" href={driver.Driver.url}>{driver.Driver.givenName + ' ' + driver.Driver.familyName}</a>
                                </td>
                                <td>{driver.Driver.nationality}</td>
                                <td>{driver.Constructors[0].name}</td>
                                <td>{driver.points}</td>
                              </tr>
                            )
                          }
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default F1Info;
