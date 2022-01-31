import {QuestionsActions} from "./questions.actions";
import { QuestionsState } from './questions-state';
import { Topic } from '../../../shared/interfaces';

export const initialState : QuestionsState = {
  topics: [] as Topic[],
  isLoading: false
};

export function questionsReducer(state : any = initialState, action: any) {
  switch (action.type) {
    case QuestionsActions.TOPICS_LOAD_START: {
      return {...state, ...{isLoading: true}}
    }
    case QuestionsActions.TOPICS_LOAD_SUCCESS: {
      return {...state, ...{topics: action.payload.topics, isLoading: false}}
    }
    case QuestionsActions.TOPICS_LOAD_FAIL: {
      return state;
    }
    case QuestionsActions.TOPICS_DELETE: {
      return {...state, ...{topics: state.topics.filter(topic => topic.id !== action.payload.id)}};
    }
    case QuestionsActions.TOPICS_LIKE: {
      const topics = state.topics.map(topic => {
        return topic.id === action.payload.id
          ? {...topic, ...{
              isLiked: !topic.isLiked,
              numberOfLikes: topic.numberOfLikes + (topic.isLiked ? -1 : 1)
          }}
          : topic
      });

      return {...state, ...{topics}}
    }
    default:
      return state;
  }
}
