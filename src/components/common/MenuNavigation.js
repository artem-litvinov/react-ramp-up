import React from 'react';
import RoutedMenuLink from './RoutedMenuLink';
import { NavLink } from 'react-router-dom';

const MenuNavigation = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <NavLink exact to="/home" className="nav-item"
        activeClassName="nav-item active">Home</NavLink>
      <NavLink exact to="/people" className="nav-item"
        activeClassName="nav-item active">People</NavLink>
      <NavLink exact to="/my-team" className="nav-item"
        activeClassName="nav-item active">My team</NavLink>
    </ul>
  );
};

export default MenuNavigation;
