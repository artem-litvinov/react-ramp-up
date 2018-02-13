import delay from './delay';

class LoginApi {
  static login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(username);
      }, delay);
    });
  }
}

export default LoginApi;
