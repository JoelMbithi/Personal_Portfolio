import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProjectCard from "../components/Project/ProjectCard";
import cityConnectImg from '../assets/city-connect.jpeg';
import socialSphereImg from '../assets/social-media.jpeg';

// Import your images
import buildEstateImg from '../assets/buildEstateImg.jpeg';
import joeGigsImg from '../assets/joeGigsImg.jpeg';
import quickCartImg from '../assets/quickCartImg.jpeg';
import Blog from "../assets/Blog.png";
import Employee from "../assets/Employee.jpeg";
import posSystemImg from '../assets/POS.png'; 
import { Navigate, useNavigate } from 'react-router-dom';

// 🌀 Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 20, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// 💬 Animated text component
const AnimatedText = () => {
  const texts = ["Innovative", "Creative", "Functional", "Modern", "Scalable"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Building{" "}
        <span className="relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {texts[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        <br />
        Digital Experiences
      </h1>
      <motion.p
        className="text-xl text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Transforming ideas into powerful, user-centric web applications
      </motion.p>
    </div>
  );
};

// ⚙️ Tech stack carousel
const TechCarousel = () => {
  const techStack = [
    { name: "React", color: "text-cyan-400" },
    { name: "Node.js", color: "text-green-500" },
    { name: "TypeScript", color: "text-blue-500" },
    { name: "PostgreSQL", color: "text-blue-400" },
    { name: "MongoDB", color: "text-green-400" },
    { name: "Python", color: "text-yellow-400" },
    { name: "Django", color: "text-green-600" },
    { name: "Tailwind CSS", color: "text-cyan-300" },
  ];

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1600],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <div className={`text-2xl font-bold ${tech.color}`}>
              {tech.name}
            </div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// 🧠 Project showcase preview
const ProjectShowcase = () => {
  const previewProjects = [
    { image: buildEstateImg, delay: 0 },
    { image: joeGigsImg, delay: 0.2 },
    { image: quickCartImg, delay: 0.4 },
    { image: Blog, delay: 0.6 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {previewProjects.map((project, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: project.delay, duration: 0.6 }}
          whileHover={{ y: -10 }}
        >
          <div className="relative overflow-hidden rounded-xl border-2 border-white/20 group-hover:border-blue-400/50 transition-all duration-300">
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// 🧩 Main Projects Component
export const Projects = () => {
  const sectionRef = useRef(null);
   const navigate = useNavigate();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const projects = [
    {
      title: "Build Estate Website",
      description: "Full-stack real estate reservation platform with React and Node.js.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/JoelMbithi/Build-Estate-Website",
      image: buildEstateImg
    },
    {
      title: "Blog",
      description: "A clean and professional Django blog platform for writing and managing posts.",
      tags: ["Python", "Django", "Tailwind CSS"],
      link: "",
      github: "https://github.com/JoelMbithi/scribe-django.git",
      image: Blog
    },
    {
      title: "Joe Website",
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
    },
    {
      title: "Employee Management System",
      description: "A full-featured Django app for managing employees with CRUD operations and Tailwind UI.",
      tags: ["Python", "Django", "Tailwind CSS", "PostgreSQL"],
      link: "",
      github: "https://github.com/JoelMbithi/scribe-django",
      image: Employee
    },
    {
  title: "POS System",
  description: "Professional point-of-sale solution with inventory, sales tracking, and customer management built using React, TypeScript",
  tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Inertia.js", "Laravel"],
  link: "", 
  github: "https://github.com/JoelMbithi/ts-starter-kit", 
  image: posSystemImg
},
{
  title: "CityConnect",
  description: "A county-level networking platform that connects people and businesses using React, Node.js, Tailwind CSS, and PostgreSQL.",
  tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  link: "",
  github: "https://github.com/JoelMbithi/ts-starter-kit",
  image: cityConnectImg
},
{
  title: "SocialSphere",
  description: "A modern social media platform built with React, TypeScript, and Tailwind CSS for seamless interaction, posting, and connecting with friends.",
  tags: ["React", "TypeScript", "Tailwind CSS"],
  link: "",
  github: "https://github.com/JoelMbithi/ts-starter-kit",
  image: socialSphereImg
}


  ];

  //  Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        
        <FloatingParticles />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div ref={sectionRef} style={{ opacity, scale }} className="relative z-10 max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div 
          className="min-h-80 py-20 flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedText />
          <TechCarousel />
          <ProjectShowcase />
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="flex justify-center mb-12 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            placeholder="Search projects by title or tech..."
            className="w-full max-w-lg px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">No projects match your search.</p>
          )}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to bring your next project to life?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate to create something amazing together
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
