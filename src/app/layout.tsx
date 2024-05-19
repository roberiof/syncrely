import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const Roobert = localFont({
  src: [
    {
      path: '../../public/fonts/RoobertRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/RoobertMedium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/RoobertSemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/fonts/RoobertBold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Syncrely - Reliable design partner committed to your project',
  description:
    'Comprehensive ∞ Design Capabilities. We are experts in crafting bold visuals, distinctive brand identities, innovative products, and immersive websites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Roobert.className}>{children}</body>
    </html>
  )
}
