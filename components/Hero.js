import React from 'react'
import Image from 'next/image'
import {motion, useScroll, useTransform} from 'framer-motion'

const Hero = () => {

  let {scrollXProgress} = useScroll();
  let Scale = useTransform(scrollXProgress, [0, 0], ["-100%", "100%"]);
  
  return (
    <motion.div
    className="absolute left-0 w-full h-full px-8 bg-red-800 "
    initial={{ x:"-100%" }} animate={{ x:"0%" }} 
    exit={{ opacity: 1 }} style={{Scale}}
    transition={{duration: .75, ease: "easeOut"}}>
        <div className="relative ">
        <motion.div
        >
          <div className=" -z-50 max-[495px]:text-xs flex flex-col text-[14px] text-center text-white -rotate-45 absolute top-0 -left-[320px] max-[300px]:text-[6px] max-[300px]:-left-[160px] max-[300px]:-top-[25px] ">
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
          <div className="z-50 flex justify-center w-full text-white place-items-center animate-fade-in-down ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 250" class=" w-full"  fill="none"><g fill="#fff" filter="url(#a)"><path d="M257.316 190.7c2.2 2.2 5.3 4.3 9.3 6.3 4 1.8 9.3 2.7 15.9 2.7 11 0 20.1-2.8 27.3-8.4 7.4-5.8 11.1-13.8 11.1-24 0-7.4-2.4-13.6-7.2-18.6-4.6-5-10.5-9.6-17.7-13.8-7.2-4.2-14.9-8.3-23.1-12.3-8.2-4.2-15.9-9.1-23.1-14.7-7.2-5.6-13.2-12.2-18-19.8-4.6-7.8-6.9-17.4-6.9-28.8 0-9.8 1.8-18.3 5.4-25.5 3.6-7.2 8.5-13.1 14.7-17.7 6.4-4.8 13.9-8.3 22.5-10.5 8.6-2.4 17.9-3.6 27.9-3.6 12.2 0 23.5.9 33.9 2.7 10.6 1.6 20.1 4.2 28.5 7.8-.2 4-.6 8.6-1.2 13.8-.4 5.2-1 10.4-1.8 15.6-.8 5-1.7 9.8-2.7 14.4-.8 4.4-1.6 8.1-2.4 11.1h-12.3l-13.8-41.1c-2.4-1.2-6-2.3-10.8-3.3-4.6-1-9.4-1.5-14.4-1.5-8.4 0-15.5 2.2-21.3 6.6-5.8 4.4-8.7 10.8-8.7 19.2 0 7.6 2.4 14.1 7.2 19.5 4.8 5.2 10.8 10 18 14.4 7.2 4.4 15 8.8 23.4 13.2 8.6 4.2 16.5 9.1 23.7 14.7 7.2 5.6 13.2 12.2 18 19.8 4.8 7.4 7.2 16.6 7.2 27.6 0 20-6.8 35.5-20.4 46.5-13.4 10.8-33.2 16.2-59.4 16.2-6.4 0-12.9-.4-19.5-1.2-6.4-.8-12.5-1.9-18.3-3.3-5.8-1.4-11-2.9-15.6-4.5-4.4-1.6-7.7-3.3-9.9-5.1.2-4.6.7-9.5 1.5-14.7.8-5.4 1.6-10.7 2.4-15.9 1-5.4 2-10.5 3-15.3 1-4.8 2-9 3-12.6h12.3l12.3 44.1Z"/><path d="M79.002 215.6v-11.4c3.4-2 7.2-3.7 11.4-5.1 4.2-1.6 8.6-2.8 13.2-3.6V25.7c-4.6-1-9.1-2.2-13.5-3.6-4.2-1.6-7.9-3.3-11.1-5.1V5.6h34.8c3.4 0 7.6-.1 12.6-.3 5-.2 10.2-.4 15.6-.6 5.4-.4 10.6-.7 15.6-.9 5.2-.4 9.6-.6 13.2-.6 17.4 0 32.9 2.3 46.5 6.9 13.8 4.6 25.4 11.3 34.8 20.1 9.6 8.8 16.9 19.7 21.9 32.7 5.2 13 7.8 28 7.8 45 0 16.6-2.4 31.7-7.2 45.3-4.8 13.6-12 25.2-21.6 34.8-9.6 9.6-21.8 17.1-36.6 22.5-14.6 5.2-31.8 7.8-51.6 7.8-2.6 0-6.1-.2-10.5-.6-4.4-.2-9.1-.5-14.1-.9-5-.2-10-.5-15-.9-5-.2-9.4-.3-13.2-.3h-33Zm87.9-192.9c-3.6 0-7.2.1-10.8.3-3.6.2-6.7.5-9.3.9v173.7c.8.2 2.2.4 4.2.6 2 0 4 .1 6 .3 2.2 0 4.3.1 6.3.3h4.5c11.6 0 21.4-2.4 29.4-7.2 8.2-4.8 14.9-11.3 20.1-19.5 5.2-8.2 9-17.8 11.4-28.8 2.4-11 3.6-22.7 3.6-35.1 0-11-1.3-21.6-3.9-31.8-2.4-10.2-6.2-19.3-11.4-27.3s-12-14.4-20.4-19.2c-8.2-4.8-18.1-7.2-29.7-7.2Z"/><path d="M36.5 190.7c2.2 2.2 5.3 4.3 9.3 6.3 4 1.8 9.3 2.7 15.9 2.7 11 0 20.1-2.8 27.3-8.4 7.4-5.8 11.1-13.8 11.1-24 0-7.4-2.4-13.6-7.2-18.6-4.6-5-10.5-9.6-17.7-13.8-7.2-4.2-14.9-8.3-23.1-12.3-8.2-4.2-15.9-9.1-23.1-14.7-7.2-5.6-13.2-12.2-18-19.8-4.6-7.8-6.9-17.4-6.9-28.8 0-9.8 1.8-18.3 5.4-25.5 3.6-7.2 8.5-13.1 14.7-17.7 6.4-4.8 13.9-8.3 22.5-10.5C55.3 3.2 64.6 2 74.6 2c12.2 0 23.5.9 33.9 2.7 10.6 1.6 20.1 4.2 28.5 7.8-.2 4-.6 8.6-1.2 13.8-.4 5.2-1 10.4-1.8 15.6-.8 5-1.7 9.8-2.7 14.4-.8 4.4-1.6 8.1-2.4 11.1h-12.3l-13.8-41.1c-2.4-1.2-6-2.3-10.8-3.3-4.6-1-9.4-1.5-14.4-1.5-8.4 0-15.5 2.2-21.3 6.6-5.8 4.4-8.7 10.8-8.7 19.2 0 7.6 2.4 14.1 7.2 19.5 4.8 5.2 10.8 10 18 14.4 7.2 4.4 15 8.8 23.4 13.2 8.6 4.2 16.5 9.1 23.7 14.7 7.2 5.6 13.2 12.2 18 19.8 4.8 7.4 7.2 16.6 7.2 27.6 0 20-6.8 35.5-20.4 46.5-13.4 10.8-33.2 16.2-59.4 16.2-6.4 0-12.9-.4-19.5-1.2-6.4-.8-12.5-1.9-18.3-3.3-5.8-1.4-11-2.9-15.6-4.5-4.4-1.6-7.7-3.3-9.9-5.1.2-4.6.7-9.5 1.5-14.7.8-5.4 1.6-10.7 2.4-15.9 1-5.4 2-10.5 3-15.3 1-4.8 2-9 3-12.6h12.3l12.3 44.1Z"/></g><path stroke="#000" stroke-width="3" d="M257.316 190.7c2.2 2.2 5.3 4.3 9.3 6.3 4 1.8 9.3 2.7 15.9 2.7 11 0 20.1-2.8 27.3-8.4 7.4-5.8 11.1-13.8 11.1-24 0-7.4-2.4-13.6-7.2-18.6-4.6-5-10.5-9.6-17.7-13.8-7.2-4.2-14.9-8.3-23.1-12.3-8.2-4.2-15.9-9.1-23.1-14.7-7.2-5.6-13.2-12.2-18-19.8-4.6-7.8-6.9-17.4-6.9-28.8 0-9.8 1.8-18.3 5.4-25.5 3.6-7.2 8.5-13.1 14.7-17.7 6.4-4.8 13.9-8.3 22.5-10.5 8.6-2.4 17.9-3.6 27.9-3.6 12.2 0 23.5.9 33.9 2.7 10.6 1.6 20.1 4.2 28.5 7.8-.2 4-.6 8.6-1.2 13.8-.4 5.2-1 10.4-1.8 15.6-.8 5-1.7 9.8-2.7 14.4-.8 4.4-1.6 8.1-2.4 11.1h-12.3l-13.8-41.1c-2.4-1.2-6-2.3-10.8-3.3-4.6-1-9.4-1.5-14.4-1.5-8.4 0-15.5 2.2-21.3 6.6-5.8 4.4-8.7 10.8-8.7 19.2 0 7.6 2.4 14.1 7.2 19.5 4.8 5.2 10.8 10 18 14.4 7.2 4.4 15 8.8 23.4 13.2 8.6 4.2 16.5 9.1 23.7 14.7 7.2 5.6 13.2 12.2 18 19.8 4.8 7.4 7.2 16.6 7.2 27.6 0 20-6.8 35.5-20.4 46.5-13.4 10.8-33.2 16.2-59.4 16.2-6.4 0-12.9-.4-19.5-1.2-6.4-.8-12.5-1.9-18.3-3.3-5.8-1.4-11-2.9-15.6-4.5-4.4-1.6-7.7-3.3-9.9-5.1.2-4.6.7-9.5 1.5-14.7.8-5.4 1.6-10.7 2.4-15.9 1-5.4 2-10.5 3-15.3 1-4.8 2-9 3-12.6h12.3l12.3 44.1Z"/><path stroke="#000" stroke-width="3" d="M79.002 215.6v-11.4c3.4-2 7.2-3.7 11.4-5.1 4.2-1.6 8.6-2.8 13.2-3.6V25.7c-4.6-1-9.1-2.2-13.5-3.6-4.2-1.6-7.9-3.3-11.1-5.1V5.6h34.8c3.4 0 7.6-.1 12.6-.3 5-.2 10.2-.4 15.6-.6 5.4-.4 10.6-.7 15.6-.9 5.2-.4 9.6-.6 13.2-.6 17.4 0 32.9 2.3 46.5 6.9 13.8 4.6 25.4 11.3 34.8 20.1 9.6 8.8 16.9 19.7 21.9 32.7 5.2 13 7.8 28 7.8 45 0 16.6-2.4 31.7-7.2 45.3-4.8 13.6-12 25.2-21.6 34.8-9.6 9.6-21.8 17.1-36.6 22.5-14.6 5.2-31.8 7.8-51.6 7.8-2.6 0-6.1-.2-10.5-.6-4.4-.2-9.1-.5-14.1-.9-5-.2-10-.5-15-.9-5-.2-9.4-.3-13.2-.3h-33Zm87.9-192.9c-3.6 0-7.2.1-10.8.3-3.6.2-6.7.5-9.3.9v173.7c.8.2 2.2.4 4.2.6 2 0 4 .1 6 .3 2.2 0 4.3.1 6.3.3h4.5c11.6 0 21.4-2.4 29.4-7.2 8.2-4.8 14.9-11.3 20.1-19.5 5.2-8.2 9-17.8 11.4-28.8 2.4-11 3.6-22.7 3.6-35.1 0-11-1.3-21.6-3.9-31.8-2.4-10.2-6.2-19.3-11.4-27.3s-12-14.4-20.4-19.2c-8.2-4.8-18.1-7.2-29.7-7.2Z"/><path stroke="#000" stroke-width="3" d="M36.5 190.7c2.2 2.2 5.3 4.3 9.3 6.3 4 1.8 9.3 2.7 15.9 2.7 11 0 20.1-2.8 27.3-8.4 7.4-5.8 11.1-13.8 11.1-24 0-7.4-2.4-13.6-7.2-18.6-4.6-5-10.5-9.6-17.7-13.8-7.2-4.2-14.9-8.3-23.1-12.3-8.2-4.2-15.9-9.1-23.1-14.7-7.2-5.6-13.2-12.2-18-19.8-4.6-7.8-6.9-17.4-6.9-28.8 0-9.8 1.8-18.3 5.4-25.5 3.6-7.2 8.5-13.1 14.7-17.7 6.4-4.8 13.9-8.3 22.5-10.5C55.3 3.2 64.6 2 74.6 2c12.2 0 23.5.9 33.9 2.7 10.6 1.6 20.1 4.2 28.5 7.8-.2 4-.6 8.6-1.2 13.8-.4 5.2-1 10.4-1.8 15.6-.8 5-1.7 9.8-2.7 14.4-.8 4.4-1.6 8.1-2.4 11.1h-12.3l-13.8-41.1c-2.4-1.2-6-2.3-10.8-3.3-4.6-1-9.4-1.5-14.4-1.5-8.4 0-15.5 2.2-21.3 6.6-5.8 4.4-8.7 10.8-8.7 19.2 0 7.6 2.4 14.1 7.2 19.5 4.8 5.2 10.8 10 18 14.4 7.2 4.4 15 8.8 23.4 13.2 8.6 4.2 16.5 9.1 23.7 14.7 7.2 5.6 13.2 12.2 18 19.8 4.8 7.4 7.2 16.6 7.2 27.6 0 20-6.8 35.5-20.4 46.5-13.4 10.8-33.2 16.2-59.4 16.2-6.4 0-12.9-.4-19.5-1.2-6.4-.8-12.5-1.9-18.3-3.3-5.8-1.4-11-2.9-15.6-4.5-4.4-1.6-7.7-3.3-9.9-5.1.2-4.6.7-9.5 1.5-14.7.8-5.4 1.6-10.7 2.4-15.9 1-5.4 2-10.5 3-15.3 1-4.8 2-9 3-12.6h12.3l12.3 44.1Z"/><defs><filter id="a" width="370.948" height="224.2" x=".469" y=".5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="15" dy="6"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0"/><feBlend in2="shape" mode="hard-light" result="effect1_innerShadow_61_633"/></filter></defs></svg>
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