import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant'

import rootReducer from '../reducers';

export default function counfigureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk, immutableStateInvariantMiddleware())));
}
