import React from 'react';
import RoutedMenuLink from './RoutedMenuLink';

const MenuNavigation = () => {
  return (
    <ul className="navbar-nav mr-auto">
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
  );
};

export default MenuNavigation;
