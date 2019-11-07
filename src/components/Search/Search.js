import React from 'react';
import './Search.css';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            city: ""
        }
    }
    handleCityChange(e){
        if(this.props.city !== this.state.city){
            this.setState({
                city: e.target.value
            });
        }
    }
    handleSearch(e){
        this.props.search(this.state.city);
        e.preventDefault();
    }
    render(){
        return (
            <div className="Search">
                <h1>¿Dónde quieres viajar?</h1>
                <div className="form">
                    <input type="text" id="city" onChange={this.handleCityChange} />
                    <button id="button" type="submit" onClick={this.handleSearch}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Search;