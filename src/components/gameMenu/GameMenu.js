/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './GameMenu.module.css';

const GameMenu = function ({ xCoord, yCoord }) {
  const position = { left: xCoord, top: yCoord };
  return (
    <div className={styles.menu} style={position}>
      <ul>
        <li>TEST 1</li>
        <li>TEST 2</li>
        <li>TEST 3</li>
      </ul>
    </div>
  );
};

export default GameMenu;
