import React from 'react';

import ProjectCard from "../components/Project/ProjectCard"
import buildEstateImg from '../assets/buildEstateImg.jpeg'
import joeGigsImg from '../assets/joeGigsImg.jpeg'
import quickCartImg from '../assets/quickCartImg.jpeg'
export const Projects = () => {
const projects = [
  {
    title: "Build Estate Website",
    description: "Full-stack real estate reservation platform with React and Node.js.",
    tags: ["React", "Node.js", "PostgreSQL","Tailwind CSS"],
    link: "#", // Coming Soon
    github: "https://github.com/JoelMbithi/Build-Estate-Website",
    image: buildEstateImg
  },
  {
    title: "Joe Gigs Website",
    description: "Freelance gig platform with features for managing jobs and payments.",
    tags: ["React", "MongoDB", "Tailwind CSS"],
    link: "https://full-stack-dev-jx3r.vercel.app/",
    github: "https://github.com/JoelMbithi/Joe-Gig-Web",
    image: joeGigsImg
  },
  {
    title: "QuickCart",
    description: "Modern and responsive e-commerce store built with PostgreSQL backend.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://joe-devhub-xl5x.vercel.app/",
    github: "https://github.com/JoelMbithi/QuickCart",
    image: quickCartImg
  }
]


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects