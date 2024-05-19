'use client'
import Image from 'next/image'
import Button from '@atoms/Button/button'

export default function Header() {
  return (
    <header
      className={`z-30 flex fixed right-1/2  translate-x-1/2 top-0 justify-between items-center py-4 mx-auto w-11/12  mix-blend-difference`}
    >
      <div className={`relative w-[80px] h-[80px] sm:w-[130px] sm:h-[100px]`}>
        <Image src={'/logo.svg'} fill alt="logo" className="object-contain" />
      </div>
      <nav className="glassBackground hidden min-[1200px]:flex text-[#d8d7d7] rounded-xl font-extrabold text-sm items-center">
        <a href="#our-process" className="px-6 py-3 hover:text-white">
          {' '}
          Our Process
        </a>
        <a href="#capabilities" className="px-6 py-3 hover:text-white">
          {' '}
          Capabilities{' '}
        </a>
        <a href="#work" className="px-6 py-3 hover:text-white">
          {' '}
          Work{' '}
        </a>
        <a href="#about" className="px-6 py-3 hover:text-white">
          {' '}
          About{' '}
        </a>
        <a href="#princing" className="px-6 py-3 hover:text-white">
          {' '}
          Princing{' '}
        </a>
        <a href="#FAQ " className="px-6 py-3 hover:text-white">
          {' '}
          FAQ{' '}
        </a>
      </nav>
      <div className="flex gap-2 items-center">
        <Button className="text-white/80">Login </Button>
        <Button className="glassBackground px-4 sm:px-6 py-3 rounded-lg items-center text-sm text-white font-semibold hover:text-black hover:bg-primaryGreen flex gap-1 transition-all">
          <>
            <span className="hidden sm:inline">✦ </span>{' '}
            <span>Book Intro Call</span>
          </>
        </Button>
      </div>
    </header>
  )
}
