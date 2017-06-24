import React, { Component } from 'react';
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoTitle: '',
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      newTodoTitle: '',
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      id: this.state.newTodoTitle,
      title: this.state.newTodoTitle
    };
    this.props.trackTodo(formPayload);
    this.handleClearForm(event);
  }

  handleTodoChange(event) {
    this.setState({ newTodoTitle: event.target.value })
  }

  render() {
    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.state.newTodoTitle}
          label='New Todo Title'
          name='title'
          handlerFunction={this.handleTodoChange}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default FormContainer;
