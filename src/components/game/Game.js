import React from 'react';
import styles from './Game.module.css';

const Game = function ({ currentLevel }) {
  return (
    <div>
      <img
        src={currentLevel.image}
        alt={currentLevel.name}
        className={styles.image}
      />
    </div>
  );
};

export default Game;
