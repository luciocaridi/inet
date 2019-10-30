import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Main from './Main'
import Cities from './Cities'
import Login from './Login'
import Register from './Register'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/Cities" component={Cities} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </div>
      </Router>
    </div>
    );
}
export default App;
