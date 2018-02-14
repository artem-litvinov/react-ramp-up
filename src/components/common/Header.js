import React from 'react';
import RoutedMenuLink from './RoutedMenuLink';
import MenuNavigation from './MenuNavigation';

const Header = ({ displayNavigation }) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <RoutedMenuLink
        label="Prism"
        to="/"
        activeOnlyWhenExact={false}
        activeClassName="navbar-brand"
      />
      {displayNavigation
        ? <MenuNavigation/>
        : null}
    </nav>
  );
};

export default Header;
