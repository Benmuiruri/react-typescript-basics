type todosProps = { todos: string[] };

export const Todos = (props: todosProps) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};
