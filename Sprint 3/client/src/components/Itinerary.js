import React from 'react';
import { Link } from 'react-router-dom';
import home from '../img/homeIcon.png';

class Itinerary extends React.Component {
  render() {
    return (
        <div>
        
        <footer className="Main-footer">
              <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
        </footer>
        </div>
      
    )
  } 
}

export default Itinerary;