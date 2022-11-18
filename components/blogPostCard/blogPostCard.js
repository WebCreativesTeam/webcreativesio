import Image from "next/image";
import Link from "next/link";
import styles from "./blogPostCard.module.css";
import {motion} from 'framer-motion'
const BlogPostCard = ({image, category, title, date, link}) => {
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
    },
   }
  
  return (
    <Link href = {link ? link : '/blogs'} >
    <motion.div  variants={fadeInFromBottom} className={styles.card}>
      <div className={styles.imageHolder}>
        {image ? <Image src = {image} alt = 'blog image' fill ={true} className = 'object-cover' /> : <div className={styles.noImage}>No Image</div>}
      </div>
      <div className={styles.contents}>
          <span >{category}</span>
          <h4>{title}</h4>
          <p>{date}</p>
      </div>
    </motion.div>
    </Link>
  );
};

export default BlogPostCard;
