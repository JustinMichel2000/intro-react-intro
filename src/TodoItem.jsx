
import React from 'react';
import './App.css'; 

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }) => {
  const handleToggle = () => {
    onToggleTodo(todo.id);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span>{todo.text}</span>
      <button onClick={handleDelete} className="small-delete-button">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;


