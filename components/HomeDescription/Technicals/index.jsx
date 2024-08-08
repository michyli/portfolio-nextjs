import React from 'react'
import TechStack from "./TechStack";
import styles from "./styles.module.scss";

export default function index({lang, web, hware, des, oth}) {
  return (
    <div className={styles.stacksContainer}>
      <h1 data-scroll data-scroll-speed={-0.05} className={styles.title}><p>My Tech Stacks</p></h1>
      <div className={styles.skillsContainer}>
        <TechStack techList={lang}>Algorithm / Modeling</TechStack>
        <TechStack techList={web}>Web Dev</TechStack>
        <TechStack techList={hware}>Hardware</TechStack>
        <TechStack techList={des}>Design</TechStack>
        <TechStack techList={oth}>Others</TechStack>
      </div>
    </div>
  )
}
