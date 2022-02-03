export class QuestionActions {
  static readonly TOPIC_LOAD_START = '[TOPIC]LOAD_STARTED';
  static readonly TOPIC_LOAD_SUCCEED = '[TOPIC]LOAD_SUCCEEDED';
  static readonly ADD_COMMENT_START = '[TOPIC]ADD_COMMENT_STARTED';
  static readonly ADD_COMMENT_SUCCEED = '[TOPIC]ADD_COMMENT_SUCCEEDED';
  static readonly EDIT_COMMENT_START = '[TOPIC]EDIT_COMMENT_START';
  static readonly EDIT_COMMENT_SUCCEED = '[TOPIC]EDIT_COMMENT_SUCCEED';
  static readonly DELETE_COMMENT = '[TOPIC]DELETE_COMMENT';

  static loadTopicStart(id: number) {
    return {
      type: QuestionActions.TOPIC_LOAD_START,
      payload: {
        id
      }
    }
  }

  static loadTopicSuccess(topic) {
    return {
      type: QuestionActions.TOPIC_LOAD_SUCCEED,
      payload: {
        topic
      }
    }
  }

  static addCommentStart(topicId: number, comment: string, score: number) {
    return {
      type: QuestionActions.ADD_COMMENT_START,
      payload: {
        topicId,
        comment,
        score
      }
    }
  }

  static editCommentStart(topicId: string, answerId: string, score: number) {
    return {
      type: QuestionActions.EDIT_COMMENT_START,
      payload: {
        topicId,
        answerId,
        score
      }
    }
  }

  static deleteComment(commentId) {
    return {
      type: QuestionActions.DELETE_COMMENT,
      payload: {
        commentId
      }
    }
  }
}
