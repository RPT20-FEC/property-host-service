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
  let url = window.location.href;
  if (url[url.length - 1] === '/') {
    var id = '0001';
  } else {
    var id = url.slice(-4);
  }
  return id;

};

//ReactDOM.render(<App id={getId()}/>, document.getElementById('host'));

ReactDOM.render(<Router>
  <App id={getId()}/>
</Router>, document.getElementById('host'));
