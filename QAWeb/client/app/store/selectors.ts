import { ApplicationState } from './application-state';

export const getUserId = (state: ApplicationState) => state.userProfile.userId;
