import { questionReducer, initialState } from '../store/question.reducer';
import { QuestionActions } from '../store/question.actions';
import { Topic } from '../../../shared/interfaces';
import { topic, topicWithMoreComments } from './topic.data';

const mockedReducer = questionReducer;

describe('Topics reducer', () => {
  let mockedState;

  beforeEach(() => {
    mockedState = {
      topic: {} as Topic,
      isLoading: false
    };
  });

  it('should match state', () => {
    expect(mockedState).toEqual(initialState);
  });

  it('should set loading to true when load starts', () => {
    const action = {
      type: QuestionActions.TOPIC_LOAD_START
    };

    const result = mockedReducer(mockedState, action);

    expect(result).toEqual({...mockedState, ...{isLoading: true}});
  });

  it('should update topics and set loading to false when loading succeeds', () => {
    const action = {
      type: QuestionActions.TOPIC_LOAD_SUCCEED,
      payload: {
        topic: topic()
      }
    };

    const expectedResult = {
      topic: topic(),
      isLoading: false
    };

    const result = mockedReducer(mockedState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should update topics when a topic is deleted', () => {
    mockedState.topic = topicWithMoreComments();

    const action = {
      type: QuestionActions.DELETE_COMMENT,
      payload: {
        commentId: 200
      }
    };

    const expectedResult = {
      topic: topic(),
      isLoading: false
    };

    const result = mockedReducer(mockedState, action);

    expect(result).toEqual(expectedResult);
  });

});
