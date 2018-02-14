import React from 'react';
import RoutedMenuLink from './RoutedMenuLink';
import MenuNavigation from './MenuNavigation';
import { NavLink } from 'react-router-dom';

const Header = ({ displayNavigation }) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <NavLink to="/home" className="navbar-brand"
        activeClassName="navbar-brand">Prism</NavLink>
      {displayNavigation
        ? <MenuNavigation/>
        : null}
    </nav>
  );
};

export default Header;
