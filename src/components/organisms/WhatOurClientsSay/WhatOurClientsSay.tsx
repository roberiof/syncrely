import React from 'react'
import Image from 'next/image'

const WhatOurClientsSay = () => {
  return (
    <div className="space-y-8 w-11/12 min-[1800px]:max-w-[1600px] max-w-[1200px] mx-auto">
      <p className="text-[18px] sm:text-[24px] min-[1800px]:text-[30px]">
        <span className="text-primaryGreen">✦ </span> What our clients say:
      </p>
      <p className="text-[28px] sm:text-[70px] min-[1800px]:text-[90px] leading-none sm:leading-tight">
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
