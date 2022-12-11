import Navbar from '../components/Navbar'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'


function about() {

  let {scrollYProgress} = useScroll();
  let scale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
return (
      <>
        <motion.main className="absolute top-0 left-0 flex flex-col justify-center w-full h-full px-16 text-center bg-black align-center "
            initial={{ y:"100%" }} animate={{ y:"0%" }} 
            exit={{ opacity: 1  }}
            transition={{duration: .75, ease: "easeOut"}}>
              <div className="relative flex-col bg-center bg-contain h-3/4">
                <img src="/portfolio.png" alt="portfolio" width="75%" height="100%" className="absolute object-cover w-full h-full opacity-50 -z-10"/>
              <div classname="z-50 ">
              <div className="z-10 text-5xl text-white top-7">
                  <h1>Hello World, I'm Sto</h1>
              </div>
              <div className="z-10 text-3xl text-white">
                  <h2>Welcome</h2>
                  <h2>To</h2>
              </div>
              <div className="z-10 text-6xl font-semibold text-white">
              <h2> Sto's Digital Solutions'</h2>
              </div>
              <div className="z-10 text-white">
                  <h2>I specialize in making your vision reality with zero's, one's and a bit of coffee.</h2>
                  <h3 className="z-10 text-4xl font-bold text-white">
                  『☕』
                  </h3>
              </div>    
              </div>
              </div>
        </motion.main>
    </>

  )
}

export default about
