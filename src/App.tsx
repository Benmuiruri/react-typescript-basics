import { Todos } from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Finish building Ruby Parity Gem'),
  ];

  return (
    <div>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
