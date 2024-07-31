import React from 'react'
import styles from './styles.module.scss';

export default function index() {
  const phraseOne = "A drive to";
  const rotateWords = ["Create", "Optimize", "Repeat"]
  const phraseTwo = "My comprehensive understanding of Frontend, Algorithms, and mechanical systems gives me a holistic understanding of a product development process.";
  
  
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionOne}>
          <div className={styles.phraseContainer}>
            {
              phraseOne.split(" ").map((word, index) => {
                return <span className={styles.mask}><span>{word}</span></span>
              })
            }
            <div className={styles.videoOne}></div>
          </div>
        </div>
        <div className={styles.sectionTwo}>

        </div>
      </div>
    </div>
  )
}