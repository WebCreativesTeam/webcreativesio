import Link from "next/link";
import addAlpha from "util/addAlpha";
import LightenDarkenColor from "util/lightenDarkenColor";
import styles from "./serviceCard.module.css";

const ServiceCard = ({ name, link, details, children, color }) => {
  return (
    <div className={styles.card} >
      <div className={styles.iconHolder} style = {{color: addAlpha(color ? color: '#808080', 0.15),  backgroundColor: addAlpha(color ? color : '#808080',0.1)}}>
        <span style={{color: color ? color: 'gray'}}>
        {children}
        </span>
      </div>
      <h4>{name}</h4>
      <p>{details}</p>
      <Link href={link ?link : '#'}>
        <p>learn more</p>
      </Link>
    </div>
  );
};

export default ServiceCard;
