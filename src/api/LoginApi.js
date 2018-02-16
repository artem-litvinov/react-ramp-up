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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const username = localStorage.getItem('username');
        if (username) {
          resolve({ loggedIn: true, username: username });
        }
        resolve({ loggedIn: false });
      }, delay);
    });
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
