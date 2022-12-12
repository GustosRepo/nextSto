import '../styles/globals.css'
import Navbar from "../components/Navbar"
import {AnimatePresence} from "framer-motion"
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {
  return (
    <div className=""  >
      <Head>
        <title>Stos Digital Solutions</title>
        <meta name="description" content="Website development" />
        <link rel="icon" href="/sds.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      <AnimatePresence initial={false} >
      <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}

export default MyApp
