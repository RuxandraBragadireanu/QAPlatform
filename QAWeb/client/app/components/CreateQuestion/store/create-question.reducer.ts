import {CreateQuestionActions} from "./create-question.actions";
import { CreateQuestionState } from './create-question-state';

const initialState : CreateQuestionState = {
  title: '',
  content: '',
  url: '',
  isLoading: false,
  isSaving: false
};

export function createQuestionReducer(state = initialState, action) {
  switch (action.type) {
    case CreateQuestionActions.SAVE_TOPIC: {
      return {...state, ...{isSaving: true}};
    }
    case CreateQuestionActions.CHANGE_TITLE: {
      return {...state, ...{title: action.payload.title}}
    }
    case CreateQuestionActions.CHANGE_DESCRIPTION: {
      return {...state, ...{content: action.payload.content}}
    }
    case CreateQuestionActions.LOAD_TOPIC_START: {
      return {...state, ...{isLoading: true, isSaving: false}}
    }
    case CreateQuestionActions.LOAD_TOPIC_SUCCEED: {
      return {...state, ...{title: action.payload.topic.title, content: action.payload.topic.content, isLoading: false}}
    }
    case CreateQuestionActions.RESET_STATE: {
      return {...state, ...{title: '', content: '', url: '', isLoading: false, isSaving: false}}
    }
    default:
      return state;
  }
}
