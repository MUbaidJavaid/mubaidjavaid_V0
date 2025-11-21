"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Award, Calendar, CheckCircle, ExternalLink, Shield, Sparkles, Star, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// Certification data structure
const certifications = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    platform: "Meta via Coursera",
    date: "December 2023",
    image: "/projects/c1.png",
    certificateUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LDU2Q1TES8QH/CERTIFICATE_LANDING_PAGE~LDU2Q1TES8QH.jpeg",
    skills: ["React", "JavaScript", "UI/UX"],
    level: "Professional",
  },
  {
    id: 2,
    title: "Google Cloud Certified - Professional Cloud Architect",
    platform: "Google Cloud",
    date: "October 2023",
    image: "/projects/c2.png",
    certificateUrl: "https://www.credential.net/example-google-cert",
    skills: ["GCP", "Cloud Architecture", "DevOps"],
    level: "Expert",
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect - Professional",
    platform: "Amazon Web Services",
    date: "August 2023",
    image: "/projects/c3.png",
    certificateUrl: "https://aws.amazon.com/verification/example",
    skills: ["AWS", "System Design", "Cloud"],
    level: "Professional",
  },
  {
    id: 4,
    title: "Full Stack Web Development with React Specialization",
    platform: "Hong Kong University via Coursera",
    date: "June 2023",
    image: "/projects/c4.png",
    certificateUrl: "/projects/c4.png",
    skills: ["MERN Stack", "Node.js", "MongoDB"],
    level: "Specialization",
  },

]

export default function CertificationsSection1() {
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

  const cardVariants = {
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
        ease: "easeOut" as const
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/50 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 mb-4 sm:mb-6 backdrop-blur-sm"
        >
          <Sparkles className="text-indigo-600 dark:text-indigo-400" size={16} />
          <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
            Professional Certifications
          </span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-4 px-4">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Credentials & Achievements
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
          Industry-recognized certifications demonstrating continuous learning and expertise across multiple domains
        </p>

        {/* Stats Row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-8 sm:mt-12 px-4"
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
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600">
                <stat.icon className="text-white" size={16} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</div>
                <div className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10"
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
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
              animate={{
                scale: hoveredId === cert.id ? 1.1 : 1
              }}
            />

            {/* Card */}
            <motion.div
              className="relative h-full bg-white dark:bg-slate-800 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 preserve-3d"
              whileHover={{
                y: -10,
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Certificate Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop';
                  }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/60 via-purple-600/40 to-pink-600/60 dark:from-indigo-500/60 dark:via-purple-500/40 dark:to-pink-500/60 opacity-60 mix-blend-multiply" />

                {/* Level badge */}
                <motion.div
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-white/20 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  <span className="text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {cert.level}
                  </span>
                </motion.div>

                {/* Verified checkmark */}
                <motion.div
                  className="absolute top-3 sm:top-4 left-3 sm:left-4 p-1.5 sm:p-2 rounded-full bg-green-500 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="text-white" size={14} />
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Title */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 dark:group-hover:from-indigo-400 dark:group-hover:to-purple-400 transition-all duration-300 min-h-[2.5rem] sm:min-h-[3rem]">
                  {cert.title}
                </h3>

                {/* Platform & Date */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <Shield size={14} className="text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                    <span className="font-medium truncate">{cert.platform}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <Calendar size={14} className="text-purple-500 dark:text-purple-400 flex-shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                  className="w-full py-2.5 sm:py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden text-sm sm:text-base"
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
                  <ExternalLink size={14} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </motion.button>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-t-2 border-l-2 border-indigo-500/30 dark:border-indigo-400/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-b-2 border-r-2 border-purple-500/30 dark:border-purple-400/30 rounded-br-2xl" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl my-8 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
              initial={{ scale: 0.8, rotateX: -15, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateX: 15, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-4 sm:p-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white">
                <motion.button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all z-10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>

                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 pr-10">
                  <div className="p-2 sm:p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <Award size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold mb-2">{selectedCert.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Shield size={14} />
                        {selectedCert.platform}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Calendar size={14} />
                        {selectedCert.date}
                      </span>
                      <span className="px-2 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm font-semibold">
                        {selectedCert.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Preview */}
              <div className="p-2 sm:p-6">
                <div className="relative w-full md:w-[80vw] aspect-video h-[40vh] md:h-[60vh] bg-slate-100 dark:bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-inner">

 <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop';
                  }}
                />

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
                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={selectedCert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Open in New Tab
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
