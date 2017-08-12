import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../actions/deleteTodo';
import { toggleTodo } from '../actions/deleteTodo';

import Todo from '../components/Todo'

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let todoItems = this.props.todos.map(todo => {
      let handleDeleteClick = () => {
        this.props.deleteTodoHandler(todo.title)
      }
      return(
        <Todo key={todo.title} todo={todo} handleDeleteClick={handleDeleteClick}/>
      )
    });

    return (
      <div>
        <h3 className="text-center">List of Todos</h3>
        <ul>{todoItems}</ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

let mapDispatchToProps = dispatch => {
  return {
    deleteTodoHandler: (todoId) => dispatch(deleteTodo(todoId)),
    toggleTodoHandler: (todoId) => dispatch(toggleTodo(todoId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
