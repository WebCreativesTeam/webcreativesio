import Footer from "./footer/footer";
import Header from "./header/header";

const Layout = ({children}) => {
    return ( 
        <>
        <Header />
        <main className="page-wrapper ">{children}</main>
        <Footer />
        </>
     );
}
 
export default Layout;