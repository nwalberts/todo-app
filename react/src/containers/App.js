import React, { Component } from 'react';
import FormContainer from './FormContainer';
import TodoList from '../components/TodoList';

import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // <TodoList todos={this.props.todos} />
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">Todo App</h1>
          <FormContainer />
        </div>
        <div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}



export default connect(mapStateToProps)(App);
