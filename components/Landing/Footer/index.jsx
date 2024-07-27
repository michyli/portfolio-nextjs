import styles from './styles.module.scss';
import Arrow from './UpRightArrow';
import Magnetic from '#/Magnetic';
import FlipText from '#/FlipText';

export default function index() {

  const socials = [
    {
      title: "read.cv",
      href: "https://read.cv/michaelli",
    },
  ]

  return (
    <div className={styles.footer}>
      {
        socials.map( (data, index) => {
          return <Magnetic>
                  <div className={styles.links}>
                    <Arrow size={18}/>
                    <a 
                    key={index} 
                    href={data.href} 
                    className={styles.link}>
                    <FlipText alterText={data.title}>{data.title}</FlipText>
                    </a>
                  </div>
                </Magnetic>
        })
      }
    </div>
  )
}