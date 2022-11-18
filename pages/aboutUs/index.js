import PageTitleSection from "components/pageTitleSection/pageTitleSection";
import Partners from "components/partners/partners";
import styles from "styles/aboutUs.module.css";
import illustration from "public/images/illustrations/aboutUs.png";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'

const teamMembersList =[
    {
        name: 'some name',
        role: 'cofounder, designer',
        image: '/images/teamMembers/teamMember1.png'
    },
    {
        name: 'some name',
        role: 'cofounder, designer',
        image: '/images/teamMembers/teamMember2.png'
    },
    {
        name: 'some name',
        role: 'cofounder, designer',
        image: '/images/teamMembers/teamMember3.png'
    },
    {
        name: 'some name',
        role: 'cofounder, designer',
        image: '/images/teamMembers/teamMember4.png'
    }
]

const TeamMember =({image, name, role}) =>{
  const fadeInFromBottom = {
    hidden: {
        y:  50,
        opacity: 0,
    },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1, 
        ease: 'easeOut',
        staggerChildren: 0.2,
        stiffness: 70,
      }
    }
   }
return(
    <motion.div variants={fadeInFromBottom} className="flex flex-col gap-2 items-center ">
        <motion.div variants={fadeInFromBottom} className="relative min-w-[100px] w-2/3 aspect-square rounded-full overflow-hidden  md:w-[120px] mb-4 lg:mb-6 lg:w-[160px] xl:w-[200px] 2xl:w-[240px]" >
            <Image src = {image} fill = {true} className = 'object-cover object-top' alt = 'member'/>
        </motion.div>
        <motion.h4 variants={fadeInFromBottom}>{name}</motion.h4>
        <motion.p variants={fadeInFromBottom}>{role}</motion.p>
    </motion.div>
)
}


const AboutUs = () => {
  return (
    <div>
      <PageTitleSection title="About Us" sub="Home>About Us" />
      <section>
        <div className="twoColGrid">
          <div>
            <Image src={illustration} alt="illustration" />
          </div>
          <div className="twoColGridContents gap-6">
            <h2>Know More About -Web. Creative & Their Process</h2>
            <p>
              Nulla volutpat enim lorem, non volutpat tortor consequa ac Quisque ipsum arcu, vehicula sit amet tempor non, blandite proin dignissim vitae ipsum
              a laoreet. In molestie imperdiet vehicula urna. Ut ullamcorper neque dui, imperdiet ornared at augue. Donec semper velit eget urna aliquet.
            </p>
            <div className="grid grid-cols-3 my-4">
              <div>
                <h3>224k+</h3>
                <p>Happy Clients</p>
              </div>
              <div>
                <h3>42k+</h3>
                <p>Projects Dones</p>
              </div>
              <div>
                <h3>360D+</h3>
                <p>Days of Work</p>
              </div>
            </div>
            <Link href="/" className="button-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section>
        <Partners />
      </section>

      <section>
        <div className="sectionTitleCenter">
          <h2>Our Team Members</h2>
          <p>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
        </div>
        <motion.div initial = 'hidden' whileInView = 'visible' transition={{staggerChildren: 0.2}} viewport = {{once: true, margin: '-50%'}} className="grid grid-cols-2 gap-4 my-8 md:my-12 lg:my-14 xl:my-16 2xl:my-20 md:flex md:justify-between ">
          {teamMembersList.map((member, index) =>{
            return (<TeamMember {...member} key ={index}/>)
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
