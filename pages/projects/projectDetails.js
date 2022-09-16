import NewsLetter from "components/newsLetter/newsLetter";
import PageTitleSection from "components/pageTitleSection/pageTitleSection";
import ProjectCard from "components/projectCard/projectCard";
import styles from "styles/projectDetails.module.css";

const Detail = ({ children, name, sub }) => {
  return (
    <div className="flex items-center gap-4  xl:gap-6">
      <div className="rounded-full bg-secondary text-custom-black aspect-square flex items-center justify-center min-w-[60px] lg:min-w-[80px] xl:min-w-[100px]">
        <div className="w-1/3">{children}</div>
      </div>
      <div>
        <p>{name}</p>
        <p className="font-bold text-custom-black leading-normal 2xl:leading-loose">{sub}</p>
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  return (
    <div>
      <PageTitleSection title="Project Details" sub="Home > Projects > watch" />
      <section>
      <div className="twoColGrid flex-col-reverse items-center gap-10 ">
        <div className="twoColGridContents">
          <h2>What Watch - Product Responsive Landing Page</h2>
          <p>
            Nulla volutpat enim lorem, non volutpat tortor consequa ac Quisque ipsum arcu, vehicula sit amet tempor non, blandite proin dignissim vitae ipsum a
            laoreet. In molestie imperdiet vehicula urna. Ut ullamcorper neque dui, imperdiet ornared at augue. Donec semper velit eget urna volutpat aliquet.
            Donec eget sollicitudin congue.
          </p>
          <p className="">
            Proin gravida ex eget augue eleifend eleifen Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem
            ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla.
          </p>
        </div>
        <div className="md:justify-self-end">
          <ProjectCard image="/images/projects/projectImage1.png" title="Watch - Product Responsive Landing Page" bg="#FFF80A33" />
        </div>
      </div>
      </section>
     <section>
     <div className="bg-muted grid grid-cols-1  rounded-[10px] gap-4 p-8 md:grid-cols-2 md:gap-6 md:p-10 lg:p-12 lg:gap-12 lg:grid-cols-3 lg:rounded-[20px] xl:p-16 xl:gap-16 2xl:p-20">
        <Detail name={"client"} sub="Paul Themes Company, Russia">
          <svg viewBox="0 0 39 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M37.154 41.1009V36.7134C37.154 34.3861 36.2328 32.1542 34.5931 30.5086C32.9534 28.863 30.7294 27.9385 28.4105 27.9385H10.9233C8.60433 27.9385 6.38037 28.863 4.74063 30.5086C3.10088 32.1542 2.17969 34.3861 2.17969 36.7134V41.1009"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.6674 19.1641C24.4964 19.1641 28.411 15.2354 28.411 10.3892C28.411 5.54293 24.4964 1.61426 19.6674 1.61426C14.8385 1.61426 10.9238 5.54293 10.9238 10.3892C10.9238 15.2354 14.8385 19.1641 19.6674 19.1641Z"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Detail>
        <Detail name={"service"} sub="UI Design,Graphic Design">
          <svg viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.0008 25.4351C23.8047 25.4351 26.0777 23.1621 26.0777 20.3582C26.0777 17.5543 23.8047 15.2812 21.0008 15.2812C18.1968 15.2812 15.9238 17.5543 15.9238 20.3582C15.9238 23.1621 18.1968 25.4351 21.0008 25.4351Z"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33.5232 25.4355C33.298 25.9459 33.2308 26.5121 33.3303 27.0611C33.4298 27.6101 33.6915 28.1166 34.0817 28.5155L34.1832 28.617C34.4979 28.9313 34.7476 29.3046 34.9179 29.7155C35.0882 30.1264 35.1759 30.5668 35.1759 31.0116C35.1759 31.4564 35.0882 31.8968 34.9179 32.3077C34.7476 32.7186 34.4979 33.0919 34.1832 33.4062C33.8689 33.7209 33.4956 33.9706 33.0847 34.1409C32.6738 34.3112 32.2334 34.3989 31.7886 34.3989C31.3438 34.3989 30.9034 34.3112 30.4925 34.1409C30.0816 33.9706 29.7083 33.7209 29.394 33.4062L29.2925 33.3047C28.8936 32.9146 28.387 32.6529 27.8381 32.5533C27.2891 32.4538 26.7229 32.521 26.2125 32.7462C25.7119 32.9608 25.285 33.317 24.9844 33.771C24.6837 34.225 24.5223 34.7571 24.5202 35.3016V35.5893C24.5202 36.487 24.1636 37.3479 23.5288 37.9826C22.8941 38.6173 22.0332 38.9739 21.1355 38.9739C20.2379 38.9739 19.377 38.6173 18.7423 37.9826C18.1075 37.3479 17.7509 36.487 17.7509 35.5893V35.437C17.7378 34.8769 17.5565 34.3336 17.2306 33.8779C16.9046 33.4222 16.4491 33.075 15.9232 32.8816C15.4128 32.6564 14.8466 32.5892 14.2976 32.6887C13.7486 32.7882 13.2421 33.0499 12.8432 33.4401L12.7417 33.5416C12.4273 33.8563 12.0541 34.106 11.6432 34.2763C11.2323 34.4466 10.7919 34.5343 10.3471 34.5343C9.90228 34.5343 9.46185 34.4466 9.05097 34.2763C8.64008 34.106 8.2668 33.8563 7.95246 33.5416C7.63777 33.2273 7.38812 32.854 7.21779 32.4431C7.04747 32.0322 6.9598 31.5918 6.9598 31.147C6.9598 30.7022 7.04747 30.2618 7.21779 29.8509C7.38812 29.44 7.63777 29.0667 7.95246 28.7524L8.054 28.6509C8.44414 28.252 8.70585 27.7454 8.80539 27.1965C8.90493 26.6475 8.83773 26.0813 8.61246 25.5709C8.39794 25.0703 8.04174 24.6434 7.58771 24.3428C7.13368 24.0421 6.60164 23.8807 6.05707 23.8785H5.76938C4.87173 23.8785 4.01084 23.522 3.3761 22.8872C2.74136 22.2525 2.38477 21.3916 2.38477 20.4939C2.38477 19.5963 2.74136 18.7354 3.3761 18.1006C4.01084 17.4659 4.87173 17.1093 5.76938 17.1093H5.92169C6.48183 17.0962 7.02508 16.9149 7.48081 16.589C7.93654 16.263 8.28367 15.8075 8.47707 15.2816C8.70235 14.7712 8.76954 14.205 8.67 13.656C8.57046 13.107 8.30875 12.6005 7.91861 12.2016L7.81707 12.1001C7.50238 11.7857 7.25274 11.4125 7.08241 11.0016C6.91208 10.5907 6.82441 10.1503 6.82441 9.70547C6.82441 9.26068 6.91208 8.82025 7.08241 8.40937C7.25274 7.99848 7.50238 7.6252 7.81707 7.31086C8.13141 6.99617 8.5047 6.74652 8.91558 6.57619C9.32647 6.40586 9.7669 6.31819 10.2117 6.31819C10.6565 6.31819 11.0969 6.40586 11.5078 6.57619C11.9187 6.74652 12.292 6.99617 12.6063 7.31086L12.7078 7.41239C13.1067 7.80253 13.6133 8.06425 14.1622 8.16379C14.7112 8.26333 15.2774 8.19613 15.7878 7.97086H15.9232C16.4238 7.75633 16.8506 7.40013 17.1513 6.94611C17.452 6.49208 17.6134 5.96003 17.6155 5.41547V5.12778C17.6155 4.23012 17.9721 3.36923 18.6069 2.7345C19.2416 2.09976 20.1025 1.74316 21.0002 1.74316C21.8978 1.74316 22.7587 2.09976 23.3934 2.7345C24.0282 3.36923 24.3848 4.23012 24.3848 5.12778V5.28009C24.3869 5.82465 24.5483 6.35669 24.849 6.81072C25.1497 7.26475 25.5765 7.62095 26.0771 7.83547C26.5875 8.06074 27.1537 8.12794 27.7027 8.0284C28.2517 7.92886 28.7582 7.66715 29.1571 7.27701L29.2586 7.17547C29.573 6.86078 29.9462 6.61114 30.3571 6.44081C30.768 6.27048 31.2084 6.18281 31.6532 6.18281C32.098 6.18281 32.5384 6.27048 32.9493 6.44081C33.3602 6.61114 33.7335 6.86078 34.0478 7.17547C34.3625 7.48981 34.6122 7.8631 34.7825 8.27398C34.9528 8.68487 35.0405 9.1253 35.0405 9.57009C35.0405 10.0149 34.9528 10.4553 34.7825 10.8662C34.6122 11.2771 34.3625 11.6504 34.0478 11.9647L33.9463 12.0662C33.5562 12.4651 33.2945 12.9717 33.1949 13.5206C33.0954 14.0696 33.1626 14.6358 33.3878 15.1462V15.2816C33.6024 15.7822 33.9586 16.209 34.4126 16.5097C34.8666 16.8104 35.3987 16.9718 35.9432 16.9739H36.2309C37.1286 16.9739 37.9895 17.3305 38.6242 17.9653C39.2589 18.6 39.6155 19.4609 39.6155 20.3585C39.6155 21.2562 39.2589 22.1171 38.6242 22.7518C37.9895 23.3866 37.1286 23.7432 36.2309 23.7432H36.0786C35.5341 23.7453 35.002 23.9067 34.548 24.2074C34.0939 24.5081 33.7377 24.9349 33.5232 25.4355V25.4355Z"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Detail>
        <Detail name={"Team"} sub="Dev Pixels – UI/UX Design">
          <svg  viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.7918 33.5895V30.0795C28.7918 28.2177 28.0786 26.4322 26.8091 25.1157C25.5396 23.7992 23.8178 23.0596 22.0225 23.0596H8.48407C6.68876 23.0596 4.96698 23.7992 3.69751 25.1157C2.42803 26.4322 1.71484 28.2177 1.71484 30.0795V33.5895"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.2536 16.0389C18.9921 16.0389 22.0228 12.896 22.0228 9.01896C22.0228 5.14196 18.9921 1.99902 15.2536 1.99902C11.5151 1.99902 8.48438 5.14196 8.48438 9.01896C8.48438 12.896 11.5151 16.0389 15.2536 16.0389Z"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.9461 33.5889V30.0789C38.9449 28.5235 38.4457 27.0125 37.5268 25.7833C36.6079 24.554 35.3214 23.676 33.8691 23.2871"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.0996 2.22754C28.5557 2.61416 29.8463 3.49236 30.7679 4.72367C31.6896 5.95499 32.1898 7.46938 32.1898 9.02811C32.1898 10.5868 31.6896 12.1012 30.7679 13.3325C29.8463 14.5639 28.5557 15.4421 27.0996 15.8287"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Detail>
        <Detail name={"Date"} sub="2020 24, January">
          <svg  viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.7623 5.39331H5.7281C3.91075 5.39331 2.4375 6.86656 2.4375 8.68391V31.7181C2.4375 33.5354 3.91075 35.0087 5.7281 35.0087H28.7623C30.5796 35.0087 32.0529 33.5354 32.0529 31.7181V8.68391C32.0529 6.86656 30.5796 5.39331 28.7623 5.39331Z"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M23.8262 2.10229V8.68349" stroke="#272727" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6641 2.10229V8.68349" stroke="#272727" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.4375 15.2654H32.0529" stroke="#272727" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Detail>
        <Detail name={"website"} sub="Pixels.com Devpixels.com">
          <svg viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.9994 41.3339C32.9035 41.3339 41.743 32.4944 41.743 21.5903C41.743 10.6862 32.9035 1.84668 21.9994 1.84668C11.0954 1.84668 2.25586 10.6862 2.25586 21.5903C2.25586 32.4944 11.0954 41.3339 21.9994 41.3339Z"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M2.25586 21.5898H41.743" stroke="#272727" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M22.0008 1.84668C27.0845 7.25317 29.9735 14.2694 30.1305 21.5903C29.9735 28.9111 27.0845 35.9274 22.0008 41.3339C16.9171 35.9274 14.0281 28.9111 13.8711 21.5903C14.0281 14.2694 16.9171 7.25317 22.0008 1.84668V1.84668Z"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Detail>
        <Detail name={"Tags"} sub="Web design, Creative, Web">
          <svg  viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M39.8772 25.3537L25.1093 40.1254C24.7268 40.5085 24.2725 40.8124 23.7724 41.0198C23.2723 41.2271 22.7363 41.3339 22.1949 41.3339C21.6536 41.3339 21.1175 41.2271 20.6174 41.0198C20.1174 40.8124 19.6631 40.5085 19.2805 40.1254L1.58789 22.4488V1.84668H22.1846L39.8772 19.5439C40.6444 20.3159 41.0751 21.3602 41.0751 22.4488C41.0751 23.5373 40.6444 24.5817 39.8772 25.3537V25.3537Z"
              stroke="#272727"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M11.8867 12.1484H11.9072" stroke="#272727" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Detail>
      </div>
     </section>
     <NewsLetter />
    </div>
  );
};

export default ProjectDetails;
