import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: '',
      search: ''
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = (movie) => {
    console.log("Search by Title");
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${this.state.search}`)
      .then((res) => {
        console.log(res)
        this.setState({
          movie: res.data
        })
      })
      .catch(err => console.error(err));
  }

  _searchById = (movie) => {
    console.log("Search by ID");

    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${this.state.search}`)
      .then((res) => {
        console.log(res)
        this.setState({
          movie: res.data
        })
      })
      .catch(err => console.error(err));
  }

  _handleSearchChange = (event) => {
    // const attributeName = event.target.name;
    const attributeValue = event.target.value;
    //
    // const search = {...this.state.search };
    // search[attributeName] = attributeValue

    this.setState({search: attributeValue})
  }


  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchChange={this._handleSearchChange} searchByTitle={this._searchByTitle} searchById={this._searchById}/>
        <Movie movieData={this.state.movie}/>
      </div>
    );
  }
}

export default App;
