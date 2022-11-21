import Todo from '../models/todo';
import { TodoItem } from './TodoItem';
import classes from './Todos.module.css';

type todosProps = { todos: Todo[] };

export const Todos = (props: todosProps) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};
