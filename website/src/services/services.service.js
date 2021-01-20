import axios from "axios";

export const getAllTodos = async () => {
    return (await axios.get('http://localhost:3001/todos')).data;
}

export const saveTodo = async todo => {
    return (await axios.post('http://localhost:3001/todos/', todo)).data;
}

export const deleteTodo = async todoId => {
    await axios.delete(`http://localhost:3001/todos/${todoId}`);
}

export const updateTodo = async todo => {
    return (await axios.put(`http://localhost:3001/todos/${todo.id}`, todo)).data;
}
