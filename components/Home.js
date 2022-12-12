import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Hero from './Hero'

export function Home() {

  return (
    <motion.div
    className="absolute top-0 left-0 w-full h-full text-white">
      <Hero />
    </motion.div>
  )
}
