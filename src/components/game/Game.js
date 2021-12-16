/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styles from './Game.module.css';
import GameMenu from '../gameMenu/GameMenu';

const Game = function ({ currentLevel }) {
  const [showMenu, setShowMenu] = useState(false);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);

  function toggleMenu(e) {
    setXCoord(e.pageX);
    setYCoord(e.pageY);
    setShowMenu(!showMenu);
    console.log(currentLevel.characters[0].found);
  }

  function checkTarget(char) {
    if (
      xCoord <= char.xMax &&
      xCoord >= char.xMin &&
      yCoord <= char.yMax &&
      yCoord >= char.yMin
    ) {
      console.log('found');
    }
    setShowMenu(!showMenu);
  }

  const menu = showMenu ? (
    <GameMenu
      xCoord={xCoord}
      yCoord={yCoord}
      characters={currentLevel.characters}
      checkTarget={checkTarget}
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
