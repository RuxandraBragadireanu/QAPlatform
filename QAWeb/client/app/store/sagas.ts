import { all } from "redux-saga/effects";
import { questionsSaga } from "../components/Questions/store/questions.saga";
import { questionSaga } from "../components/Question/store/question.saga";
import { createTopicSagas } from "../components/CreateQuestion/store/create-question.saga";
import { loginSaga } from '../components/Login/store/login.saga';
import { navBarSaga } from '../components/NavBar/store/nav-bar.saga';
import history from '../history';
import {signUpSaga} from "../components/Signup/store/signup.saga";
import { profileSaga } from '../components/Profile/store/profile.saga';

export function* rootSaga() {
  try {
    yield all([
      questionsSaga(),
      questionSaga(),
      createTopicSagas(),
      loginSaga(),
      signUpSaga(),
      navBarSaga(),
      profileSaga()
    ])
  } catch (e) {
    if(e.response.status === 403) {
      window.location.href = `${window.location.origin}/login`;
    } else if(e.response.status === 404 || e.response.status === 400) {
      window.location.href = `${window.location.origin}/notFound`;
    } else {
      console.log('Something went wrong in the sagas...');
    }
  }
}
