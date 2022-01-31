import {QuestionActions} from "./question.actions";
import { QuestionState } from './question-state';
import { Topic } from '../../../shared/interfaces';
import { deepCopy } from '../../../shared/extensions';

export  const initialState : QuestionState = {
  topic: {} as Topic,
  isLoading: false
};

export function questionReducer(state = initialState, action) {
  switch (action.type) {
    case QuestionActions.TOPIC_LOAD_START: {
      return {...state, ...{isLoading: true}}
    }
    case QuestionActions.TOPIC_LOAD_SUCCEED: {
      return {...state, ...{isLoading: false, topic: action.payload.topic}}
    }
    case QuestionActions.ADD_COMMENT_START: {
      return {...state, ...{isLoading: true}}
    }
    case QuestionActions.DELETE_COMMENT: {
      let newState : QuestionState = deepCopy(state);
      newState.topic.comments = newState.topic.comments.filter(comment => comment.id !== action.payload.commentId);
      return {...state, ...newState}
    }
    default:
      return state;
  }
}
