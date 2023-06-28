import { createContext, FC, useState, ReactNode } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodosContextObj>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: FC<{ children: ReactNode }> = (props) => {
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

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
};

export default TodosContextProvider;