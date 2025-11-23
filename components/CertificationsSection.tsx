'use client'

import { ScrollTrigger } from '@/components/scroll-trigger'
import { motion, Variants } from 'framer-motion'
import {
  Award,
  Calendar,
  CheckCircle,
  ExternalLink,
  Shield,
  Sparkles,
  Star
} from 'lucide-react'
import { useState } from 'react'

// Certification data structure
const certifications = [
  {
    id: 1,
    title: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
    platform: 'Certificate from Coursera',
    date: 'June 24, 2025',
    image: '/projects/c1.png',
    certificateUrl:
      'https://coursera.org/share/4618a3d8269aa5d58bef3a3eae1d7413',
    skills: [
      'Command-Line Interface',
      'Databases',
      'GitHub',
      'User Provisioning',
      'Data Validation',
      'API Design',
      'User Interface (UI)',
      'Web Applications',
      'Scalability',
      'Full-Stack Web Development'
    ],
    level: 'Professional',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Advanced Frontend Development and Deployment',
    platform: 'Certificate from Coursera',
    date: 'June 24, 2025',
    image: '/projects/c2.png',
    certificateUrl:
      'https://coursera.org/share/c23f37ae93fd7bff070ca66cb8e1610a',
    skills: [
      'Command-Line Interface',
      'React.js',
      'Node.JS',
      'User Accounts',
      'GitHub',
      'React Redux',
      'Authorization(Computing)',
      'User Interface (UI)',
      'Front-End Web Development',
      'Web Applications',
      'Application Deployment'
    ],
    level: 'Expert',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Frontend Development with React',
    platform: 'Certificate from Coursera',
    date: 'June 24, 2025',
    image: '/projects/c3.png',
    certificateUrl:
      'https://coursera.org/share/6f0cbbba856f89e6c0a26dd10d94a494',
    skills: [
      'React Redux',
      'User Interface (UI)',
      'UI Components',
      'Web Applications',
      'Authentications',
      'React.js',
      'User Accounts',
      'Authorization(Computing)',
      'Front-End Web Development'
    ],
    level: 'Professional',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 4,
    title: 'Backend Development and API Creation',
    platform: 'Certificate from Coursera',
    date: 'June 24, 2025',
    image: '/projects/c4.png',
    certificateUrl:
      'https://coursera.org/share/134b346388af8f3c0755451ed53c9a7c',
    skills: [
      'Databases',
      'GitHub',
      'Server Side',
      'Data Validation',
      'Scalability',
      'Authentication',
      'Development Environment',
      'User Accounts',
      'User Provisioning',
      'API Design',
      'Back-End Web Development'
    ],
    level: 'Professional',
    color: 'from-orange-500 to-amber-500'
  }
]

