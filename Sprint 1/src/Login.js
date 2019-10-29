import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import home from './homeIcon.png'


class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <footer className="Main-footer">
      <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
      </footer>
      </div>
    )
  } 
}
export default Login