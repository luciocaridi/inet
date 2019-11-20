import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './components/Main';
import Cities from './components/Cities';
import Login from './components/Login';
import Register from './components/Register';
import Itinerary from './components/Itinerary';
import './App.css';;

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/Cities" component={Cities} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Itinerary/:id" component={Itinerary} />
        </div>
      </Router>
    </div>
    );
};

export default App;
