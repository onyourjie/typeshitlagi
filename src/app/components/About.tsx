import React from 'react'
import Header from './reuseable-components/Header'
import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='my-20 mt-40'>
        <Header title='About Me' />
        <div className='grid gap-4 items-center md:[grid-template-columns:1fr_1.5fr]'>
            <div>
                <Image src="/images/profile.jpeg" alt="About Me" width={500} height={500} 
            className='w-full h-80 md:h-120 object-cover rounded-lg'/>
            </div>
            <div className='md:text-xl text-neutral-600 dark:text-neutral-300'>
                <p className='mb-3'>Hi, I&apos;m Filzah - a frontend developer pasionate
                    about turning into clean, responsive digital experiences.
                    I love blending tools like Next.js and Tailwind CSS to create
                    modern, user friendly interfaces that look great on any device.
                    For me, building on the web is about more than code - it&apos;s about
                    crafting design that feel intuitive and engaging.
                </p>
                <p>
                    Driven by curiosity, I&apos;m always exploring new tools and
                    design trends to keep growing. Whether it&apos;s building a
                    personal project, recreating popular apps to learn new stacks, or
                    adding subtle animations, I focus on details that bring projects to life. Beyond coding,
                    I enjoy sharing what I learn to help and inspire fellow developers.
                </p>
            </div>

        </div>
    </section>
  )
}
