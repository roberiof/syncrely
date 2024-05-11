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
      <div className="h-[300px] bg-black w-[2px] "></div>
      {/* <motion.span
        className="w-[2px] bg-[#0c070c] h-[200px] block absolute"
        style={{ y: 0 }}
      ></motion.span> */}
    </div>
  )
}

const Process = () => {
  return (
    <section className="py-36 bg-white rounded-[32px] w-11/12 my-[56px] m-auto">
      <main className="pl-[5%] m-auto space-y-40">
        <h1 className="text-[#0c070c] text-[100px] w-full leading-none pr-[5%]">
          The world moves fast, we keep pace. Cut through the noise with{' '}
          <span className="text-[#b0a3ff]">our process.</span>
        </h1>
        <div className="flex justify-between text-[#0c070c]">
          <div className="w-1/2 flex gap-16 h-fit">
            <div className="flex flex-col items-center ">
              <StepNumber step={'01'} />
              <VerticalLine />
              <StepNumber step={'02'} />
              <VerticalLine />
              <StepNumber step={'03'} />
            </div>
            <div className="flex justify-between items-stretch flex-col -my-2">
              <span className="h-[350px]">
                <h3 className="text-[70px]">Subscribe</h3>
                <p className="text-[20px]">
                  Choose a plan and get started with your first design request
                  right away. We&apos;ll invite you to your Trello board and a
                  private Slack channel for effective collaboration.
                </p>
              </span>
              <span className="h-[350px]">
                <h3 className="text-[70px]">Receive</h3>
                <p className="text-[20px]">
                  Expect your designs to be delivered consistently within 2-3
                  business days on average. Review designs and submit revisions
                  if needed.
                </p>
              </span>
              <span className="">
                <h3 className="text-[70px]">Keep Going</h3>
                <p className="text-[20px]">
                  Choose a plan and get started with your first design request
                  right away. We&apos;ll invite you to your Trello board and a
                  private Slack channel for effective collaboration.
                </p>
              </span>
            </div>
          </div>
          <video
            width="900"
            height="1050"
            autoPlay
            loop
            style={{
              width: 900,
              height: 1050,
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          >
            <source src="/videos/process.mp4" type="video/mp4" />
          </video>
        </div>
      </main>
    </section>
  )
}

export default Process
