import {all, call, put, takeEvery} from "redux-saga/effects";
import {CreateQuestionActions} from "./create-question.actions";
import axios from 'axios';
import { delay } from 'redux-saga';
import history from '../../../history'
import { getUserData } from '../../../user-data';

export function* createTopicSagas() {
  yield all([
    takeEvery(CreateQuestionActions.SAVE_TOPIC, saveTopic),
    takeEvery(CreateQuestionActions.LOAD_TOPIC_START, loadTopic)
  ]);
}

function* saveTopic(action) {
  yield delay(1000);
  const userData = getUserData();
  delete action.payload.userId;
  if (action.payload.isUpdate) {
    yield call(
      axios.put, `/api/generic/question/update/${action.payload.id}?userId=` + userData.id, 
      action.payload, {
        headers: {
          'Authorization': userData.token
        }
    });   
  } else {
    yield call(
      axios.post, '/api/generic/question/add?userId=' + userData.id, 
      action.payload, {
        headers: {
          'Authorization': userData.token
        }
    });
  }
  history.push('/topics');
}

function* loadTopic(action) {
  yield delay(1000);
  const response = yield call(axios.get, `/api/generic/question/${action.payload.id}`);
  const topic = {
    title: response.data.title,
    content: response.data.content
  };

  yield put({type: CreateQuestionActions.LOAD_TOPIC_SUCCEED, payload: {topic}})
}
