'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const linksStyles = ' hover:text-primaryGreen text-[#B1B1B1]'
  return (
    <footer className="text-[#B1B1B1] w-11/12 m-auto flex gap-16 mb-16">
      <button
        className="rounded-full text-white border-white border hover:bg-white hover:text-black h-[120px] w-[80px] flex justify-center items-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={30} />
      </button>
      <div className="flex justify-between w-full">
        <div className="flex justify-between flex-col">
          <div>
            <Link href="#" className={linksStyles}>
              Twitter
            </Link>
            <span className="mx-1">|</span>
            <Link href="#" className={linksStyles}>
              Instagram
            </Link>
            <span className="mx-1">|</span>
            <Link href="#" className={linksStyles}>
              Dribble
            </Link>
            <span className="mx-1">|</span>
            <Link href="#" className={linksStyles}>
              LinkedIn
            </Link>
          </div>
          <div className="flex flex-col">
            <span>
              Working <span className="text-primaryGreen">✲</span> worldwide.
            </span>
            <span>Based in Lisbon</span>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <Link href="#" className={linksStyles}>
              Approach
            </Link>
            <Link href="#" className={linksStyles}>
              Capabilities
            </Link>
            <Link href="#" className={linksStyles}>
              Work
            </Link>
            <Link href="#" className={linksStyles}>
              Pricing
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="#" className={linksStyles}>
              Client Login
            </Link>
            <Link href="#" className={linksStyles}>
              Contact
            </Link>
            <Link href="#" className={linksStyles}>
              Terms & Conditions
            </Link>
            <Link href="#" className={linksStyles}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
