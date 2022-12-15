import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    <div className="z-50 flex text-center min-justify-end px-5 py-3  
    max-[700px]:flex-col max-[700px]:grid max-[700px]:text-[18px] text-s justify-center max-[495px]:text-xs ">
          <li className="z-50 px-2 text-white list-none">
          <Link href="/" > Home </Link>            
          </li>
          <li className="z-50 px-2 text-white list-none ">
          <Link href="/about" className=""> About </Link>            
          </li>
          <li className="z-50 px-2 text-white list-none">
          <Link href="/process" className=""> Process </Link>            
          </li>
          <li className="z-50 px-2 text-white list-none">
          <Link href="/contact" className=""> Contact </Link>
          </li>
    </div>
  )
}

export default Navbar