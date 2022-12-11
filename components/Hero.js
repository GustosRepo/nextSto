import React from 'react'
import Image from 'next/image'
import {motion, useScroll, useTransform} from 'framer-motion'

const Hero = () => {

  let {scrollXProgress} = useScroll();
  let Scale = useTransform(scrollXProgress, [0, 0], ["-100%", "100%"]);
  
  return (
    <motion.div
    className="absolute left-0 w-full h-full px-8 bg-red-800"
    initial={{ x:"-100%" }} animate={{ x:"0%" }} 
    exit={{ opacity: 1 }} style={{Scale}}
    transition={{duration: .75, ease: "easeOut"}}>
        <div className="relative ">
        <motion.div
        >
          <div className=" -z-50 max-[350px]:text-xs flex flex-col text-[14px] text-center text-white -rotate-45 absolute top-0 -left-[320px]">
              <p className="animate-pulse ">❤️</p>
              <p className="font-black animated-fade-out">SOFTWARE</p>
              <p className="italic">Web.Development</p>
              <p className="font-thin">Engineering.Web.Design.</p>
              <p className="italic font-black">Web.Development.Engineering.UX/UI.</p>
              <p className="font-thin">Web.Development.Software.Engineering.UX/UI.Web.Development.Software.Engineering.UX/UI.Web</p>
              <p className="overflow-hidden">.U/X.U/I.U/X.U/I.U/X.U/I.U/X.U/I.U/X.UX.U/I.U/X.U/I.U/I.U/X.U/I.U/X.U/I</p>  
          </div>
          </motion.div>  
        </div>
        <main className = "flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
        <section className="flex flex-col">
          <p className="flex justify-center font-thin text-white animate-fade-in-down">
          Stos Digital Solutions</p>    
          <div className="z-50 flex justify-center text-white place-items-center animate-fade-in-down">
              <Image src="/sds.svg" alt="Sto's Digital Solutions" width="250" height="250"/>
          </div>
          {/* <div className=" flex flex-col place-items-center justify-center z-50 py-[75px] animate-pulse">
            <p className="text-2xl text-white animate-pulse ">Scroll</p>
            <Image className="animate-pulse animate-bounce pt-[3rem]" src="/arrow.svg" alt="arrow" width="10" height="0"/>
          </div> */}
        </section>
      </main>
    </motion.div>
  )
}

export default Hero