import delay from './delay';

class LoginApi {
  static login(username, password, rememberMe) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (rememberMe) {
          localStorage.setItem("username", username);
        }
        resolve({ loggedIn: true, username: username });
      }, delay);
    });
  }

  static checkLoginStatus() {
    const username = localStorage.getItem('username');
    return { loggedIn: !!username, username: username };
  }

  static logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.removeItem('username');
        resolve({ loggedIn: false, username: '' });
      }, delay);
    });
  }
}

export default LoginApi;
