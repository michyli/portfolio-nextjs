import React from 'react'
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './styles.module.scss';
import {slideUp} from "./animation";

export default function index({children, marginRight="3px", ...attributes}) {
  const description = useRef(null);
  const isInView = useInView(description)
  const childrenText = children.props["children"];

  return (
    <p ref={description} {...attributes}>
      {
        childrenText.split(" ").map((word, index) => {
          return <span key={index} className={styles.mask} style={{marginRight}}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index} style={{marginRight}}>{word}</motion.span></span>
        })
      }
    </p>
  )
}