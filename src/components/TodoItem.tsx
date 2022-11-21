import classes from './TodoItem.module.css';

type todoProps = { text: string };

export const TodoItem = (props: todoProps) => {
  return <li className={classes.item}>{props.text}</li>;
};
