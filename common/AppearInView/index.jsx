"use client";
import React from 'react';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './styles.module.scss';
import {slideUp} from "./animation";

export default function index({children, marginRight="3px", duration=0.3, ...attributes}) {
  const description = useRef(null);
  const isInView = useInView(description);
  const phrase = children.props["children"];
  const words = phrase.split(" ");

  return (
    <p ref={description} {...attributes}>
      {
        words.map((word, index) => {
          if (index == 0) {
            var len = index
          } else {
            var sumb4 = words.slice(0, index).reduce((accum, curr) => {
              return accum + curr.length;
            }, 0)
            var len = index + sumb4;
          }
          return <Word key={index} value={len} view={isInView} marginRight={marginRight} phraselen={phrase.length} duration={duration}>{word}</Word>
        })
      }
    </p>
  )
}

const Word = ({children, value, view, marginRight, phraselen, duration}) => {
  const characters = children.split("");

  return (
    <span style={{marginRight: marginRight}}>
    {
      characters.map((char, index) => {
        return <Character key={index} value={value + index} view={view} phraselen={phraselen} duration={duration}>{char}</Character>
      })
    }
    </span>
  )
}

const Character = ({children, value, view, phraselen, duration}) => {
  var delay = value * (duration / phraselen)

  return (
    <span className={styles.mask}>
      <motion.span 
        variants={slideUp}
        custom={delay}
        animate={view ? "open" : "closed"}>
        {children}
      </motion.span>
    </span>
  )
}