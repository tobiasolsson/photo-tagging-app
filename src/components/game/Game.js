/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styles from './Game.module.css';
import GameMenu from '../gameMenu/GameMenu';
import Modal from '../modal/Modal';
import SubmitForm from '../submitForm/SubmitForm';
import { db } from '../../firebase';

const Game = function ({
  currentLevel,
  toggleFound,
  setCount,
  count,
  victory,
  exitGame,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const [xMenu, setXMenu] = useState(0);
  const [yMenu, setYMenu] = useState(0);

  useEffect(() => {
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // check for win, and stop timer if true
    if (victory) {
      clearInterval(intervalId);
    }

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add count as a dependency to re-rerun the effect
    // when we update it
  }, [count, victory]);

  function toggleMenu(e) {
    const image = e.target;

    // Get the size of the users (scaled) image
    const currentWidth = image.offsetWidth;
    const currentHeight = image.offsetHeight;

    // Get the size of the original image
    const { naturalWidth } = image;
    const { naturalHeight } = image;

    // Get %-change, so we can use any image size
    const diffWidth = naturalWidth / currentWidth;
    const diffHeight = naturalHeight / currentHeight;

    // Recalculate X, Y to original size
    setXCoord(Math.floor(e.pageX * diffWidth));
    setYCoord(Math.floor((e.pageY - image.offsetTop) * diffHeight));
    setXMenu(e.pageX);
    setYMenu(e.pageY);
    setShowMenu(!showMenu);
  }

  async function getFirebaseCoords(char) {
    const levelName = currentLevel.name;
    const q = query(
      collection(db, levelName),
      where('__name__', '==', char.name),
    );
    const querySnapshot = await getDocs(q);
    const firebaseCoords = querySnapshot.docs.map((doc) =>
      // doc.data() is never undefined for query doc snapshots
      doc.data(),
    );
    return firebaseCoords[0];
  }

  async function checkTarget(char) {
    const coords = await getFirebaseCoords(char);

    if (
      xCoord <= coords.xMax &&
      xCoord >= coords.xMin &&
      yCoord <= coords.yMax &&
      yCoord >= coords.yMin
    ) {
      toggleFound(char.name);
    }
    setShowMenu(!showMenu);
  }

  const menu = showMenu ? (
    <GameMenu
      xCoord={xMenu}
      yCoord={yMenu}
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
      <Modal show={victory}>
        <SubmitForm
          count={count}
          exitGame={exitGame}
          currentLevel={currentLevel}
        />
      </Modal>
    </div>
  );
};

export default Game;
