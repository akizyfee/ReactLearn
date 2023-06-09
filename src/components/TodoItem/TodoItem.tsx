import { FC } from "react";
import classes from "./TodoItem.module.css"

const TodoItem: FC<{text: string; removeTodoItem: () => void}> = (props) => {
    return (
        <li className={classes.item} onClick={props.removeTodoItem}>{props.text}</li>
    );
}

export default TodoItem;