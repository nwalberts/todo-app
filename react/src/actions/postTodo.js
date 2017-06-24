const POST_TODO = "POST_TODO";

let postTodo = (todo) => {
  return {
    type: POST_TODO,
    todo
  }
}
