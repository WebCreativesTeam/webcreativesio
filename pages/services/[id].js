import styles from "styles/serviceDetails.module.css";
import reading from "public/images/illustrations/reading.png";
import browsing from "public/images/illustrations/browsing.png";
import celebrating from 'public/images/illustrations/celebrating.png'
import Image from "next/image";
import PageTitleSection from "components/pageTitleSection/pageTitleSection";
const ServiceDetails = () => {
  return (
    <div>
      <PageTitleSection title="App Design" sub="Home > Services > App Design" />
      <section>
        <div className="grid gap-4 lg:gap-6 xl:gap-8">
          <h2>App Desgin</h2>
          <p>
            Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit
            eget urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget
            lacinia lorem venenatis vitae. Donec et tristique nunc.
          </p>
          <p>
            Proin gravida ex eget augue eleifend eleifend. Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem
            ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare
            sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed,
            placerat{" "}
          </p>
          <div className="bg-muted">
            <div className="w-10/12 mx-auto">
            <Image src = {celebrating} alt = 'illustration' layout='responsive' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="twoColGrid flex-col-reverse gap-6 ">
          <div className="twoColGridContents ">
            <h2>
              Providing The World&apos;s Best <br></br> User Experiences
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
          <div className="">
            <Image src={browsing} alt="illustration" />
          </div>
        </div>
      </section>
      <section>
        <div className="twoColGrid ">
          <div className="scale-x-[-1]">
            <Image src={reading} alt="illustration" />
          </div>
          <div className="twoColGridContents md:ml-8">
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
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
