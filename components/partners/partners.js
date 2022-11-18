import Image from "next/image";
import {motion} from 'framer-motion'
import partener1 from 'public/images/partners/partner1.png'
import partener2 from 'public/images/partners/partner2.png'
import partener3 from 'public/images/partners/partner3.png'
import partener4 from 'public/images/partners/partner4.png'
import partener5 from 'public/images/partners/partner5.png'

const Partners = () => {

   const partners = [
    { name: 'name',
      image: partener1,
    },
    { name: 'name',
      image: partener2,
    },
    { name: 'name',
      image: partener3,
    },
    { name: 'name',
      image: partener4,
    },
    { name: 'name',
      image: partener5,
    },
   
   ]
   const parentVariants = {
    visible:{
      transition: {
        staggerChildren: 0.2,

      },
    
    }
 }
  
   const variants = {
    visible:{
      y: 0,
      opacity: 1,
      transition:{
        type: 'spring', 
        duration: 0.5,
        stiffness: 80,
       
      }
    },
    hidden: {
      y: 100, 
      opacity: 0
    }, 
   }

    return ( 
        <motion.div initial = "hidden" whileInView='visible' variants={parentVariants} viewport ={{maring: '-50%', once: true}} className="flex flex-wrap items-center justify-center md:justify-between gap-6 ">
             {partners.map((item, index )=>{
                return(
                    <motion.div variants={variants} className = 'w-[100px] lg:w-[140px] xl:w-[180px]' key = {index}>
                        <Image src = {item.image} alt = {item.name}/>
                    </motion.div>
                )
             })}
        </motion.div>
     );
}
 
export default Partners;