import React from 'react';
import { Route, Redirect } from 'react-router';

import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';

const Routes = ({ loggedIn }) => {
  return (
    <div>
      <Route exact path="/" render={() => (
        loggedIn
          ? <Redirect to="/home" />
          : <LoginPage />
      )} />
      <Route exact path='/home' render={() => (
        loggedIn
        ? <HomePage />
        : <Redirect to="/" />
      )}  />
    </div>
  );
};

export default Routes;
