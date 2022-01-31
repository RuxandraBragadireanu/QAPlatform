import { QuestionsState } from '../components/Questions/store/questions-state';
import { QuestionState } from '../components/Question/store/question-state';
import { CreateQuestionState } from '../components/CreateQuestion/store/create-question-state';
import { LoginState } from '../components/Login/store/login-state';
import { UserProfileState } from '../components/NavBar/store/nav-bar';
import { SignupState } from "../components/Signup/store/signup-state";
import { ProfileState } from '../components/Profile/store/profile-state';

export interface ApplicationState {
  topics: QuestionsState,
  topic: QuestionState,
  createTopic: CreateQuestionState,
  login: LoginState,
  signup: SignupState,
  userProfile: UserProfileState,
  profile: ProfileState
}
