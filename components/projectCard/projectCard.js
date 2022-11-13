import Image from 'next/image';
import styles from './projectCard.module.css'
import LightenDarkenColor from 'util/lightenDarkenColor';

const ProjectCard = ({title,image, bg}) => {
    return ( 
        <div className={styles.card} style = {{backgroundColor: `${bg}`}}>
             <h3>{title}</h3>
             <div className = {styles.imageHolder} style = {{color:LightenDarkenColor(bg, -50)}} >
             <Image src = {image} alt = 'project image' fill = {true} className = 'object-cover object-top'/>
             </div>
        </div>
     );
}
 
export default ProjectCard;