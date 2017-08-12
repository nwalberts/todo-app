import { POST_TODO, CHANGE_TODO } from '../actions/postTodo';
import { DELETE_TODO } from '../actions/deleteTodo';

const todo = (state = "", action) => {
  switch (action.type) {
    case CHANGE_TODO:
      return action.todo;

    // case ADD_TODO:
    //   return {
    //     id: action.id,
    //     text: action.text,
    //     completed: false,
    //   };
    // case TOGGLE_TODO:
    //   if (state.id !== action.id) {
    //     return state;
    //   }
    //   return {
    //     ...state,
    //     completed: !state.completed,
    //   };
    //
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

    // case ADD_TODO:
    //   return [
    //     ...state,
    //     todo(undefined, action),
    //   ];
    // case TOGGLE_TODO:
    //   return state.map(t =>
    //     todo(t, action)
    //   );

    case DELETE_TODO:
      return state.filter(todo => todo.title !== action.todoId);
    default:
      return state;
  }
};

export { todo, todos };
