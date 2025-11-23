'use client'

import { motion } from 'framer-motion'
import { Book, BookmarkCheck, GraduationCap } from 'lucide-react'
import ScrollTrigger from './scroll-trigger'

export default function AboutSection () {
  const experiences = [
    {
      year: '2022 - 2026',
      title: 'BS in Computer Science',
      company: 'University of Education Lahore, Multan Campus',
      description:
        'Focused on software development, data structures, algorithms, and web technologies. Graduated with honors.',
      icon: GraduationCap
    },
    {
      year: '2020 - 2022',
      title: 'ICS (Intermediate in Computer Science)',
      company: 'Asif Saleem (AliPur) High School',
      description:
        'Studied subjects including Programming, Database Management, and Networking.',
      icon: BookmarkCheck
    },
    {
      year: '2018 - 2020',
      title: 'Matric in Science',
      company: 'Asif Saleem (AliPur) High School',
      description:
        'Studied core subjects including Mathematics, Physics, Chemistry, and Biology.',
      icon: Book
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  }

  return (
    <div className='max-w-7xl mx-auto px-4 md:px-16 py-8 md:py-20'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='mb-16'
      >
        <ScrollTrigger animationType='slideLeft'>
          <h2 className='text-3xl md:text-4xl font-extrabold mb-4 text-foreground'>
            <span className='text-white dark:text-slate-300 dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:hover:bg-clip-text dark:hover:text-transparent'>
              My Journey
            </span>
          </h2>
        </ScrollTrigger>
        <ScrollTrigger animationType='slideRight' delay={0.2}>
          <p className='text-lg text-white/70 dark:text-slate-300 max-w-3xl'>
            Building expertise through diverse experiences, mentorship, and
            continuous learning.
          </p>
        </ScrollTrigger>
      </motion.div>

      <div className='max-w-3xl'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.year}
                variants={item}
                className='mb-12 relative pl-12 group'
              >
                {/* Connecting line */}
                <div className='absolute left-4 top-8 w-0.5 h-20 bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent dark:bg-gradient-to-b dark:from-blue-500 dark:via-cyan-500 dark:to-transparent' />
                <motion.span
                  className='absolute -left-2 top-0 w-10 h-10 rounded-full soft-glow'
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.6, 0.2, 0.6],
                    filter: ['blur(4px)', 'blur(10px)', 'blur(4px)']
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{
                    background: 'var(--icon-pulse-color)'
                  }}
                />

                {/* <motion.div
                  className="absolute -left-2 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border-2 border-white flex items-center justify-center soft-glow dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 dark:border-none dark:border-cyan-300"
                  whileHover={{ scale: 1.12, boxShadow: "0 8px 30px rgba(99,102,241,0.18)" }}
                >
                  <Icon className="text-white" size={18} />
                </motion.div> */}

                <motion.div
                  className='absolute -left-2 top-0 w-10 h-10 rounded-full
             bg-gradient-to-r from-indigo-600 to-purple-600
             dark:from-blue-500 dark:to-cyan-500
             border-2 border-white dark:border-cyan-300
             flex items-center justify-center z-10'
                  whileHover={{
                    scale: 1.12,
                    boxShadow: '0 8px 26px rgba(99,102,241,0.28)'
                  }}
                >
                  <Icon className='text-white' size={18} />
                </motion.div>

                {/* Content card */}
                <motion.div
                  className='group hover:border-indigo-600 p-6 rounded-lg border border-slate-200 bg-white/5 backdrop-blur-sm transition-colors soft-glow dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 dark:hover:border-cyan-300 '
                  whileHover={{ x: 6 }}
                >
                  <span className='text-sm group-hover:text-indigo-600  text-white font-bold dark:group-hover:text-cyan-200 font-mono'>
                    {exp.year}
                  </span>
                  <h3
                    className='text-lg font-bold md:font-semibold mt-3 mb-1 text-white group-hover:bg-gradient-to-r
                  group-hover:from-indigo-600
                  group-hover:via-purple-600
                  group-hover: to-pink-600
                  group-hover:bg-clip-text
                  group-hover:text-transparent
                 dark:group-hover:text-cyan-300'
                  >
                    {exp.title}
                  </h3>
                  <p className='text-white/80 group-hover:text-purple-600 dark:group-hover:text-cyan-300 font-mono mb-2'>
                    {exp.company}
                  </p>
                  <p className='text-white/65'>{exp.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
      {/*
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='mt-20 p-8 rounded-xl border border-slate-200 hover:border-indigo-600 bg-white/5 backdrop-blur-sm max-w-3xl'
      >
        <h3 className='text-2xl font-bold mb-4 text-white'>Beyond Code</h3>
        <p className='text-white/70 leading-relaxed'>
          I'm passionate about creating digital experiences that blend
          aesthetics with functionality. When I'm not coding, you'll find me
          exploring new technologies, contributing to open-source projects, or
          mentoring aspiring developers. I believe in continuous learning and
          staying at the forefront of web development innovation.
        </p>
      </motion.div> */}
    </div>
  )
}
