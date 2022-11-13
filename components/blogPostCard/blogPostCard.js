import Image from "next/image";
import Link from "next/link";
import styles from "./blogPostCard.module.css";
const BlogPostCard = ({image, category, title, date, link}) => {
  return (
    <Link href = {link ? link : '/blogs'} >
    <div className={styles.card}>
      <div className={styles.imageHolder}>
        {image ? <Image src = {image} alt = 'blog image' fill ={true} className = 'object-cover' /> : <div className={styles.noImage}>No Image</div>}
      </div>
      <div className={styles.contents}>
          <span >{category}</span>
          <h4>{title}</h4>
          <p>{date}</p>
      </div>
    </div>
    </Link>
  );
};

export default BlogPostCard;
