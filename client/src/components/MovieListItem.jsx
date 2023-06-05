import React from 'react';
import MovieList from './MovieList.jsx'
import { useEffect } from 'react';

const MovieListItem = ({movie, title, status, addEntry, watchedList, toWatchList, setWatchedList, setToWatchList}) => {

  const isWatched = watchedList.includes(movie);
  const viewStatus = isWatched ? "Watched" : "To Watch";

  const handleToggleWatchButton = () => {
    if (isWatched) {
      setWatchedList(watchedList.filter((m) => m !== movie));
      setToWatchList([...toWatchList, movie]);
      movie.status = 'To Watch'

    } else {
      setToWatchList(toWatchList.filter((m) => m !== movie));
      setWatchedList([...watchedList, movie]);
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