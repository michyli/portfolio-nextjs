"use client";
import { words } from "./data";
import { useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import { AnimatePresence, motion } from 'framer-motion';
import { opacity, slideUp, wordSlide, progress } from './animation';

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({width: 0, height:0});

  useEffect( () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
  }, [])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
      initial: {
          d: initialPath,
          transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
      },
      exit: {
          d: targetPath,
          transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 3.5}
      }
  }

  return (
      <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
          {dimension.width > 0 && 
          <>
            <motion.div variants={progress} initial="initial" animate="animate" className={styles.progressBar}></motion.div>
            <motion.div variants={opacity} initial="initial" animate="animate" className={styles.wordsGroupContainer}>
              <div className={styles.overlay}></div>
              <motion.div variants={wordSlide} initial="initial" animate="animate" className={styles.wordsGroup}>
                {words.map((word, index) => {
                  return (
                    <span key={index} className={styles.word}>
                      {word}
                    </span>
                  );
                })}
              </motion.div>
            </motion.div>
              <svg>
                  <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
              </svg>
          </>
          }
      </motion.div>
  )
}