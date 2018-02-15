import React from 'react';
import RoutedMenuLink from './RoutedMenuLink';
import MenuNavigation from './MenuNavigation';
import { Link } from 'react-router-dom';
import { LogoutButton } from '../common/FAButtons';

const Header = ({ displayNavigation, onLogout, myTeamAmount }) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <Link to="/home" className="navbar-brand">Prism</Link>
      {displayNavigation
        ? <MenuNavigation myTeamAmount={myTeamAmount}/>
        : null}
      {displayNavigation
        ? <LogoutButton onClick={onLogout}/>
        : null}
    </nav>
  );
};

export default Header;
