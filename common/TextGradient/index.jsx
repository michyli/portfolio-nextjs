"use client";
import React from 'react'
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from "./styles.module.scss";

export default function index({children, bottom=0.8, top=0.15, ...attributes}) {
  
  const phrase = useRef(null);
  const { scrollYProgress } = useScroll({
    target: phrase,
    offset: [`start ${bottom}`, `start ${top}`]
  })

  const words = children.split(" ");

  return (
    <p ref={phrase} style={{position: 'relative', display: 'flex', flexWrap: 'wrap'}} {...attributes}>
      {
        words.map((word, index) => {
          const start = index / words.length;
          const end = start + (1 / words.length);
          return <Word key={index} range={[start, end]} progress={scrollYProgress}>{word}</Word>
        })
      }
    </p>
  )
}

const Word = ({children, range, progress}) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={styles.word} >
      {
        characters.map((char, index) => {
          const start = range[0] + (step * index);
          const end = range[0] + (step * (index + 1))
          return <Character key={index} range={[start, end]} progress={progress}>{char}</Character>
        })
      }
    </span>
  )
}

const Character = ({children, range, progress}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{opacity}}>
        {children}
      </motion.span>
    </span>
  )
}