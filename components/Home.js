import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Hero from './Hero'

export function Home() {

  return (
    <motion.div
    className="absolute top-0 left-0 w-full h-full text-white">
      <Head>
        <title>Stos Digital Solutions</title>
        <meta name="description" content="Website development" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Hero />
    </motion.div>
  )
}
