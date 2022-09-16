import NewsLetter from "components/newsLetter/newsLetter";
import PageTitleSection from "components/pageTitleSection/pageTitleSection";
import ServiceCard from "components/serviceCard/serviceCard";
import Image from "next/image";
import servicesIllustration from 'public/images/illustrations/services.svg'
import styles from "styles/services.module.css";
const Services = () => {
  return (
    <div>
      <PageTitleSection
        title="We Build, Grow and Manage Your Brands and Businesses"
        sub="Home > Services"
      />
      <section>
        <div className="sectionTitleCenter">
          <h2>Why Us?</h2>
          <p>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
        </div>
        <div className=" relative lg:bottom-[50px] mt-14 lg:m-0">
        <Image src = {servicesIllustration} alt = 'illustration'/>
        </div>
      </section>
      <section>
        <div className="sectionTitleCenter">
          <h2>What We Provide</h2>
          <p>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 flex-wrap mt-14 xl:mt-16   lg:gap-6 xl:gap-8">
          <ServiceCard link="/services" name={"App Design"} details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim." color="#26C6DA">
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.7326 13.1937L33.3544 10.0021C33.0758 9.90555 32.773 9.90555 32.4916 10.0021L23.1134 13.1937C22.5695 13.3787 22.2051 13.891 22.2051 14.465V21.65C22.2051 30.4202 31.9825 34.6792 32.4005 34.8589C32.5693 34.9286 32.7462 34.9662 32.923 34.9662C33.0999 34.9662 33.2794 34.9313 33.4455 34.8589C33.8635 34.6792 43.641 30.4175 43.641 21.6474V14.4623C43.641 13.891 43.2766 13.3787 42.7326 13.1937ZM38.7938 19.9738L33.8823 26.2309C33.5822 26.6144 33.1374 26.8585 32.6524 26.9068C32.5961 26.9121 32.5345 26.9148 32.4782 26.9148C32.0549 26.9148 31.6396 26.7646 31.3153 26.4857L28.1884 23.8037C27.4381 23.16 27.3497 22.0336 27.9954 21.2826C28.6385 20.5343 29.7666 20.4458 30.5142 21.0895L32.2264 22.5566L35.9884 17.7665C36.5966 16.9914 37.7193 16.8546 38.4964 17.4661C39.2681 18.0749 39.4047 19.1987 38.7938 19.9738Z" />
              <path d="M29.3516 7.30098V6.35424C29.3516 3.40404 26.9401 0.990234 23.9926 0.990234H6.12851C3.18107 0.990234 0.769531 3.40404 0.769531 6.35424V38.5383C0.769531 41.4885 3.18107 43.9023 6.12851 43.9023H23.9926C26.9401 43.9023 29.3516 41.4885 29.3516 38.5383V37.3582C28.2262 36.7494 26.9937 35.9448 25.7799 34.9792V36.7494H4.34397V6.35424C4.34397 5.36994 5.14781 4.56534 6.13119 4.56534H23.9953C24.9787 4.56534 25.7825 5.36994 25.7825 6.35424V8.51861L29.3516 7.30098Z" />
            </svg>
          </ServiceCard>
          <ServiceCard
            link="/services"
            name={"Web Development"}
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim."
            color="#BE63F9"
          >
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.2558 21.3187L22.867 18.1214C22.588 18.0246 22.2849 18.0246 22.0032 18.1214L12.6144 21.3187C12.0699 21.5041 11.7051 22.0146 11.7051 22.5896V29.7878C11.7051 38.5738 21.4935 42.8406 21.912 43.0206C22.0783 43.0904 22.2581 43.1254 22.4351 43.1254C22.6122 43.1254 22.7919 43.0904 22.9582 43.0179C23.3767 42.8406 33.1651 38.5711 33.1651 29.7878V22.5896C33.1651 22.0146 32.8003 21.5041 32.2558 21.3187ZM28.3125 28.1112L23.3954 34.3796C23.095 34.7638 22.6497 35.0083 22.1642 35.0567C22.1052 35.0621 22.0461 35.0648 21.9871 35.0648C21.5633 35.0648 21.1475 34.9143 20.8229 34.6349L17.6924 31.948C16.9413 31.3032 16.8528 30.1747 17.4993 29.4223C18.1431 28.6727 19.2724 28.584 20.0182 29.2289L21.7323 30.6986L25.4985 25.8999C26.1075 25.1234 27.2314 24.9863 28.0094 25.5989C28.7873 26.2062 28.9241 27.332 28.3125 28.1112Z" />
              <path d="M38.5297 0.135742H6.33962C3.38887 0.135742 0.974609 2.55392 0.974609 5.50948V34.1703C0.974609 37.1259 3.38887 39.544 6.33962 39.544H11.6698C10.8114 38.4505 10.0603 37.2683 9.47011 35.9625H6.33962C5.35514 35.9625 4.55039 35.1564 4.55039 34.1703V9.09376H40.3189V34.1703C40.3189 35.1564 39.5142 35.9625 38.5297 35.9625H35.3992C34.8091 37.271 34.058 38.4532 33.2183 39.544H38.5297C41.4805 39.544 43.8947 37.1259 43.8947 34.1703V5.50948C43.8947 2.55392 41.4805 0.135742 38.5297 0.135742Z" />
            </svg>
          </ServiceCard>
          <ServiceCard link="/services" name={"Web Design"} details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim." color="#FF733B">
            <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.2558 3.40566L22.867 0.208288C22.588 0.11156 22.2849 0.11156 22.0032 0.208288L12.6144 3.40566C12.0699 3.59105 11.7051 4.10156 11.7051 4.67924V11.8774C11.7051 20.6634 21.4935 24.9302 21.912 25.1102C22.081 25.18 22.2581 25.2177 22.4351 25.2177C22.6122 25.2177 22.7919 25.1827 22.9582 25.1102C23.3767 24.9302 33.1651 20.6607 33.1651 11.8747V4.67924C33.1651 4.10156 32.8003 3.59105 32.2558 3.40566ZM28.3125 10.1981L23.3954 16.4665C23.095 16.8508 22.6497 17.0953 22.1642 17.1436C22.1078 17.149 22.0461 17.1517 21.9898 17.1517C21.566 17.1517 21.1502 17.0012 20.8256 16.7218L17.6951 14.0349C16.944 13.3901 16.8555 12.2616 17.502 11.5093C18.1458 10.7596 19.2751 10.671 20.0209 11.3158L21.735 12.7855L25.5012 7.98677C26.1101 7.21027 27.2341 7.07324 28.012 7.68584C28.7873 8.29576 28.9241 9.42156 28.3125 10.1981Z" />
              <path d="M40.7669 7.30078H36.7432V10.8824H40.3189V30.5852H4.55039V10.8824H8.12617V7.30078H4.10241C2.38561 7.30078 0.974609 8.71408 0.974609 10.4337V34.6155C0.974609 36.3351 2.38561 37.7511 4.10241 37.7511H17.7993C17.5901 38.6485 17.0321 40.1048 15.5433 41.596C15.2885 41.8512 15.2107 42.2381 15.3502 42.5713C15.487 42.9072 15.8142 43.1248 16.1764 43.1248H28.6956C29.0578 43.1248 29.385 42.9072 29.5219 42.5713C29.6587 42.2355 29.5835 41.8512 29.3287 41.596C27.8426 40.1074 27.2712 38.6512 27.0486 37.7511H40.7669C42.4837 37.7511 43.8947 36.3351 43.8947 34.6155V10.4337C43.8947 8.71408 42.4837 7.30078 40.7669 7.30078Z" />
            </svg>
          </ServiceCard>
          <ServiceCard
            link="/services"
            name={"Interface Design"}
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim."
            color="#FF391A"
          >
            <svg viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.5523 38H3.20504C1.75067 38 0.570312 36.8241 0.570312 35.3753V33.6247C0.570312 32.1759 1.75067 31 3.20504 31H29.5523C31.0067 31 32.1871 32.1759 32.1871 33.6247V35.3753C32.1871 36.8241 31.0094 38 29.5523 38Z" />
              <path d="M29.5523 29H3.20504C1.75067 29 0.570312 27.8241 0.570312 26.3753V24.6247C0.570312 23.1759 1.75067 22 3.20504 22H29.5523C31.0067 22 32.1871 23.1759 32.1871 24.6247V26.3753C32.1871 27.8241 31.0094 29 29.5523 29Z" />
              <path d="M29.5523 12.6659H25.1603V7.91588C25.1603 3.55063 21.2213 0 16.3787 0C11.5361 0 7.59714 3.55063 7.59714 7.91588V12.6659H3.20504C1.75067 12.6659 0.570312 13.7299 0.570312 15.0409V16.625C0.570312 17.936 1.75067 19 3.20504 19H29.5523C31.0067 19 32.1871 17.936 32.1871 16.625V15.0409C32.1871 13.7299 31.0094 12.6659 29.5523 12.6659ZM11.1092 7.91588C11.1092 5.29625 13.4726 3.16588 16.3787 3.16588C19.2848 3.16588 21.6482 5.29625 21.6482 7.91588V12.6659H11.1092V7.91588Z" />
            </svg>
          </ServiceCard>
          <ServiceCard
            link="/services"
            name={"Web Development"}
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim."
            color="#1D5EF4"
          >
            <svg viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2647 17.182H26.8248V14.8641C26.8248 12.7338 24.857 11 22.4334 11C20.0099 11 18.0447 12.7338 18.0447 14.8641V17.182H17.6048C15.9109 17.182 14.5332 18.3943 14.5332 19.8871V25.2949C14.5332 26.7854 15.9109 28 17.6074 28H27.2674C28.9612 28 30.3416 26.7877 30.3416 25.2949V19.8871C30.339 18.3943 28.9612 17.182 27.2647 17.182ZM20.679 14.8641C20.679 14.011 21.4667 13.318 22.4361 13.318C23.4055 13.318 24.1932 14.011 24.1932 14.8641V17.182H20.6816V14.8641H20.679Z" />
              <path d="M38.5273 0H6.34598C3.38798 0 0.982422 2.07936 0.982422 4.63626V29.3637C0.982422 31.9206 3.38798 34 6.34598 34H38.5273C41.4853 34 43.8909 31.9206 43.8909 29.3637V4.63626C43.8909 2.07936 41.4853 0 38.5273 0ZM38.5273 30.9076H6.34598C5.35909 30.9076 4.55723 30.2145 4.55723 29.3614V7.72632H40.3161V29.3614C40.3161 30.2145 39.5142 30.9076 38.5273 30.9076Z" />
            </svg>
          </ServiceCard>
          <ServiceCard link="/services" name={"Web Design"} details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim." color="#1CE524">
            <svg viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.0096 2.86572L32.6307 0.063578C32.352 -0.0211927 32.0492 -0.0211927 31.7678 0.063578L22.3889 2.86572C21.8449 3.02819 21.4805 3.47559 21.4805 3.98186V10.2902C21.4805 17.9902 31.2587 21.7295 31.6767 21.8873C31.8455 21.9485 32.0224 21.9815 32.1992 21.9815C32.3761 21.9815 32.5556 21.9509 32.7218 21.8873C33.1398 21.7295 42.918 17.9879 42.918 10.2879V3.98186C42.918 3.47559 42.5536 3.02819 42.0096 2.86572ZM38.0704 8.8185L33.1586 14.3121C32.8584 14.6488 32.4136 14.8631 31.9286 14.9055C31.8723 14.9102 31.8107 14.9126 31.7544 14.9126C31.331 14.9126 30.9157 14.7807 30.5914 14.5358L27.4642 12.1811C26.7139 11.6159 26.6255 10.6269 27.2713 9.96761C27.9144 9.31064 29.0426 9.23293 29.7902 9.79807L31.5025 11.0861L35.2648 6.88055C35.8731 6.20003 36.9959 6.07994 37.773 6.61682C38.5447 7.15134 38.6814 8.13798 38.0704 8.8185Z" />
              <path d="M0.912043 18.9994C0.426671 19.0089 0.0351562 19.3604 0.0351562 19.7926V34.4326C0.0351562 34.6511 0.236277 34.8292 0.482985 34.8292H4.72262C5.12218 34.8292 5.47347 34.5941 5.58341 34.2545L9.53879 21.9085C9.79354 21.1106 9.31085 20.2723 8.43128 19.9897C6.80891 19.4649 4.32574 18.9496 0.912043 18.9994Z" />
              <path d="M39.3659 27.7056C35.7913 27.7056 28.6394 31.7141 25.0622 31.7141C21.4876 31.7141 17.4652 29.2895 17.4652 29.2895C17.4652 29.2895 22.2813 30.0803 25.0622 30.0803C27.8457 30.0803 28.6368 29.2396 28.6368 28.1022C28.6368 25.3309 23.3218 24.9011 20.6348 24.5401C17.9961 23.2388 16.6258 22.2105 12.2548 21.8828C12.228 22.1084 12.1877 22.3316 12.118 22.5572L8.52734 33.7658C12.5954 35.4044 19.5997 37.9999 23.2762 37.9999C28.6394 37.9999 42.9432 31.6666 42.9432 30.085C42.9405 28.4964 41.1545 27.7056 39.3659 27.7056Z" />
            </svg>
          </ServiceCard>
        </div>
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

export default Services;
