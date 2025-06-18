import React, { useState, useEffect } from 'react';

// Typing animation component that loops indefinitely
const TypeAnimation = ({ skill, duration }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingTimeout;

    if (index <= skill.length) {
      typingTimeout = setTimeout(() => {
        setDisplayText(skill.slice(0, index));
        setIndex(index + 1);
      }, duration / skill.length);
    } else {
      // Restart after a short delay
      typingTimeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 1000); 
    }

    return () => clearTimeout(typingTimeout);
  }, [index, skill, duration]);

  return (
    <span className="text-gray-700 dark:text-gray-300 font-medium">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Main About section
export const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'Express', 'PostgreSQL', 'MongoDB', 'Tailwind CSS',
    'Git', 'Figma', 'PHP', 'REST APIs'
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column: About Text */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hi, I'm Joel Mbithi — a full-stack developer who enjoys building clean, scalable, and user-focused web applications.
            I'm currently studying Applied Computer Science at Chuka University, where I have gained strong experience in both frontend and backend development.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            My journey began with curiosity about how systems work, which grew into a passion for creating solutions that make a difference.
            Over time, I have developed skills in technologies like React, Node.js, PostgreSQL, and PHP, and worked on real-world projects.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            While still early in my career, I have built a solid foundation through hands-on practice, online learning, and self-driven projects.
            I'm driven by clean code, real-world impact, and the constant challenge of improving.
          </p>
        </div>

        {/* Right Column: Skills */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="relative flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm overflow-hidden group"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>

                {/* Normal Skill Name */}
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </span>

                {/* Animated Re-Type on Hover */}
                {hoveredSkill === skill && (
                  <div className="absolute inset-0 bg-white dark:bg-gray-700 flex items-center px-3">
                    <TypeAnimation skill={skill} duration={1000} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
