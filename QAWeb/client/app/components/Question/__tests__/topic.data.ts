export function topic() {
  return {
    id: 1,
    title: 'TestTitle1',
    userName: 'TestUsername1',
    comments: [{
      id: 100,
      description: 'TestDescription1',
      user: {
        id: 1000,
        username: 'TestUserName2'
      }
    }]
  };
}

export function topicWithMoreComments() {
  return {
    id: 1,
    title: 'TestTitle1',
    userName: 'TestUsername1',
    comments: [{
      id: 100,
      description: 'TestDescription1',
      user: {
        id: 1000,
        username: 'TestUserName2'
      }
    }, {
      id: 200,
      description: 'TestDescription2',
      user: {
        id: 2000,
        username: 'TestUserName4'
      }
    }]
  };
}
