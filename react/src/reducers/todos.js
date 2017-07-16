import { POST_TODO, CHANGE_TODO } from '../actions/postTodo';
import { DELETE_TODO } from '../actions/deleteTodo';

const todo = (state = "", action) => {
  switch (action.type) {
    case CHANGE_TODO:
      return action.todo;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case POST_TODO:
      return [
        ...state,
        action.todo
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.title !== action.todoId);
    default:
      return state;
  }
};

export { todo, todos };
