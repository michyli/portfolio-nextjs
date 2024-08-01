import { React, useRef } from 'react';
import styles from './styles.module.scss';
import Background from '$/Background';
import FlipText from '#/FlipText';
import Magnetic from '#/Magnetic';
import Rounded from '#/RoundedButton';
import Footer from './Footer';

export default function index() {
  return (
    <>
      <Background></Background>
      <div className={styles.textContainer}>
        <div className={styles.centerContent}>
          <h1 className={styles.titleName}>Michael Li</h1>

          <p className={styles.description}>Sophomore @ UC Berkeley</p>
          <Rounded className={styles.resume} backgroundColor="rgba(239, 88, 46, 0.75)">
            <Magnetic><p><a href="Resume.pdf" target="_blank">Resume</a></p></Magnetic>
          </Rounded>
        </div>

        <div className={styles.footerContainer}>
          <div className={styles.edgeFooter}>
            <Magnetic><div className={styles.el}><FlipText alterText="©2024">.v2.0.1&nbsp;&nbsp;</FlipText></div></Magnetic>
            <Footer></Footer>
          </div>
          <div className={styles.centerFooter}>
            <Magnetic><div className={styles.el}><FlipText alterText="[SCROLL TO EXPLORE]">[SCROLL TO EXPLORE]</FlipText></div></Magnetic>
          </div>
        </div>
      </div>
    </>
  )
}