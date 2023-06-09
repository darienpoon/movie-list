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

