export class QuestionsActions {
  static readonly TOPICS_LOAD_START = '[TOPICS]LOAD_START';
  static readonly TOPICS_LOAD_SUCCESS = '[TOPICS]LOAD_SUCCESS';
  static readonly TOPICS_LOAD_FAIL = '[TOPICS]LOAD_FAIL';
  static readonly TOPICS_DELETE = '[TOPICS]DELETE';
  static readonly TOPICS_LIKE = '[TOPICS]LIKE';

  static loadTopicsStarted() {
    return {
      type: QuestionsActions.TOPICS_LOAD_START
    }
  }

  static loadTopicsSuccess(topics) {
    return {
      type: QuestionsActions.TOPICS_LOAD_SUCCESS,
      payload: {
        topics
      }
    }
  }

  static deleteTopic(id: number) {
    return {
      type: QuestionsActions.TOPICS_DELETE,
      payload: {
        id
      }
    }
  }

  static likeTopic(id: number) {
    return {
      type: QuestionsActions.TOPICS_LIKE,
      payload: {
        id
      }
    }
  }

}
