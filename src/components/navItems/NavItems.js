import React from 'react';

import { Link } from 'react-router-dom';

const NavItems = function () {
  return (
    <ul>
      <li>
        <Link to="/leaderboard">Leaderboard</Link>
      </li>
      <li>GameTitle</li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default NavItems;
