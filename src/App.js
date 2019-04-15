import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';

import { getMovies } from './services/fakeMovieService';

class App extends Component {
  render() {
    return (
      <main className="container">
      <h1>Hej hej decace</h1>
      <Movies />
      </main>
    );
  }
}

export default App;
