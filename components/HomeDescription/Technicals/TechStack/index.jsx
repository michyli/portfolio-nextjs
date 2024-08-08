import React, { useRef } from "react";
import styles from './styles.module.scss';
import AppearsInView from '#/AppearInView';
import { motion, useScroll, useTransform } from "framer-motion";

export default function Index({children, techList}) {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
      target: container,
      offset: ['end end', 'start 0.6']
    })

    return (
      <div className={styles.mainContainer}>
        <AppearsInView className={styles.subTitle} marginRight='5px'><p>{children}</p></AppearsInView>
          <div ref={container} className={styles.iconsContainer}>
            {
              techList.map((icon, index) => {
                const start = index / techList.length;
                const end = start + (1 / techList.length);
                return (
                  <Skill key={index} icon={icon} range={[start, end]} progress={scrollYProgress}/>
                )
              })
            }
          </div>
      </div>
    )
}

const Skill = ({icon, range, progress}) => {
  const scale = useTransform(progress, range, [0.5, 1]);
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.div className={styles.icons} style={{scale, opacity}}>
      <img src={icon.href}/>
      <span>{icon.name}</span>
    </motion.div>
  )
}