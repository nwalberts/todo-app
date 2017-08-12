const TOGGLE_TODO = "TOGGLE_TODO";

let toggleTodo = (todoTitle) => {
  return {
    type: TOGGLE_TODO,
    todoId: todoTitle
  }
}

export {
  TOGGLE_TODO,
}

export {
  toggleTodo,
}
