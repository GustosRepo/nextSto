import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Link from 'next/link'
import Footer from '../components/Footer'


function contact() {

    let {scrollXProgress} = useScroll();
    let scale = useTransform(scrollXProgress, [1, 1], ["0%", "100%"]);
    
  return (
    <motion.div className="absolute top-0 left-0 flex flex-col justify-center w-full h-full text-center bg-black align-center "
    initial={{ x:"100%" }} animate={{ x:"0%" }} 
    exit={{ opacity: 1 }} style={{scale}}
    transition={{duration: .75, ease: "easeOut"}}
    >   
        <div className="flex flex-col justify-center w-full h-full text-center bg-black align-center ">
        <div className="z-50 flex flex-col text-white translate-y-[15rem]">
            <h1 className="text-6xl">Lets Talk</h1>
            <ul className="top-19">
                <Link href="mailto:sto@stosdigital.com" className="text-2xl text-white "> <h2> <b>Email:</b> sto@stosdigital.com</h2></Link>
                <Link href="https://www.linkedin.com/in/sto-hernandez/" target="_blank" className="text-2xl text-white"> <h2> <b>LinkedIn:</b> www.linkedin.com/in/sto-hernandez</h2></Link>
                <Link href="https://www.instagram.com/stos_digital_solutions/" target="_blank" className="text-2xl text-white"> <h2> <b>Instagram:</b> stos_digital_solutions </h2></Link>
                <Link href="https://twitter.com/StosDigital" target="_blank" className="text-2xl text-white"> <h2> <b>Twitter:</b> StosDigital</h2></Link>
            </ul>
        </div>
        </div>
        <Footer />
    </motion.div>
    
  )
}

export default contact
