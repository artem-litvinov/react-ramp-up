import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../constants/actionTypes';

export default function loginReducers(state = {}, action) {
  switch (action.type) {
    case ADD_TO_TEAM: {
      return {
        ...state,
        [action.employeeLogin]:true
      };
    }

    case REMOVE_FROM_TEAM: {
      const newState = { ...state };
      delete newState[action.employeeLogin];
      return newState;
    }

    default:
      return state;
  }
}
