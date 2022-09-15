import Logo from "components/logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import classnames from "classnames";
const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
     {label: 'Home', route: '/', class: ''},
     {label: 'about us', route: '/aboutUs', class: ''},
     {label: 'services', route: '/services', class: ''},
     {label: 'blogs', route: '/blogs', class: ''},
     {label: 'projects', route: '/projects', class: ''},
     {label: 'Say Hi!', route: '/getStarted', class: 'button-primary lg:hidden'},
  ]
  return (
    <header>
      <div className={classnames(styles.headerWrapper,'page-wrapper')}>
        <div className={classnames(styles.logo)}>
        <Logo />
        </div>
        <nav className={classnames(styles.menu, open && styles.menuOpen)} >
          {links.map(link =>{
               return(
                    <Link  href = {link.route} key = {link.label}>
                    <a onClick={() => setOpen(false)} className={link?.class}>{link.label}</a>
               </Link>
               )
          })}
        </nav>
        
        <Link href = '/getStarted'>
        <span className="button-primary hidden lg:flex order-3 cursor-pointer ">Say Hi!</span>
        </Link>
        <button className={classnames(styles.menuBtn, open && styles.menuBtnOpen)} onClick={() => setOpen(val => !val)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
      </div>
    </header>
  );
};

export default Header;
