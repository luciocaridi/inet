import React from 'react';
import './main.css';
import logo from './MYtineraryLogo.png';
import arrow from './circled-right-2.png'
import home from './homeIcon.png'
import boton from './boton'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

function Main() {
  return (

    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
      </header>
      <body className="Main-body">
        <p className="desc">Find your perfect trip, designed by insiders who know and love their cities.</p>
        <h2>Start browsing</h2>
        <Link to="/Cities"><img src={arrow} className="Main-arrow" alt="Arrow" /></Link>
        <p>Want to build your own MYtinerary?</p> 
        <Link to="/Login"><p className="login">Log In</p></Link>
        <Link to="/Register"><p className="register">Create Account</p></Link>
      </body>

      <footer className="Main-footer">
      <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
      </footer>
    </div>
  );
}
export default Main;