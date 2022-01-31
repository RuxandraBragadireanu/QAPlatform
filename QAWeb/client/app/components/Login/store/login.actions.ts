export class LoginActions {
  static readonly CHANGE_USERNAME = '[LOGIN]CHANGE_USERNAME';
  static readonly CHANGE_PASSWORD = '[LOGIN]CHANGE_PASSWORD';
  static readonly LOGIN_START = '[LOGIN]LOGIN_START';
  static readonly LOGIN_SUCCEED = '[LOGIN]LOGIN_SUCCEEDED';
  static readonly LOGIN_FAIL = '[LOGIN]LOGIN_FAILED';

  static changeUserName(userName: string) {
    return {
      type: LoginActions.CHANGE_USERNAME,
      payload: {
        userName
      }
    }
  }

  static changePassword(password: string) {
    return {
      type: LoginActions.CHANGE_PASSWORD,
      payload: {
        password
      }
    }
  }

  static loginStarted(userName: string, password: string) {
    return {
      type: LoginActions.LOGIN_START,
      payload: {
        userName,
        password
      }
    }
  }

}
