import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import home from '../img/homeIcon.png'


class Register extends React.Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <footer className="Main-footer">
      <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
      </footer>
      </div>
    )
  } 
}
export default Register