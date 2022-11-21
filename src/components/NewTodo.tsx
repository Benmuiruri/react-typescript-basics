import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

type newTodoProps = {
  onAddTodo: (todoText: string) => void;
};

export const NewTodo = (props: newTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoText = textInputRef.current!.value;

    if (todoText.trim().length === 0) {
      return;
    }

    props.onAddTodo(todoText);
  };

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={textInputRef} />
      <button type='submit'>ADD TODO</button>
    </form>
  );
};
