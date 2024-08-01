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
          <h1 className={styles.title}>Featured Works</h1>
          <div className={styles.workDisplay1}>
            <div className={styles.videoContainer}><video src="/ki_rotation.webm" autoPlay={"autoplay"} muted loop /></div>
            <p>[001] Flight Path Planning for Unmanned Drone</p>
          </div>
          <div className={styles.workDisplay2}>
            <div className={styles.videoContainer}><video src="/battery_rotation.webm" autoPlay={"autoplay"} muted loop /></div>
            <p>[002] 600V Custom Li-ion Battery Pack</p>
          </div>
          <div className={styles.workDisplay3}>
            <div className={styles.videoContainer}><video src="/ki_fe_demo.webm" autoPlay={"autoplay"} muted loop /></div>
            <p>[003] Flight Path Planning for Unmanned Drone</p>
          </div>
          <AppearsInView className={styles.descriptionText}>{phrase}</AppearsInView>
        </div>
      </div>
    </div>
  )
}