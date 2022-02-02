import {all, call, put, takeEvery} from "redux-saga/effects";
import {QuestionActions} from "./question.actions";
import axios from "axios";
import { delay } from 'redux-saga';
import { getUserData } from '../../../user-data';

export function* questionSaga() {
  yield all([
    takeEvery(QuestionActions.TOPIC_LOAD_START, getTopic),
    takeEvery(QuestionActions.ADD_COMMENT_START, addComment),
    takeEvery(QuestionActions.DELETE_COMMENT, deleteComment)
  ]);
}

export function* getTopic(action: any) {
  const result = yield call(axios.get, `/api/generic/question/${action.payload.id}`);

  const topic = result.data;

  yield put({ type: QuestionActions.TOPIC_LOAD_SUCCEED, payload: { topic } });
}

export function* addComment(action: any) {
  const userData = getUserData();
  yield call(
    axios.post, '/api/generic/answer/add?userId=' + userData.id, {
      content: action.payload.comment,
      questionId: action.payload.topicId,
      score: 0
    }, {
      headers: {
        'Authorization': userData.token
      }
  });

  yield delay(1000);
  yield put({ type: QuestionActions.TOPIC_LOAD_START, payload: { id: action.payload.topicId } });
}

export function* deleteComment(action: any) {
  const userData = getUserData();
  yield call(axios.delete, `/api/generic/answer/${action.payload.commentId}`, {
    headers: {
      'Authorization': userData.token
    }});
}
