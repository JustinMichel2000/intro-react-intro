
import React, { useRef } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const inputRef = useRef();

  const handleAddTodo = () => {
    const newTodo = inputRef.current.value;
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo);
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button class= "Add_Todo_Button" onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
