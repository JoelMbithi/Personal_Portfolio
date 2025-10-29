import React from "react";
import {
  CodeXml,
  Rocket,
  Layers,
  Smartphone,
  Search,
  Cloud,
  Palette,
} from "lucide-react";

const MotivationPage = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      {/* Top section */}
      <div className="flex flex-col gap-2">
        <p className="text-blue-400 text-sm font-bold tracking-widest uppercase">
          Services
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">Services We Offer</h1>

        <div className="flex flex-col justify-between max-w-lg">
          <p className="text-gray-300 text-sm leading-relaxed">
            We provide end-to-end web development and digital transformation
            services from crafting responsive interfaces to deploying secure,
            scalable applications. Our goal is to empower brands and businesses
            with technology-driven solutions that deliver real impact.
          </p>
        </div>
      </div>

      {/* Display section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {/* Web Development */}
        <div className="flex flex-col gap-3 justify-start ring-1 ring-blue-400 rounded-md px-5 py-6 bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300">
          <CodeXml size={36} className="text-blue-400" />
          <h1 className="text-xl font-semibold">Web Development</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            We build responsive, fast, and secure websites using React, Next.js,
            and modern frontend tools tailored to your brand.
          </p>
        </div>

        {/* Digital Marketing */}
        <div className="flex flex-col gap-3 justify-start ring-1 ring-blue-400 rounded-md px-5 py-6 bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300">
          <Rocket size={36} className="text-pink-400" />
          <h1 className="text-xl font-semibold">Digital Marketing</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Boost your online presence through strategic campaigns, analytics,
            and SEO-driven growth techniques that convert.
          </p>
        </div>

        {/* SaaS Products */}
        <div className="flex flex-col gap-3 justify-start ring-1 ring-blue-400 rounded-md px-5 py-6 bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300">
          <Layers size={36} className="text-green-400" />
          <h1 className="text-xl font-semibold">SaaS Products</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            From idea to launch, we develop scalable SaaS platforms with
            authentication, subscriptions, and real-time dashboards.
          </p>
        </div>

        {/* App Development */}
        <div className="flex flex-col gap-3 justify-start ring-1 ring-blue-400 rounded-md px-5 py-6 bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300">
          <Smartphone size={36} className="text-purple-400" />
          <h1 className="text-xl font-semibold">App Development</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            We create cross-platform mobile apps that deliver smooth user
            experiences with React Native and modern frameworks.
          </p>
        </div>

        {/* SEO Services */}
        <div className="flex flex-col gap-3 justify-start ring-1 ring-blue-400 rounded-md px-5 py-6 bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300">
          <Search size={36} className="text-yellow-400" />
          <h1 className="text-xl font-semibold">SEO Services</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Improve your website’s ranking and visibility with powerful SEO
            optimization, keyword analysis, and performance audits.
          </p>
        </div>

        {/* Deployment */}
        <div className="flex flex-col gap-3 justify-start ring-1 ring-blue-400 rounded-md px-5 py-6 bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300">
          <Cloud size={36} className="text-cyan-400" />
          <h1 className="text-xl font-semibold">Deployment</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Deploy and scale your web applications using cloud platforms like
            Vercel, AWS, or Docker with CI/CD automation.
          </p>
        </div>
        {/* UI/UX Design */}
        <div className="flex flex-col gap-3 justify-start ring-1 ring-blue-400 rounded-md px-5 py-6 bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300">
          <Palette size={36} className="text-pink-500" />
          <h1 className="text-xl font-semibold">UI / UX Design</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting intuitive, visually appealing interfaces with a focus on
            usability and user satisfaction. We turn ideas into smooth,
            aesthetic digital experiences.
          </p>
        </div>
    
        

      </div>
    </div>
  );
};

export default MotivationPage;
