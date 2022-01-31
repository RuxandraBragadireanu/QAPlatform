import { combineReducers } from 'redux';
import { questionsReducer } from "../components/Questions/store/questions.reducer";
import { questionReducer } from "../components/Question/store/question.reducer";
import { createQuestionReducer } from '../components/CreateQuestion/store/create-question.reducer';
import { loginReducer } from '../components/Login/store/login.reducer';
import { navBarReducer } from '../components/NavBar/store/nav-bar.reducer';
import {signupReducer} from "../components/Signup/store/signup.reducer";
import { profileReducer } from '../components/Profile/store/profile.reducer';

export default combineReducers({
  topics: questionsReducer,
  topic: questionReducer,
  createTopic: createQuestionReducer,
  login: loginReducer,
  signup: signupReducer,
  userProfile: navBarReducer,
  profile: profileReducer
})
