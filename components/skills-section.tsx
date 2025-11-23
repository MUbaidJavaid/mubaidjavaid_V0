'use client'

import { motion, useInView } from 'framer-motion'
import { Award, Calendar, TrendingUp, Zap } from 'lucide-react'
import { useRef } from 'react'
import ScrollTrigger, { StaggeredList } from './scroll-trigger'

export function PingPulse ({
  colorLight = 'rgba(99,102,241,0.45)', // indigo-500/45
  colorDark = 'rgba(34,211,238,0.45)', // cyan-400/45
  size = 8, // px
  intensity = 1.35, // scale multiplier
  duration = 1.8 // seconds
}) {
  return (
    <motion.span
      className='absolute rounded-full pointer-events-none'
      style={{
        width: size,
        height: size,
        background: `var(--pulse-color)`
      }}
      animate={{
        scale: [1, intensity, 1],
        opacity: [0.9, 0, 0.9],
        filter: ['blur(2px)', 'blur(8px)', 'blur(2px)']
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  )
}

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', proficiency: 85, years: 1.5 },
      { name: 'TypeScript', proficiency: 90, years: 1.5 },
      { name: 'React', proficiency: 95, years: 1 },
      { name: 'Next.js', proficiency: 92, years: 1 },
      { name: 'Material UI', proficiency: 95, years: 1 },
      { name: 'Shadcn UI', proficiency: 95, years: 0.6 },
      { name: 'Framer Motion', proficiency: 88, years: 1 },
      { name: 'Three.js', proficiency: 85, years: 0.5 },
      { name: 'Tailwind CSS', proficiency: 85, years: 1.5 }
    ],
    color: 'from-blue-500 to-cyan-500',
    icon: TrendingUp
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', proficiency: 92, years: 1.5 },
      { name: 'Express', proficiency: 88, years: 1.5 },
      { name: 'MongoDB', proficiency: 88, years: 1.5 },
      { name: 'PostgreSQL', proficiency: 88, years: 1.5 },
      { name: 'SQL', proficiency: 88, years: 1.5 },
      { name: 'JWT', proficiency: 90, years: 1.5 },
      { name: 'API Design', proficiency: 89, years: 1.5 },
      { name: 'Authentication', proficiency: 91, years: 1.5 }
    ],
    color: 'from-purple-500 to-pink-500',
    icon: Award
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', proficiency: 93, years: 1.5 },
      { name: 'Docker', proficiency: 85, years: 1.5 },
      { name: 'Vercel', proficiency: 94, years: 1.5 },
      { name: 'Netlify', proficiency: 90, years: 1.5 },
      { name: 'GitHub Actions', proficiency: 88, years: 1.5 },
      { name: 'GitHub', proficiency: 88, years: 1.5 },
      { name: 'Postman', proficiency: 84, years: 1 }
    ],
    color: 'from-cyan-500 to-teal-500',
    icon: Zap
  }
]

