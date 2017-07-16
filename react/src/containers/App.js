import React, { Component } from 'react';
import FormContainer from './FormContainer';
import TodoListContainer from './TodoListContainer';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">Todo App</h1>
          <FormContainer />
          <TodoListContainer />
        </div>
        <div>
        </div>
      </div>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   };
// }

// export default connect(mapStateToProps)(App);
export default App
