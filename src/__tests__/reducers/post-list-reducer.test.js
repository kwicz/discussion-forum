import postListReducer from '../../components/reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    title: 'I miss friends.',
    body: 'Will you all be my Reddit friends since real ones will give me the Rona?',
    upvotes: 0,
    downvotes: 0,
    id: 1
  };

  const currentState = {
    1: {
      title: 'I miss friends.',
      body: 'Will you all be my Reddit friends since real ones will give me the Rona?',
      upvotes: 0,
      downvotes: 0,
      id: 1 },
    2: {
      title: 'My kid is video chatting his class....',
      body: '... right next to me, so I am going to be quiet for a little bit.',
      upvotes: 2,
      downvotes: 0,
      id: 2
    }
  }
  
  test('Should successfully add new post data to masterPostList', () => {
    const { title, body, upvotes, downvotes, id } = postData;
    action = {
      type: 'ADD_POST',
      title: title,
      body: body,
      upvotes: upvotes,
      downvotes: downvotes,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        body: body,
        upvotes: upvotes,
        downvotes: downvotes,
        id: id
      }
    });
  });
})