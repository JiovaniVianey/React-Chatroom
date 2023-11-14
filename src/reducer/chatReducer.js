import {
  SEND_MESSAGE,
  CHANGE_INPUT_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_SETTINGS_FIELD,
  SAVE_SUCCESSFUL_LOGIN,
  HANDLE_MESSAGE_RECEIVED,
} from '../actions/chatActions';

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
    case SEND_MESSAGE:
      // on vide l'input après la prise en compte du message par le middleware
      return {
        ...state,
        inputMessage: '',
      };
    case SAVE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        nickname: action.nickname,
        // on en profite pour fermer les settings
        isSettingsOpen: false,
        // sécurité : on efface les identifiants du state quand on n'en a plus
        // besoin (par rapport aux failles XSS)
        email: '',
        password: '',
      };
    case HANDLE_MESSAGE_RECEIVED:
      /* on ajoute dans le tableau des messages le message que le serveur nous
        a envoyé sur le websocket */
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
};

export default reducer;
