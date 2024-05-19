import React from 'react'
import Image from 'next/image'

const DesignCapabilities = () => {
  const cards = [
    {
      title: 'Branding',
      image: '/branding.webp',
      items: [
        'Art Direction',
        'Logo Design',
        'Visual Identity',
        'Brand Style Guide',
        '2D & 3D Motion Design',
        'Collateral Design',
      ],
    },
    {
      title: '3D',
      image: '/3d.webp',
      items: [
        'CGI ',
        '3D Visual Design',
        'Visual Identity',
        'Product Visualization',
        'Packaging Visualization',
        '3D Motion Design',
      ],
    },
    {
      title: 'Website',
      image: '/website.webp',
      items: [
        'Landing Page Design',
        'Web Design',
        'Interaction Design',
        '2D & 3D Motion Design',
        'Framer Development',
      ],
    },
    {
      title: 'Product',
      image: '/product.webp',
      items: [
        'App Design',
        'Mobile App Design',
        'Interaction Design',
        'Prototyping',
        '2D & 3D Motion Design',
      ],
    },
  ]

  return (
    <section className="space-y-28">
      <div className="space-y-8 w-11/12 max-w-[1200px] min-[1800px]:max-w-[1600px] mx-auto">
        <h1 className="text-[35px] md:text-[50px] lg:text-[90px] min-[1800px]:text-[120px] leading-none">
          Comprehensive ∞ <br className="hidden sm:block" /> Design Capabilities
        </h1>
        <p className="sm:text-[20px] max-w-[1100px]">
          We are experts in crafting bold visuals, distinctive brand identities,
          innovative products, and immersive websites. Whether you want to
          elevate your company&apos;s visual language, build an MVP, or explore
          a new idea, we&apos;ll take care of everything.
        </p>
      </div>
      <div className="space-y-16 w-11/12 mx-auto">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[36px] p-10 sm:py-[120px] px-8 sm:px-20 border-[#3e393e] border flex flex-col gap-4 sm:gap-8 items-end w-full justify-between"
            style={{
              background:
                'linear-gradient(rgb(17, 14, 17) 0%, rgb(11, 7, 11) 100%)',
            }}
          >
            <div className="flex w-full sm:items-center flex-col sm:flex-row gap-y-16 sm:gap-y-0">
              <h3 className="w-full sm:w-1/2 text-[40px] sm:text-[50px] md:text-[70px] order-2">
                {card.title}
              </h3>
              <Image
                src={card.image}
                width={150}
                height={150}
                alt="Card image"
                className="order-1"
              />
            </div>
            <div className="w-full sm:w-1/2">
              {' '}
              <span className="flex gap-1 sm:gap-3 flex-wrap text-sm sm:text-[20px]">
                {card.items.map((item, key) =>
                  card.items.indexOf(item) !== card.items.length - 1 ? (
                    <p key={key} className="flex gap-1 sm:gap-3">
                      <span>{item}</span> <span>•</span>{' '}
                    </p>
                  ) : (
                    <p key={key}>{item}</p>
                  ),
                )}
              </span>{' '}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DesignCapabilities
