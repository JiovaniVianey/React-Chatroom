import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import reducer from '../reducer/chatReducer';

const store = createStore(
  // le reducer
  reducer,
  // le enhancer
  devToolsEnhancer()
);

export default store;
