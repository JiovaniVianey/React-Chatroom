import {
  ADD_MESSAGE,
  CHANGE_INPUT_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_SETTINGS_FIELD,
  SAVE_SUCCESSFUL_LOGIN,
} from '../actions/chatActions';
import { getNextId } from '../utils';

const initialState = {
  messages: [],
  inputMessage: '',
  isSettingsOpen: true,
  email: '',
  password: '',
  nickname: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };
    case CHANGE_SETTINGS_FIELD:
      // si c'est le champ email alors on place la nouvelle valeur dans email
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      // sinon on place dans password
      return {
        ...state,
        password: action.newValue,
      };
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
        author: state.nickname,
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
    case SAVE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        nickname: action.nickname,
        isSettingsOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
