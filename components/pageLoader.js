import {AnimatePresence, motion} from 'framer-motion'
import Router from "next/router";
import { useEffect, useState } from 'react';

const PageLoader = () => {

    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
      
        Router.events.on("routeChangeStart", (url)=>{
          setIsLoading(true)
        });
    
        Router.events.on("routeChangeComplete", (url)=>{
          setIsLoading(false)
        });
    
        Router.events.on("routeChangeError", (url) =>{
          setIsLoading(false)
        });
    
      }, [Router])

    return ( 
        <AnimatePresence>
        {loading && <motion.div initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}}   className="w-full h-full fixed top-0 left-0 bg-black/70 backdrop-blur-lg grid place-items-center z-50 ">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  style={{
    margin: "auto",
    background: "none",
    display: "block",
    shapeRendering: "auto"
  }}
  className = 'w-16'
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
>
  <g>
    <circle cx={60} cy={50} r={4} fill="#ffffff">
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="0.3333333333333333s"
        values="95;35"
        keyTimes="0;1"
        begin="-2.0100000000000002s"
      />
      <animate
        attributeName="fill-opacity"
        repeatCount="indefinite"
        dur="0.3333333333333333s"
        values="0;1;1"
        keyTimes="0;0.2;1"
        begin="-2.0100000000000002s"
      />
    </circle>
    <circle cx={60} cy={50} r={4} fill="#ffffff">
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="0.3333333333333333s"
        values="95;35"
        keyTimes="0;1"
        begin="-0.99s"
      />
      <animate
        attributeName="fill-opacity"
        repeatCount="indefinite"
        dur="0.3333333333333333s"
        values="0;1;1"
        keyTimes="0;0.2;1"
        begin="-0.99s"
      />
    </circle>
    <circle cx={60} cy={50} r={4} fill="#ffffff">
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="0.3333333333333333s"
        values="95;35"
        keyTimes="0;1"
        begin="0s"
      />
      <animate
        attributeName="fill-opacity"
        repeatCount="indefinite"
        dur="0.3333333333333333s"
        values="0;1;1"
        keyTimes="0;0.2;1"
        begin="0s"
      />
    </circle>
  </g>
  <g transform="translate(-15 0)">
    <path
      d="M50 50L20 50A30 30 0 0 0 80 50Z"
      fill="#eed600"
      transform="rotate(90 50 50)"
    />
    <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#eed600">
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="0.3333333333333333s"
        values="0 50 50;45 50 50;0 50 50"
        keyTimes="0;0.5;1"
      />
    </path>
    <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#eed600">
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="0.3333333333333333s"
        values="0 50 50;-45 50 50;0 50 50"
        keyTimes="0;0.5;1"
      />
    </path>
  </g>
</svg>

        </motion.div>}
        </AnimatePresence>
     );
}
 
export default PageLoader;