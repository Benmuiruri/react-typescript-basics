import { Todos } from './components/Todos';
import Todo from './models/todo';
import { NewTodo } from './components/NewTodo';

function App() {

  const addTodoHandler = (todoText: string) => {};


  const todos = [
    new Todo('Learn React'),
    new Todo('Work out'),
    new Todo('Finish building Ruby Parity Gem'),
  ];

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
