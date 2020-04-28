import postListReducer from '../../components/reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    username: 'Muffins',
    title: 'I miss friends.',
    body: 'Will you all be my Reddit friends since real ones will give me the Rona?',
    date: 'dummy-string',
    upvotes: 0,
    downvotes: 0,
    id: 1
  };

  const currentState = {
    1: {
      username: 'Muffins',
      title: 'I miss friends.',
      body: 'Will you all be my Reddit friends since real ones will give me the Rona?',
      date: 'dummy-string',
      upvotes: 0,
      downvotes: 0,
      id: 1 },
    2: {
      username: 'Banana',
      title: 'My kid is video chatting his class....',
      body: '... right next to me, so I am going to be quiet for a little bit.',
      date: 'dummy-string',
      upvotes: 2,
      downvotes: 0,
      id: 2
    }
  }
  
  test('Should successfully add new post data to masterPostList', () => {
    const { username, title, body, date, upvotes, downvotes, id } = postData;
    action = {
      type: 'ADD_POST',
      username: username,
      title: title,
      body: body,
      date: date,
      upvotes: upvotes,
      downvotes: downvotes,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        username: username,
        title: title,
        body: body,
        date: date,
        upvotes: upvotes,
        downvotes: downvotes,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
        type: 'DELETE_POST',
        id: "1"
    };
    expect(postListReducer(currentState, action)).toEqual({
        "2": {
            username: 'Banana',
            title: 'My kid is video chatting his class....',
            body: '... right next to me, so I am going to be quiet for a little bit.',
            date: 'dummy-string',
            upvotes: 2,
            downvotes: 0,
            id: 2
    }
    });
  });
});