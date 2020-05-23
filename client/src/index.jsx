import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './components/App.jsx';

const getId = () => {
  return window.location.pathname.substr(1, 4);
};


ReactDOM.render( <Router>
  <App id={getId()}/>
</Router>, document.getElementById('host') );
