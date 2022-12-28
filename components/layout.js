import { useEffect } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import PageLoader from "./pageLoader";

const Layout = ({children}) => {
    return ( 
        <>
        <PageLoader />
        <Header />
        <main className="page-wrapper mt-[74px] lg:mt-[82px] xl:mt-[92px]" >{children}</main>
        <Footer />
        </>
     );
}
 
export default Layout;