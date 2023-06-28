import { FC } from "react";
import Todo from "../../models/todo";
import TodoItem from "../TodoItem/TodoItem";
import classes from './Todos.module.css';

const Todos: FC<{items: Todo[]; removeTodoItem: (id: string) => void}> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text} 
                    removeTodoItem={props.removeTodoItem.bind(null, item.id)} 
                />
            ))}
        </ul>
    );
}

export default Todos;