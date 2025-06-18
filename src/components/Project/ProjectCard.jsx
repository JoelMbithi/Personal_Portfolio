import React from 'react';

import { FiGithub, FiExternalLink } from 'react-icons/fi'

export const ProjectCard = ({ project }) => {
  return (
 <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 my-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          {project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>  )
}

export default ProjectCard
