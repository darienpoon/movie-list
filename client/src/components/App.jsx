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
  const [input, setInput] = React.useState('');
  const [relatedSearchList, setRelatedSearchList] = React.useState([]);
  const [addInput,setAddInput] = React.useState([]);


  const[watched, setWatched] = React.useState([]);
  const[toWatch, setToWatch] = React.useState([])

  const [displayToWatch, setDisplayToWatch] = React.useState(false);
  const [displayWatched, setDisplayWatched] = React.useState(false);
  const [displayHome, setDisplayHome] = React.useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if(formJson.input.length >0) {
      var newMovie = {title:formJson.input, status: 'To Watch' };
      //console.log(newMovie)
      //console.log(addInput)
      if (addInput.filter((movie) => movie.title.toLowerCase().includes(newMovie.title.toLowerCase())).length === 0) {
        setAddInput([...addInput, newMovie]);
      }
    }

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setInput(formJson.input);
  };

  const handleFilter = () => {
      var filtered = addInput.filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()));
      setRelatedSearchList(filtered);
}




const handleWatchedFilter = () => {
  setDisplayHome(false);
  setDisplayToWatch(false);
  setDisplayWatched(true);
  //console.log(watched)
};

const handleToWatchFilter = () => {
  setDisplayHome(false);
  setDisplayToWatch(true);
  setDisplayWatched(false);
  //console.log(toWatch)
};

const handleHome = () => {
  setDisplayHome(true);
  setRelatedSearchList([]);
  setInput('');
}

useEffect( () => {
  handleFilter();
}, [input])

useEffect( () => {
  setToWatch([...addInput]);
}, [addInput])

  return (
  <>
  <div onClick = {handleHome} >MovieList!</div>
  <hr />
  <div> <InputField addHandler = {handleAdd} /> </div>
  <hr />
   <div> <SearchBar searchHandler = {handleSubmit} /> </div>
   <hr />
   <button onClick = {handleWatchedFilter} > My Watched List </button> <button onClick = {handleToWatchFilter} > My To-Watch List </button>
   <hr />
    <MovieList addInput = {addInput} relatedSearchList = {relatedSearchList} setRelatedSearchList={setRelatedSearchList} input = {input} watched = {watched} toWatch = {toWatch} setWatched = {setWatched} setToWatch = {setToWatch} displayToWatch={displayToWatch} displayWatched={displayWatched} displayHome = {displayHome}
    />
  </>
  );
};
export default App;

