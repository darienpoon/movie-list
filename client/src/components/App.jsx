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
  const[addInput,setAddInput] = React.useState([]);


  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setAddInput([...addInput, formJson.input]);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setInput(formJson.input);
  };
  const handleFilter = () => {

      var filtered = addInput.filter((movie) => movie.toLowerCase().includes(input.toLowerCase()));
      setRelatedSearchList(filtered);
      setAddInput(filtered);

}


useEffect( () => {
  handleFilter();
}, [input])


  return (
  <>
  <div>MovieList!</div>
  <hr />
  <div> <InputField addHandler = {handleAdd} /> </div>
  <hr />
   <div> <SearchBar searchHandler = {handleSubmit} /> </div>
    <MovieList addInput = {addInput} relatedSearchList = {relatedSearchList}
    />
  </>
  );
};
export default App;

