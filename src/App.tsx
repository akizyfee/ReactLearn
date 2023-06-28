import Todos from './components/Todos/Todos';
import AddTodo from './components/AddTodo/AddTodo';
import TodosContextProvider from './store/todos-context';

const App = () => {

  return (
    <TodosContextProvider>
      <AddTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
