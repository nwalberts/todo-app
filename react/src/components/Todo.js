import React from 'react';

const Todo = props => {
  let todo = props.todo

  return(
    <li
      className="todo"
      onClick={onClick}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {todo.title}
    </li>
  );
}

export default Todo;
