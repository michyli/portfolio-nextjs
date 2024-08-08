import React from 'react';
import styles from './styles.module.scss';

export default function index() {

  return (
    <div className={styles.background}>
      <video autoPlay={"autoplay"} muted loop src="/background/flowBackground.webm" />
      <div className={styles.glass}></div>
    </div>
  );
}