"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])


  // const handleDownloadResume = () => {
  //   const link = document.createElement("a")
  //   link.href = "https://drive.google.com/file/d/1QMNvxKId_YhdJQbw1RmVYATbIg2Q3H00/view?usp=sharing"
  //   link.download = "Ubaid_Resume_MERN.pdf"
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  const handleDownloadResume = () => {
  const link = document.createElement("a")
  link.href = "https://drive.google.com/uc?export=download&id=1QMNvxKId_YhdJQbw1RmVYATbIg2Q3H00"
  link.download = "Ubaid_Resume_MERN.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  }

    const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    })
  };

  const name = "Ubaid Javaid".split("");
  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden  md:pt-20">
      {/* Magnetic gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
        }}
        transition={{ type: "tween", ease: "linear" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <motion.div variants={item} animate="active" className="mb-16 -mt-36 md:mt-0" >
          <div className="group inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border-2 border-slate-200 mb-6 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 dark:hover:border-cyan-300 transition-all">
            <p className="text-[10px] md:text-sm text-white dark:text-slate-300 font-medium dark:hover:bg-gradient-to-r dark:hover:from-cyan-300 dark:hover:to-cyan-300 dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:border-cyan-300">Full-Stack MERN Engineer • 3+ years building production apps</p>
          </div>

        </motion.div>

      <motion.div className="mb-6 perspective-1000">
            <div className="flex justify-center gap-1 flex-wrap">
              {/* <p className="text-6xl md:text-8xl font-bold dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:hover:bg-clip-text dark:hover:text-transparent inline-block"> */}
              {name.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl md:text-8xl font-[900]  md:font-extrabold  inline-block text-white dark:text-slate-300 dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:hover:bg-clip-text dark:hover:text-transparent"
                  style={{
                    textShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transform: "translateZ(0)"
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              {/* </p> */}
            </div>
          </motion.div>

        {/* <motion.h1 variants={item} className="text-5xl md:text-8xl font-bold mb-6 text-balance">
          <span className="bg-linear-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
            Ubaid Javaid
          </span>
        </motion.h1> */}

        <motion.p
          variants={item}
          className="text-md text-white/70 dark:text-slate-300 md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed  "
        >
         Where Innovation Meets Implementation - Building Tomorrow's Web Today
        </motion.p>

        <motion.div variants={item} className="btn-group-responsive gap-4  md:gap-8 flex justify-center">
          <motion.button
            onClick={handleViewWork}
            className="px-6 py-3  rounded-lg font-semibold bg-indigo-100 text-indigo-700 border border-indigo-300  transition-all
            dark:bg-gradient-to-r dark:from-blue-500  dark:to-cyan-500 dark:border-white/5 dark:text-white
            hover:bg-indigo-200 duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            aria-label="View my work"
          >
            View My Work
          </motion.button>

          <motion.button
            onClick={handleDownloadResume}
            className="group px-3 py-2 rounded-lg bg-transparent text-white border-2 border-indigo-300 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 dark:hover:border-cyan-300 dark:hover:text-cyan-300 transition-all hover:bg-indigo-200 duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Download resume"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-56 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="group w-6 h-10 border-2 border-slate-200 dark:border-indigo-700 rounded-full flex items-start justify-center p-2 dark:hover:border-cyan-300 ">
          <motion.div className="w-1 h-2 bg-indigo-300 rounded-full dark:group-hover:text-cyan-300" />
        </div>
      </motion.div>
    </div>
  )
}
