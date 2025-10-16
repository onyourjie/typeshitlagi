import React from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projects } from '@/data/project';
import { getTechIcon } from '@/lib/tech-icons';

export default function RecentProjects() {
  return (
    <section id='projects' className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-neutral-500 dark:text-white">
          Recent Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.projectTitle}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.projectDescription}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={project.projectImage}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={`${project.projectTitle} thumbnail`}
                  />
                </CardItem>
                
                {/* Tech Stack Icons */}
                {project.techStack && (
                  <CardItem translateZ="60" className="w-full mt-6">
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="text-neutral-600 dark:text-neutral-400">
                            {getTechIcon(tech)}
                          </span>
                          <span className="text-xs font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </CardItem>
                )}
                
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.projectPreviewLink}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Visit →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.projectSourceCode}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    View Code
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
