import React from 'react';

export const NewTodo = () => {

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' />
      <button type='submit'>ADD TODO</button>
    </form>
  );
};