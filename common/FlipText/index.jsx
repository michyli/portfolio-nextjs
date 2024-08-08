import React from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

export default function index({children, alterText="", alterFont="Roboto", duration=0.25, stagger=0.01}) {
    return (
        <motion.div 
        initial="initial"
        whileHover="hovered"
        className={styles.container}>
            <div>
                {children.split("").map((letter, index) => {
                    if (letter==" ") {
                        return <motion.span 
                            variants = {{
                                initial: {y: 0},
                                hovered: {y: "-100%"},
                            }}
                            transition = {{
                                duration: duration,
                                ease: "easeInOut",
                                delay: stagger * index,
                            }}
                            key={index}
                            className={styles.letter}>
                                &nbsp;
                                </motion.span>
                    } else {
                        return <motion.span 
                                variants = {{
                                    initial: {y: 0},
                                    hovered: {y: "-100%"},
                                }}
                                transition = {{
                                    duration: duration,
                                    ease: "easeInOut",
                                    delay: stagger * index,
                                }}
                                key={index}
                                className={styles.letter}>
                                    {letter}
                                    </motion.span>
                    }
                })}
            </div>
            <div className={styles.replaced} style={{fontFamily: alterFont}}>
            {alterText.split("").map((letter, index) => {
                    if (letter==" ") {
                        return <motion.span 
                            variants = {{
                                initial: {y: "100%"},
                                hovered: {y: 0},
                            }}
                            transition = {{
                                duration: duration,
                                ease: "easeInOut",
                                delay: stagger * index,
                            }}
                            key={index}
                            className={styles.letter}>
                                &nbsp;
                                </motion.span>
                    } else {
                        return <motion.span 
                                variants = {{
                                    initial: {y: "100%"},
                                    hovered: {y: 0},
                                }}
                                transition = {{
                                    duration: duration,
                                    ease: "easeInOut",
                                    delay: stagger * index,
                                }}
                                key={index}
                                className={styles.letter}>
                                    {letter}
                                    </motion.span>
                    }
                })}
            </div>
        </motion.div>
    )
}