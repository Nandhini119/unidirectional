import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login.js';
import Home from './components/home.js';
import Add from './components/add.js';
/*import Update from './components/update.js';
import View from './components/view.js';*/


class App extends Component {
  render() {
    return (
    <Router >
    <div>
      <Route  exact path='/' component={Login} /> 
        <Route path='/home' component={Home}/>
        <Route path='/add' component = {Add}/>
  
      </div>
      </Router>
    );
  }
}
export default  App;

