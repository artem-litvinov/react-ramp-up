
import { SET_LOGIN_STATUS } from '../constants/actionTypes';

const initialState = { loggedIn: false, username: ''};

export default function loginReducers(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      debugger
      return Object.assign({}, state, action.loginStatus);

    default:
      return state;
  }
}
