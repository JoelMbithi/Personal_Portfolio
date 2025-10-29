import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/image.jpeg';
import { FiDownload } from 'react-icons/fi';
import Search from '../components/Home/Search';

export const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto  overflow-hidden"
    >
      {/* Search Bar with Animation */}
     <Search/>

      {/* Hero Content */}
      <div className="text-center md:text-left md:flex items-center justify-between">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600">Joe Mbithi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer | Build. Solve. Deliver.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            A passionate Full-stack developer specializing in scalable web applications using the MERN and PERN stacks. I build clean, responsive interfaces and robust backends with a focus on performance, reliability, and user-centric design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/JOEL MBITHI MUTUKU.pdf"
              download
              className="px-6 py-3 flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <FiDownload />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block md:w-1/2 mt-10 md:mt-0"
        >
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Light reflection gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full blur-[30px] z-0"></div>

            {/* Profile image container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative z-10 w-full h-full"
            >
              <img
                src={image}
                alt="Joe Mbithi"
                className="w-full h-full rounded-full object-cover border border-blue-300 dark:border-blue-500 shadow-xl"
              />
              <div className="absolute -inset-2 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
            </motion.div>

            {/* Floating animated dots */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/80 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse delay-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
