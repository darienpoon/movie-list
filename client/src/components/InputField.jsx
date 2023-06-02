import React from 'react';

const InputField = ({addHandler}) => {

  return (
    <>
      <form onSubmit = {addHandler}>
        <input name="input" placeholder ="Add movie title here..." />
      <button type="submit">Add!</button>
      </form>
    </>
  )



}



export default InputField;