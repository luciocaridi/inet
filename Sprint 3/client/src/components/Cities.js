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
      search: ''
    };

}

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    const items = this.props.itemdos.filter(
      (item) => {
        var ciudad = item.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1 || item.country.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1; 
        return ciudad
      }
    );
    return (
        <div>
        <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        {items.map((ciudad)=> { 
          return <Link to={`/itinerary/${ciudad.name}`}><h4 key={ciudad._id}>{ciudad.name} - {ciudad.country}</h4></Link>
        })}
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

const mapStateToProps = (state) =>{
  console.log(state);
  
   return {
  itemdos: state.item
}};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(getItems, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cities);


//           return <h4 key={ciudad._id}><a href={`localhost:5000/ciudades/${ciudad.name}`/*${ciudad.name} {ciudad.country}`*/}>{ciudad.name} - {ciudad.country}</a> </h4>
