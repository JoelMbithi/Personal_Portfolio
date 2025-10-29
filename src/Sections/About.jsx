import React, { useState, useEffect } from 'react';

// Typing animation component
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

export const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'PostgreSQL', 'PHP', 'MongoDB', 'Tailwind CSS',
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
       {/* Top section */}
   <div className='h-100 flex flex-col gap-4 px-2 py-6'>
  <h2 className="text-blue-400 text-sm font-bold tracking-widest uppercase">
    IT SOLUTIONS
  </h2>

  <h2 className='text-5xl text-white font-bold leading-tight'>
    Providing the Best <br />
    Services & IT&nbsp;
    <span className='relative text-blue-400 font-semibold underline-animate'>Solution</span>
  </h2>

  <p className='text-sm text-gray-300 max-w-md'>
    We deliver innovative digital solutions that empower your business to grow, 
    adapt, and stand out in the modern world — combining creativity with cutting-edge technology.
  </p>

  <button className="relative group ring-1 ring-blue-400 text-white py-2 px-6 w-44 text-sm font-semibold transition-all duration-300 animated-button overflow-hidden">
    Start Now
    <span className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-slide transition-all duration-500"></span>
  </button>
</div>

<style>
{`
  /* ==== Animated Underline for 'Solution' ==== */
  .underline-animate {
    position: relative;
  }

  .underline-animate::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6);
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    animation: underlineGrow 1.2s ease-in-out forwards;
  }

  @keyframes underlineGrow {
    0% { transform: scaleX(0); opacity: 0; }
    100% { transform: scaleX(1); opacity: 1; }
  }

  /* ==== Button Hover Animation ==== */
  .animated-button {
    background: transparent;
    position: relative;
  }

  @keyframes slide {
    0% { transform: translateY(-100%); opacity: 0.3; }
    50% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100%); opacity: 0.3; }
  }

  .group:hover .animate-slide {
    animation: slide 1.2s ease-in-out infinite alternate;
  }
`}
</style>
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-blue-400 text-sm font-bold tracking-widest uppercase">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-3"></div>
      </div>

      {/* Top Row: Who I Am + First 4 Skills */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Left: Who I Am */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Who I Am
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I'm <span className="text-blue-500 font-semibold">Joel Mbithi</span> — a full-stack developer 
            who enjoys building clean, scalable, and user-focused web applications.
            I'm currently studying Applied Computer Science at Chuka University, where I have 
            gained strong experience in both frontend and backend development.
          </p>
        </div>

        {/* Right: First 4 Skills */}
        <div className="grid grid-cols-2 gap-4">
          {skills.slice(0, 4).map((skill) => (
            <div
              key={skill}
              className="relative flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm overflow-hidden group"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>

              {hoveredSkill === skill && (
                <div className="absolute inset-0 bg-white dark:bg-gray-700 flex items-center px-3">
                  <TypeAnimation skill={skill} duration={1000} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Journey paragraph + Remaining skills */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Left: Remaining 4 Skills */}
        <div className="grid grid-cols-2 gap-4">
          {skills.slice(4).map((skill) => (
            <div
              key={skill}
              className="relative flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm overflow-hidden group"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>

              {hoveredSkill === skill && (
                <div className="absolute inset-0 bg-white dark:bg-gray-700 flex items-center px-3">
                  <TypeAnimation skill={skill} duration={1000} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: My Journey Paragraph */}
        <div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            My journey began with curiosity about how systems work, which grew into a passion 
            for creating solutions that make a difference. Over time, I have developed skills 
            in technologies like React, Node.js, PostgreSQL, and PHP, and worked on real-world projects.
          </p>
        </div>
      </div>

      {/* Final Paragraph */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          While still early in my career, I have built a solid foundation through hands-on practice, 
          online learning, and self-driven projects. I'm driven by clean code, real-world impact, 
          and the constant challenge of improving.
        </p>
      </div>
    </section>
  );
};

export default About;
