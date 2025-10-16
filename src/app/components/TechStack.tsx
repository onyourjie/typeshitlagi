import React from "react";
import { techIcons } from "@/lib/tech-icons";

const TechStack = () => {
  const techList = Object.keys(techIcons);
  
  return (
    <section className="py-20 relative overflow-hidden" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-gray-500">
            Tech Stack
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Technologies I work with
          </p>
        </div>

        {/* Animated sliding container */}
        <div className="relative">
          {/* First row - slides left to right */}
          <div className="flex overflow-hidden mb-8">
            <div className="flex animate-scroll-left">
              {[...techList, ...techList].map((tech, index) => (
                <div
                  key={`left-${index}`}
                  className="flex items-center gap-3 mx-4 px-6 py-4 
                  bg-white dark:bg-gray-800/50 
                  rounded-xl border border-gray-200 dark:border-gray-700 
                  hover:border-purple-500 dark:hover:border-purple-500
                  shadow-md dark:shadow-none
                  transition-all duration-300 hover:scale-105 min-w-fit"
                >
                  <div className="text-purple-500 dark:text-purple-400">
                    {techIcons[tech]}
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - slides right to left */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...techList.slice().reverse(), ...techList.slice().reverse()].map((tech, index) => (
                <div
                  key={`right-${index}`}
                  className="flex items-center gap-3 mx-4 px-6 py-4 
                  bg-white dark:bg-gray-800/50 
                  rounded-xl border border-gray-200 dark:border-gray-700 
                  hover:border-purple-500 dark:hover:border-purple-500
                  shadow-md dark:shadow-none
                  transition-all duration-300 hover:scale-105 min-w-fit"
                >
                  <div className="text-purple-500 dark:text-purple-400">
                    {techIcons[tech]}
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlays to fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default TechStack;
