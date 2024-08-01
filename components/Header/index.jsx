'use client';
import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './sidenav';
import { useMotionValueEvent, useScroll } from "framer-motion"
import Magnetic from '#/Magnetic';
import FlipText from '#/FlipText';
import Rounded from '#/RoundedButton';
import { useWindowSize } from "@uidotdev/usehooks";

export default function index() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);
  const size = useWindowSize();
  const { scrollY } = useScroll()

  useEffect(() => {
    if (isActive) {
      button.current.style.scale = 1;
      document.body.style.overflow = 'hidden';
    } else {
      if (!((document.documentElement.scrollTop || document.body.scrollTop) > 0.05 * size.height)) {
        button.current.style.scale = 0;
      }
      document.body.style.overflow = 'auto';
    }
  }, [isActive])

  useEffect(() => {
    if (isActive) {
      setIsActive(false)
    }
  }, [pathname])

  useMotionValueEvent(scrollY, "change", (latestY) => {
    if (latestY >= 0.05 * size.height)
      button.current.style.scale = 1;
    else
      button.current.style.scale = 0;
  })


  return (
    <>
      <div className={styles.header}>
        <Magnetic>
          <a href="/" className={styles.logo}>
            <span className={styles.copyright}>©</span>
            <FlipText alterText='Back to Home'>Coded by Michael</FlipText>
          </a>
        </Magnetic>

        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a href="/projects">Projects</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a href="/about">About</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a href="/playground">Playground</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a href="/blog">Blog</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a href="/contact">Contact</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
        <Magnetic>
          <div className={styles.navMenu} onClick={() => setIsActive(true)}>
            Menu
          </div>
        </Magnetic>
      </div>
      
      <div className={isActive ? styles.darkBackgroundActive : styles.darkBackground} onClick={() => setIsActive(false)}></div>

      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`} backgroundColor="rgba(239, 88, 46, 0.75)">
            <Magnetic><div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div></Magnetic>
        </Rounded>
      </div>

      <AnimatePresence>
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}