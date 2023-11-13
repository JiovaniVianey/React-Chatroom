export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';

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
