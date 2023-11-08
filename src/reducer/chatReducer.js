import { ADD_MESSAGE } from '../actions/chatActions';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'Super Chat',
      content: 'Salut',
    },
    {
      id: 2,
      author: 'Super Chat',
      content: 'Comment chat va ?',
    },
    {
      id: 3,
      author: 'Super Chat',
      content: "T'as pas des super croquettes ?",
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
