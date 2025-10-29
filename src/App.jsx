import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Sections
import Hero from './Sections/Hero';
import About from './Sections/About';
import { Projects } from './Sections/Project';
import Skills from './Sections/Skills';
import Experience from './Sections/Experience';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';
import AnimationSkills from './Sections/AnimationSkills';
import MotivationPage from './Sections/MotivationPage';

// Components
import { Navbar } from './components/NavBar/Navbar';
import ProjectSample from './Sections/ProjectSample';
import ScrollToTop from './components/ScrollTop';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) setDarkMode(JSON.parse(stored));
  }, []);

  // Apply dark mode class to <html> tag and store preference
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      {/* Apply the gradient background similar to Skills section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white transition-colors duration-300 min-h-screen overflow-hidden">
        
        {/* Floating background blobs from Skills */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Navbar stays fixed on all pages */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="pt-16 relative z-10">
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AnimationSkills />
                  <MotivationPage />
                  <About />
                  <ProjectSample />
                  {/* <Projects /> */}
                  <Skills />
                  <Experience />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
