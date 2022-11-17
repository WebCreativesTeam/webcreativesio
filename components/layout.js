import Footer from "./footer/footer";
import Header from "./header/header";
import PageLoader from "./pageLoader";

const Layout = ({children}) => {
    return ( 
        <>
        <PageLoader />
        <Header />
        <main className="page-wrapper ">{children}</main>
        <Footer />
        </>
     );
}
 
export default Layout;