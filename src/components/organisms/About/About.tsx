'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const About = () => {
  const [isHoveredImage, setIsHoveredImage] = useState(false)
  return (
    <div className="space-y-16 sm:space-y-24 w-11/12 mx-auto max-w-[1200px] min-[1800px]:max-w-[1600px]">
      <div className="space-y-4 sm:space-y-12">
        <h4 className="text-[20px] sm:text-[48px]">
          <span className="text-primaryPurple">(</span>
          Who stands behind your designs?
          <span className="text-primaryPurple">)</span>
        </h4>
        <h3 className="text-[30px] sm:text-[50px] lg:text-[90px] leading-none">
          Design driven <span className="text-primaryPurple">power duo</span>{' '}
          with over 20 years of combined experience
        </h3>
      </div>
      <div className="flex justify-between xl:items-end flex-col xl:flex-row gap-y-16">
        <div className="space-y-8">
          <div className="relative w-auto h-[200px] sm:h-[380px] min-[1800px]:w-[700px] min-[1800px]:h-[400px]">
            <Image
              onMouseEnter={() => setIsHoveredImage(true)}
              onMouseLeave={() => setIsHoveredImage(false)}
              src={
                isHoveredImage
                  ? '/about/creators-smile.webp'
                  : '/about/creators-serious.webp'
              }
              fill
              alt="Creators images"
              className="rounded-[500px] object-fill"
            />
          </div>
          <div className="text-sm sm:text-[20px] flex  gap-16 lg:gap-36">
            <div className="space-y-2">
              <p className="font-semibold mb-2">Vita Spenser</p>
              <p className="text-primaryPurple">Design Director</p>
              <p className="text-[#3C393C]">Web, UI/UX</p>
              <p className="text-[#3C393C]">Digital Designer</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold mb-2">Alex Spenser</p>
              <p className="text-primaryPurple">Art Director</p>
              <p className="text-[#3C393C]">
                Multidisciplinary Visual & Brand <br /> Designer, 3D Artist
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[520px] space-y-4 sm:space-y-8 text-[20px] tracking-wider">
          <p className="md:indent-8">
            We were always passionate about learning new things, and keeping up
            with cutting-edge tech and design trends. With over 20 years of
            combined industry experience, we have mastered various complementary
            design disciplines. Partnering with us grants effortless access to
            diverse design services and guarantees unmatched design quality and
            a unique future-defining vision for your ventures.
          </p>
          <p>
            We have helped create brand identities, products & websites for
            numerous startups around the globe. We have also collaborated with
            well-known companies such as:
          </p>
          <p>
            Google, Yuga Labs, Lido Finance, Sephora, and MGA Entertainment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
