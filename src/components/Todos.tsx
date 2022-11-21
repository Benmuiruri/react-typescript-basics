import { useContext } from 'react';
import { TodoItem } from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

export const Todos = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          deleteHandler={todosCtx.removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};
