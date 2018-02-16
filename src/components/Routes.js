import React from 'react';
import { Route, Redirect } from 'react-router';

import LoginPage from './login/LoginPage';
import HomePage from './home/HomePage';
import PeoplePage from './people/PeoplePage';
import MyTeamPage from './myTeam/MyTeamPage';

const Routes = ({ loggedIn }) => {
  return (
    <div>
      <Route path='/' render={() => (
        loggedIn
          ? <Redirect push to='/home' />
          : <Redirect push to='/login' />
      )} />
      <Route exact path='/login' render={() => (
        loggedIn
          ? <Redirect push to='/home' />
          : <LoginPage />
      )} />
      <Route exact path='/home' render={() => (
        loggedIn
          ? <HomePage />
          : <Redirect push to='/login' />
      )} />
      <Route exact path='/people' render={() => (
        loggedIn
          ? <PeoplePage />
          : <Redirect push to='/login' />
      )} />
      <Route exact path='/my-team' render={() => (
        loggedIn
          ? <MyTeamPage />
          : <Redirect push to='/login' />
      )} />
    </div>
  );
};

export default Routes;
