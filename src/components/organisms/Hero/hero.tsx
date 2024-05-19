import React from 'react'
import Button from '@/components/atoms/Button/button'
import Header from '../../molecules/Header/header'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Header />
      <div className="flex gap-8 flex-col justify-center items-center w-11/12 mx-auto h-screen">
        <div className="z-20 space-y-8">
          <h1 className="text-[36px] md:text-[60px] 2xl:text-[95px] min-[1800px]:text-[120px] leading-none block">
            Design Studio Shaping <br className="hidden sm:block" /> Web3, Tech
            & AI Horizons
          </h1>
          <div className="mx-auto flex flex-col gap-8 max-w-[670px]">
            <p className="text-base sm:text-[20px] tracking-wide">
              We create mind-blowing visuals, brands, websites and products that
              help startups and innovative companies gain more exposure.
            </p>
            <Button className="slideToLeftEffect bg-primaryGreen after:bg-primaryPurple rounded-[20px] px-24 py-5 sm:text-2xl w-full flex justify-center lg:w-fit text-sm ">
              Start Today
            </Button>
          </div>
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
