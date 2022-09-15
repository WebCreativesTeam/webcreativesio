import TestimonialCard from "components/testimonialCard/testimonialCard";
import Link from "next/link";
import styles from "styles/home.module.css";
import bannerIllustration from "public/images/illustrations/bannerIllustration.svg";
import Image from "next/image";
import Partners from "components/partners/partners";
import reading from "public/images/illustrations/reading.png";
import ServiceCard from "components/serviceCard/serviceCard";
import BlogPostCard from "components/blogPostCard/blogPostCard";
import NewsLetter from "components/newsLetter/newsLetter";
import ProjectCard from "components/projectCard/projectCard";

const SectionLayout = ({children, id, title,description, element}) =>{
  return(
    <section id = {id}>
    <div className="relative">
      <div className="flex justify-between items-end mb-6 lg:mb-8 xl:mb-12">
        <div className="sectionTitleLeft">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
       <div className="hidden lg:block">
       {element}
       </div>
      </div>
      {children}
      <div className=" mt-6 mx-auto w-fit lg:hidden">
      {element}
      </div>
    </div>
  </section>
  )
}
const Anchor = ({href}) =>{
  return(
    <Link href = {href}>
      <a className="button-muted">see more</a>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <section id = "banner">
        <div className="relative min-h-[400px] md:min-h-[460px] lg:min-h-[600px] xl:min-h-[800px]">
          <div className="text-center flex flex-col justify-center gap-6 ">
            <h1>
              <span className="relative after:absolute after:w-full after:h-full after:bg-primary after:top-0 after:left-0 after:z-[-1] px-2">
                Providing services
              </span>
              <br />
              <span>Your Business Deserves</span>
            </h1>
            <div className="flex gap-4 justify-center">
              <Link href="/getStarted">
                <a className="button-primary ">get started</a>
              </Link>
              <Link href="/services">
                <a className="button-primary bg-transparent border border-custom-gray/20 text-custom-black shadow-none">How It works</a>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 w-[590px] md:w-full  left-1/2 -translate-x-1/2 z-[-1] ">
            <Image src={bannerIllustration} alt="banner image" layout="responsive" priority />
          </div>
        </div>
      </section>
      <Partners />
      <section id = 'intro'>
        <div className="twoColGrid flex-col-reverse">
          <div className="twoColGridContents ">
            <h2>
              Solution for <br /> every business needs
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus necessitatibus aut neque? Quae recusandae sint sapiente, </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="aspect-square w-[40px]  flex items-center justify-center  bg-custom-gray/10  rounded-full">
                  <svg className="w-1/2 fill-current text-custom-black" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.8983 0.926924C18.8103 0.838867 18.7058 0.769017 18.5908 0.721358C18.4758 0.673699 18.3525 0.64917 18.228 0.64917C18.1035 0.64917 17.9802 0.673699 17.8652 0.721358C17.7502 0.769017 17.6457 0.838867 17.5577 0.926924L6.20141 12.286L1.83253 7.91994C1.74651 7.82412 1.64186 7.74684 1.52497 7.69282C1.40808 7.63879 1.28141 7.60916 1.15268 7.60572C1.02396 7.60228 0.895887 7.62511 0.776281 7.67281C0.656674 7.72052 0.548045 7.7921 0.457023 7.88319C0.366001 7.97427 0.294497 8.08295 0.246876 8.20259C0.199254 8.32223 0.176514 8.45032 0.180044 8.57904C0.183573 8.70776 0.213299 8.83441 0.267405 8.95126C0.321512 9.06811 0.398864 9.17271 0.49474 9.25867L5.52784 14.2974C5.7057 14.475 5.94678 14.5748 6.19814 14.5748C6.4495 14.5748 6.69058 14.475 6.86844 14.2974L18.8983 2.26846C18.9865 2.18043 19.0565 2.07588 19.1042 1.96078C19.152 1.84569 19.1765 1.7223 19.1765 1.59769C19.1765 1.47309 19.152 1.3497 19.1042 1.23461C19.0565 1.11951 18.9865 1.01495 18.8983 0.926924V0.926924Z"
                      fill="black"
                    />
                  </svg>
                </span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="aspect-square w-[40px]  flex items-center justify-center  bg-custom-gray/10  rounded-full">
                  <svg className="w-1/2 fill-current text-custom-black" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.8983 0.926924C18.8103 0.838867 18.7058 0.769017 18.5908 0.721358C18.4758 0.673699 18.3525 0.64917 18.228 0.64917C18.1035 0.64917 17.9802 0.673699 17.8652 0.721358C17.7502 0.769017 17.6457 0.838867 17.5577 0.926924L6.20141 12.286L1.83253 7.91994C1.74651 7.82412 1.64186 7.74684 1.52497 7.69282C1.40808 7.63879 1.28141 7.60916 1.15268 7.60572C1.02396 7.60228 0.895887 7.62511 0.776281 7.67281C0.656674 7.72052 0.548045 7.7921 0.457023 7.88319C0.366001 7.97427 0.294497 8.08295 0.246876 8.20259C0.199254 8.32223 0.176514 8.45032 0.180044 8.57904C0.183573 8.70776 0.213299 8.83441 0.267405 8.95126C0.321512 9.06811 0.398864 9.17271 0.49474 9.25867L5.52784 14.2974C5.7057 14.475 5.94678 14.5748 6.19814 14.5748C6.4495 14.5748 6.69058 14.475 6.86844 14.2974L18.8983 2.26846C18.9865 2.18043 19.0565 2.07588 19.1042 1.96078C19.152 1.84569 19.1765 1.7223 19.1765 1.59769C19.1765 1.47309 19.152 1.3497 19.1042 1.23461C19.0565 1.11951 18.9865 1.01495 18.8983 0.926924V0.926924Z"
                      fill="black"
                    />
                  </svg>
                </span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <Image src={reading} alt="illustration" />
        </div>
      </section>
      <SectionLayout id = 'services' title  ={'What we provide'} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.'} element = {<Anchor href = '/services' />}>
      <div className="flex flex-row justify-center items-center gap-4 flex-wrap lg:justify-between  lg:gap-6 xl:gap-8">
        <ServiceCard
          link="/services"
          name={"App Design"}
          details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim."
          color="#8CE1EB"
        >
          <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42.7326 13.1937L33.3544 10.0021C33.0758 9.90555 32.773 9.90555 32.4916 10.0021L23.1134 13.1937C22.5695 13.3787 22.2051 13.891 22.2051 14.465V21.65C22.2051 30.4202 31.9825 34.6792 32.4005 34.8589C32.5693 34.9286 32.7462 34.9662 32.923 34.9662C33.0999 34.9662 33.2794 34.9313 33.4455 34.8589C33.8635 34.6792 43.641 30.4175 43.641 21.6474V14.4623C43.641 13.891 43.2766 13.3787 42.7326 13.1937ZM38.7938 19.9738L33.8823 26.2309C33.5822 26.6144 33.1374 26.8585 32.6524 26.9068C32.5961 26.9121 32.5345 26.9148 32.4782 26.9148C32.0549 26.9148 31.6396 26.7646 31.3153 26.4857L28.1884 23.8037C27.4381 23.16 27.3497 22.0336 27.9954 21.2826C28.6385 20.5343 29.7666 20.4458 30.5142 21.0895L32.2264 22.5566L35.9884 17.7665C36.5966 16.9914 37.7193 16.8546 38.4964 17.4661C39.2681 18.0749 39.4047 19.1987 38.7938 19.9738Z"
              
            />
            <path
              d="M29.3516 7.30098V6.35424C29.3516 3.40404 26.9401 0.990234 23.9926 0.990234H6.12851C3.18107 0.990234 0.769531 3.40404 0.769531 6.35424V38.5383C0.769531 41.4885 3.18107 43.9023 6.12851 43.9023H23.9926C26.9401 43.9023 29.3516 41.4885 29.3516 38.5383V37.3582C28.2262 36.7494 26.9937 35.9448 25.7799 34.9792V36.7494H4.34397V6.35424C4.34397 5.36994 5.14781 4.56534 6.13119 4.56534H23.9953C24.9787 4.56534 25.7825 5.36994 25.7825 6.35424V8.51861L29.3516 7.30098Z"
              
            />
          </svg>
        </ServiceCard>
        <ServiceCard
          link="/services"
          name={"Web Development"}
          details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim."
          color="#D9A4FC"
        >
          <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32.2558 21.3187L22.867 18.1214C22.588 18.0246 22.2849 18.0246 22.0032 18.1214L12.6144 21.3187C12.0699 21.5041 11.7051 22.0146 11.7051 22.5896V29.7878C11.7051 38.5738 21.4935 42.8406 21.912 43.0206C22.0783 43.0904 22.2581 43.1254 22.4351 43.1254C22.6122 43.1254 22.7919 43.0904 22.9582 43.0179C23.3767 42.8406 33.1651 38.5711 33.1651 29.7878V22.5896C33.1651 22.0146 32.8003 21.5041 32.2558 21.3187ZM28.3125 28.1112L23.3954 34.3796C23.095 34.7638 22.6497 35.0083 22.1642 35.0567C22.1052 35.0621 22.0461 35.0648 21.9871 35.0648C21.5633 35.0648 21.1475 34.9143 20.8229 34.6349L17.6924 31.948C16.9413 31.3032 16.8528 30.1747 17.4993 29.4223C18.1431 28.6727 19.2724 28.584 20.0182 29.2289L21.7323 30.6986L25.4985 25.8999C26.1075 25.1234 27.2314 24.9863 28.0094 25.5989C28.7873 26.2062 28.9241 27.332 28.3125 28.1112Z"
             
            />
            <path
              d="M38.5297 0.135742H6.33962C3.38887 0.135742 0.974609 2.55392 0.974609 5.50948V34.1703C0.974609 37.1259 3.38887 39.544 6.33962 39.544H11.6698C10.8114 38.4505 10.0603 37.2683 9.47011 35.9625H6.33962C5.35514 35.9625 4.55039 35.1564 4.55039 34.1703V9.09376H40.3189V34.1703C40.3189 35.1564 39.5142 35.9625 38.5297 35.9625H35.3992C34.8091 37.271 34.058 38.4532 33.2183 39.544H38.5297C41.4805 39.544 43.8947 37.1259 43.8947 34.1703V5.50948C43.8947 2.55392 41.4805 0.135742 38.5297 0.135742Z"
              
            />
          </svg>
        </ServiceCard>
        <ServiceCard
          link="/services"
          name={"Web Design"}
          details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim."
          color="#FD907E"
        >
          <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32.2558 3.40566L22.867 0.208288C22.588 0.11156 22.2849 0.11156 22.0032 0.208288L12.6144 3.40566C12.0699 3.59105 11.7051 4.10156 11.7051 4.67924V11.8774C11.7051 20.6634 21.4935 24.9302 21.912 25.1102C22.081 25.18 22.2581 25.2177 22.4351 25.2177C22.6122 25.2177 22.7919 25.1827 22.9582 25.1102C23.3767 24.9302 33.1651 20.6607 33.1651 11.8747V4.67924C33.1651 4.10156 32.8003 3.59105 32.2558 3.40566ZM28.3125 10.1981L23.3954 16.4665C23.095 16.8508 22.6497 17.0953 22.1642 17.1436C22.1078 17.149 22.0461 17.1517 21.9898 17.1517C21.566 17.1517 21.1502 17.0012 20.8256 16.7218L17.6951 14.0349C16.944 13.3901 16.8555 12.2616 17.502 11.5093C18.1458 10.7596 19.2751 10.671 20.0209 11.3158L21.735 12.7855L25.5012 7.98677C26.1101 7.21027 27.2341 7.07324 28.012 7.68584C28.7873 8.29576 28.9241 9.42156 28.3125 10.1981Z"
              
            />
            <path
              d="M40.7669 7.30078H36.7432V10.8824H40.3189V30.5852H4.55039V10.8824H8.12617V7.30078H4.10241C2.38561 7.30078 0.974609 8.71408 0.974609 10.4337V34.6155C0.974609 36.3351 2.38561 37.7511 4.10241 37.7511H17.7993C17.5901 38.6485 17.0321 40.1048 15.5433 41.596C15.2885 41.8512 15.2107 42.2381 15.3502 42.5713C15.487 42.9072 15.8142 43.1248 16.1764 43.1248H28.6956C29.0578 43.1248 29.385 42.9072 29.5219 42.5713C29.6587 42.2355 29.5835 41.8512 29.3287 41.596C27.8426 40.1074 27.2712 38.6512 27.0486 37.7511H40.7669C42.4837 37.7511 43.8947 36.3351 43.8947 34.6155V10.4337C43.8947 8.71408 42.4837 7.30078 40.7669 7.30078Z"
              
            />
          </svg>
        </ServiceCard>
      </div>
      </SectionLayout>
      <SectionLayout id = 'projects' title = 'our projects' description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.'} element ={<Anchor href = '/projects' />}>
       
       <div className="flex flex-row justify-center items-center gap-4 flex-wrap lg:justify-between  lg:gap-6 xl:gap-8">
       <ProjectCard title ='Watch - Product Responsive Landing Page' image  = '/images/projects/projectImage1.png' bg = '#F5E6FE'/>
       <ProjectCard title ='Watch - Product Responsive Landing Page' image  = '/images/projects/projectImage2.png' bg = '#F4ECE0'/>
       </div>
      </SectionLayout>
      <SectionLayout id ='blogs' title  = 'our blogs' description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.'} element = {<Anchor href = '/blogs' />}>
        <div className="flex flex-row justify-center items-center gap-6 flex-wrap lg:justify-between  xl:gap-8">
          <BlogPostCard title = {'Best Design Tips You Will Read This Year'} image = '/images/blogs/blog1.png' category={'travel'} date = '10-9-2022'/>
          <BlogPostCard title = {'Best Design Tips You Will Read This Year'} image = '/images/blogs/blog2.png' category={'development'} date = '10-9-2022'/>
          <BlogPostCard title = {'Best Design Tips You Will Read This Year'} image = '/images/blogs/blog3.png' category={'seo'} date = '10-9-2022'/>
        </div>
      </SectionLayout>
      <SectionLayout id = 'testimonials' title = 'Customer Feedback' description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.'} element ={<div></div>}>
         
           <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 lg:gap-6 xl:gap-8">
           <TestimonialCard image ='/images/testimonials/review1.png' name = 'name1' role='designer' review = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.' rating = {4} color = '#FFF80A' />
          <TestimonialCard image ='/images/testimonials/review1.png' name = 'name1' role='designer' review = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.' rating = {4} color = '#26C6DA' />
           </div>
        
      </SectionLayout>
      <NewsLetter />
    </>
  );
}
