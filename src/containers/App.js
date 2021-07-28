import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { cities } from '../components/cities';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cities: cities,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { cities, searchfield } = this.state;
    const filteredCities = this.state.cities.filter(city =>{
      return city.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !cities.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Taiwan Cities</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList cities={filteredCities} />
          </Scroll>
        </div>
      );
  }
}

export default App;