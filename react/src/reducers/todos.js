const todo = (state, action) => {
  switch (action.type) {
    case 'POST_TODO':
      return {
        title: action.title,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'POST_TODO':
      return [
        ...state,
        todo(undefined, action),
      ];
    default:
      return state;
  }
};

export default todos;
