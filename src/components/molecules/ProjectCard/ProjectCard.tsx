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
      <div className="flex xl:justify-between transition-all w-11/12 mx-auto flex-col xl:flex-row">
        <div className="flex items-start xl:items-center gap-x-8 justify-start xl:-ml-8 xl:group-hover:ml-0 flex-col xl:flex-row">
          <div className="relative w-full h-[300px] xl:w-[300px] xl:h-[300px]">
            <Image
              src={image}
              fill
              alt="Project Image"
              className="xl:opacity-0 xl:group-hover:opacity-100 xl:-translate-x-full xl:group-hover:-translate-x-0 object-fill py-4 duration-700 rounded-[40px]"
            />
          </div>
          <h3 className="text-[30px] sm:text-[50px] xl:text-[120px] xl:-translate-x-[300px] xl:group-hover:-translate-x-0 duration-700 xl:py-8">
            {title}
          </h3>
        </div>
        <div className="flex justify-between flex-col xl:items-end py-4">
          <div className="hidden xl:block -translate-x-60 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
            <ArrowUpRight size={35} />
          </div>
          <p className="text-[#b1b1b1] font-medium whitespace-nowrap text-sm sm:text-[20px]">
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
