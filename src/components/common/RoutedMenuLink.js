import React from 'react';
import { Link, Route } from 'react-router-dom';

const RoutedMenuLink = ({ label, to, activeOnlyWhenExact, activeClassName, className }) => (
  <Link to={to}>
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? activeClassName : className}>
          {label}
        </li>
      )}
    />
  </Link>
);

export default RoutedMenuLink;
