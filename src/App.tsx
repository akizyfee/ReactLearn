import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {
  const todos = [
    new Todo('111'),
    new Todo('222')
  ]
  return (
    <Todos items={todos} />
  );
}

export default App;
