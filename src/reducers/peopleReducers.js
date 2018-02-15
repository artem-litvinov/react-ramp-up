import { LOAD_EMPLOYEES_SUCCESS } from '../constants/actionTypes';

export default function loginReducers(state = [], action) {
  switch (action.type) {
    case LOAD_EMPLOYEES_SUCCESS:
      return action.employees;

    default:
      return state;
  }
}
