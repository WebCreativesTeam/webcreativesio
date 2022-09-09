import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import styles from './testimonialCard.module.css'
const TestimonialCard = ({ image, name, role, review, rating ,color}) => {
    const addAlpha =(color ,opacity) =>{
        // coerce values so ti is between 0 and 1.
        const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
        return color + _opacity.toString(16).toUpperCase();
    }
  return (
    <div className={styles.card} style = {{backgroundColor: addAlpha(color, 0.15)}}>
      <div className={styles.imageHolder} style = {{color: color}}>
      <Image src={image} alt="customer" layout="responsive"/>
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
  );
};

export default TestimonialCard;
