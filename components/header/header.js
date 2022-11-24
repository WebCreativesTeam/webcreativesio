import Logo from "components/logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import classnames from "classnames";
import { motion } from "framer-motion";
import { useMediaQuery } from "util/useMedia";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery(1024);
  const [scrolledDown, setScrolledDown] = useState(false)
  const [ scrollY, setScrollY] = useState(0)
  const links = [
    { label: "Home", route: "/", class: "" },
    { label: "about us", route: "/aboutUs", class: "" },
    { label: "services", route: "/services", class: "" },
    { label: "blogs", route: "/blogs", class: "" },
    { label: "projects", route: "/projects", class: "" },
    { label: "Say Hi!", route: "/getStarted", class: "button-primary lg:hidden" },
  ];
  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          setScrolledDown(true)
        } else {
          setScrolledDown(false)
        }
        lastScrollTop = st <= 0 ? 0 : st; 
        setScrollY(window.scrollY)
      },
      false
    );
  },[]);

  const variants = !isDesktop && {
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 80,
        duration: 0.2,
        ease: "easeOut",
      },
    },
    hidden: {
      x: 100,
      opacity: 0,
    },
  };
  const parentVariant = {
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };
  useEffect(() => {
    const body = document.querySelector("body");
    body.dataset.menu = open ? "open" : "close";
  });
  return (
    <motion.header  animate = {{y: scrolledDown ? '-100%': '0%'}} className={`fixed w-full top-0 z-50 ${scrollY >0 && 'bg-white shadow-lg'}`}>
      <div className={classnames(styles.headerWrapper, "page-wrapper")}>
        <div className={classnames(styles.logo)}>
          <Logo />
        </div>
        <nav className={classnames(styles.menu, open && styles.menuOpen)}>
          <motion.div animate={!isDesktop && open ? "visible" : "hidden"} variants={parentVariant}>
            {links.map(link => {
              return (
                <motion.div variants={variants} key={link.label}>
                  <Link href={link.route} onClick={() => setOpen(false)} className={link?.class}>
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </nav>

        <motion.div className="lg:flex order-3 hidden" whileTap={{ scale: 0.9 }}>
          <Link href="/getStarted" className="button-primary xl:min-w-[140px] xl:h-[50px] xl:text-sm xl:font-normal cursor-pointer ">
            Say Hi!
          </Link>
        </motion.div>
        <button className={classnames(styles.menuBtn, open && styles.menuBtnOpen)} onClick={() => setOpen(val => !val)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
