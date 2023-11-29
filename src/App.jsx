
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

const LSKEY = "MyTodoApp";

function App() {

  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"));
    return storedTodos || [];
  } 
  );
  

  // const initialTodos = [];
  // const [todos, setTodos] = useState(initialTodos);
  // useEffect(() => {
  //   const storedTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"));
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);

   const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </div>
  );
};

export default App;


