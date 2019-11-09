import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import home from '../img/homeIcon.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { itemActions } from '../actions/itemActions'
import initialState from '../reducers/itemReducer'



class Cities extends React.Component {
  constructor() {
    super();
    this.state= {
      cities: initialState,
      estado: true,
    };

}

componentDidMount() {
  fetch('http://localhost:5000/cities/all')
  .then(results => {
    return results.json();
  })
    this.setState({cities: initialState});
  }



  render() {
    const items = this.props.itemdos.items;
    return (
        <div>

          <footer className="Main-footer">
              <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
        </footer>
        </div>
      
    )
  } 
}

Cities.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = (state) =>{ return {
  itemdos: state.item
}};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(getItems, dispatch)
  // editarLista:(listaNueva) => { dispatch({type: 'GET_ITEMS', items: listaNueva})}
})

export default connect(mapStateToProps, mapDispatchToProps)(Cities);

/*         {this.state.cities}
 */


 /*           {items.map((city) => {
            return(
              <div key={city}>
              <ul>
                <li>{city.name}</li>
              </ul>
              </div>
          )})} */