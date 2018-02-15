import React from 'react';
import RoutedMenuLink from './RoutedMenuLink';
import { NavLink } from 'react-router-dom';
import { Badge, Nav } from 'react-bootstrap';

const MenuNavigation = ({ myTeamAmount }) => {
  const amount = (<span className='badge badge-secondary'>{myTeamAmount}</span>)

  return (
    <nav className="nav mr-auto">
      <NavLink exact to="/home" className="nav-item"
        activeClassName="nav-item active">Home</NavLink>
      <NavLink exact to="/people" className="nav-item"
        activeClassName="nav-item active">People</NavLink>
      <NavLink exact to="/my-team" className="nav-item"
        activeClassName="nav-item active">
        My team <Badge bsClass='badge badge-secondary'>{myTeamAmount}</Badge>
      </NavLink>
    </nav>
  );
};

export default MenuNavigation;
