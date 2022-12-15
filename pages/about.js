import Navbar from '../components/Navbar'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'


function about() {
  
return (
      <>
        <title>About</title>
        <link rel="icon" href="/sds.svg" />
        <motion.main className="absolute top-0 left-0 flex flex-col justify-center w-full h-full px-16 text-center max-[495px]:text-xs  bg-black align-center top "
            initial={{ y:"100%" }} animate={{ y:"0%" }} 
            exit={{ opacity: 1  }}
            transition={{duration: .75, ease: "easeOut"}}>
              <div className="relative flex-col justify-center bg-center bg-contain h-3/4 align-center">
                <img src="/portfolio.png" alt="portfolio" width="75%" height="100%" className="absolute object-cover w-full h-full opacity-50 -z-10"/>
              <div classname="z-50 max-[495px]:text-xs pt-28 ">
              <div className="z-10 text-5xl text-white max-[495px]:text-xs  ">
                  <h1>Hello World, I am Sto</h1>
              </div>
              <div className="z-10 text-3xl text-white">
                  <h2>Welcome</h2>
                  <h2>To</h2>
              </div>
              <div className="z-10 text-6xl font-semibold text-white max-[495px]:text-xs ">
              <h2> Stos Digital Solutions</h2>
              </div>
              <div className="z-10 text-white">
                  <h2>I specialize in making your vision reality with zeros, ones and a bit of coffee.</h2>
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
