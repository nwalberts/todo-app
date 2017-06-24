import React from 'react';
import Todo from './Todo'

const TodoList = props => {
  let todoItems = props.todos.map(todo => {
    return(
      <Todo key={todo.id} todo={todo}/>
    )
  });

  return (
    <div>
      <h3 className="text-center">List of Todos</h3>
      <ul>{todoItems}</ul>
    </div>
  );
}

export default TodoList;
