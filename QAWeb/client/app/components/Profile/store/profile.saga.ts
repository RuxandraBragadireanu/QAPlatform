import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ProfileActions } from './profile.actions';
import axios from 'axios';
import { delay } from 'redux-saga';
import { logoutUser } from '../../../user-data';

export function* profileSaga() {
  yield all([
    yield takeEvery(ProfileActions.SAVE_CHANGES_START, saveChanges),
    yield takeEvery(ProfileActions.LOGOUT, logout),
  ]);
}

function* saveChanges(action) {
  try {
    yield call(delay,1000);
    yield call(axios.post, '/api/generic/userProfile/update', {
      username: action.payload.userName,
      password: action.payload.password
    });

    yield put({type: ProfileActions.SAVE_CHANGES_SUCCEED})
  } catch (e) {
    console.log('SIGNUP failed...');
  }
}

function* logout() {
  try {
    logoutUser();
    window.location.href = `${window.location.origin}/`;
  } catch (e) {
    console.log('LOGOUT FAILED');
  }
}

