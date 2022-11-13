import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import styles from './testimonialCard.module.css'
import addAlpha from 'util/addAlpha'
const TestimonialCard = ({ image, name, role, review, rating ,color}) => {
    
  return (
    <div className={styles.cardHolder}>
      <div className={styles.card} style = {{backgroundColor: addAlpha(color, 0.15)}}>
      <div className={styles.imageHolder} style = {{color: color}}>
      <Image src={image} alt="customer" fill = {true} className = 'object-cover object-top'/>
      </div>
      <div>
      <h4>{name}</h4>
      <p >{role}</p>
      </div>
      <p className={styles.review}>{review}</p>
      <div className={styles.rating}>
      <ReactStars
      value = {rating}
      edit={false} 
      count={5}
      size = {35}
      isHalf = {true}
      color = {'transparent'}
      activeColor = {'#FFF80A'}
       />
      </div>
    </div>
    </div>
  );
};

export default TestimonialCard;
