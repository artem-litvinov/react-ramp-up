import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../constants/actionTypes';

export default function loginReducers(state = {}, action) {
  switch (action.type) {
    case ADD_TO_TEAM: {
      const newState = Object.assign({}, state);
      newState[action.employeeLogin] = true;
      return newState;
    }

    case REMOVE_FROM_TEAM: {
      const newState = Object.assign({}, state);
      newState[action.employeeLogin] = false;
      return newState;
    }

    default:
      return state;
  }
}
