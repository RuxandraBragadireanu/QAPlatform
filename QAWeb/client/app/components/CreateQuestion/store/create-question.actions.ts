export class CreateQuestionActions {
  static readonly SAVE_TOPIC = '[CREATE_TOPIC]SAVE_TOPIC';
  static readonly CHANGE_TITLE = '[CREATE_TOPIC]CHANGE_TITLE';
  static readonly CHANGE_DESCRIPTION = '[CREATE_TOPIC]CHANGE_DESCRIPTION';
  static readonly RESET_STATE = '[CREATE_TOPIC]RESET_STATE';
  static readonly LOAD_TOPIC_START = '[CREATE_TOPIC]LOAD_TOPIC_STARTED';
  static readonly LOAD_TOPIC_SUCCEED = '[CREATE_TOPIC]LOAD_TOPIC_SUCCEEDED';

  static saveTopic(title: string, content: string, userId: number = 0) {
    return {
      type: CreateQuestionActions.SAVE_TOPIC,
      payload: {
        title,
        content,
        questionCategory: 2,
        userId,
        isUpdate: false
      }
    }
  }

  static updateTopic(title: string, content: string, id, userId: number = 4) {
    return {
      type: CreateQuestionActions.SAVE_TOPIC,
      payload: {
        id,
        title,
        content,
        questionCategory: 2,
        userId, 
        isUpdate: true
      }
    }
  }

  static changeTitle(title: string) {
    return {
      type: CreateQuestionActions.CHANGE_TITLE,
      payload: {
        title
      }
    }
  }

  static changeDescription(content: string) {
    return {
      type: CreateQuestionActions.CHANGE_DESCRIPTION,
      payload: {
        content
      }
    }
  }

  static resetState() {
    return {
      type: CreateQuestionActions.RESET_STATE
    }
  }

  static loadTopicStart(id) {
    return {
      type: CreateQuestionActions.LOAD_TOPIC_START,
      payload: {
        id
      }
    }
  }
}
