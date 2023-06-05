import React from 'react';
import MovieList from './MovieList.jsx'
import MovieListItem from './MovieListItem.jsx';
import SearchBar from './SearchBar.jsx';
import { useEffect } from 'react';
import InputField from './InputField.jsx';

// var movielist = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

const App = (props) => {
  const [searchInput, setSearchInput] = React.useState('');
  const [filteredList, setFilteredList] = React.useState([]);
  const [addEntry,setAddEntry] = React.useState([]);


  const[watchedList, setWatchedList] = React.useState([]);
  const[toWatchList, setToWatchList] = React.useState([])

  const [displayingToWatch, setDisplayingToWatch] = React.useState(false);
  const [displayingWatched, setDisplayingWatched] = React.useState(false);
  const [displayHome, setDisplayHome] = React.useState(false);

  const handleAddEntry = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if(formJson.input.length >0) {
      var newMovie = {title:formJson.input, status: 'To Watch' };
      //console.log(newMovie)
      //console.log(addEntry)
      if (addEntry.filter((movie) => movie.title.toLowerCase().includes(newMovie.title.toLowerCase())).length === 0) {
        setAddEntry([...addEntry, newMovie]);
      }
    }

  };


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setDisplayingToWatch(false);
    setDisplayingWatched(false);
    setSearchInput(formJson.input);
  };

  const handleFilterFromSearchSubmit = () => {
      var filtered = addEntry.filter((movie) => movie.title.toLowerCase().includes(searchInput.toLowerCase()));
      setFilteredList(filtered);
}


const handleClickWatchedList = () => {
  setDisplayHome(false);
  setDisplayingToWatch(false);
  setDisplayingWatched(true);
  //console.log(watched)
};

const handleClickToWatchList = () => {
  setDisplayHome(false);
  setDisplayingToWatch(true);
  setDisplayingWatched(false);
  //console.log(toWatch)
};

const handleClickHomeTitle = () => {
  setDisplayHome(true);
  setDisplayHome(false);
  setFilteredList([]);
  setSearchInput('');
}

useEffect( () => {
  handleFilterFromSearchSubmit();
}, [searchInput])

useEffect( () => {
  setToWatchList([...addEntry]);
}, [addEntry])

  return (
  <>
  <div onClick = {handleClickHomeTitle} >MovieList!</div>
  <hr />
  <div> <InputField addHandler = {handleAddEntry} /> </div>
  <hr />
   <div> <SearchBar searchHandler = {handleSearchSubmit} /> </div>
   <hr />
   <button onClick = {handleClickWatchedList} > My Watched List </button> <button onClick = {handleClickToWatchList} > My To-Watch List </button>
   <hr />
    <MovieList addEntry = {addEntry} filteredList = {filteredList} setFilteredList={setFilteredList} searchInput = {searchInput} watchedList = {watchedList} toWatchList = {toWatchList} setWatchedList = {setWatchedList} setToWatchList = {setToWatchList} displayingToWatch={displayingToWatch} displayingWatched={displayingWatched} displayHome = {displayHome}
    />
  </>
  );
};
export default App;

