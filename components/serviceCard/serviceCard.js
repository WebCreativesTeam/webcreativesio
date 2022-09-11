import Link from "next/link";
import addAlpha from "util/addAlpha";
import LightenDarkenColor from "util/lightenDarkenColor";
import styles from "./serviceCard.module.css";

const ServiceCard = ({ name, link, details, children, color }) => {
  return (
    <div className={styles.card} >
      <div className={styles.iconHolder} style = {{color: addAlpha(color, 0.3),  backgroundColor: addAlpha(color,0.2)}}>
        <span style={{color: color}}>
        {children}
        </span>
      </div>
      <h4>{name}</h4>
      <p>{details}</p>
      <Link href={link}>
        <a><p>learn more</p></a>
      </Link>
    </div>
  );
};

export default ServiceCard;
