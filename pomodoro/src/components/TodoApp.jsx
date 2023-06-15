import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';

const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo._id}>
        <Link to={`/todos/${todo._id}`}>{todo.title}</Link>
        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
      </li>
    ))}
  </ul>
);

const TodoDetail = ({ todo }) => (
  <div>
    <h2>{todo.title}</h2>
    <p>Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>
  </div>
);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async () => {
    try {
      const response = await axios.post('/api/todos', { title, completed: false });
      setTodos([...todos, response.data]);
      setTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              <button onClick={addTodo}>Add Todo</button>
              <TodoList todos={todos} deleteTodo={deleteTodo} />
            </div>
          }
        />
        <Route
          path="/todos/:id"
          element={
            <Route
              path="/"
              element={({ match }) => {
                const todo = todos.find(todo => todo._id === match.params.id);
                return todo ? <TodoDetail todo={todo} /> : null;
              }}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default TodoApp;
