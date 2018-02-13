import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant'

import rootReducer from '../reducers';

export default function counfigureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, immutableStateInvariantMiddleware()));
}
