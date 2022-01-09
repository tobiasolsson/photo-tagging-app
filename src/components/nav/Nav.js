import React from 'react';
import NavItems from '../navItems/NavItems';

const Nav = function ({ currentLevel, exitGame, count }) {
  return (
    <header>
      <NavItems currentLevel={currentLevel} exitGame={exitGame} count={count} />
    </header>
  );
};

export default Nav;
