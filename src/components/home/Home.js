import React from 'react';
import { Link } from 'react-router-dom';

import ImageLevel from '../imageLevel/ImageLevel';
import levelData from '../../levelData';
import styles from './Home.module.css';

const Home = function ({ setCurrentLevel }) {
  const levels = levelData.map((level) => (
    <Link to="/game" onClick={() => setCurrentLevel(level)}>
      <ImageLevel image={level.image} title={level.name} />
    </Link>
  ));
  return <div className={styles.levels}>{levels}</div>;
};

export default Home;
