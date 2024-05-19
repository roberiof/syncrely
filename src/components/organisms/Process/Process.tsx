'use client'

import React from 'react'

const StepNumber = ({ step }: { step: string }) => {
  return (
    <span className="rounded-[26px] py-3 bg-[#0c070c] px-2 text-white font-medium text-[20px]">
      {step}
    </span>
  )
}

const VerticalLine = () => {
  return (
    <div className="relative">
      <div className="h-[150px] md:h-[400px] bg-black w-[2px] "></div>
      {/* <motion.span
        className="w-[2px] bg-[#0c070c] h-[200px] block absolute"
        style={{ y: 0 }}
      ></motion.span> */}
    </div>
  )
}

const Process = () => {
  return (
    <section className="py-16 lg:py-36 bg-white rounded-[32px] w-11/12 m-auto">
      <main className="pl-[5%] m-auto space-y-20 lg:space-y-40">
        <h1 className="text-[#0c070c] text-[35px] lg:text-[50px] xl:text-[100px] w-full leading-none pr-[5%]">
          The world moves fast, we keep pace. Cut through the noise with{' '}
          <span className="text-[#b0a3ff]">our process.</span>
        </h1>
        <div className="flex justify-between text-[#0c070c]">
          <div className="lg:w-1/2 flex gap-4 lg:gap-16 h-fit">
            <div className="flex flex-col items-center ">
              <StepNumber step={'01'} />
              <VerticalLine />
              <StepNumber step={'02'} />
              <VerticalLine />
              <StepNumber step={'03'} />
            </div>
            <div className="flex justify-between items-stretch flex-col -my-2">
              <span className="h-[210px] lg:h-[450px]">
                <h3 className="text-[25px] sm:text-[70px] font-medium">
                  Subscribe
                </h3>
                <p className="text-sm sm:text-[22px] max-w-[500px] tracking-wide leading-snug">
                  Choose a plan and get started with your first design request
                  right away. We&apos;ll invite you to your Trello board and a
                  private Slack channel for effective collaboration.
                </p>
              </span>
              <span className="h-[210px] lg:h-[450px]">
                <h3 className="text-[25px] sm:text-[70px] font-medium">
                  Receive
                </h3>
                <p className="text-sm sm:text-[22px] max-w-[500px] tracking-wide leading-snug">
                  Expect your designs to be delivered consistently within 2-3
                  business days on average. Review designs and submit revisions
                  if needed.
                </p>
              </span>
              <span className="">
                <h3 className="text-[25px] sm:text-[70px] font-medium">
                  Keep Going
                </h3>
                <p className="text-sm sm:text-[22px] max-w-[500px] tracking-wide leading-snug">
                  Choose a plan and get started with your first design request
                  right away. We&apos;ll invite you to your Trello board and a
                  private Slack channel for effective collaboration.
                </p>
              </span>
            </div>
          </div>
          <video
            width="1050"
            height="1400"
            autoPlay
            loop
            className="overflow-hidden object-cover w-[1050px] h-[1400px] hidden min-[1200px]:block -translate-y-10"
          >
            <source src="/videos/process.mp4" type="video/mp4" />
          </video>
        </div>
      </main>
    </section>
  )
}

export default Process
