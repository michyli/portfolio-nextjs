"use client";
import React, { useRef } from 'react';
import styles from "./styles.module.scss";
import { useScroll } from 'framer-motion';
import Card from "./Card";

export default function index({projects}) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={container} className={styles.worksContainer}>
      <h1 data-scroll data-scroll-speed={0.05} className={styles.title}><p>Featured Works</p></h1>
      {
        projects.map((proj, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05)
          return <Card key={`p_${index}`} index={index} {...proj} progress={scrollYProgress} range={[index / projects.length, 1]} targetScale={targetScale}/>
        })
      }
    </div>
  )
}