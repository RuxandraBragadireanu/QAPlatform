import { put, call, take } from 'redux-saga/effects';
import { QuestionActions } from '../store/question.actions';
import { addComment, deleteComment, getTopic } from '../store/question.saga';
import { delay } from 'redux-saga';
import axios from 'axios';
import { topicWithMoreComments } from './topic.data';


describe('Topic saga', () => {

  it('should get topic', () => {
    const responseValue = {
      data: topicWithMoreComments()
    };

    const resultLoadSuccess = topicWithMoreComments();

    const action = {
      payload: {
        id: 5
      }
    };

    const generator = getTopic(action);

    expect(generator.next().value).toEqual(call(axios.get, `/api/generic/topics/${action.payload.id}`));
    expect(generator.next(responseValue).value).toEqual(put(QuestionActions.loadTopicSuccess(resultLoadSuccess)));
    expect(generator.next().done).toBe(true);
  });

  it('should delete comment', () => {
    const action = {
      payload: {
        commentId: 5
      }
    };

    const generator = deleteComment(action);

    expect(generator.next().value).toEqual(call(axios.delete, `/api/generic/comments/${action.payload.commentId}`));
    expect(generator.next().done).toBe(true);
  });

});
