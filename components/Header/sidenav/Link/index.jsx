import styles from './styles.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';

export default function Index({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
      className={styles.link} 
      onMouseEnter={() => {setSelectedIndicator(href)}} 
      custom={index} 
      variants={slide} 
      initial="initial" 
      animate="enter" 
      exit="exit">
        <div className={styles.indicator}></div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
}