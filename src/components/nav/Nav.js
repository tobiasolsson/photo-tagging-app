import React from 'react';
import NavItems from '../navItems/NavItems';
import styles from './Nav.module.css';

const Nav = function ({ currentLevel, exitGame }) {
  return (
    <header className={styles.head}>
      <NavItems currentLevel={currentLevel} exitGame={exitGame} />
    </header>
  );
};

export default Nav;
