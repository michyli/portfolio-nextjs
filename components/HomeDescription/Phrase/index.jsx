import React, { useEffect } from 'react';
import styles from "./styles.module.scss";
import TextGradient from "#/TextGradient";

export default function index({children}) {

  return (
    <div data-scroll data-scroll-speed={-0.25} className={styles.phraseContainer}>
      <TextGradient className={styles.phrase} bottom={0.7}>{children}</TextGradient>
    </div>
  )
}
