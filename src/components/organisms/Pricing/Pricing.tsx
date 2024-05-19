import React from 'react'
import PlanCard from '@molecules/PlanCard/PlanCard'

const Pricing = () => {
  const plans = [
    {
      able: true,
      title: 'Design Project',
      description:
        'Ideal for entrepreneurs seeking a cohesive approach for branding, web design, app, 3D, and motion projects.',
      price: 'Custom',
      items: [
        'Flexible payment schedule',
        '50% down-payment.',
        'Bespoke project proposal',
        'Fixed scope of work',
        'Project Timeline',
        'Delivered in milestones',
        'Weekly design sync',
        'Managed via Slack and Trello',
        'Invite your team to collaborate',
      ],
    },
    {
      able: false,
      title: 'Design Subscription',
      description:
        'A no-brainer solution for growing companies looking for ongoing design support and seamless integration.',
      price: '$10,000/m',
      items: [
        'Paid Monthly.',
        'Pause or cancel anytime.',
        'One request at a time',
        'Unlimited design requests',
        'Unlimited revisions',
        'Unlimited products and brands',
        'Average 2-3 business day delivery',
        'Managed via Slack and Trello',
        'Invite your team to submit requests',
        'Pause or cancel anytime',
      ],
    },
  ]
  return (
    <section className="space-y-16">
      <div className="text-center">
        <h1 className="text-[50px] lg:text-[90px]">Pricing</h1>
        <p className="sm:text-[20px] w-[90%] mx-auto">
          To ensure we deliver top-tier quality designs on time, we work with a
          limited number of clients.
        </p>
      </div>

      <div className="flex gap-y-8 justify-center flex-col xl:flex-row max-w-[1400px] mx-auto">
        {plans.map((item) => (
          <PlanCard {...item} key={item.title} />
        ))}
      </div>
    </section>
  )
}

export default Pricing
