import React from 'react'
import Button from '@/components/atoms/Button/button'
import Header from '../../molecules/Header/header'
import { wrapper } from '@/utils/wrapper'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Header />
      <div className="flex gap-8 flex-col justify-center" style={wrapper}>
        <h1 className="text-[40px] md:text-[60px] 2xl:text-[95px] leading-none block pt-48 m-auto z-20">
          Design Studio Shaping <br /> Web3, Tech & AI Horizons
        </h1>
        <div className="m-auto flex flex-col gap-8 z-20">
          <p className="max-w-[670px] text-[20px] tracking-wide">
            We create mind-blowing visuals, brands, websites and products that
            help startups and innovative companies gain more exposure.
          </p>
          <Button className="slideToLeftEffect rounded-[20px] px-24 py-5 text-2xl w-full flex justify-center lg:w-fit">
            Start Today
          </Button>
        </div>
        <video
          width="1000"
          height="1000"
          autoPlay
          loop
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 5,
            left: 0,
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
