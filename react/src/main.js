import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './containers/App'

// const todos = [
//   { id: 1, title: "Gym", done: false},
//   { id: 2, title: "Foobar", done: false },
//   { id: 3, title: "Homework", done: true }
// ];

let store = createStore(todoApp)

$(function() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
