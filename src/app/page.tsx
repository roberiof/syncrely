import React from 'react'
import Hero from '@organisms/Hero/hero'
import PostHero from '@organisms/PostHero/postHero'
import Process from '@organisms/Process/Process'
import DesignCapabilities from '@organisms/DesignCapabilities/DesignCapabilities'
import WhatOurClientsSay from '@organisms/WhatOurClientsSay/WhatOurClientsSay'
import SelectedProjects from '@/components/organisms/SelectedProjects/SelectedProjects'

export default function Home() {
  return (
    <main className="bg-primaryBlack min-h-screen flex flex-col gap-y-[250px]">
      <Hero />
      <PostHero />
      <Process />
      <WhatOurClientsSay />
      <DesignCapabilities />
      <SelectedProjects />
    </main>
  )
}
