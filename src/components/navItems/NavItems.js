import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import styles from './NavItems.module.css';

const NavItems = function ({ currentLevel, exitGame, count }) {
  const location = useLocation();

  function handleCharacters() {
    const characterImages = currentLevel.characters.map((character) => {
      const foundStyle = character.found ? styles.found : null;
      return (
        <li>
          <img
            className={`${styles.char} ${foundStyle}`}
            src={character.image}
            alt={character.name}
          />
        </li>
      );
    });
    return (
      <ul className={styles.listChars}>
        {characterImages}
        {count}
      </ul>
    );
  }

  const middle = currentLevel ? handleCharacters() : 'GameTitle';

  const home = (
    <Link to="/" onClick={() => exitGame()}>
      Home
    </Link>
  );

  const about = (
    <Link to="/about" onClick={() => exitGame()}>
      About
    </Link>
  );

  const right = location.pathname === '/' ? about : home;

  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link to="/leaderboard" onClick={() => exitGame()}>
            Leaderboard
          </Link>
        </li>
        <li>{middle}</li>
        <li>{right}</li>
      </ul>
    </nav>
  );
};

export default NavItems;
