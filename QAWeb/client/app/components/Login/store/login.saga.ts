import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LoginActions } from './login.actions';
import axios from 'axios';
import { saveUserData } from '../../../user-data';

export function* loginSaga() {
  yield all([
    yield takeEvery(LoginActions.LOGIN_START, login)
  ]);
}

function* login(action) {
  console.log('logging in...');
  try {
    const { data } = yield call(axios.post, '/auth/login', {
      username: action.payload.userName,
      password: action.payload.password
    });

    saveUserData(data);
    window.location.href = `${window.location.origin}/topics`;
  } catch (e) {
    yield put({type: LoginActions.LOGIN_FAIL, payload: {badCredentials: false, userName: ''}});
  }
}
