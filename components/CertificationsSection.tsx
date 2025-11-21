"use client"

import { AnimatePresence, motion, Variants } from "framer-motion"
import { Award, Calendar, CheckCircle, ExternalLink, Shield, Sparkles, Star, X } from "lucide-react"
import { useState } from "react"

// Certification data structure
const certifications = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    platform: "Meta via Coursera",
    date: "December 2023",
    image: "/projects/c1.png",
    certificateUrl: "/projects/c1.png",
    skills: ["React", "JavaScript", "UI/UX"],
    level: "Professional",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Google Cloud Certified - Professional Cloud Architect",
    platform: "Google Cloud",
    date: "October 2023",
    image: "/projects/c2.png",
    certificateUrl: "/projects/c2.png",
    skills: ["GCP", "Cloud Architecture", "DevOps"],
    level: "Expert",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect - Professional",
    platform: "Amazon Web Services",
    date: "August 2023",
    image: "/projects/c3.png",
    certificateUrl: "/projects/c3.png",
    skills: ["AWS", "System Design", "Cloud"],
    level: "Professional",
    color: "from-orange-500 to-amber-500"
  },
 {
    id: 4,
    title: "AWS Certified Solutions Architect - Professional",
    platform: "Amazon Web Services",
    date: "August 2023",
    image: "/projects/c4.png",
    certificateUrl: "/projects/c4.png",
    skills: ["AWS", "System Design", "Cloud"],
    level: "Professional",
    color: "from-orange-500 to-amber-500"
  },
]

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)
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
      ease: "easeOut" as const // Force TypeScript to recognize it
    }
  }
}
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Floating background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-500" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 dark:border-cyan-500/30 mb-6 backdrop-blur-sm"
        >
          <Sparkles className="text-indigo-600 dark:text-cyan-400" size={16} />
          <span className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
            Professional Certifications
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Credentials & Achievements
          </span>
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Industry-recognized certifications demonstrating continuous learning and expertise across multiple domains
        </p>

        {/* Stats Row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: Award, label: "Total Certifications", value: "6+" },
            { icon: Shield, label: "Professional Level", value: "4" },
            { icon: Star, label: "Platforms", value: "5" }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500">
                <stat.icon className="text-white" size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Certifications Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}
            className="group relative perspective-1000"
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
              className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 preserve-3d"
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <img src={cert.image} alt="" />

                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-60 mix-blend-multiply`} />

                {/* Level badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-white/20 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  <span className={`text-xs font-bold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    {cert.level}
                  </span>
                </motion.div>

                {/* Verified checkmark */}
                <motion.div
                  className="absolute top-4 left-4 p-2 rounded-full bg-green-500 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="text-white" size={16} />
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 dark:group-hover:from-cyan-400 dark:group-hover:to-blue-400 transition-all duration-300">
                  {cert.title}
                </h3>

                {/* Platform & Date */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Shield size={16} className="text-indigo-500 dark:text-cyan-500" />
                    <span className="font-medium">{cert.platform}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar size={16} className="text-purple-500 dark:text-blue-500" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* View Certificate Button */}
                <motion.button
                  onClick={() => setSelectedCert(cert)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold bg-gradient-to-r ${cert.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <span className="relative z-10">View Certificate</span>
                  <ExternalLink size={16} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </motion.button>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-indigo-500/30 dark:border-cyan-500/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 dark:border-blue-500/30 rounded-br-2xl" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed h-[70vh]  inset-0 z-50 flex items-center justify-center mt-20  md:mt-32 p-4 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-full md:w-[60vw] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
              initial={{ scale: 0.8, rotateX: -15, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateX: 15, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative px-6 py-4 bg-gradient-to-r ${selectedCert.color} text-white`}>
                <motion.button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <Award size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-2">
                        <Shield size={16} />
                        {selectedCert.platform}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {selectedCert.date}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm font-semibold">
                        {selectedCert.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Preview */}
              <div className="px-6 py-4">
                <div className="relative w-full h-[50vh] w-[50vw]  bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-inner">
                  {/* Option 1: iframe for actual certificate */}
                  <h1 className="text-2xl font-bold mb-2">{selectedCert.title}</h1>
<img src={selectedCert.certificateUrl} alt="" />
                  {/* <Image
                    src={selectedCert.certificateUrl}
                    // className="w-full h-full"
                    title={selectedCert.title}
                    // sandbox="allow-same-origin allow-scripts"
                    alt={selectedCert.title}
                    width={900}
                    height={900}
                  /> */}

                  {/* Option 2: Fallback image preview (uncomment if iframe doesn't work) */}
                  {/* <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  /> */}

                  {/* Loading overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 pointer-events-none">
                    <motion.div
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce animation-delay-100" />
                      <div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce animation-delay-200" />
                    </motion.div>
                  </div>
                </div>

                {/* Skills and Actions */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-sm font-medium rounded-lg bg-gradient-to-r ${selectedCert.color} text-white shadow-md`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={selectedCert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    Open in New Tab
                  </motion.a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-tl-full" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-br-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute top-1/4 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
    </div>
  )
}
