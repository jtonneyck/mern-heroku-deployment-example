import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(){
        super()
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_HOST}/countries/`)
        .then(response => {
            this.setState({
                countries: response.data,
                error: ""
            })
        })
        .catch((err)=> {
          this.setState({
              error
          })
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.error && <h1>{this.state.error.message}</h1>}
                {this.state.countries.map(country => <h1>{country.name.common}</h1>)}
            </div>
        );
    }
}

export default App;