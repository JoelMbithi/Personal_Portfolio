import React, { useState, useEffect } from 'react';

import Experience from './Sections/Experience'
import Hero from './Sections/Hero'
import About from './Sections/About'
import { Projects } from './Sections/Project'
import Skills from './Sections/Skills'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import { Navbar } from './components/NavBar/Navbar'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Load dark mode preference from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) setDarkMode(JSON.parse(stored));
  }, []);

  // ✅ Apply dark mode class to <html> tag and store preference
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
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
