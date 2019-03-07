import React, { Component } from 'react';
import './App.css';
import  {Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Weather from './views/weather';
import Sample from './views/sample';
import F1 from './views/f1';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

        <div className="conatiner">
          <Switch>
            <Route exact path='/' render={() => <Weather/>}/>
            <Route exact path='/sample' render={() => <Sample/>}/>
            <Route exact path='/f1' render={() => <F1/>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
