import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import {ListItem, Typography} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import './Todo.style.css';

function Todo({todo, toggleComplete, removeTodo}) {
    function handleCheckboxOnClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveOnClick() {
        removeTodo(todo.id);
    }

    return (
        <ListItem className="todo">
            <Tooltip title="Check">
                <Checkbox
                    style={{
                        color: "#61dafb"
                    }}
                    checked={todo.completed}
                    onClick={handleCheckboxOnClick}
                />
            </Tooltip>
            <Typography
                variant="body1"
                className="todoList"
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >{todo.task}</Typography>
            <Tooltip title="Remove task">
                <IconButton aria-label="delete" onClick={handleRemoveOnClick}>
                    <CloseIcon color="secondary"/>
                </IconButton>
            </Tooltip>
        </ListItem>
    );
}

export default Todo;
