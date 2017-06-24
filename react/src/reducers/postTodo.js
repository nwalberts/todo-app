import {
  POST_QUESTION_COMMENT_REQUEST,
  POST_QUESTION_COMMENT_REQUEST_SUCCESS,
  POST_QUESTION_COMMENT_REQUEST_FAILURE
} from '../actions/postQuestionComment';

let initialState = {
  isPostingQuestionComment: false
}

const postQuestionComment = (state = initialState, action) => {
  switch(action.type) {
    case POST_QUESTION_COMMENT_REQUEST:
      return Object.assign({}, state, {
        isPostingQuestionComment: true
      });
    case POST_QUESTION_COMMENT_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isPostingQuestionComment: false
      });
    case POST_QUESTION_COMMENT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isPostingQuestionComment: false
      });
    default:
      return state;
  }
}

export default postQuestionComment;
