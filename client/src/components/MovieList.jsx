import React from 'react';
import MovieListItem from './MovieListItem.jsx';


const MovieList = ({movielist,addEntry, searchInput, filteredList, setFilteredList,  watchedList, toWatchList, setToWatchList, setWatchedList, displayingToWatch,displayingWatched, displayHome}) => {

  if (displayHome) { //once you press title button,

    if (filteredList.length > 0) { // allow access to search for filter after title button clicked
      return (
        <ul>
          {filteredList.map((movie, index) => (
            <MovieListItem
              movie={movie}
              title={movie.title}
              key={index}
              status={movie.status}
              watchedList={watchedList}
              toWatchList={toWatchList}
              setWatchedList={setWatchedList}
              setToWatchList={setToWatchList}
            />
          ))}
        </ul>
      );
    }


    return ( // rerender all
      <ul>
        {addEntry.map((movie, index) => (
          <MovieListItem
            movie={movie}
            title={movie.title}
            key={index}
            status={movie.status}
            watchedList={watchedList}
            toWatchList={toWatchList}
            setWatchedList={setWatchedList}
            setToWatchList={setToWatchList}
          />
        ))}
      </ul>
    );
  }

  if (displayingToWatch && toWatchList.length > 0) { // if looking at toWatch list
    if (filteredList.length > 0) { // allow access to search filters
      return (
        <ul>
          {filteredList.map((movie, index) => (
            <MovieListItem
              movie={movie}
              title={movie.title}
              key={index}
              status={movie.status}
              watchedList={watchedList}
              toWatchList={toWatchList}
              setWatchedList={setWatchedList}
              setToWatchList={setToWatchList}
            />
          ))}
        </ul>
      );
    }

    return ( // render toWatch list
      <ul>
        {toWatchList.map((movie, index) => (
          <MovieListItem
            movie={movie}
            title={movie.title}
            key={index}
            status={movie.status}
            watchedList={watchedList}
            toWatchList={toWatchList}
            setWatchedList={setWatchedList}
            setToWatchList={setToWatchList}
          />
        ))}
      </ul>
    );
  }

  if (displayingWatched && watchedList.length > 0) { // if looking at watched list
    if (filteredList.length > 0) { // allow access to search filters
      return (
        <ul>
          {filteredList.map((movie, index) => (
            <MovieListItem
              movie={movie}
              title={movie.title}
              key={index}
              status={movie.status}
              watchedList={watchedList}
              toWatchList={toWatchList}
              setWatchedList={setWatchedList}
              setToWatchList={setToWatchList}
            />
          ))}
        </ul>
      );
    }

    return ( // render watched list
      <ul>
        {watchedList.map((movie, index) => (
          <MovieListItem
            movie={movie}
            title={movie.title}
            key={index}
            status={movie.status}
            watchedList={watchedList}
            toWatchList={toWatchList}
            setWatchedList={setWatchedList}
            setToWatchList={setToWatchList}
          />
        ))}
      </ul>
    );
  }

  if (searchInput === '') { // if nothing in search, then render all list
    return (
      <ul>
        {addEntry.map((movie, index) => (
          <MovieListItem
            movie={movie}
            title={movie.title}
            key={index}
            status={movie.status}
            watchedList={watchedList}
            toWatchList={toWatchList}
            setWatchedList={setWatchedList}
            setToWatchList={setToWatchList}
          />
        ))}
      </ul>
    );
  }

  if (filteredList.length === 0) { // if filtered list is empty
    return <ul>'No matching movies found'</ul>;
  }

  if (filteredList.length > 0) {
    return ( // otherwise render filtered list
      <ul>
        {filteredList.map((movie, index) => (
          <MovieListItem
            movie={movie}
            title={movie.title}
            key={index}
            status={movie.status}
            watchedList={watchedList}
            toWatchList={toWatchList}
            setWatchedList={setWatchedList}
            setToWatchList={setToWatchList}
          />
        ))}
      </ul>
    );
 }

}

export default MovieList;