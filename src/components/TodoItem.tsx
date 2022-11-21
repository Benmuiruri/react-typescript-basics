import classes from './TodoItem.module.css';

type todoProps = { text: string; deleteHandler: () => void };

export const TodoItem = (props: todoProps) => {
  return (
    <li className={classes.item}>
      <span>{props.text}</span>
      <button onClick={props.deleteHandler} className={classes.itemBtn}>
        DELETE
      </button>
    </li>
  );
};
