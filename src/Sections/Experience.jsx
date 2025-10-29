import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

export const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      role: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      duration: 'Jan 2022 – Present',
      location: 'Remote',
      description: 'Built and delivered high-quality web applications for clients across various industries. Specialized in MERN/PERN stack solutions, handling both frontend and backend development, integrating APIs, managing databases, and deploying applications on cloud platforms like Vercel and Render.',
      icon: <FaRocket className="text-2xl" />,
      technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Express', 'Vercel', 'Render'],
      achievements: [
        'Delivered 50+ full-stack applications',
        'Achieved 95% client satisfaction rate',
        'Reduced load times by 40% on average'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      role: 'Junior Web Developer (Freelance)',
      company: 'Independent Projects',
      duration: 'Mar 2020 – Dec 2021',
      location: 'Remote',
      description: 'Worked on several personal and client-side projects to improve hands-on experience with JavaScript, React, and Node.js. Created responsive interfaces, RESTful APIs, and contributed to open-source projects while learning modern development practices.',
      icon: <FaLaptopCode className="text-2xl" />,
      technologies: ['JavaScript', 'React', 'Node.js', 'REST APIs', 'Git'],
      achievements: [
        'Built 20+ personal projects',
        'Contributed to 5+ open-source projects',
        'Mastered modern development workflows'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Floating elements background
  const FloatingElements = () => {
    const elements = [
      { icon: <FaCode />, delay: 0 },
      { icon: <FaLaptopCode />, delay: 1 },
      { icon: <FaRocket />, delay: 2 },
      { icon: <FaBriefcase />, delay: 3 },
    ];

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {elements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl text-white/10"
            style={{
              left: `${10 + index * 25}%`,
              top: `${20 + (index % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {element.icon}
          </motion.div>
        ))}
      </div>
    );
  };

  const TimelineDot = ({ index, isActive, onClick }) => (
    <motion.div
      className={`relative cursor-pointer group`}
      whileHover={{ scale: 1.2 }}
      onClick={() => onClick(index)}
    >
      <motion.div
        className={`w-6 h-6 rounded-full border-4 ${
          isActive 
            ? 'border-white bg-gradient-to-r from-blue-500 to-purple-600' 
            : 'border-gray-400 bg-gray-600'
        } group-hover:border-white transition-all duration-300`}
        animate={{
          scale: isActive ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
      />
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping"
          initial={{ scale: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );

  const TechPill = ({ tech, index }) => (
    <motion.span
      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 + index * 0.1 }}
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        borderColor: "rgba(59, 130, 246, 0.5)"
      }}
    >
      {tech}
    </motion.span>
  );

  const AchievementItem = ({ achievement, index }) => (
    <motion.li
      className="flex items-start space-x-3 text-gray-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.8 + index * 0.1 }}
    >
      <motion.div
        className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
      />
      <span>{achievement}</span>
    </motion.li>
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Elements */}
      <FloatingElements />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
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
            My journey through the world of web development, building innovative solutions and growing with each project
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline Navigation */}
          <motion.div
            className="lg:col-span-3 flex lg:flex-col justify-center items-center lg:items-start space-x-8 lg:space-x-0 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9 }}
          >
            {experiences.map((exp, index) => (
              <div key={index} className="flex lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-4">
                <TimelineDot 
                  index={index} 
                  isActive={activeExp === index} 
                  onClick={setActiveExp}
                />
                <motion.div
                  className={`text-center lg:text-left ${
                    activeExp === index ? 'text-white' : 'text-gray-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-semibold text-sm">{exp.company}</h3>
                  <p className="text-xs text-gray-400">{exp.duration.split(' – ')[0]}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Experience Content */}
          <motion.div
            className="lg:col-span-9"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Header */}
                <motion.div
                  className="flex items-start justify-between mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${experiences[activeExp].color} text-white`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {experiences[activeExp].icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {experiences[activeExp].role}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-300 mt-2">
                        <div className="flex items-center space-x-2">
                          <FaBriefcase className="text-blue-400" />
                          <span>{experiences[activeExp].company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaMapMarkerAlt className="text-green-400" />
                          <span>{experiences[activeExp].location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt className="text-purple-400" />
                          <span>{experiences[activeExp].duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {experiences[activeExp].description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExp].technologies.map((tech, index) => (
                      <TechPill key={tech} tech={tech} index={index} />
                    ))}
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experiences[activeExp].achievements.map((achievement, index) => (
                      <AchievementItem key={achievement} achievement={achievement} index={index} />
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          {[
            { label: 'Projects Completed', value: '50+', color: 'from-blue-500 to-cyan-500' },
            { label: 'Client Satisfaction', value: '95%', color: 'from-green-500 to-emerald-500' },
            { label: 'Technologies', value: '15+', color: 'from-purple-500 to-pink-500' },
            { label: 'Years Experience', value: '4+', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 group cursor-pointer"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8 + index * 0.2, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can bring your next project to life with cutting-edge solutions
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Collaboration
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;