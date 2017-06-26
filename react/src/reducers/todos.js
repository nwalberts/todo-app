import { POST_TODO, CHANGE_TODO } from '../actions/postTodo';

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
    default:
      return state;
  }
};

export { todo, todos };
