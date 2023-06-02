import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({movielist,addInput}) => {

  if (addInput.length === 0) {
    return (
      <ul>'No movies'</ul>
    )
  }

  // return (
  //   <ul>
  //     {movielist.map((movie, index) => (
  //       <MovieListItem movie={movie} key = {index}  />
  //     ))}
  //   </ul>
  // )

  return (
    <ul>
      {addInput.map((movie, index) => (
        <MovieListItem movie={movie} key = {index}  />
      ))}
    </ul>
  )

}

export default MovieList;