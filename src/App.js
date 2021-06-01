import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieDetails, MovieList, NewMovie, EditMovie,NotFound } from './pages'
function App() {
  return (  
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <switch>
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route path="/" component={ NotFound } />
      </switch>
    </BrowserRouter>
  );
}

export default App;
