import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export interface ProjectCardProps {
  title: string
  items: string[]
  image: string
}

const ProjectCard = ({ title, items, image }: ProjectCardProps) => {
  return (
    <Link href={'#'} className="w-full border-y block border-[#3e393eb7] group">
      <div className="flex justify-between transition-all w-11/12 mx-auto">
        <div className="flex items-start gap-8 justify-start -ml-8 group-hover:ml-0">
          <Image
            src={image}
            width={300}
            height={300}
            alt="Project Image"
            className="opacity-0 group-hover:opacity-100 -translate-x-full group-hover:-translate-x-0 object-cover py-4 duration-700"
            style={{ borderRadius: '40px' }}
          />
          <h3 className="text-[120px] -translate-x-[300px] group-hover:-translate-x-0 duration-700 py-8">
            {title}
          </h3>
        </div>
        <div className="flex justify-between flex-col items-end py-4">
          <div className="-translate-x-60 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
            <ArrowUpRight size={35} />
          </div>
          <p className="text-[#b1b1b1] font-medium whitespace-nowrap text-[20px]">
            {items.map((item) =>
              items.length - 1 !== items.indexOf(item) ? item + ', ' : item,
            )}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
