export function callResponse() {
  return {
    data: [{
      id: 1,
      title: 'TestTitle1',
      user: {
        username: 'TestUsername1'
      },
      userLikesTopic: [{
        userId: 1
      }, {
       userId: 2
      }]
    }, {
      id: 2,
      title: 'TestTitle2',
      user: {
        username: 'TestUsername2'
      },
      userLikesTopic: [{
        userId: 2
      }]
    }]
  }
}

export function expectedResult() {
  return [{
    id: 1,
    title: 'TestTitle1',
    userName: 'TestUsername1',
    numberOfLikes: 2,
    isLiked: true
  }, {
    id: 2,
    title: 'TestTitle2',
    userName: 'TestUsername2',
    numberOfLikes: 1,
    isLiked: false
  }];
}
