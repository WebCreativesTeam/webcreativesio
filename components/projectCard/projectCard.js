import Image from 'next/image';
import styles from './projectCard.module.css'
import LightenDarkenColor from 'util/lightenDarkenColor';
import {motion} from 'framer-motion'
const ProjectCard = ({title,image, bg}) => {
     const fadeInFromBottom = {
          hidden: {
              y:  100,
              opacity: 0,
          },
          visible: {
            y:0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 1, 
              ease: 'easeOut',
              delayChildren: 0.2,
              stiffness: 70,
            }
          }
         }
    return ( 
        <motion.div variants={fadeInFromBottom} className={styles.card} style = {{backgroundColor: `${bg}`}}>
             <h3>{title}</h3>
             <motion.div variants={fadeInFromBottom} className = {styles.imageHolder} style = {{color:LightenDarkenColor(bg, -50)}} >
             <Image src = {image} alt = 'project image' fill = {true} className = 'object-cover object-top'/>
             </motion.div>
        </motion.div>
     );
}
 
export default ProjectCard;