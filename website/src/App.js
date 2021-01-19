import React, {useEffect, useState} from "react";
import './App.css';
import logo from './logo.svg';
import TodoForm from "./components/todoform/TodoForm.component";
import TodoList from "./components/todolist/TodoList.component";
import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTools = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTools) {
            setTodos(storageTools);
        }
    }, []);

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        );
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos])

    function addTodo(todo) {
        setTodos([todo, ...todos]);

    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="App">
            <img src={logo} alt="Logo" />
            <Typography className="typography" variant="h1">
                <span>React</span> {"Todo"}
            </Typography>
            <Typography className="typography">
                Simple react todo app Made by <span>Aleksa Cekic</span>.
            </Typography>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos}
                      toggleComplete={toggleComplete}
                      removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;
