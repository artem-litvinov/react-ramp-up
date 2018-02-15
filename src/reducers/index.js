import { combineReducers } from 'redux';
import loginStatus from './loginReducers';
import employees from './peopleReducers';
import myTeam from './myTeamReducers';
import { USER_LOGOUT } from '../constants/actionTypes';

const appReducer = combineReducers({ loginStatus, employees, myTeam })

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
