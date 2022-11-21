import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

export const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoText = textInputRef.current!.value;

    if (todoText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(todoText);
  };

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={textInputRef} />
      <button type='submit'>ADD TODO</button>
    </form>
  );
};
