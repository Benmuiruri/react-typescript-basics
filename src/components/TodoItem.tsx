type todoProps = { text: string };

export const TodoItem = (props: todoProps) => {
  return <li>{props.text}</li>;
};
