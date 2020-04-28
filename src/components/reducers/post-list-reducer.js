export default (state = {}, action) => {
  const { username, title, body, date, upvotes, downvotes, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
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
    case 'DELETE_POST':
      const newState = { ...state };
      delete newState[id];
      return newState;
  default:
    return state;
  }
};