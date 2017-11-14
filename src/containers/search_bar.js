import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
        // Bind context to the class to resolve the error of "setState" function or "props" undefined
        this.onInputChnge = this.onInputChnge.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChnge(event){
        //console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        // Go and get weather data

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});        
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChnge}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)