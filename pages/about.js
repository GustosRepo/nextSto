import Navbar from '../components/Navbar'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function about() {

  let {scrollYProgress} = useScroll();
  let scale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
return (
      <>
        <motion.main className="absolute top-0 left-0 flex flex-col justify-center w-full h-full px-16 text-center bg-black align-center "
            initial={{ y:"100%" }} animate={{ y:"0%" }} 
            exit={{ opacity: 1  }}
            transition={{duration: .75, ease: "easeOut"}}>
              <div className="text-white">
                  <h1>Hello World, I'm Sto</h1>
              </div>
              <div className="text-white">
                  <h2>Welcome</h2>
                  <h2>To</h2>
              </div>
              <div className="text-3xl text-white">
              <h2> Sto's Digital Solutions'</h2>
              </div>
              <div className="text-white">
                  <h2>I specielize in making your vision into reality with a zero's, one's and a bit of coffee.</h2>
                  <h3 className="text-4xl">
                  『☕』
                  </h3>
              </div>
        </motion.main>
    </>

  )
}

export default about
