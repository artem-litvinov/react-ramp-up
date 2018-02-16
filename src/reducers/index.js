import { combineReducers } from 'redux';
import loginStatus from './loginReducers';
import employees from './peopleReducers';
import myTeam from './myTeamReducers';
import { LOGOUT_SUCCESS } from '../constants/actionTypes';

const appReducer = combineReducers({ loginStatus, employees, myTeam })

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
