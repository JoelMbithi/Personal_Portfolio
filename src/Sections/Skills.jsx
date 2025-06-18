import React from 'react'

export const Skills = () => {
  const skills = [
    { name: 'Frontend', items: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'] },
    { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'Firebase'] },
    { name: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category, index) => (
          <div
            key={category.name}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              {category.name}
            </h3>
            <ul className="space-y-3">
              {category.items.map((skill) => (
                <li
                  key={skill}
                  className="text-gray-700 dark:text-gray-300 text-sm hover:translate-x-1 transition-transform duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 11l-3-3 1.4-1.4L8 8.2l5.6-5.6L15 4l-7 7z" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
