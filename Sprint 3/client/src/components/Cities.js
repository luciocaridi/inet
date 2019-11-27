import React from 'react'
import home from '../img/homeIcon.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {SetItemsFetch}  from '../actions/itemAction';

class CitiesPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      search: ''
    };
  }
  async componentDidMount(){
    await this.props.actionsgetItems()
    this.setState({cities:this.props.citiesRedux})
    
  }

  filterCities = (e) => {
    console.log();
    var items = this.props.citiesRedux
    items=items.filter((item)=>{
      var ciudad= item.name.toLowerCase() + item.country.toLowerCase()
      return ciudad.indexOf(
        e.target.value.toLowerCase()) !== -1 
    })
    this.setState({cities:items})
  }

  render() {
   
    return (
      <div className="mb-2">
        <div className="row">
          <div className="column mx-auto mt-4">
            {<input type="text" onChange={this.filterCities} />}
            {this.state.cities.length>0?
            this.state.cities.map((ciudad)=> {
            return <Link to={`/cities/${ciudad.name}`} key={ciudad._id}><h4 key={ciudad._id}>{ciudad.name} - {ciudad.country}</h4></Link>
       }):<div></div>}

            <footer className="Main-footer">
              <Link to="/"><img src={home} className="Main-footer" alt="Home" /></Link>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
  
const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  
  return {
    citiesRedux: state.reducerCity.data
  }
};
const mapDispatchToProps = dispatch => ({
  actionsgetItems:() => dispatch(SetItemsFetch())
})

export default connect(mapStateToProps, mapDispatchToProps )(CitiesPages);

/* render() {
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
} */