export default function SkillsSection () {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className='max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-20'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='text-center mb-12'
      >
        <ScrollTrigger animationType='fadeUp'>
          <h2 className='text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 dark:text-slate-100'>
            <span className='text-white dark:text-slate-300 dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:hover:bg-clip-text dark:hover:text-transparent'>
              Technical Arsenal
            </span>
          </h2>
        </ScrollTrigger>
        <p className='text-lg text-white/70 dark:text-slate-300 '>
          Curated expertise across modern web development with clear proficiency
          indicators.
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'
      >
        {[
          { label: 'Skills Mastered', value: '18+', icon: Award },
          { label: 'Years Experience', value: '1.5+', icon: TrendingUp },
          { label: 'Avg Proficiency', value: '89%', icon: Zap }
        ].map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              className='group p-6 rounded-xl border border-slate-200 bg-white/5 backdrop-blur-sm dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 transition-all dark:hover:border-cyan-300 shadow-lg hover:shadow-xl '
              whileHover={{
                y: -4
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className='flex items-start gap-4'>
                <motion.div
                  className='p-3 rounded-lg bg-white/5 border border-slate-200  backdrop-blur-sm group-hover:border-indigo-600
                 group-hover:bg-gradient-to-r
                  group-hover:from-indigo-600
                  group-hover:to-purple-600
                  dark:group-hover:bg-gradient-to-r dark:group-hover:from-blue-500   dark:group-hover:to-cyan-500 dark:group-hover:text-white
                dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 transition-all'
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon className=' text-white  ' size={20} />
                </motion.div>
                <div>
                  <div className='text-sm text-white/70 dark:dark:text-slate-300 mb-1'>
                    {stat.label}
                  </div>
                  <div
                    className='text-2xl font-bold text-white  group-hover:bg-gradient-to-r
                  group-hover:from-indigo-600
                  group-hover:to-purple-600
                  group-hover:bg-clip-text
                  group-hover:text-transparent  dark:text-slate-300 dark:group-hover:text-cyan-300'
                  >
                    {stat.value}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Skills Categories */}
        <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIdx) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='mb-8'>
                <div className='group flex items-center gap-3 mb-6'>
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color}  duration-300 shadow-md`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon className='text-white ' size={20} />
                  </motion.div>
                  <h3
                    className={`text-xl md:text-2xl font-bold md:font-semibold text-white dark:text-slate-300 dark:group-hover:text-cyan-300  dark:group-hover:bg-gradient-to-r
                   ${category.color}
                  dark:group-hover:bg-clip-text
                  dark:group-hover:text-transparent`}
                  >
                    {category.title}
                  </h3>
                </div>

                <motion.div
                  className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full mb-6 group-hover:w-24 transition-all duration-300`}
                  initial={{ width: 48 }}
                  whileHover={{ width: 96 }}
                />
              </div>

              <motion.div
                variants={container}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='space-y-5'
              >
                {category.skills.map(skill => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className='group/skill p-4 rounded-lg border border-slate-200 bg-white/5 backdrop-blur-sm dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 transition-all hover:border-indigo-500  dark:hover:border-cyan-300 shadow-sm hover:shadow-md'
                    whileHover={{ x: 4 }}
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <div>
                        <h4
                          className='font-bold md:font-medium text-white dark:text-slate-300
                        dark:group-hover/skill:text-cyan-300 group-hover/skill:bg-gradient-to-r
                  group-hover/skill:from-indigo-600
                  group-hover/skill:to-purple-600
                  group-hover/skill:bg-clip-text
                  group-hover/skill:text-transparent
                  group-hover/skill:font-bold '
                        >
                          {skill.name}
                        </h4>
                        <p className='text-xs text-white/70 dark:text-slate-300 flex items-center gap-1 mt-1'>
                          <Calendar size={12} />
                          {skill.years} years
                        </p>
                      </div>
                      <motion.span
                        className='text-sm font-mono font-bold dark:group-hover/skill:text-cyan-300 group-hover/skill:bg-gradient-to-r
                  group-hover/skill:from-indigo-600
                  group-hover/skill:to-purple-600
                  group-hover/skill:bg-clip-text
                  text-white/90
                  group-hover/skill:text-transparent  dark:text-slate-300 bg-white/10 backdrop-blur-sm dark:bg-indigo-900/30 px-3 py-1 rounded-lg border border-indigo-300 dark:group-hover/skill:border-cyan-300
                  group-hover/skill:border-indigo-500 dark:border-indigo-700'
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.proficiency}%
                      </motion.span>
                    </div>

                    {/* Proficiency bar */}
                    <div className='relative h-2 border border-slate-200 group-hover/skill:border-indigo-600 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 transition-all rounded-full overflow-hidden dark:group-hover/skill:border-cyan-300'>
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                      >
                        <motion.div
                          className='absolute inset-0 bg-white/20'
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'linear'
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )
        })}
      </StaggeredList>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='group mt-20 p-8 rounded-2xl   border border-slate-200 bg-white/5 backdrop-blur-sm dark:border-indigo-700 dark:bg-indigo-900/30 dark:hover:border-cyan-300 dark:text-slate-300   transition-all shadow-xl'
      >
        <h3 className='text-2xl font-bold mb-8 text-white dark:text-slate-300 dark:group-hover:text-cyan-300'>
          Experience Timeline
        </h3>

        <div className='space-y-8'>
          {[
            {
              year: '2025 - Present',
              role: 'Senior Full-Stack MERN Developer',
              company: 'Fiesta Consultants',
              description:
                'Leading frontend architecture and mentoring junior developers'
            },
            {
              year: '2024 - 2025',
              role: 'Backend Developer',
              company: 'Fiesta Consultants',
              description:
                'Built scalable applications back-end with Express,MongoDB and Node.js, managing databases and APIs'
            }
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              className='flex gap-6 relative'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* <PingIndicator status={entry.status} isVisible={isInView} /> */}
              {/* Timeline dot */}
              {/* <div className="group flex flex-col items-center">
                <motion.div
                  className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:bg-gradient-to-r dark:from-blue-500  dark:to-cyan-500 border-2 border-white dark:border-slate-800 shadow-lg "
                  whileHover={{ scale: 1.3 }}
                />
                {idx < 3 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent dark:bg-gradient-to-b dark:from-blue-500  dark:via-cyan-500 dark:to-transparent mt-2" />
                )}
              </div> */}

              <div className='group flex flex-col items-center'>
                <div className='relative flex items-center justify-center'>
                  {/* 🔵 PING ANIMATION — Only for active item */}
                  {idx === 0 && (
                    <>
                      <PingPulse size={12} intensity={1.3} duration={2.2} />
                      <PingPulse size={17} intensity={1.6} duration={2.8} />
                      <PingPulse size={20} intensity={2} duration={3.2} />
                    </>
                  )}

                  {/* 🎯 MAIN DOT */}
                  <motion.div
                    className='
        relative z-10 w-5 h-5 rounded-full
        bg-gradient-to-r from-indigo-600 to-purple-600
        dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500
          shadow-lg
      '
                    whileHover={{ scale: 1 }}
                  />
                </div>

                {/* Vertical line */}
                {idx < 3 && (
                  <div
                    className='
      w-0.5 h-16 bg-gradient-to-b
      from-indigo-600 via-purple-600 to-transparent
      dark:bg-gradient-to-b dark:from-blue-500 dark:via-cyan-500 dark:to-transparent mt-2
    '
                  />
                )}
              </div>

              {/* Timeline content */}
              <motion.div
                className='group pb-8 flex-1 p-4 rounded-lg border border-slate-200 hover:border-indigo-600 bg-white/5 backdrop-blur-sm dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 transition-all dark:hover:border-cyan-300'
                whileHover={{
                  y: -4
                }}
              >
                <div className='text-sm font-mono font-bold text-white group-hover:text-indigo-600 dark:text-slate-300 mb-2'>
                  {exp.year}
                </div>
                <h4
                  className='text-lg
                group-hover:bg-gradient-to-r
                  group-hover:from-indigo-600
                  group-hover:via-purple-600
                  group-hover: to-pink-600
                  group-hover:bg-clip-text
                  group-hover:text-transparent
                font-bold mb-1 text-white dark:text-slate-300 dark:group-hover:text-cyan-300'
                >
                  {exp.role}
                </h4>
                <p className='text-sm text-purple-600 dark:text-cyan-500  font-semibold mb-2'>
                  {exp.company}
                </p>
                <p className='text-sm text-white/70 dark:text-slate-300'>
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
