import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import home from './homeIcon.png'


class Cities extends React.Component {
  render() {
    return (
      <div>
        <p>Tokio.Nueva York.Los Ángeles.Seúl.Londres.París.Osaka.Shanghái.</p>
        <footer className="Main-footer">
            <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
      </footer>
      </div>
    )
  } 
}
export default Cities