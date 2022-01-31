import { NavBarActions } from './nav-bar.actions';
import { UserProfileState } from './nav-bar';

const initialState : UserProfileState = {
  userId: 0,
  userName: '',
  isAuthenticated: false,
  isReady: false,
  appTitle: ''
};

export function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case NavBarActions.LOAD_PROFILE:
      return {...state, };
    case NavBarActions.LOAD_PROFILE_SUCCEED: {
      let appTitle = 'Norum - Not a forum';
      return {...state, ...action.payload, ...{appTitle}};
    }
    default:
      return state;
  }
}
