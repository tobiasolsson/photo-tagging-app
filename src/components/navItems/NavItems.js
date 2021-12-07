import React from 'react';

import { Link } from 'react-router-dom';

import styles from './NavItems.module.css';

const NavItems = function ({ currentLevel }) {
  function handleCharacters() {
    const characterImages = currentLevel.characters.map((character) => (
      <li>
        <img
          className={styles.char}
          src={character.image}
          alt={character.name}
        />
      </li>
    ));
    return <ul className={styles.listChars}>{characterImages}</ul>;
  }

  const middle = currentLevel ? handleCharacters() : 'GameTitle';
  return (
    <ul>
      <li>
        <Link to="/leaderboard">Leaderboard</Link>
      </li>
      <li>{middle}</li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default NavItems;
