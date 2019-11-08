import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import home from '../img/homeIcon.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
// import { itemActions } from '../actions/itemActions'



class Cities extends React.Component {
  constructor() {
    super();
    this.state= {
      cities: [],
      estado: true,
    };

}

componentDidMount() {
  
  //this.props.item.items;
  /*fetch('http://localhost:5000/cities/all')
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
  })*/
}


  render() {
    const items = this.props.item.items;
    return (
        <div>
          {JSON.stringify(items)}
          <footer className="Main-footer">
              <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
        </footer>
        </div>
      
    )
  } 
};
/*
Cities.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};*/

const mapStateToProps = (state) =>{ return {
  item: state.item
}};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(getItems, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cities);

/*         {this.state.cities}
 */