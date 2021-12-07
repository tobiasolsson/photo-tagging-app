import React from 'react';
import NavItems from '../navItems/NavItems';

const Nav = function ({ currentLevel }) {
  return (
    <header>
      <NavItems currentLevel={currentLevel} />
    </header>
  );
};

export default Nav;
