export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';

export const addMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  value: newValue,
});
