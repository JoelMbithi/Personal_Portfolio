import React from 'react'

export const Experience = () => {
  const experiences = [
    {
      role: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      duration: 'Jan 2022 – Present',
      description:
        'Built and delivered high-quality web applications for clients across various industries. Specialized in MERN/PERN stack solutions, handling both frontend and backend development, integrating APIs, managing databases, and deploying applications on cloud platforms like Vercel and Render.'
    },
    {
      role: 'Junior Web Developer (Freelance)',
      company: 'Independent Projects',
      duration: 'Mar 2020 – Dec 2021',
      description:
        'Worked on several personal and client-side projects to improve hands-on experience with JavaScript, React, and Node.js. Created responsive interfaces, RESTful APIs, and contributed to open-source projects while learning modern development practices.'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
              <span className="text-gray-500 dark:text-gray-400">{exp.duration}</span>
            </div>
            <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{exp.company}</h4>
            <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
