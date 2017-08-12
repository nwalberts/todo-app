import React, { Component } from 'react';
import TextField from '../components/TextField';
import { connect } from 'react-redux';
import { postTodo, changeTodo } from '../actions/postTodo';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    // this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
  }

  // handleClearForm(event) {
  //   event.preventDefault();
  //   this.setState({
  //     newTodoTitle: '',
  //   })
  // }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      title: this.props.todoString,
      completed: false
    };

    this.props.postTodo(formPayload);

    // this.handleClearForm(event);
  }

  handleTodoChange(event) {
    this.props.changeTodo(event.target.value)
  }

  render() {
    // <button className="button" onClick={this.handleClearForm}>Clear</button>
    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.props.todoString}
          label='New Todo Title'
          name='title'
          handlerFunction={this.handleTodoChange}
        />
        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

let mapStateToProps = state => {
  console.log(state)
  return {
    todoString: state.todo
  }
}

let mapDispatchToProps = dispatch => {
  return {
    postTodo: (todo) => dispatch(postTodo(todo)),
    changeTodo: (todoString) => dispatch(changeTodo(todoString))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
