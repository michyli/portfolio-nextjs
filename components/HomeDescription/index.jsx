import React from 'react'
import { useRef, useEffect, useState} from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './styles.module.scss';
import {slideUp, opacity} from "./animation";
import AppearsInView from "#/AppearInView";
import CurvedLine from "#/CurvedLine";

export default function index() {
  const bg = useRef(null)
  const [numEl, setNumEl] = useState(0);

  const phrase = "My comprehensive understanding of Front-end, Algorithms, and Mechanical Systems gives me a unique understanding of the product development process.";

  useEffect(() => {
    setNumEl(Math.floor(bg.current.clientHeight / 100))
  })

  return (
    <div className={styles.backgroundContainer}>
      <div ref={bg} className={styles.lbg}>
            {
              [...Array(numEl).keys()].map((num, index) => {
                return <CurvedLine key={index} className={styles.curvedLine} stroke='rgba(184, 184, 184, 0.2)' style={{top: `calc(200px + ${index * 150}px)`}}/>
              })
            }
        <div className={styles.contentContainer}>
          <AppearsInView className={styles.title} marginRight='5px'><p>Featured Works</p></AppearsInView>
          <div className={`${styles.videoContainer} ${styles.container1}`}>
            <div><video src="/ki_fe_demo.webm" autoPlay={"autoplay"} muted loop /></div>
            <AppearsInView><p>[001] Reforestation Desktop App</p></AppearsInView>
          </div>
          <div className={`${styles.videoContainer} ${styles.container2}`}>
            <div><video src="/ki_rotation.webm" autoPlay={"autoplay"} muted loop /></div>
            <AppearsInView><p>[002] Flight Path Planning Algorithm for Unmanned Drone</p></AppearsInView>
          </div>
          <div className={`${styles.videoContainer} ${styles.container3}`}>
            <div><video src="/battery_rotation.webm" autoPlay={"autoplay"} muted loop /></div>
            <AppearsInView><p>[003] 600V Custom Li-ion Battery Pack</p></AppearsInView>
          </div>
          <AppearsInView className={styles.phrase} marginRight='4px'><p>{phrase}</p></AppearsInView>
        </div>
      </div>
    </div>
  )
}