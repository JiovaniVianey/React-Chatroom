import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from '../reducer/chatReducer';
import authMiddleware from '../middlewares/authMiddleware';
import websocketMiddleware from '../middlewares/websocketMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    websocketMiddleware
    // ici d'autres middlewares
  )
);

const store = createStore(
  // le reducer
  reducer,
  // le enhancer
  enhancer
);

export default store;
