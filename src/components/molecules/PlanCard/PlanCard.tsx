import { Check } from 'lucide-react'
import React from 'react'
import Button from '@atoms/Button/button'

interface Plan {
  able: boolean
  title: string
  description: string
  price: string
  items: string[]
}

const PlanCard = ({ title, description, able, items, price }: Plan) => {
  return (
    <div
      className={`space-y-8 border border-[#3e393e] rounded-[24px] bg-[#100C10] w-11/12 mx-auto max-w-[600px] px-4 py-8 sm:p-10 ${able && 'border border-primaryPurple  bg-gradient-to-b from-[#121116] to-[#302c4e]'}`}
    >
      <div className="space-y-3">
        <h5 className="text-[24px] font-semibold">{title}</h5>
        <p className="text-[#5f5b71] text-sm sm:text-base">{description}</p>
      </div>
      <div className="space-y-6">
        <div>
          <h4 className="text-[30px] sm:text-[36px]">{price}</h4>
          <p>{items[0]}</p>
          <p>{items[1]}</p>
        </div>
        <Button
          className={`w-full ${able && 'slideToLeftEffect'}  bg-primaryPurple after:bg-white rounded-[20px]  py-5 text-xl w-full flex justify-center font-medium text-black disabled:opacity-50 disabled:bg-[#2B262B] disabled:text-[#5c5c5c]`}
          disabled={!able}
        >
          {able ? 'Book Into Call' : 'On Request'}
        </Button>
        <div className="space-y-4 mt-4">
          {items.slice(2).map((item, ind) => (
            <span
              className={`flex gap-2 items-center font-medium ${ind === 0 && 'text-primaryPurple font-semibold'}`}
              key={item}
            >
              <Check className="text-primaryPurple" size={20} />
              <p>{item}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlanCard
