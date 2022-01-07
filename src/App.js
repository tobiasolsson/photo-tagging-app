/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Leaderboard from './components/leaderboard/Leaderboard';
import Game from './components/game/Game';

const App = function () {
  const [currentLevel, setCurrentLevel] = useState(0);

  function toggleFound(name) {
    const updatedLevel = {
      ...currentLevel,
      characters: currentLevel.characters.map((char) => {
        if (char.name === name) {
          return { ...char, found: true };
        }
        return char;
      }),
    };
    setCurrentLevel(updatedLevel);
  }

  return (
    <div>
      <Nav currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setCurrentLevel={setCurrentLevel} />}
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route
          path="/game"
          element={
            <Game currentLevel={currentLevel} toggleFound={toggleFound} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
