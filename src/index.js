import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';




ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root'));


// good for development, keeps the page from refereshing, which means that as we develop the code it wont reset the state
if (module.hot) {
  module.hot.accept();
}
