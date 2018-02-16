import { SET_LOGIN_STATUS, LOGOUT_SUCCESS } from '../constants/actionTypes';
import LoginApi from '../api/LoginApi';

export function checkLoginStatus() {
  return function (dispatch) {
    return LoginApi.checkLoginStatus().then((loginStatus) => {
      dispatch(setLoginStatus(loginStatus));
    }).catch(err => { throw (err) });
  }
}

export function setLoginStatus(loginStatus) {
  return { type: SET_LOGIN_STATUS, loginStatus };
}

export function login({ username, password, rememberMe }) {
  return function (dispatch) {
    return LoginApi.login(username, password, rememberMe).then(loginStatus => {
      dispatch(setLoginStatus(loginStatus));
    }).catch(err => { throw (err) });
  }
}

export function logout() {
  return function (dispatch) {
    return LoginApi.logout().then((loginStatus) => {
      dispatch(setLoginStatus(loginStatus));
      dispatch(logoutSuccess());
    }).catch(err => { throw (err) });
  }
}

export function logoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}
