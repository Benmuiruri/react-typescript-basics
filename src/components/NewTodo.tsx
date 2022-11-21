import React, { useRef } from 'react';

export const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoText = textInputRef.current!.value;

    if (todoText.trim().length === 0) {
      return;
    }

    console.log(todoText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={textInputRef} />
      <button type='submit'>ADD TODO</button>
    </form>
  );
};
