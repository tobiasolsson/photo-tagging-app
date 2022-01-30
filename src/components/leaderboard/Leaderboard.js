import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import Table from './Table';

const Leaderboard = function () {
  const [leaders, setLeaders] = useState([]);
  const [level, setLevel] = useState('Nintendo 64');

  // function to get all tasks from firestore in realtime
  useEffect(() => {
    const q = query(collection(db, 'leaderboard'), orderBy('count', 'asc'));
    onSnapshot(q, (querySnapshot) => {
      setLeaders(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      );
    });
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        <li>
          <button type="button" onClick={() => setLevel('Nintendo 64')}>
            N64
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setLevel('Gamecube')}>
            Gamecube
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setLevel('Wii')}>
            Wii
          </button>
        </li>
      </ul>
      <Table leaders={leaders} level={level} />
    </div>
  );
};

export default Leaderboard;
