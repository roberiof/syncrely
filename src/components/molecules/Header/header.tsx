'use client'
import Button from '@/components/atoms/Button/button'
import Image from 'next/image'
import React from 'react'

interface HeaderProps {
  styles?: string
}

export default function Header({ styles }: HeaderProps) {
  return (
    <header
      className={`w-11/12 z-30 flex fixed right-1/2 translate-x-1/2 justify-between items-center py-4 ${styles}`}
    >
      <Image
        src={'/logo.svg'}
        width={130}
        height={100}
        alt="logo"
        className="object-contain"
      />

      <nav className="glassBackground hidden xl:flex text-[#d8d7d7] rounded-xl font-extrabold text-sm items-center">
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
        <span className="border border-white opacity-10 h-1/2 mx-4"> </span>
        <a href="#" className="px-6 py-3 hover:text-white">
          {' '}
          Login{' '}
        </a>
      </nav>

      <Button className="glassBackground px-6 py-3 rounded-lg items-center text-sm text-white font-semibold hover:text-black hover:bg-primaryGreen">
        ✦ Book Intro Call
      </Button>
    </header>
  )
}
