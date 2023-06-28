import Todos from './components/Todos/Todos';
import Todo from './models/todo';
import AddTodo from './components/AddTodo/AddTodo';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const addTodo = new Todo(todoText);

    setTodos((preTodos)=>{
      return preTodos.concat(addTodo);
    });
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((preTodos)=>{
      return preTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} removeTodoItem={removeTodoHandler}/>
    </div>
  );
}

export default App;
