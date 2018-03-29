import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './movie';

const movies = [
  {
    id: 1,
    title: "Deadpool",
    desc: "Death and not giving a damn"
  },
  {
    id: 2,
    title: "Avengers"
  },
  {
    id: 3,
    title: "Shawshank Redemption"
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
      </div>
    );
  }
}

export default App;
