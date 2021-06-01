import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      const load = true;
      this.setState({ movies, load });
    });
  }

  render() {
    const { movies, load } = this.state;
    if (!load) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
