import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Leaderboard from './components/leaderboard/Leaderboard';
import Game from './components/game/Game';

const App = function () {
  const [currentLevel, setCurrentLevel] = useState(0);
  return (
    <div>
      <Nav currentLevel={currentLevel} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setCurrentLevel={setCurrentLevel} />}
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/game" element={<Game currentLevel={currentLevel} />} />
      </Routes>
    </div>
  );
};

export default App;
