import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import { todo, todos } from './reducers/todos'
import { deleteTodo } from './reducers/deleteTodo'

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
