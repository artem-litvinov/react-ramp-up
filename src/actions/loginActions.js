import { SET_LOGIN_STATUS, LOGIN_SUCCESS } from '../constants/actionTypes';
import loginApi from '../api/loginApi';

export function setLoginStatus(username) {
  return { type: SET_LOGIN_STATUS };
}

export function login({ username, password, rememberMe }) {
  return function (dispatch) {
    return loginApi.login(username, password, rememberMe).then(username => {
      dispatch(loginSuccess(username));
    }).catch(err => { throw (err) });
  }
}

export function loginSuccess(username) {
  return { type: LOGIN_SUCCESS, username };
}
