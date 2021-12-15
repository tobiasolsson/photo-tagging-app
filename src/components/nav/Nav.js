import React from 'react';
import NavItems from '../navItems/NavItems';

const Nav = function ({ currentLevel, setCurrentLevel }) {
  return (
    <header>
      <NavItems currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
    </header>
  );
};

export default Nav;
