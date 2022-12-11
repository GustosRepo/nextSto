import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Footer from '../components/Footer'


function contact() {

  return (
    <motion.div className="absolute top-0 left-0 flex flex-col justify-center w-full h-full text-center bg-black align-center "
    initial={{ x:"100%" }} animate={{ x:"0%" }} 
    exit={{ opacity: 1 }} 
    transition={{duration: .75, ease: "easeOut"}}
    >   
        <div className="flex flex-col justify-center w-full text-center bg-fixed bg-black bg-center h-3/4 align-center ">
          <img src="/contact.jpg" alt="portfolio" width="100%" height="100%" className="absolute object-cover w-full h-full opacity-50 -z-10"/>
        <div className="z-50 flex flex-col text-white translate-y-[15rem]">
            <h1 className="text-6xl font-bold text-white drop-shadow-lg shadow-black">Lets Talk</h1>
            <ul className="top-14">
                <Link href="mailto:sto@stosdigital.com" className="text-3xl text-white "> <h2> <b>Email:</b> sto@stosdigital.com</h2></Link>
                <Link href="https://www.linkedin.com/in/sto-hernandez/" target="_blank" className="text-3xl text-white"> <h2> <b>LinkedIn:</b> www.linkedin.com/in/sto-hernandez</h2></Link>
                <Link href="https://www.instagram.com/stos_digital_solutions/" target="_blank" className="text-3xl text-white"> <h2> <b>Instagram:</b> stos_digital_solutions </h2></Link>
                <Link href="https://twitter.com/StosDigital" target="_blank" className="text-3xl text-white"> <h2> <b>Twitter:</b> StosDigital</h2></Link>
            </ul>
        </div>
        </div>
        <Footer />
    </motion.div>
    
  )
}

export default contact
