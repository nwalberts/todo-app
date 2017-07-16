import React from 'react';

const Todo = props => {
  let todo = props.todo

  // style={{textDecoration: completed ? 'line-through' : 'none'}}
  return(
    <li className="todo">
      {todo.title}
    </li>
  );
}

export default Todo;
