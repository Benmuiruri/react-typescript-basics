import Todo from '../models/todo';
import { TodoItem } from './TodoItem';

type todosProps = { todos: Todo[] };

export const Todos = (props: todosProps) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};
