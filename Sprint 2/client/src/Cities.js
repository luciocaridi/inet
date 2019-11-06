import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import home from './homeIcon.png'


class Cities extends React.Component {
  constructor() {
    super();
    this.state= {
      cities: [],
    };

}

componentDidMount() {

  fetch('http://localhost:5000/cities/all')
  .then(results => {
    return results.json();
  }).then(data => {
      let cities = data.map((city) => {
        return(
          <div key={city}>
          <ul>
            <li>{city.name}</li>
          </ul>
          </div>
        )
      })
      this.setState({cities: cities});
  })
}


  render() {
    return (
      <div>
        {this.state.cities}
        <footer className="Main-footer">
            <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
      </footer>
      </div>
    )
  } 
}
export default Cities
