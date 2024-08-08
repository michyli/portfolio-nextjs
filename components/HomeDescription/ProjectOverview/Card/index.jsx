"use client";
import React, { useRef } from 'react';
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';

export default function index({index, title, src, link, color, progress, range, targetScale}) {
  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const cardScale = useTransform(progress, range, [1, targetScale])

  return (
    <Link href={link} ref={container} className={styles.cardContainer}>
      <motion.div style={{scale: cardScale, backgroundColor: color, top: `calc(-50px + ${index * 50}px)`}} className={styles.card}>
        
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.videoContainer}>
            <motion.div style={{scale: imageScale}} className={styles.inner}>
              <video src={src} autoPlay="autoplay" muted loop/>
            </motion.div>
          </div>
        </div>
        
      </motion.div>
    </Link>
  )
}
