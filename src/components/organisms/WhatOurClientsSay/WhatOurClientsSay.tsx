import React from 'react'
import Image from 'next/image'
import { wrapper } from '@/utils/wrapper'

const WhatOurClientsSay = () => {
  return (
    <div className="space-y-8" style={wrapper}>
      <p className="text-[24px]">
        <span className="text-primaryGreen">✦ </span> What our clients say:
      </p>
      <p className="text-[70px] leading-snug">
        “Syncrely has become our go-to resource for crafting exquisite brand
        identities and designing cutting-edge websites.”
      </p>

      <div className="flex gap-8">
        <Image
          src={'/profile-image.webp'}
          width={60}
          height={60}
          className="rounded-full object-cover"
          alt="Image of Andrew Eltorkey"
        />
        <div>
          <p className="font-semibold text-[18px] tracking-wide">
            Andrew Eltorkey
          </p>
          <p className="text-primaryGrey tracking-wide">Founded of Prosperys</p>
        </div>
      </div>
    </div>
  )
}

export default WhatOurClientsSay
