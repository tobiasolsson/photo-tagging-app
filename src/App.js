/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Leaderboard from './components/leaderboard/Leaderboard';
import About from './components/about/About';
import Game from './components/game/Game';

const App = function () {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [count, setCount] = useState(0);
  const [victory, setVictory] = useState(false);

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

    // Check if all is found
    const victoryCondition = updatedLevel.characters.every(
      (char) => char.found,
    );
    if (victoryCondition) {
      setVictory(true);
    }
    setCurrentLevel(updatedLevel);
  }

  function exitGame() {
    setVictory(false);
    setCurrentLevel(0);
    setCount(0);
  }

  return (
    <div>
      <Nav currentLevel={currentLevel} exitGame={exitGame} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setCurrentLevel={setCurrentLevel} />}
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/game"
          element={
            <Game
              currentLevel={currentLevel}
              toggleFound={toggleFound}
              setCount={setCount}
              count={count}
              victory={victory}
              exitGame={exitGame}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
