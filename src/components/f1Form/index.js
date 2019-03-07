import React, { Component } from 'react';
import './index.css';



class F1Form extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.props.getSpeedyBois}>
            <input type="text" name="year" placeholder="Year..." />
            <input type="text" name="season" placeholder="Season..." />
            <input type="submit" name="submit" placeholder="Get Standings" />
          </form>
        </div>
      </div>
    );
  }
}

export default F1Form;
