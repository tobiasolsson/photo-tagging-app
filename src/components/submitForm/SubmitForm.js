import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import styles from './SubmitForm.module.css';
import { db } from '../../firebase';

const SubmitForm = function ({ count, exitGame, currentLevel }) {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  function convertSeconds(s) {
    const totalSeconds = s;
    // const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60);
    const totalMin = minutes <= 9 ? `0${minutes}` : minutes;
    const seconds = totalSeconds % 60;
    const totalSec = seconds <= 9 ? `0${seconds}` : seconds;
    return `${totalMin}:${totalSec}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit name and time and level name to Firebase
    try {
      await addDoc(collection(db, 'leaderboard'), {
        name,
        count,
        level: currentLevel.name,
        created: Timestamp.now(),
      });
    } catch (err) {
      console.log(err);
    }

    // reset the state
    exitGame();

    // Redirect to root '/'
    navigate('/');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>You managed to find all the characters in {convertSeconds(count)}!</p>
      <p>Enter your name to join the leaderboard:</p>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default SubmitForm;
