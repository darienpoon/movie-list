import React from 'react';
import MovieListItem from './MovieListItem.jsx';


const MovieList = ({movielist,addInput, input, relatedSearchList, setRelatedSearchList,  watched, toWatch, setToWatch, setWatched, displayToWatch,displayWatched, displayHome}) => {

  if (displayHome) { //once you press title button,

    if (relatedSearchList.length > 0) { // allow access to search for filter after title button clicked
      return (
        <ul>
          {relatedSearchList.map((movie, index) => (
            <MovieListItem
              movie={movie}
              title={movie.title}
              key={index}
              status={movie.status}
              watched={watched}
              toWatch={toWatch}
              setWatched={setWatched}
              setToWatch={setToWatch}
            />
          ))}
        </ul>
      );
    }


    return ( // rerender all
      <ul>
        {addInput.map((movie, index) => (
          <MovieListItem
            movie={movie}
            title={movie.title}
            key={index}
            status={movie.status}
            watched={watched}
            toWatch={toWatch}
            setWatched={setWatched}
            setToWatch={setToWatch}
          />
        ))}
      </ul>
    );
  }

  if (displayToWatch && toWatch.length > 0) { // if looking at toWatch list
    if (relatedSearchList.length > 0) { // allow access to search filters
      return (
        <ul>
          {relatedSearchList.map((movie, index) => (
            <MovieListItem
              movie={movie}
              title={movie.title}
              key={index}
              status={movie.status}
              watched={watched}
              toWatch={toWatch}
              setWatched={setWatched}
              setToWatch={setToWatch}
            />
          ))}
        </ul>
      );
    }

    return ( // render toWatch list
      <ul>
        {toWatch.map((movie, index) => (
          <MovieListItem
            movie={movie}
            title={movie.title}
            key={index}
            status={movie.status}
            watched={watched}
            toWatch={toWatch}
            setWatched={setWatched}
            setToWatch={setToWatch}
          />
        ))}
      </ul>
    );
  }

  if (displayWatched && watched.length > 0) { // if looking at watched list
    if (relatedSearchList.length > 0) { // allow access to search filters
      return (
        <ul>
          {relatedSearchList.map((movie, index) => (
            <MovieListItem
              movie={movie}
              title={movie.title}
              key={index}
              status={movie.status}
              watched={watched}
              toWatch={toWatch}
              setWatched={setWatched}
              setToWatch={setToWatch}
            />
          ))}
        </ul>
      );
    }

    return ( // render watched list
      <ul>
        {watched.map((movie, index) => (
          <MovieListItem
            movie={movie}
            title={movie.title}
            key={index}
            status={movie.status}
            watched={watched}
            toWatch={toWatch}
            setWatched={setWatched}
            setToWatch={setToWatch}
          />
        ))}
      </ul>
    );
  }

  if (input === '') { // if nothing in search, then render all list
    return (
      <ul>
        {addInput.map((movie, index) => (
          <MovieListItem
            movie={movie}
            title={movie.title}
            key={index}
            status={movie.status}
            watched={watched}
            toWatch={toWatch}
            setWatched={setWatched}
            setToWatch={setToWatch}
          />
        ))}
      </ul>
    );
  }

  if (relatedSearchList.length === 0) { // if filtered list is empty
    return <ul>'No matching movies found'</ul>;
  }

  return ( // otherwise render filtered list
    <ul>
      {relatedSearchList.map((movie, index) => (
        <MovieListItem
          movie={movie}
          title={movie.title}
          key={index}
          status={movie.status}
          watched={watched}
          toWatch={toWatch}
          setWatched={setWatched}
          setToWatch={setToWatch}
        />
      ))}
    </ul>
  );


}

export default MovieList;