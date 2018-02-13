import { LOGIN_SUCCESS } from '../constants/actionTypes';
import loginApi from '../api/loginApi';

export function loginSuccess(username) {
  return { type: LOGIN_SUCCESS, username };
}

export function login(username, password) {
  return function (dispatch) {
    return loginApi.login(username, password).then(username => {
      dispatch(loginSuccess(username));
    }).catch(err => { throw (err) });
  }
}
