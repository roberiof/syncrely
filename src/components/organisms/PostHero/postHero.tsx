import React from 'react'
import { wrapper } from '@/utils/wrapper'
import Button from '@atoms/Button/button'

export default function PostHero() {
  return (
    <div style={wrapper} className="w-11/12 max-w-[1200px]">
      <h2 className="text-[100px] block leading-none">
        Projects <br /> at a Glance
      </h2>
      <div className="flex justify-between items-end">
        <video
          width="660"
          height="460"
          autoPlay
          loop
          style={{
            width: 660,
            height: 460,
            overflow: 'hidden',
            borderRadius: 32,
            objectFit: 'cover',
          }}
        >
          <source src="/videos/crea.mp4" type="video/mp4" />
        </video>

        <video
          width="500"
          height="600"
          autoPlay
          loop
          style={{
            width: 500,
            height: 600,
            overflow: 'hidden',
            borderRadius: 32,
            objectFit: 'cover',
          }}
        >
          <source src="/videos/bubbles.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mt-[100px] flex items-center justify-center gap-16">
        <video
          width="500"
          height="500"
          autoPlay
          loop
          style={{
            width: 500,
            height: 500,
            overflow: 'hidden',
            borderRadius: 32,
            objectFit: 'cover',
          }}
        >
          <source src="/videos/mobiles.mp4" type="video/mp4" />
        </video>
        <div className="space-y-16">
          <h2 className="text-[48px] font-medium">
            Can&apos;t get enough? <br /> Get ready to see more
          </h2>
          <Button className="slideToLeftEffect bg-primaryGreen after:bg-primaryPurple rounded-[20px] px-24 py-5 text-2xl w-full flex justify-center lg:w-fit">
            Selected Projects
          </Button>
        </div>
      </div>
    </div>
  )
}
