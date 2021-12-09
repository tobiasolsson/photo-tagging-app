/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styles from './Game.module.css';
import GameMenu from '../gameMenu/GameMenu';

const Game = function ({ currentLevel }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuCoordX, setMenuCoordX] = useState(0);
  const [menuCoordY, setMenuCoordY] = useState(0);

  function toggleMenu(e) {
    setMenuCoordX(e.pageX);
    setMenuCoordY(e.pageY);
    setShowMenu(!showMenu);
  }

  const menu = showMenu ? (
    <GameMenu
      xCoord={menuCoordX}
      yCoord={menuCoordY}
      characters={currentLevel.characters}
    />
  ) : null;

  return (
    <div>
      <img
        src={currentLevel.image}
        alt={currentLevel.name}
        className={styles.image}
        onClick={toggleMenu}
      />
      {menu}
    </div>
  );
};

export default Game;
