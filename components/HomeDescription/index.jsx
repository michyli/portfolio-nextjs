import React, { useRef, useEffect, useState } from 'react'
import styles from './styles.module.scss';
import CurvedLine from "#/CurvedLine";
import { projects } from "./projects";
import ProjOverview from "./ProjectOverview";
import Phrase from "./Phrase";
import {programIcons, webDevIcons, hardwareIcons, designIcons, otherIcons} from "./skills";
import Techs from "./Technicals";
import Magnetic from '#/Magnetic';
import Rounded from '#/RoundedButton';
import Link from 'next/link';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';

export default function index() {
  const bg = useRef(null);
  const [numEl, setNumEl] = useState(0);

  /* Animated Curve at top and bottom using Framer Motion */
  const container = useRef(null);
  const { scrollYProgress: topCurveTranslate } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  })
  const { scrollYProgress: topCurveShadow } = useScroll({
    target: container,
    offset: ["start 0.95", "start start"]
  })
  const { scrollYProgress: botCurveTranslate } = useScroll({
    target: container,
    offset: ["end end", "end start"]
  })
  const { scrollYProgress: botCurveShadow } = useScroll({
    target: container,
    offset: ["end 0.4", "end 0.05"]
  })


  const curveMagnetude = 800;
  const topHeight = useTransform(topCurveTranslate, [0, 1], [0, curveMagnetude]);
  const topTranslate = useMotionTemplate`translateY(calc(-${topHeight}px + 2px))`;
  const topOpacityValue = useTransform(topCurveShadow, [0, 1], [0, 0.5]);
  const topColor = useMotionTemplate`rgba(31, 31, 31, ${topOpacityValue}`;

  const botHeight = useTransform(botCurveTranslate, [0, 1], [curveMagnetude, 0]);
  const botTranslate = useMotionTemplate`translateY(calc(${botHeight}px - 2px))`;
  const botOpacityValue = useTransform(botCurveShadow, [0, 1], [0.5, 0]);
  const botColor = useMotionTemplate`rgba(31, 31, 31, ${botOpacityValue}`;

  const phrase = "My comprehensive experience in Front-end Designs, Back-end Algorithms, and Mechanical Systems gives me a unique and thorough understanding of the product development process.";

  useEffect(() => {
    setNumEl(Math.floor((bg.current.clientHeight - 200) / 150))
  }, [])

  return (
    <div className={styles.main}>
      <motion.div style={{height: topHeight, transform: topTranslate, color: topColor}} className={`${styles.circleContainer} ${styles.topCircleContainer}`}>
        <div className={`${styles.circle} ${styles.topCircle}`}></div>
      </motion.div>
      <div ref={container} className={styles.backgroundContainer}>
        <div ref={bg} className={styles.lbg}>
              {
                [...Array(numEl).keys()].map((num, index) => {
                  return <CurvedLine key={index} className={styles.curvedLine} stroke='rgba(184, 184, 184, 0.2)' style={{top: `calc(200px + ${index * 150}px)`}}/>
                })
              }

          <ProjOverview projects={projects}></ProjOverview>

          <div data-scroll data-scroll-speed={0.1} className={styles.moreContainer}>
            <Rounded className={styles.more} backgroundColor="rgba(239, 88, 46, 0.75)">
              <Magnetic><p><Link href="/projects">More Projects</Link></p></Magnetic>
            </Rounded>
          </div>

          <Phrase>{phrase}</Phrase>

          <Techs lang={programIcons} web={webDevIcons} hware={hardwareIcons} des={designIcons} oth={otherIcons}></Techs>

        </div>
      </div>
      <motion.div style={{height: botHeight, transform: botTranslate, color: botColor}} className={`${styles.circleContainer} ${styles.botCircleContainer}`}>
        <div className={`${styles.circle} ${styles.botCircle}`}></div>
      </motion.div>
    </div>

  )
}