import React from 'react';

const Todo = props => {
  let todo = props.todo

  return(
    <li className="todo">
      <span className="title">{todo.title}</span>
    </li>
  );
}

export default Todo;
