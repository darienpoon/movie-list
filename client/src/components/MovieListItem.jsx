import React from 'react';
import MovieList from './MovieList.jsx'
import { useEffect } from 'react';

const MovieListItem = ({movie, title, status, addInput, watched, toWatch, setWatched, setToWatch}) => {

  const isWatched = watched.includes(movie);
  const viewStatus = isWatched ? "Watched" : "To Watch";

  const handleButtonClick = () => {
    if (isWatched) {
      setWatched(watched.filter((m) => m !== movie));
      setToWatch([...toWatch, movie]);
      movie.status = 'To Watch'

    } else {
      setToWatch(toWatch.filter((m) => m !== movie));
      setWatched([...watched, movie]);
      movie.status = 'Watched'
    }
  };


return (
 <>
 <li> {title} &nbsp;
  <button onClick = {handleButtonClick} > {viewStatus} </button>
 </li>
</>
)
}

export default MovieListItem;