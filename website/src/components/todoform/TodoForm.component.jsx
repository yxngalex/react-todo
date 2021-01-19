import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(event) {
        setTodo({ ...todo, task: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="task"
                variant="filled"
                type="text"
                label="Todo"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit" color="primary" variant="contained">Add</Button>
        </form>
    );
}

export default TodoForm;