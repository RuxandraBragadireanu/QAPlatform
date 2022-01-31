import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { QuestionsActions } from "./questions.actions";
import axios from "axios";
import { delay } from "redux-saga";
import { Topic } from "../../../shared/interfaces";
import { ApplicationState } from '../../../store/application-state';
import { getUserId } from '../../../store/selectors';
import { getUserData } from '../../../user-data';

export function* questionsSaga() {
  yield all([
    takeEvery(QuestionsActions.TOPICS_LOAD_START, getTopics),
    takeEvery(QuestionsActions.TOPICS_DELETE, deleteTopic),
  ]);
}

export function* getTopics() {
  yield call(delay, 2000);

  const userId = yield select(getUserId);

  const response = yield call(axios.get, '/api/generic/question');
  const topics: Topic[] = response.data.map((el) => {
    return {
      id: el.id,
      title: el.title,
      content: el.content,
      userName: el.userId,
    }
  });

  yield put({ type: QuestionsActions.TOPICS_LOAD_SUCCESS, payload: {topics} });
}

export function* deleteTopic(action) {
  const userData = getUserData();
  yield call(axios.delete, `/api/generic/question/${action.payload.id}`, {
    headers: {
      'Authorization': userData.token
    }
  });
}

