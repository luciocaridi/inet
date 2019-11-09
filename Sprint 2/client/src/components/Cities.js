import React from 'react';
import { Link } from 'react-router-dom';
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
      cities: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/cities/all')
    .then(results => {
    return results.json();
    }).then(data => {
      // let cities = data.map((city) => {
      // return(
      //   {city}
      //   )
      // })
      this.setState({cities: data});
      // console.log(data);
      
    })
      // .then(function(json) {
      //   console.log(json);
        
      //   initialState.push(json);
      //   console.log(initialState);
      // })
    }
  
  render () {
    const items = this.props.itemdos;
    return (
        <div>
        {items}
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
  itemdos: state.item[0]
}};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(getItems, dispatch)
 // editarLista:(listaNueva) => { dispatch({type: 'GET_ITEMS', items: listaNueva})}
})

export default connect(mapStateToProps, mapDispatchToProps)(Cities);

/*         {this.state.cities} {items.map(()=>{})} {this.props.editarLista([1,2,3])}
 */

/*{
    const items = this.props.itemdos.items;
    return (
        <div>
          {items.map((city) => {
            return(
              <div key={city}>
              <ul>
                <li>{city.name}</li>
              </ul>
              </div>
            )})}
          <footer className="Main-footer">
              <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
        </footer>
        </div>
    )
}
*/


/*.filter(
      (item) => {
        return item.name.indexOf(this.state.search) !== -1
      }
    );*/

    
/*<input type="text"
value={this.state.search}
onChange={this.updateSearch.bind(this)}/>*/

   /* fetch('http://localhost:5000/cities/all')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
  cities.push(json)
  console.log(json)
      });
    console.log(cities) */

    /*          {items.map((city) => {
            return(
              <div key={city}>
              <ul>
                <li>{city.name}</li>
              </ul>
              </div>
            )})}*/