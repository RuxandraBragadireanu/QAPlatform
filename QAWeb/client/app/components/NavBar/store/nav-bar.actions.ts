export class NavBarActions {
  static readonly LOAD_PROFILE = 'LOAD_PROFILE';
  static readonly LOAD_PROFILE_SUCCEED = 'LOAD_PROFILE_SUCCEEDED';

  static loadProfile() {
    return {
      type: NavBarActions.LOAD_PROFILE
    }
  }

}
