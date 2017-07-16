import React from 'react';

const Todo = ({todo, handleDeleteClick}) => {
   // style={{textDecoration: completed ? 'line-through' : 'none'}}
  return(
    <li className="todo">
      {todo.title}  <button className="button" onClick={handleDeleteClick}> Delete </button>
    </li>
  );
}

export default Todo;
