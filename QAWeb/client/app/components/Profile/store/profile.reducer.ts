import { ProfileActions } from './profile.actions';
import { ProfileState } from './profile-state';

const initialState : ProfileState = {
  userName: '',
  password: '',
  error: '',
  isLoading: false,
  isUpdated: false,
  topics: []
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ProfileActions.CHANGE_USERNAME: {
      return {...state, ...{userName: action.payload.userName, isUpdated: false}}
    }
    case ProfileActions.CHANGE_PASSWORD: {
      return {...state, ...{password: action.payload.password, isUpdated: false}}
    }
    case ProfileActions.SAVE_CHANGES_START: {
      return {...state, ...{isLoading: true, isUpdated: false}};
    }
    case ProfileActions.SAVE_CHANGES_SUCCEED: {
      return {...state, ...{isLoading: false, isUpdated: true}}
    }
    case ProfileActions.LOAD_TOPICS_START: {
      return {...state, ...{isLoading: true}}
    }
    case ProfileActions.LOAD_TOPICS_SUCCESS: {
      return {...state, ...{isLoading: false, topics: action.payload.topics}}
    }
    default:
      return state;
  }
}
