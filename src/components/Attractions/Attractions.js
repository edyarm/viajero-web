import React from 'react';
import Attraction from '../Attraction/Attraction';
import './Attractions.css';

class Attractions extends React.Component{
    render(){
        return (
            <div className="Attractions">
                {this.props.attractions.map( attraction => <Attraction attraction={attraction} key={attraction.id} />)}
            </div>
        );
    }
}

export default Attractions;