import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/JoelMbithi" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/joel-mbithi-84bab9278/" },
    { icon: <FiTwitter />, url: "https://twitter.com/yourusername" },
    { icon: <FiMail /> } 
  ];

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Joel Mbithi. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
