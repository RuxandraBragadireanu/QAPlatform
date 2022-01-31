export class ProfileActions {
  static readonly CHANGE_USERNAME = '[PROFILE]CHANGE_USERNAME';
  static readonly CHANGE_PASSWORD = '[PROFILE]CHANGE_PASSWORD';
  static readonly SAVE_CHANGES_START = '[PROFILE]LOGIN_START';
  static readonly SAVE_CHANGES_SUCCEED = '[PROFILE]LOGIN_SUCCEEDED';
  static readonly LOGOUT = '[PROFILE]LOGOUT';
  static readonly LOAD_TOPICS_START = '[PROFILE]LOAD_TOPICS_START';
  static readonly LOAD_TOPICS_SUCCESS = '[PROFILE]LOAD_TOPICS_SUCCESS';

  static changeUserName(userName: string) {
    return {
      type: ProfileActions.CHANGE_USERNAME,
      payload: {
        userName
      }
    }
  }

  static changePassword(password: string) {
    return {
      type: ProfileActions.CHANGE_PASSWORD,
      payload: {
        password
      }
    }
  }

  static saveChangesStarted(userName: string, password: string) {
    return {
      type: ProfileActions.SAVE_CHANGES_START,
      payload: {
        userName,
        password
      }
    }
  }

  static loadTopicStarted() {
    return {
      type: ProfileActions.LOAD_TOPICS_START,
    }
  }

  static logout() {
    return {
      type: ProfileActions.LOGOUT
    }
  }

}
