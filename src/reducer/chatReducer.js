import { ADD_MESSAGE, CHANGE_INPUT_MESSAGE } from '../actions/chatActions';
import { getNextId } from '../utils';

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
  inputMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.value,
      };
    case ADD_MESSAGE:
      if (state.inputMessage.trim().length === 0) {
        // /!\ tous les cases d'un reducer, et tous leurs if/else doivent retourner
        // un state, sinon on aura un state "undefined" dans le store

        // on n'a pas de traitement à appliquer, on retourne le state actuel
        return state;
      }

      // créer un message
      // eslint-disable-next-line no-case-declarations
      const newMessage = {
        id: getNextId(state.messages),
        author: 'Super Chat',
        content: state.inputMessage,
      };

      // eslint-disable-next-line no-case-declarations
      const messagesUpdated = [...state.messages, newMessage];

      return {
        ...state,
        messages: messagesUpdated,
        // on en profite pour vider le contenu de l'input
        inputMessage: '',
      };
    default:
      return state;
  }
};

export default reducer;
