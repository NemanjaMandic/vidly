import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";

import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1>Movies</h1>
        <Movies />
      </main>
    );
  }
}

export default App;
