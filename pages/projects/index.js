import NewsLetter from "components/newsLetter/newsLetter";
import PageTitleSection from "components/pageTitleSection/pageTitleSection";
import ProjectCard from "components/projectCard/projectCard";
import styles from "styles/projects.module.css";
import {motion} from 'framer-motion'
const projectList = [
    {
        title: 'Watch - Product Responsive Landing Page',
        image: '/images/projects/projectImage1.png',
        bg: '#F5E6FE'
    },
    {
        title: 'SEO Agency - Creative Landing Page',
        image: '/images/projects/projectImage2.png',
        bg: '#E0F4EC'
    },
    {
        title: 'E-Online - Education Landing Page',
        image: '/images/projects/projectImage3.png',
        bg: '#E3FAF3'
    },
    {
        title: 'MDCL - Medical Landing Page',
        image: '/images/projects/projectImage4.png',
        bg: '#F4E0E0'
    },
]
const Projects = () => {
  return (
    <div>
      <PageTitleSection title="Projects" sub="Home > Projects" />
      <section>
        <div className="sectionTitleCenter">
          <h2>Our Projects</h2>
          <p>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
        </div>
        <motion.div initial = 'hidden' whileInView='visible' transition={{staggerChildren: 0.2}} viewport = {{once:true, margin: '-50%'}} className="flex flex-wrap gap-6 items-center justify-center lg:gap-6 xl:gap-8 mt-14 xl:mt-16">{projectList.map((project, index) => {
            return <ProjectCard {...project} key ='index'/>
        })}</motion.div>
        <div className="flex items-center justify-center gap-4 mt-8 xl:mt-10 2xl:mt-12">
          <button className="pagination-button">1</button>
          <button className="pagination-button-muted">2</button>
          <button className="pagination-button-muted">next</button>
        </div>
      </section>
      <NewsLetter />
    </div>
  );
};

export default Projects;
