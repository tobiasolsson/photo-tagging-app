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
    const image = e.target;

    // Get the size of the users (scaled) image
    const currentWidth = image.offsetWidth;
    const currentHeight = image.offsetHeight;

    // Get the size of the original image
    const { naturalWidth } = image;
    const { naturalHeight } = image;

    // Get relative size, so we can use any image size
    const diffWidth = naturalWidth / currentWidth;
    const diffHeight = naturalHeight / currentHeight;

    // Find the user X,Y relative to the image original size and X,Y
    setXCoord(Math.floor(e.pageX * diffWidth));
    setYCoord(Math.floor((e.pageY - image.offsetTop) * diffHeight));
    setShowMenu(!showMenu);

    console.log('X: ', xCoord, 'Y: ', yCoord);
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
