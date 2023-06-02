import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({movielist}) => {
  if (movielist.length === 0){
    return (
      <ul>'No searches found'</ul>
    )
  }
  return (
    <ul>
      {movielist.map((movie, index) => (
        <MovieListItem movie={movie} key = {index}  />
      ))}
    </ul>
  )

}

export default MovieList;