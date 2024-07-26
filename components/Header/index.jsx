'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './sidenav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '$/RoundedButton';
import Magnetic from '$/Magnetic';
import FlipText from '$/FlipText';

export default function index() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect( () => {
    if(isActive) 
      setIsActive(false)
  }, [pathname])

  useEffect( () => {
    if(isActive) {
      button.current.style.scale = 1;
    } else {
      button.current.style.scale = 0;
    }
  }, [isActive])

 /*  useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(button.current, {
          scrollTrigger: {
              trigger: document.documentElement,
              start: 0,
              end: "50vh",
              onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
              onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
          }
      })
  }, []) */


  return (
    <>
      <div className={styles.header}>
        <Magnetic>
          <a href="/" className={styles.logo}>
            <span className={styles.copyright}>©</span>
            <FlipText alterText='Home'>Code by Michael</FlipText>
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
        <div onClick={() => setIsActive(!isActive)} className={`${styles.button}`}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>

      <AnimatePresence>
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}