import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs,FaCloud, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma,
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiExpress, SiDjango, SiMongodb, SiPostgresql, SiFirebase,
  SiTypescript, SiRedis,  SiVercel, SiNetlify, SiJest, SiCypress
} from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

export const Skills = () => {
  const navigate = useNavigate()
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: 'Frontend',
      description: 'Creating responsive, interactive user interfaces with modern frameworks',
      items: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 92, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 85, color: 'from-blue-600 to-blue-800' },
        { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 88, color: 'from-gray-800 to-black' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 94, color: 'from-cyan-400 to-teal-500' },
      ],
    },
    {
      name: 'Backend',
      description: 'Building robust server-side applications and RESTful APIs',
      items: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 88, color: 'from-green-500 to-green-700' },
        { name: 'Express', icon: <SiExpress className="text-gray-400" />, level: 86, color: 'from-gray-400 to-gray-600' },
        { name: 'Python', icon: <FaPython className="text-yellow-500" />, level: 82, color: 'from-yellow-500 to-blue-500' },
        { name: 'Django', icon: <SiDjango className="text-green-700" />, level: 80, color: 'from-green-700 to-green-900' },
        { name: 'REST APIs', icon: <FaNodeJs className="text-green-400" />, level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Redis', icon: <SiRedis className="text-red-500" />, level: 75, color: 'from-red-500 to-red-700' },
      ],
    },
    {
      name: 'Database',
      description: 'Designing and managing efficient data storage solutions',
      items: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 85, color: 'from-green-500 to-green-700' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" />, level: 83, color: 'from-blue-600 to-blue-800' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" />, level: 78, color: 'from-yellow-400 to-orange-500' },
      ],
    },
    {
      name: 'Tools & DevOps',
      description: 'Streamlining development workflow and deployment processes',
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, level: 92, color: 'from-orange-500 to-red-500' },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" />, level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'Figma', icon: <FaFigma className="text-pink-500" />, level: 85, color: 'from-pink-500 to-purple-500' },
        { name: 'AWS', icon: <FaCloud className="text-orange-400" />, level: 70, color: 'from-orange-400 to-yellow-500' },
        { name: 'Vercel', icon: <SiVercel className="text-white" />, level: 88, color: 'from-gray-700 to-black' },
        { name: 'Netlify', icon: <SiNetlify className="text-teal-400" />, level: 85, color: 'from-teal-400 to-blue-500' },
      ],
    },
    {
      name: 'Testing',
      description: 'Ensuring code quality and reliability through comprehensive testing',
      items: [
        { name: 'Jest', icon: <SiJest className="text-red-500" />, level: 82, color: 'from-red-500 to-red-700' },
        { name: 'Cypress', icon: <SiCypress className="text-green-400" />, level: 78, color: 'from-green-400 to-green-600' },
      ],
    },
  ];

  // Floating icons background
  const FloatingIcons = () => {
    const icons = [
      <FaReact className="text-cyan-400/20" />,
      <FaJs className="text-yellow-400/20" />,
      <FaNodeJs className="text-green-500/20" />,
      <SiTypescript className="text-blue-600/20" />,
      <SiNextdotjs className="text-white/20" />,
      <SiMongodb className="text-green-500/20" />,
    ];

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-6xl md:text-8xl"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {Icon}
          </motion.div>
        ))}
      </div>
    );
  };

  const ProgressBar = ({ level, color }) => (
    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );

  const SkillCard = ({ skill, index }) => (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 group"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <motion.div
            className="text-2xl"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            {skill.icon}
          </motion.div>
          <span className="text-white font-semibold">{skill.name}</span>
        </div>
        <motion.span 
          className="text-blue-400 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.7 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <ProgressBar level={skill.level} color={skill.color} />
    </motion.div>
  );

  const currentCategory = skills.find(cat => cat.name === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Elements */}
      <FloatingIcons />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            Comprehensive skill set in modern web technologies, from frontend design to backend development and deployment
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          {skills.map((category) => (
            <motion.button
              key={category.name}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Skills Grid */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
            layout
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="col-span-2"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{currentCategory?.name} Skills</h3>
                <p className="text-gray-400 mb-6">{currentCategory?.description}</p>
              </motion.div>
            </AnimatePresence>

            {currentCategory?.items.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Stats & Proficiency Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Proficiency Overview</h3>
              
              {/* Overall Progress */}
              <div className="space-y-4">
                {['Expert', 'Advanced', 'Intermediate'].map((level, index) => {
                  const count = currentCategory?.items.filter(skill => 
                    level === 'Expert' ? skill.level >= 85 :
                    level === 'Advanced' ? skill.level >= 75 : skill.level < 75
                  ).length;

                  return (
                    <div key={level} className="flex items-center justify-between">
                      <span className="text-gray-300">{level}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-full rounded-full ${
                              level === 'Expert' ? 'bg-green-500' :
                              level === 'Advanced' ? 'bg-blue-500' : 'bg-yellow-500'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${(count / currentCategory?.items.length) * 100}%` }}
                            transition={{ delay: 1.5 + index * 0.2 }}
                          />
                        </div>
                        <span className="text-white font-semibold w-6">{count}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience Highlights */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Development Focus</h3>
              <ul className="space-y-3">
                {[
                  "Responsive Web Design",
                  "RESTful API Development",
                  "Database Optimization",
                  "Performance Tuning",
                  "Clean Code Architecture",
                  "Agile Development"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center space-x-3 text-gray-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Ready to Collaborate?</h3>
              <p className="text-gray-300 mb-4">Let's build something amazing together</p>
              <motion.button
                className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                Start a Project
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          {[
            { label: 'Technologies', value: '15+' },
            { label: 'Projects', value: '50+' },
            { label: 'Experience', value: '4+ Years' },
            { label: 'Certifications', value: '10+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-3xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8 + index * 0.2, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;