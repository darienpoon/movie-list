import React from 'react';
import MovieList from './MovieList.jsx'
import MovieListItem from './MovieListItem.jsx';
import SearchBar from './SearchBar.jsx';
import { useEffect } from 'react';
import InputField from './InputField.jsx';

var movielist = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => {

  const [input, setInput] = React.useState('');
  const [relatedSearchList, setRelatedSearchList] = React.useState([]);
  const[addInput,setAddInput] = React.useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setAddInput([...addInput, formJson.input]);

  };

  console.log(addInput);


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setInput(formJson.input);


  };

  const handleFilter = () => {

    if(input.length === 0)  {
      setRelatedSearchList(movielist);
    } else {
      var filtered = movielist.filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()));
      setRelatedSearchList(filtered);
      movielist =filtered;

      // filter movie list with input typed in
    // setRelatedSearchList to that filtered list
  }
}

useEffect( () => {
  handleFilter();
}, [input])

  useEffect( () => {
    setRelatedSearchList(movielist);
  }, [])


  return (
  <>
  <div>MovieList!</div>
  <hr />
  <div> <InputField addHandler = {handleAdd} /> </div>
  <hr />
   <div> <SearchBar searchHandler = {handleSubmit} /> </div>
    <MovieList movielist = {movielist}
    />
  </>
  );
};
export default App;
