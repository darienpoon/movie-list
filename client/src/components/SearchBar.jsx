import React from 'react';

const SearchBar = ({searchHandler}) => {

return (
  <>
    <form onSubmit = {searchHandler}>
      <input name="input" placeholder ="Search..." />
    <button type="submit">Go!</button>
    </form>
  </>
)




}

export default SearchBar;


{/* <form onSubmit = {searchHandler}>
      <input  name="searchMovie" placeholder ="Search..." />
    <button type="submit">Go!</button>
    </form> */}