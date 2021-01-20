import React, {useEffect, useState} from "react";
import './App.css';
import logo from './logo.svg';
import TodoForm from "./components/todoform/TodoForm.component";
import TodoList from "./components/todolist/TodoList.component";
import Typography from "@material-ui/core/Typography";
import {deleteTodo, getAllTodos, saveTodo, updateTodo} from "./services/services.service";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getAllTodos().then(setTodos);
    }, []);

    useEffect( () => {
        console.log(todos);
    }, [todos])

    function toggleComplete(id) {
        const singleTodo = todos.find(_todo => _todo.id === id);
        singleTodo.completed = !singleTodo.completed;
        updateTodo(singleTodo).then(_todo => {
            setTodos(
                todos.map(todo => {
                    if (todo.id === id) {
                        return _todo;
                    }
                    return todo;
                })
            );
        });

    }

    function addTodo(todoToBeSaved) {
        saveTodo(todoToBeSaved)
            .then(savedTodo => setTodos([savedTodo, ...todos]));
    }

    function removeTodo(id) {
        deleteTodo(id)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)));
    }

    return (
        <div className="App">
            <img src={logo} alt="Logo"/>
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
