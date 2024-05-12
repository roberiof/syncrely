'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { wrapper } from '@/utils/wrapper'

const About = () => {
  const [isHoveredImage, setIsHoveredImage] = useState(false)
  return (
    <div style={wrapper} className="space-y-24">
      <div className="space-y-12">
        <h4 className="flex text-[48px]">
          <span className="text-primaryPurple">(</span>
          <span>Who stands behind your designs?</span>
          <span className="text-primaryPurple">)</span>
        </h4>
        <h3 className="text-[90px] leading-none">
          Design driven <span className="text-primaryPurple">power duo</span>{' '}
          with over 20 years of combined experience
        </h3>
      </div>
      <div className="flex justify-between items-end">
        <div className="space-y-8">
          <Image
            onMouseEnter={() => setIsHoveredImage(true)}
            onMouseLeave={() => setIsHoveredImage(false)}
            src={
              isHoveredImage
                ? '/about/creators-smile.webp'
                : '/about/creators-serious.webp'
            }
            width={650}
            height={300}
            alt="Creators images"
            className="rounded-[500px]"
          />
          <div className="text-[20px] flex gap-36">
            <div className="space-y-1">
              <p className="font-semibold mb-2">Vita Spenser</p>
              <p className="text-primaryPurple">Design Director</p>
              <p className="text-[#3C393C]">Web, UI/UX</p>
              <p className="text-[#3C393C]">Digital Designer</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold mb-2">Alex Spenser</p>
              <p className="text-primaryPurple">Art Director</p>
              <p className="text-[#3C393C]">
                Multidisciplinary Visual & Brand <br /> Designer, 3D Artist
              </p>
            </div>
          </div>
        </div>
        <div className="w-11/12 max-w-[520px] space-y-8 text-[20px] tracking-wider">
          <p className="indent-8">
            {'  '}We were always passionate about learning new things, and
            keeping up with cutting-edge tech and design trends. With over 20
            years of combined industry experience, we have mastered various
            complementary design disciplines. Partnering with us grants
            effortless access to diverse design services and guarantees
            unmatched design quality and a unique future-defining vision for
            your ventures.
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
