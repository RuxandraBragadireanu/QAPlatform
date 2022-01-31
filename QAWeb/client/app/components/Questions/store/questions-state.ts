import { Topic } from '../../../shared/interfaces';

export interface QuestionsState {
  topics: Topic[],
  isLoading: boolean
}
