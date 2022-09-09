
import TestimonialCard from 'components/testimonialCard/testimonialCard'
import review1 from 'public/images/testemonials/review1.png'
import styles from 'styles/home.module.css'


export default function Home() {
  return (
    <>
     <TestimonialCard name = 'dinesh' role= 'frontend' review='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piec Lorem Ipsum is not simply random text. It has roots in a piec' color = {'#26C6DA'} rating = {4.5} image = {review1} />
     <TestimonialCard name = 'dinesh' role= 'frontend' review='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piec Lorem Ipsum is not simply random text. It has roots in a piec' color = {'#FFF80A'} rating = {4.5} image = {review1} />
    </>
  )
}
