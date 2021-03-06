/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './GameMenu.module.css';

const GameMenu = function ({ xCoord, yCoord, characters, checkTarget }) {
  const position = { left: xCoord, top: yCoord };
  const listChars = characters.map((char) => {
    if (!char.found) {
      return (
        <li onClick={() => checkTarget(char)}>
          <img className={styles.character} src={char.image} alt={char.name} />
          {char.name}
        </li>
      );
    }
    return null;
  });
  return (
    <div className={styles.menu} style={position}>
      <ul>{listChars}</ul>
    </div>
  );
};

export default GameMenu;
