import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "../components/Project/ProjectCard";
import buildEstateImg from "../assets/buildEstateImg.jpeg";
import joeGigsImg from "../assets/joeGigsImg.jpeg";
import quickCartImg from "../assets/quickCartImg.jpeg";
import Blog from "../assets/Blog.png";
import Employee from "../assets/Employee.jpeg";
import { Link } from "react-router-dom";

export const ProjectSample = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Build Estate Website",
      description: "Full-stack real estate reservation platform with React and Node.js.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/JoelMbithi/Build-Estate-Website",
      image: buildEstateImg,
    },
    {
      title: "Blog",
      description: "A clean and professional Django blog platform for writing and managing posts.",
      tags: ["Python", "Django", "Tailwind CSS"],
      link: "",
      github: "https://github.com/JoelMbithi/scribe-django.git",
      image: Blog,
    },
    {
      title: "Joe Website",
      description: "Freelance gig platform with features for managing jobs and payments.",
      tags: ["React", "MongoDB", "Tailwind CSS"],
      link: "https://full-stack-dev-jx3r.vercel.app/",
      github: "https://github.com/JoelMbithi/Joe-Gig-Web",
      image: joeGigsImg,
    },
    {
      title: "QuickCart",
      description: "Modern and responsive e-commerce store built with PostgreSQL backend.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "https://joe-devhub-xl5x.vercel.app/",
      github: "https://github.com/JoelMbithi/QuickCart",
      image: quickCartImg,
    },
    {
      title: "Employee Management System",
      description:
        "A full-featured Django application for managing employees with CRUD operations and responsive Tailwind UI.",
      tags: ["Python", "Django", "Tailwind CSS", "PostgreSQL"],
      link: "",
      github: "https://github.com/JoelMbithi/scribe-django",
      image: Employee,
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Animation variants for smooth overlap
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      zIndex: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* Animated Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="transform hover:-translate-y-2 transition-transform duration-300"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      {!showAll && (
        <div className="text-center mt-12">
         <Link to="/projects" >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            /* onClick={() => navigate("/projects")} */
            className="relative group ring-1 ring-blue-400 text-white py-2 px-6 w-44 text-sm font-semibold transition-all duration-300 hover:bg-blue-500 hover:ring-blue-500"
          >
            Show More
            <span className="absolute right-0 top-0 h-full w-1 bg-blue-500 group-hover:w-full group-hover:opacity-20 transition-all duration-500"></span>
          </motion.button>
         </Link>
        </div>
      )}
    </section>
  );
};

export default ProjectSample;
