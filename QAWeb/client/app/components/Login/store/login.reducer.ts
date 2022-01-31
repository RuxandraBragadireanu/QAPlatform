import { LoginActions } from './login.actions';
import { LoginState } from './login-state';

const initialState : LoginState = {
  userName: '',
  password: '',
  error: '',
  badCredentials: false
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LoginActions.CHANGE_USERNAME: {
      return {...state, ...{userName: action.payload.userName, badCredentials: false}}
    }
    case LoginActions.CHANGE_PASSWORD: {
      return {...state, ...{password: action.payload.password, badCredentials: false}}
    }
    case LoginActions.LOGIN_START: {
      return {...state}
    }
    case LoginActions.LOGIN_SUCCEED: {
      return {...state, ...{badCredentials: false}}
    }
    case LoginActions.LOGIN_FAIL: {
      return {...state, ...{badCredentials: true}}
    }
    default:
      return state;
  }
}
