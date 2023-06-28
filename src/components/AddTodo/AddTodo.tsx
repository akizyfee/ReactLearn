import { FC, FormEvent, useRef, useContext } from "react";
import classes from './AddTodo.module.css'
import { TodosContext } from "../../store/todos-context"

const AddTodo: FC = () => {

    const todosCtx = useContext(TodosContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) =>{
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        
        if(enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo;