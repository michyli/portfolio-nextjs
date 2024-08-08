import styles from './styles.module.scss';
import Arrow from './UpRightArrow';
import Magnetic from '#/Magnetic';

export default function index() {

  const socials = [
    {
      title: "Github",
      href: "https://github.com/michyli",
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/michael-yunze-li/",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/lyz._.li/",
    },
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
                  <div key={index} className={styles.links}>
                    <Arrow size={18}/>
                    <a 
                    href={data.href} 
                    target="_blank"
                    className={styles.link}>
                    {data.title}
                    </a>
                    <div className={styles.background}></div>
                  </div>
                </Magnetic>
        })
      }
    </div>
  )
}