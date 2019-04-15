import React, { Component } from 'react';
import './App.css';
import { getMovies } from './services/fakeMovieService';

class Movies extends Component {
    state = {  
        movies: getMovies()
    }
    handleDelete = movie => {

    }
    render() { 
        return ( 
            <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                          <td>{movie.title}</td>
                          <td>{movie.genre.name}</td>
                          <td>{movie.numberInStock}</td>
                          <td>{movie.dailyRentalRate}</td>
                          <td><button className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                  
                </tbody>
            </table>  
            </>
         );
    }
}
 
export default Movies;