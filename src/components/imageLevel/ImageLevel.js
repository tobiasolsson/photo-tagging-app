import React from 'react';
import styles from './ImageLevel.module.css';

function imageLevel({ image, title }) {
  return <img src={image} alt={title} className={styles.level} />;
}

export default imageLevel;
