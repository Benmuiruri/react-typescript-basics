import Todo from '../models/todo';

type todosProps = { todos: Todo[] };

export const Todos = (props: todosProps) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
