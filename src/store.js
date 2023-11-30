// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import jwtMiddleware from './middleware/jwtMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  authReducer,
  /* preloadedState, */ // You can include a preloaded state if needed
  composeEnhancers(applyMiddleware(thunk, jwtMiddleware))
);

export default store;

