import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png'
const Logo = () => {
    return ( 
        <div className='w-[120px] h-fit lg:w-[140px] xl:w-[173px]'>
            <Link href = '/' className='block'>
             <Image src={logo} alt="logo"  />
            </Link>
        </div>
     );
}
 
export default Logo;