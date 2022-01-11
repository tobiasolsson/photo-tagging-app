import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SubmitForm.module.css';

const SubmitForm = function ({ count, exitGame }) {
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

  function handleSubmit(e) {
    e.preventDefault();
    // Submit name and time and level name to Firebase
    // TODO

    // reset the state
    exitGame();

    // Redirect to root '/'
    navigate('/');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>You managed to find all the characters in {convertSeconds(count)}!</p>
      <p>Enter your name to join the leaderboard:</p>
      <input className={styles.input} type="text" />
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default SubmitForm;
