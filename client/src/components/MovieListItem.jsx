import React from 'react';
import MovieList from './MovieList.jsx'
import { useEffect } from 'react';

const MovieListItem = ({movie, title, status, addEntry, watchedList, toWatchList, setWatchedList, setToWatchList}) => {

  const isWatched = watchedList.includes(movie);
  const viewStatus = isWatched ? "Watched" : "To Watch";

  const handleToggleWatchButton = () => {
    if (isWatched) { // if currently watched
      setWatchedList(watchedList.filter((m) => m !== movie)); // when button clicked, remove movie from watched list
      setToWatchList([...toWatchList, movie]); // add movie to ToWatch list
      movie.status = 'To Watch'

    } else { // if currently not in watched list
      setToWatchList(toWatchList.filter((m) => m !== movie)); //button clicked, remove from toWatch list
      setWatchedList([...watchedList, movie]); //add movie to watched list
      movie.status = 'Watched'
    }
  };


return (
 <>
 <li> {title} &nbsp;
  <button onClick = {handleToggleWatchButton} > {viewStatus} </button>
 </li>
</>
)
}

export default MovieListItem;