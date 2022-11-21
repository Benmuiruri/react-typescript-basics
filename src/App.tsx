import { useState } from 'react';
import { Todos } from './components/Todos';
import Todo from './models/todo';
import { NewTodo } from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} deleteHandler={removeTodoHandler} />
    </div>
  );
}

export default App;
