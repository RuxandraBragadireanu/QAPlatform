export class SignupActions {
  static readonly CHANGE_USERNAME = '[SIGNUP]CHANGE_USERNAME';
  static readonly CHANGE_FIRSTNAME = '[SIGNUP]CHANGE_FIRSTNAME';
  static readonly CHANGE_LASTNAME = '[SIGNUP]CHANGE_LASTNAME';
  static readonly CHANGE_PASSWORD = '[SIGNUP]CHANGE_PASSWORD';
  static readonly CHANGE_GENDER= '[SIGNUP]CHANGE_GENDER';
  static readonly SIGNUP_START = '[SIGNUP]LOGIN_START';
  static readonly SIGNUP_SUCCEED = '[SIGNUP]LOGIN_SUCCEEDED';

  static changeUserName(userName: string) {
    return {
      type: SignupActions.CHANGE_USERNAME,
      payload: {
        userName
      }
    }
  }

  static changeFirstName(firstName: string) {
    return {
      type: SignupActions.CHANGE_FIRSTNAME,
      payload: {
        firstName
      }
    }
  }

  static changeLastName(lastName: string) {
    return {
      type: SignupActions.CHANGE_LASTNAME,
      payload: {
        lastName
      }
    }
  }

  static changePassword(password: string) {
    return {
      type: SignupActions.CHANGE_PASSWORD,
      payload: {
        password
      }
    }
  }

  static changeGender(gender: boolean) {
    return {
      type: SignupActions.CHANGE_GENDER,
      payload: {
        gender
      }
    }
  }

  static signupStarted(userName: string, password: string) {
    return {
      type: SignupActions.SIGNUP_START,
      payload: {
        userName,
        password
      }
    }
  }

}
