import React from 'react';
import './Attraction.css';

class Attraction extends React.Component{
    render(){
        return (
            <div className="Attraction">
                <h2>{this.props.attraction.name}</h2>
                <img className="attraction-icon" src={`${this.props.attraction.categories[0].icon.prefix}bg_64${this.props.attraction.categories[0].icon.suffix}`} alt="attraction" />
                <h3>Dirección:</h3>
                <p>{this.props.attraction.location.address}</p>
                <p>{this.props.attraction.location.city}</p>
                <p>{this.props.attraction.location.country}</p>
            </div>
        );
    }
}

export default Attraction;