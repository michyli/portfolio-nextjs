import styles from './styles.module.scss';
import Arrow from './UpRightArrow';
import Magnetic from '#/Magnetic';
import FlipText from '#/FlipText';

export default function index() {

  return (
    <div className={styles.footer}>
      <Magnetic>
        <div className={styles.links}>
          <Arrow size={18}/>
          <a href="https://read.cv/michaelli" target="_blank" className={styles.link}>
            <FlipText alterText="read.cv">read.cv</FlipText>
          </a>
        </div>
      </Magnetic>
    </div>
  )
}