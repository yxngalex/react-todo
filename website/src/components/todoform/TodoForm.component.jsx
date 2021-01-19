import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Button, TextField, Tooltip} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import './TodoForm.style.css';

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(event) {
        setTodo({...todo, task: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4()});
            setTodo({...todo, task: ""});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="task"
                type="text"
                label="Task"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Tooltip title="Add a new task">
                <Button className="addBtn" type="submit">
                    <AddIcon/>
                </Button>
            </Tooltip>
        </form>
    );
}

export default TodoForm;
