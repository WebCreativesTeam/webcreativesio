import Image from "next/image";
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

    return ( 
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 ">
             {partners.map((item, index )=>{
                return(
                    <div className = 'w-[100px] lg:w-[140px] xl:w-[180px]' key = {index}>
                        <Image src = {item.image} alt = {item.name}/>
                    </div>
                )
             })}
        </div>
     );
}
 
export default Partners;