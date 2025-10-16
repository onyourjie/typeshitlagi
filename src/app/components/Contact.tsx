import React from 'react'
import { cn } from '@/lib/utils'
import { IconBrandGithub, IconBrandLinkedin, IconBrandX} from '@tabler/icons-react';

export default function Contact() {
  return (
    <section id='contact'>
        <div className="relative flex-col flex h-[20rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-3xl md:text-5xl font-bold text-transparent text-center">
        Let&apos;s elevate your digital presence together
      </p>
      <p className='text-center text-neutral-500 dark:text-neutral-300 z-20'>
        Let&apos;s connect and talk about how I can help bring your ideas to 
        life.
      </p>
      <div className='my-6 z-20 mt-20'>
        <button className='px-8 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white'>
          Let&apos;s get in touch
        </button>
      </div>
    </div>
    
    {/* Footer Section */}
    <div className='w-full bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800'>
      <div className='max-w-7xl mx-auto px-8 py-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-neutral-600 dark:text-neutral-400 mb-8 md:mb-0'>
            &copy; 2025 Filzah Mufidah
          </p>
          <div className='flex space-x-4'>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className='rounded-full bg-gray-100 dark:bg-neutral-800 w-10 h-10 
               flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors'>
              <IconBrandGithub className='h-6 w-6 text-black dark:text-neutral-400'/>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className='rounded-full bg-gray-100 dark:bg-neutral-800 w-10 h-10 
               flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors'>
              <IconBrandLinkedin className='h-6 w-6 text-black dark:text-neutral-400'/>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className='rounded-full bg-gray-100 dark:bg-neutral-800 w-10 h-10 
               flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors'>
              <IconBrandX className='h-6 w-6 text-black dark:text-neutral-400'/>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
