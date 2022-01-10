import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitForm = function ({ count, exitGame }) {
  const navigate = useNavigate();

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
    <form onSubmit={handleSubmit}>
      {count}
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitForm;
