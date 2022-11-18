import Link from "next/link";
import addAlpha from "util/addAlpha";
import LightenDarkenColor from "util/lightenDarkenColor";
import styles from "./serviceCard.module.css";
import { motion} from 'framer-motion'
const ServiceCard = ({ name, link, details, children, color }) => {
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
    <motion.div variants={fadeInFromBottom} className={styles.card} >
      <motion.div variants = {fadeInFromBottom} className={styles.iconHolder} style = {{color: addAlpha(color ? color: '#808080', 0.15),  backgroundColor: addAlpha(color ? color : '#808080',0.1)}}>
        <span style={{color: color ? color: 'gray'}}>
        {children}
        </span>
      </motion.div>
      <h4>{name}</h4>
      <p>{details}</p>
      <Link href={link ?link : '#'}>
        <p>learn more</p>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
