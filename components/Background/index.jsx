import React from 'react';
import {useRef, useEffect} from 'react';
import styles from './styles.module.scss';

export default function index() {
  const gradient = useRef();

  return (
    <div className={styles.background}>
      <video ref={gradient} autoPlay={"autoplay"} muted loop src="/flowBackground.webm" />
      <div className={styles.glass}></div>
    </div>
  );
}