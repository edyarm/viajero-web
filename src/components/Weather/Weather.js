import React from 'react';
import './Weather.css';

class Weather extends React.Component{
    render(){
        return (
            <div className="Weather">
                <div className="weather-card">
                    <h2>Dia: {this.props.weather.currentDay}</h2>
                    <h2>Temperatura: {this.props.weather.temperature} &deg;F</h2>
                    <h2>Condición: {this.props.weather.condition}</h2>
                    <img style={(this.props.weather.img) ? {display: "block"} : {display: "none"}} src={this.props.weather.img} alt="icon-weather"/>
                </div>
            </div>
        );
    }
}

export default Weather;