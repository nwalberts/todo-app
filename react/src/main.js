import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import { todo, todos } from './reducers/todos'

// const todos = [
//   { id: 1, title: "Gym", done: false},
//   { id: 2, title: "Foobar", done: false },
//   { id: 3, title: "Homework", done: true }
// ];

const store = createStore(
  combineReducers({
    todo,
    todos
  })
)

$(function() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
