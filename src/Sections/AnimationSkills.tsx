import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

const AnimnationSkills = () => {
  const icons = [
    { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: "CSS3" },
    { icon: <FaJs className="text-4xl text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-4xl text-cyan-400" />, name: "React" },
    { icon: <FaNodeJs className="text-4xl text-green-600" />, name: "Node.js" },
    { icon: <FaPython className="text-4xl text-blue-400" />, name: "Python" },
    { icon: <FaGitAlt className="text-4xl text-red-500" />, name: "Git" },
    { icon: <FaDocker className="text-4xl text-blue-400" />, name: "Docker" },
    { icon: <FaFigma className="text-4xl text-purple-500" />, name: "Figma" },
    { icon: <SiTailwindcss className="text-4xl text-cyan-400" />, name: "Tailwind" },
    { icon: <SiNextdotjs className="text-4xl text-white" />, name: "Next.js" },
    { icon: <SiExpress className="text-4xl text-gray-400" />, name: "Express" },
    { icon: <SiDjango className="text-4xl text-green-700" />, name: "Django" },
    { icon: <SiMongodb className="text-4xl text-green-500" />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-4xl text-blue-700" />, name: "PostgreSQL" },
    { icon: <SiFirebase className="text-4xl text-yellow-500" />, name: "Firebase" },
  ];

  return (
    <section className="relative py-20 px-4  max-w-6xl mx-auto min-h-screen  overflow-hidden">
      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-white text-center mb-10"
      >
        Technical Skills
      </motion.h2>

      {/* STATIC ICON GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 z-10 mt-10 relative">
        {icons.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="bg-gray-800/50 p-6 rounded-2xl shadow-md border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              {item.icon}
            </div>
            <span className="text-gray-300 text-sm mt-3 font-medium tracking-wide">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CENTER GLOW */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-36 h-36 md:w-48 md:h-48 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white text-lg md:text-2xl font-bold text-center">
          JoeSoftWork
          </span>
        </div>
      </motion.div>

      {/* === ROTATING ICON RINGS === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Big Rotating Ring */}
        <motion.div
          className="absolute -left-20 top-10 w-80 h-80 md:w-[450px] md:h-[450px]"
          animate={{ rotate: 360, y: ["-50%", "100vh"] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {icons.slice(0, 6).map((item, i) => {
            const angle = (i / 6) * 360;
            const radius = 140;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{ x, y }}
              >
                <div className="bg-black/40 backdrop-blur-sm rounded-full p-3 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {item.icon}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Medium Rotating Ring */}
        <motion.div
          className="absolute right-0 bottom-0 w-64 h-64 md:w-[350px] md:h-[350px]"
          animate={{ rotate: -360, y: ["100%", "-100vh"] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {icons.slice(6, 12).map((item, i) => {
            const angle = (i / 6) * 360;
            const radius = 100;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{ x, y }}
              >
                <div className="bg-black/40 backdrop-blur-sm rounded-full p-2 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                  {item.icon}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Small Rotating Ring */}
        <motion.div
          className="absolute left-1/4 top-1/4 w-44 h-44 md:w-[250px] md:h-[250px]"
          animate={{ rotate: 360, x: ["-50%", "100vw"], y: ["-50%", "100vh"] }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {icons.slice(12, 16).map((item, i) => {
            const angle = (i / 4) * 360;
            const radius = 80;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{ x, y }}
              >
                <div className="bg-black/40 backdrop-blur-sm rounded-full p-2 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  {item.icon}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimnationSkills;
