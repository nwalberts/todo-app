import React from 'react';

const Todo = ({todo, handleDeleteClick}) => {
  let completed = todo.completed
  return(
    <li
      className="todo"
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
        {todo.title}
      <button className="button" onClick={handleDeleteClick}>
         Delete
      </button>
    </li>
  );
}

export default Todo;
