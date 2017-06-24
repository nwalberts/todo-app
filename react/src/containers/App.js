import React, { Component } from 'react';
import FormContainer from './FormContainer';
import TodoList from '../components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    }
    this.trackTodo = this.trackTodo.bind(this);
  }

  trackTodo(submission) {
    this.setState({ todos: this.state.todos.concat(submission) })
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">Todo App</h1>
          <FormContainer trackTodo={this.trackTodo} />
        </div>
        <div>
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
