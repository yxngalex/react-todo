import React, { useEffect, useState } from "react";
import './App.css';
import TodoForm from "./components/todoform/TodoForm.component";
import TodoList from "./components/todolist/TodoList.component";

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTools = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTools) {
      setTodos(storageTools);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])
  function addTodo(todo) {
    setTodos([todo, ...todos]);

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo App</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
