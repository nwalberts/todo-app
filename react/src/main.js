import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'

const todos = [
  { id: 1, title: "Gym", done: false},
  { id: 2, title: "Foobar", done: false },
  { id: 3, title: "Homework", done: true }
];

$(function() {
  ReactDOM.render(
    <App todos={todos}/>,
    document.getElementById('app')
  );
});
