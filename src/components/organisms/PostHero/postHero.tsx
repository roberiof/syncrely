import React from 'react'
import Button from '@atoms/Button/button'

export default function PostHero() {
  return (
    <div className="w-11/12 mx-auto max-w-[1200px] min-[1800px]:max-w-[1500px] space-y-8">
      <h2 className="text-[35px] md:text-[100px] block leading-none">
        Projects <br /> at a Glance
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-end gap-y-8">
        <video
          width="660"
          height="460"
          autoPlay
          loop
          muted
          playsInline
          className="lg:w-[600px] lg:h-[460px] overflow-hidden rounded-[32px] object-fill min-[1800px]:w-[800px] min-[1800px]:h-[500px]"
        >
          <source src="/videos/crea.mp4" type="video/mp4" />
        </video>

        <video
          width="500"
          height="800"
          autoPlay
          loop
          muted
          playsInline
          className="lg:w-[500px] lg:h-[800px] overflow-hidden rounded-[32px] object-fill min-[1800px]:w-[600px] min-[1800px]:h-[750px]"
        >
          <source src="/videos/bubbles.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="lg:mt-[100px] flex items-center justify-center gap-16 flex-col lg:flex-row gap-y-8">
        <video
          width="500"
          height="500"
          autoPlay
          loop
          muted
          playsInline
          className="lg:w-[500px] lg:h-[500px] overflow-hidden rounded-[32px] object-fill"
        >
          <source src="/videos/mobiles.mp4" type="video/mp4" />
        </video>
        <div className="space-y-8 lg:space-y-16">
          <h2 className="text-[30px] lg:text-[48px] leading-none font-medium">
            Can&apos;t get enough? <br /> Get ready to see more
          </h2>
          <Button className="slideToLeftEffect bg-primaryGreen after:bg-primaryPurple rounded-[20px] px-24 py-5 lg:text-2xl w-full flex justify-center lg:w-fit">
            Selected Projects
          </Button>
        </div>
      </div>
    </div>
  )
}
