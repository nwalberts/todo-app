const DELETE_TODO = "DELETE_TODO";

let deleteTodo = (todoTitle) => {
  return {
    type: DELETE_TODO,
    todoId: todoTitle
  }
}

export {
  DELETE_TODO,
}

export {
  deleteTodo,
}
