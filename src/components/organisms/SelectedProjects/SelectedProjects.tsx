import React from 'react'
import ProjectCard from '@molecules/ProjectCard/ProjectCard'

const SelectedProjects = () => {
  const projects = [
    {
      title: 'Whalecard',
      items: ['Branding', 'CGI', '3D Motion Design', 'Web Design'],
      image: '/projects/whalecard.webp',
    },
    {
      title: 'DeOrg',
      items: ['Branding', 'CGI', '3D Motion Design', 'Web Design'],
      image: '/projects/deOrg.webp',
    },
    {
      title: 'Lido',
      items: ['CGI', 'Landing Page Design', 'Social Media Graphics'],
      image: '/projects/lido.webp',
    },
  ]
  return (
    <section className="w-full">
      <div className="w-11/12 mx-auto">
        <h3 className="text-[30px] sm:text-[48px] w-11/12 mx-auto pb-6">
          <span className="text-primaryGreen">✦ </span>
          <span>Selected Projects</span>
        </h3>
      </div>
      <div className="w-11/12  mx-auto">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </section>
  )
}

export default SelectedProjects
