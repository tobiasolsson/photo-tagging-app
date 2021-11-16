import React from 'react';
import ImageLevel from '../imageLevel/ImageLevel';
import levelData from '../../levelData';
import styles from './Home.module.css';

const Home = function () {
  const levels = levelData.map((level) => (
    <ImageLevel image={level.image} title={level.name} />
  ));
  return <div className={styles.levels}>{levels}</div>;
};

export default Home;
