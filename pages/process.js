import React, { use } from 'react'
import { useRef } from 'react'
import {  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue} from 'framer-motion'





function process() {

  
  return (
    <motion.div
    className="absolute top-0 left-0 flex flex-col justify-center w-full h-full px-16 text-center bg-red-800 align-center lg:px-48 "
    initial={{ y:"-100%" }} animate={{ y:"0%" }} 
    exit={{ opacity: 1 }} 
    transition={{duration: .75, ease: "easeOut"}}>
      <div className="text-sm translate-y-15 ">
      <div className="flex flex-col justify-center text-white "  >      
        <motion.div
        className="translate-x-0"
        scale={{ scale: [1, 1.5, 1.5, 1, 1], rotate: [0, 0, 270, 270, 0] }}
        initial={{ x:"-300%" }} animate={{ x:"0%" }}
        transition={{ duration: 3, ease: "easeOut"}}
      
        >
        <h1 className="text-lg">Step one</h1>
        <p>this is where the rubber meets the road, where everything you have been imagining translated into what is possible with code. 
              In this phase we typically brainstorm together and layout the foundation of your vision.
        </p>
        </motion.div>   
        <motion.div
        initial={{ y:"-300%" }} animate={{ y:"0%" }}
        transition={{ duration: 4, ease: "easeOut"}}        
        >
        <h1 className="text-lg" >Step Two</h1>
        <p>this is where the rubber meets the road, where everything you have been imagining translated into what is possible with code. 
              In this phase we typically brainstorm together and layout the foundation of your vision.
        </p>
        </motion.div> 
        <motion.div className="translate-x-5" 
        initial={{ y:"300%" }} animate={{ y:"0%" }}
        transition={{ duration: 4, ease: "easeOut"}}
        >
        <h1 className="text-lg">Step Three</h1>
        <p>this is where the rubber meets the road, where everything you have been imagining translated into what is possible with code. 
              In this phase we typically brainstorm together and layout the foundation of your vision.
        </p>
        </motion.div> 
        <motion.div
        initial={{ x:"300%" }} animate={{ x:"0%" }}
        transition={{ duration: 3, ease: "easeOut"}}
        >
        <h1 className="text-lg">Step Four </h1>
        <p>this is where the rubber meets the road, where everything you have been imagining translated into what is possible with code. 
              In this phase we typically brainstorm together and layout the foundation of your vision.
        </p>
        </motion.div> 
        </div>
      </div>
    </motion.div>
  )
}

export default process
