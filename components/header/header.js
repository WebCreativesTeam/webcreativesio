import Logo from "components/logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import classnames from "classnames";
import {motion} from 'framer-motion'

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
  
  const variants = {
      visible: {
        x: 0,
        opacity: 1,
        
        transition: {
          type: 'tween',
           duration: 0.3,
           ease: 'easeOut'
        }
      },
      hidden: {
        x: 100,
        opacity:0,
      
      }
  }
  const parentVariant = {
    visible: {
      transition: {
        staggerChildren: 0.05,
         delayChildren: 0.25,
      }
    },
   
    
  }
   useEffect(() =>{
      const body = document.querySelector('body')
       body.dataset.menu = open ? 'open': 'close'
   })
  return (
    <header>
      <div className={classnames(styles.headerWrapper,'page-wrapper')}>
        <div className={classnames(styles.logo)}>
        <Logo />
        </div>
        <nav className={classnames(styles.menu, open && styles.menuOpen)} >
          <motion.div animate = {open? 'visible':'hidden'} variants = {parentVariant}  >
          {links.map(link =>{
               return(
                  
                    <motion.div variants={variants} key = {link.label}>
                      <Link   href = {link.route} onClick={() => setOpen(false)} className={link?.class}>
                    {link.label}
                    </Link>
                    </motion.div>
              
               )
          })}
          </motion.div>
        </nav>
        
        <Link href = '/getStarted' className="button-primary hidden lg:flex order-3 cursor-pointer ">
       Say Hi!
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
