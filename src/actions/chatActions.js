export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_SUCCESSFUL_LOGIN = 'SAVE_SUCCESSFUL_LOGIN';

export const addMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  value: newValue,
});

export const toggleSettings = () => {
  return {
    type: TOGGLE_SETTINGS,
  };
};

export const changeSettingsField = (newValue, identifier) => ({
  type: CHANGE_SETTINGS_FIELD,
  newValue, // équivalent à newValue: newValue
  identifier, // équivalent à identifier: identifier
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveSuccessfulLogin = (nickname) => ({
  type: SAVE_SUCCESSFUL_LOGIN,
  nickname, // nickname: nickname
});
