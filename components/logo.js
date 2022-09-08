import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png'
const Logo = () => {
    return ( 
        <div className='w-[120px] h-fit lg:w-[140px] xl:w-[173px]'>
            <Link href = '/'>
             <a ><Image src={logo} alt="logo"  /></a>
            </Link>
        </div>
     );
}
 
export default Logo;