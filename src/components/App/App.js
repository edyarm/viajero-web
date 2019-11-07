import React from 'react';
import WebMap from '../WebMap/WebMap';
import Search from '../Search/Search';
import Weather from '../Weather/Weather';
import Attractions from '../Attractions/Attractions';
import OpenWeather from '../../util/OpenWeather';
import Foursquare from '../../util/Foursquare';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      city: "",
      weather: {
        currentDay: "",
        temperature: "",
        condition: "",
        img: "",
        coord: {}
      },
      attractions: []
    }
  }
  search(city){
    this.setState({
      city: city
    });
    OpenWeather.getForecast(city).then(weather => {
      this.setState({
          weather: weather
      });
    });
    Foursquare.getAttractions(city).then(attractions => {
      this.setState({
        attractions: attractions
      });
    })
  }
  render(){
    return (
      <div className="App">
        <Search search={this.search} />
        <div className="body">
          <WebMap search={this.search} coord={this.state.weather.coord}/>
          <div className="container">
            <h2 className="destination">{(this.state.attractions.length > 0) ? this.state.attractions[0].location.city : "Ciudad"}</h2>
            <div className="sectiontitle">
              <h2>CLIMA ACTUAL</h2>
            </div>
            <Weather weather={this.state.weather} />
            <div className="sectiontitle">
              <h2>MEJORES ATRACCIONES</h2>
            </div>
            <Attractions attractions={this.state.attractions} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
