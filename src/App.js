import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './movie';

class App extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=acc0e39aa4ce6d9d7324cf2db6807084&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch(err) {
      console.warn(err);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
