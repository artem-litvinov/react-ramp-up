import React, { Component } from 'react';
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

const Header = () => {
  return (
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <RoutedMenuLink
        label="Prism"
        to="/"
        activeOnlyWhenExact={false}
        activeClassName="navbar-brand"
      />
      <ul class="navbar-nav mr-auto">
        <RoutedMenuLink
          label="Home"
          to="/"
          activeOnlyWhenExact={true}
          className="nav-item"
          activeClassName="nav-item active"
        />
        <RoutedMenuLink
          label="People"
          to="/people"
          activeOnlyWhenExact={true}
          className="nav-item"
          activeClassName="nav-item active"
        />
        <RoutedMenuLink
          label="Home"
          to="/my-team"
          activeOnlyWhenExact={true}
          className="nav-item"
          activeClassName="nav-item active"
        />
      </ul>
    </nav>
  );
};

export default Header;
