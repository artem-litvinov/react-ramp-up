import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';

const Routes = ({ loggedIn }) => {
  return (
    <div>
      <Route exact path="/" render={() => (
        loggedIn
          ? <Redirect push to="/home" />
          : <Redirect push to="/login" />
      )} />
      <Route exact path="/login" render={() => (
        loggedIn
          ? <Redirect push to="/home" />
          : <LoginPage />
      )} />
      <Route exact path="/home" render={() => (
        loggedIn
          ? <HomePage />
          : <Redirect push to="/login" />
      )}/>
    </div>
  );
};

export default Routes;
