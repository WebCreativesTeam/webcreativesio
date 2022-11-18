import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import styles from './testimonialCard.module.css'
import addAlpha from 'util/addAlpha'
import {motion} from 'framer-motion'
const TestimonialCard = ({ image, name, role, review, rating ,color}) => {
    const scaleFromLeft = {
      hidden: {
        scaleX: 0,
        
      },
      visible:{
        scaleX: 1,
        transition: {
          type: 'tween',
          duration: .5, 
          ease: 'easeOut',
          delayChildren: 0.2,
          staggerChildren: 0.2,
        }
      }
    }
    const expandFromCenter = {
      hidden: {
        scale: 0,
        y: '50%'
      },
      visible: {
        scale: 1,
        
        transition: {
          type: 'spring',
          stiffness: 100,
          duration: 1,
        }
      }
    }
    const fadeInFromBottom = {
      hidden: {
          y:  80,
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
    <motion.div  variants={scaleFromLeft} className={styles.cardHolder} style = {{originX: 'left'}}>
      <div className={styles.card} style = {{backgroundColor: addAlpha(color, 0.15)}}>
      <motion.div variants={expandFromCenter} className={styles.imageHolder} style = {{color: color,}}>
      <Image src={image} alt="customer" fill = {true} className = 'object-cover object-top'/>
      </motion.div>
      <motion.div variants={fadeInFromBottom}>
      <h4>{name}</h4>
      <p >{role}</p>
      </motion.div>
      <motion.p variants={fadeInFromBottom} className={styles.review}>{review}</motion.p>
      <motion.div variants={fadeInFromBottom} className={styles.rating}>
      <ReactStars
      value = {rating}
      edit={false} 
      count={5}
      size = {35}
      isHalf = {true}
      color = {'transparent'}
      activeColor = {'#FFF80A'}
       />
      </motion.div>
    </div>
    </motion.div>
  );
};

export default TestimonialCard;
