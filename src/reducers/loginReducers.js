
import { LOGIN_SUCCESS } from '../constants/actionTypes';

const initialState = { loggedIn: false, username: ''};

export default function loginReducers(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {loggedIn: true, username: action.username})

    default:
      return state;
  }
}
