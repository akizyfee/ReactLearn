import { FC, useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../../store/todos-context"

const Todos: FC = () => {

    const todosCtx = useContext(TodosContext)

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text} 
                    removeTodoItem={todosCtx.removeTodo.bind(null, item.id)} 
                />
            ))}
        </ul>
    );
}

export default Todos;