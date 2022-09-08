

import styles from 'styles/home.module.css'

import BlogPostCard from 'components/blogPostCard/blogPostCard'
import BlogImage from 'public/images/BlogImage1.png'
export default function Home() {
  return (
    <>
      <BlogPostCard title = {'title this is title and for a test '} category = {'category'} date = {'date'} image = {BlogImage} />
    </>
  )
}
