import React, { Component } from 'react';
import './App.css';
import  {Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Weather from './views/weather';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

        <div className="conatiner">
          <Switch>
            <Route exact path='/' render={() => <Weather/>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
