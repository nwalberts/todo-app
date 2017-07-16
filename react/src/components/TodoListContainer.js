import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo'

const TodoListContainer = props => {
  let todoItems = props.todos.map(todo => {
    return(
      <Todo key={todo.title} todo={todo} />
    )
  });

  return (
    <div>
      <h3 className="text-center">List of Todos</h3>
      <ul>{todoItems}</ul>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}



// deleteNominationHandler: (nominationId) => dispatch(deleteNomination(nominationId)),



export default connect(mapStateToProps)(TodoListContainer);
