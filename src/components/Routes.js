import React from 'react';
import { Route, Redirect } from 'react-router';
import { PrivateRoute, PublicRoute } from 'react-router-with-props';

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
      <PublicRoute
        exact path='/login'
        authed={loggedIn}
        redirectTo='/home'
        component={LoginPage}
      />
      <PrivateRoute
        exact path='/home'
        authed={loggedIn}
        redirectTo='/login'
        component={HomePage}
      />
      <PrivateRoute
        exact path='/people'
        authed={loggedIn}
        redirectTo='/login'
        component={PeoplePage}
      />
      <PrivateRoute
        exact path='/my-team'
        authed={loggedIn}
        redirectTo='/login'
        component={MyTeamPage}
      />
    </div>
  );
};

export default Routes;
