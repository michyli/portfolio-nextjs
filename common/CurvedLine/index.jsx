'use client'
import styles from './styles.module.scss'
import { useRef, useEffect } from 'react';

export default function index({stroke="#1F1F1F", ...attributes}) {
  const path = useRef(null);
  let progress = 0;
  let x = 1;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, [])

  const setPath = (progress) => {
    const width = path.current.parentElement.clientWidth;
    path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound =  path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }
  
  return(
    <div {...attributes}>
      <div className={styles.line}>
        <div onMouseEnter={() => {manageMouseEnter()}} onMouseMove={(e) => {manageMouseMove(e)}} onMouseLeave={() => {manageMouseLeave()}} className={styles.box}></div>
        <svg>
          <path ref={path} style={{stroke}}></path>
        </svg>
      </div>
    </div>
  )
}