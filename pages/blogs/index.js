import BlogPostCard from "components/blogPostCard/blogPostCard";
import NewsLetter from "components/newsLetter/newsLetter";
import PageTitleSection from "components/pageTitleSection/pageTitleSection";
import styles from "styles/blogs.module.css";
import {motion} from 'framer-motion'
const blogList = [
  {
    title: "Best Design Tips You Will Read This Year",
    image: "/images/blogs/blog1.png",
    category: "design",
    date: "15 september 22",
    link: "",
  },
  {
    title: "The loss is not all that of surprising things",
    image: "/images/blogs/blog2.png",
    category: "design",
    date: "15 september 22",
    link: "",
  },
  {
    title: "Should Fixing Fashion Take 100 Steps?",
    image: "/images/blogs/blog3.png",
    category: "design",
    date: "15 september 22",
    link: "",
  },
  {
    title: "Top 6 Ways To Buy A Used Fashion",
    image: "/images/blogs/blog4.png",
    category: "design",
    date: "15 september 22",
    link: "",
  },
  {
    title: "Travel And Love Have 9 Things In Common",
    image: "/images/blogs/blog5.png",
    category: "design",
    date: "15 september 22",
    link: "",
  },
  {
    title: "Best Fashion Tips You Will Read This Year",
    image: "/images/blogs/blog6.png",
    category: "design",
    date: "15 september 22",
    link: "",
  },
];

const Blogs = () => {
  return (
    <div>
      <PageTitleSection title="Blogs" sub="Home > Blogs" />
      <section>
        <div className="sectionTitleCenter">
          <h2>Our Blogs</h2>
          <p>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
        </div>
        <motion.div initial = 'hidden' whileInView='visible' transition={{staggerChildren: 0.2}} viewport = {{once:true, margin: '-50%'}} className="flex flex-wrap gap-6 items-center justify-center lg:gap-6 xl:gap-8 mt-14 xl:mt-16">
          {blogList.map((blog, index) => {
            return <BlogPostCard {...blog} key={index} />;
          })}
        </motion.div>
        <div className="flex items-center justify-center gap-4 mt-8 xl:mt-10">
            <button className="pagination-button">1</button>
            <button className="pagination-button-muted">2</button>
            <button className="pagination-button-muted">next</button>
        </div>
      </section>
       <NewsLetter />
    </div>
  );
};

export default Blogs;
