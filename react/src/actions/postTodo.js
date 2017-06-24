const ADD_TODO = "ADD_TODO";

let addCommentToQuestion = (questionComment) => {
  return {
    type: ADD_TODO,
    questionComment
  }
}
