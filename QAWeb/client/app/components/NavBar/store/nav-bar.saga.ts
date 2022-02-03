import { all, call, put, takeEvery } from 'redux-saga/effects';
import { NavBarActions } from './nav-bar.actions';
import { getUserData } from '../../../user-data';

export function* navBarSaga() {
  yield all([
    yield takeEvery(NavBarActions.LOAD_PROFILE, getProfileInfo)
  ])
}

function* getProfileInfo() {
  try {
    const userData = getUserData();

    const payload = {
      ...getUserData(),
      isAuthenticated: true,
      userName: userData.username,
      firstName: userData.username,
      lastName: userData.username,
      userId: userData.id
    }
  
    yield put({type: NavBarActions.LOAD_PROFILE_SUCCEED, payload})
  } catch(e) {
    console.log('User not logged...');
  }
  
}
