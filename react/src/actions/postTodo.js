const POST_TODO = "POST_TODO";
const CHANGE_TODO = "CHANGE_TODO";

export {
  POST_TODO,
  CHANGE_TODO
}

let changeTodo = (todo) => {
  return {
    type: CHANGE_TODO,
    todo
  }
}

let postTodo = (todo) => {
  return {
    type: POST_TODO,
    todo
  }
}

export {
  postTodo,
  changeTodo
}
