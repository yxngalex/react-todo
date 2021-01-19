import React, { useState } from 'react';
import Checkbox from "@material-ui/core/Checkbox";

import './todo.style.css';

function Todo({ todo }) {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.value);
    }

    return (
        <div className="todo">
            <Checkbox
                checked={!checked}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <li
                className="todoList"
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >{todo.task}</li>
            <button>X</button>
        </div>
    );
}

export default Todo;