export default function CertificationsSection () {
  const [selectedCert, setSelectedCert] = useState<
    typeof certifications[0] | null
  >(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const // Force TypeScript to recognize it
      }
    }
  }
  return (
    <div className='max-w-7xl mx-auto px-6 py-20 relative'>
      {/* Floating background orbs */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-500' />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center mb-16 relative z-10'
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-cyan-500/30 mb-6 backdrop-blur-sm'
        >
          <Sparkles className='text-white dark:text-cyan-400' size={16} />
          <span className='text-sm font-semibold text-white dark:text-cyan-400 uppercase tracking-wider'>
            Professional Certifications
          </span>
        </motion.div>
        <ScrollTrigger animationType='fadeUp'>
          <h2 className='text-2xl md:text-5xl font-extrabold mb-4'>
            <span className='text-white  dark:text-slate-300 dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:hover:bg-clip-text dark:hover:text-transparent'>
              Credentials & Achievements
            </span>
          </h2>
        </ScrollTrigger>
        <p className='text-lg text-white/70 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed'>
          Industry-recognized certifications demonstrating continuous learning
          and expertise across multiple domains
        </p>

        {/* Stats Row */}
        <motion.div
          className='flex flex-wrap items-center justify-center gap-8 mt-12'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: Award, label: 'Total Certifications', value: '6+' },
            { icon: Shield, label: 'Professional Level', value: '4' },
            { icon: Star, label: 'Platforms', value: '5' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className='group flex items-center gap-3 px-3 py-2 rounded-xl   bg-white/5 backdrop-blur-sm border border-slate-200 mb-6 dark:border-cyan-500/30 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 dark:hover:border-cyan-300 transition-all duration-300 ease-in-out'
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              <div className='p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500'>
                <stat.icon className='text-white' size={20} />
              </div>
              <div className='text-left'>
                <div className='text-xs text-white/70 dark:text-slate-400'>
                  {stat.label}
                </div>
                <div className='text-xl font-bold text-white dark:text-white'>
                  {stat.value}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Certifications Grid */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10'
      >
        {certifications.map((cert, index) => (
          <ScrollTrigger
            key={cert.id}
            animationType='scaleIn'
            delay={index * 0.1}
          >
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className='group relative perspective-1000'
              onHoverStart={() => setHoveredId(cert.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                animate={{
                  scale: hoveredId === cert.id ? 1.1 : 1
                }}
              />

              {/* Card */}
              <motion.div
                className='relative h-full bg-white/5 backdrop-blur-lg border border-slate-200 mb-6 dark:border-cyan-500/30 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 dark:hover:border-cyan-300  rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 preserve-3d'
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Background blur wrapper (keeps content crisp) */}
                <div className='absolute inset-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl -z-10' />

                {/* Certificate Image */}
                <div className='relative h-40 sm:h-48 overflow-hidden bg-slate-100 dark:bg-slate-900'>
                  <img
                    src={cert.image}
                    alt=''
                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                  />

                  {/* Overlay gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-60 mix-blend-multiply`}
                  />

                  {/* Level badge */}
                  <motion.div
                    className='absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-white/20 shadow-lg'
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                  >
                    <span className='text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent'>
                      {cert.level}
                    </span>
                  </motion.div>

                  {/* Verified checkmark */}
                  <motion.div
                    className='absolute top-3 sm:top-4 left-3 sm:left-4 p-1.5 sm:p-2 rounded-full bg-green-500 shadow-lg'
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className='text-white' size={14} />
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className='p-4 sm:p-6 space-y-3 sm:space-y-4'>
                  {/* Title */}
                  <h3 className='text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 dark:group-hover:from-cyan-400 dark:group-hover:to-blue-400 transition-all duration-300 min-h-[2.5rem] sm:min-h-[3rem]'>
                    {cert.title}
                  </h3>

                  {/* Platform & Date */}
                  <div className='space-y-2'>
                    <div className='flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400'>
                      <Shield
                        size={14}
                        className='text-indigo-500 dark:text-indigo-400 flex-shrink-0'
                      />
                      <span className='font-medium truncate'>
                        {cert.platform}
                      </span>
                    </div>
                    <div className='flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400'>
                      <Calendar
                        size={14}
                        className='text-purple-500 dark:text-purple-400 flex-shrink-0'
                      />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                    {cert.skills.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        className='px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={cert.certificateUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {' '}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />{' '}
                    <span className='relative z-10'>Verify Certificate</span>{' '}
                    <ExternalLink
                      size={16}
                      className='relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform'
                    />{' '}
                  </motion.a>
                </div>

                {/* Decorative corners */}
                <div className='absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-t-2 border-l-2 border-indigo-500/30 dark:border-indigo-400/30 rounded-tl-2xl' />
                <div className='absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-b-2 border-r-2 border-purple-500/30 dark:border-purple-400/30 rounded-br-2xl' />
              </motion.div>
            </motion.div>
          </ScrollTrigger>
        ))}
      </motion.div>

      {/* Decorative Background Elements */}
      <div className='absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent' />
      <div className='absolute top-1/4 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent' />
    </div>
  )
}
