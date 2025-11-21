
"use client";


import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, GitBranch, Zap } from "lucide-react";
import CertificationsSection1 from "./Certifications";
import CertificationsSection from "./CertificationsSection";
import ProjectDisplay from "./ProjectDisplay";

// const projects = [
//   {
//     id: 1,
//     title: "Neural Analytics Dashboard",
//     description: "Real-time data visualization platform with 3D graphs and interactive insights.",
//     status: "deployed",
//     stage: "Production",
//     progress: 100,
//     tags: ["React", "Three.js", "Node.js", "PostgreSQL"],
//     complexity: "High",
//     timeline: ["Planning", "Development", "Testing", "Deployment"],
//     currentStage: 3,
//   },
//   {
//     id: 2,
//     title: "Immersive E-Commerce Platform",
//     description: "Full-stack marketplace with AR product preview and serverless architecture.",
//     status: "deployed",
//     stage: "Production",
//     progress: 100,
//     tags: ["Next.js", "Stripe", "Supabase", "Tailwind"],
//     complexity: "High",
//     timeline: ["Planning", "Development", "Testing", "Deployment"],
//     currentStage: 3,
//   },
//   {
//     id: 3,
//     title: "Collaborative Design Tool",
//     description: "Real-time collaboration app with WebSocket support and infinite canvas.",
//     status: "deployed",
//     stage: "Production",
//     progress: 100,
//     tags: ["Next.js", "WebSocket", "Canvas API", "Redis"],
//     complexity: "Very High",
//     timeline: ["Planning", "Development", "Testing", "Deployment"],
//     currentStage: 3,
//   },
// ]

const workflowSteps = [
  {
    title: "Requirement Analysis & Planning",
    description: "Understand client goals & project scope. Define features, user stories & technical requirements.",
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Wireframes & interactive prototypes. Design responsive and user-friendly interfaces.",
  },
  {
    title: "Development (Frontend & Backend)",
    description: "Implement frontend using React. Build backend APIs with Node.js & Express. Integrate database (MongoDB) & authentication.",
  },
  {
    title: "Testing & Quality Assurance",
    description: "Unit, integration & end-to-end testing. Bug fixing & performance optimization.",
  },
  {
    title: "Deployment & CI/CD",
    description: "Deploy on cloud platforms (Vercel, Netlify, AWS). Set up continuous integration & delivery pipelines.",
  },
  {
    title: "Monitoring & Maintenance",
    description: "Track app performance & errors. Update features & security patches regularly.",
  },
]

export default function ProjectsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-slate-100">
          <span className="text-white dark:text-slate-300 dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:hover:bg-clip-text dark:hover:text-transparent">
            Project Pipeline
          </span>
        </h2>
        <p className="text-lg text-white/60 max-w-3xl">
          Selected projects that demonstrate engineering craftsmanship, performance optimization, and production-ready delivery.
        </p>
      </motion.div>

      {/* Workflow Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="group/pro max-w-7xl mx-auto my-16 p-6 md:p-10 rounded-3xl border border-slate-200  bg-white/5 backdrop-blur-sm  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300   transition-all shadow-xl  dark:hover:border-cyan-500"
      >
        <motion.div
          className=" flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 transition-all
            dark:bg-gradient-to-r dark:from-blue-500  dark:to-cyan-500 dark:border-white/5 dark:text-white shadow-lg">
            <GitBranch className="text-white " size={28} />
          </div>
          <div>
            <h3 className="text-xl md:text-3xl font-extrabold md:font-bold text-white dark:text-slate-300 dark:group-hover/pro:bg-gradient-to-r dark:group-hover/pro:from-blue-500 dark:group-hover/pro:to-cyan-500 dark:group-hover/pro:bg-clip-text dark:group-hover/pro:text-transparent transition-all ">
              Development Workflow
            </h3>
            <p className="text-sm text-white/70 dark:text-slate-300 mt-1">A clear, repeatable process for delivering production software</p>
          </div>
        </motion.div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative group bg-white/5 backdrop-blur-sm  dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-indigo-600 dark:border-slate-700"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-xl border border-slate-200
                   dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300
                    transition-all
            dark:group-hover:bg-gradient-to-r dark:group-hover:from-blue-500  dark:group-hover:to-cyan-500 dark:group-hover:border-white/5 dark:group-hover:text-whitegroup-hover:border-indigo-600 flex items-center justify-center text-white  font-bold text-lg shadow-lg group-hover:bg-gradient-to-r
                  group-hover:from-indigo-600
                  group-hover:to-purple-600

                  "
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {index + 1}
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="font-bold md:font-semibold text-sm md:text-lg text-white dark:text-slate-300 mb-2
                     transition-all

                    group-hover:bg-gradient-to-r
                  group-hover:from-indigo-600
                  group-hover:to-purple-600
                  group-hover:bg-clip-text
                  group-hover:text-transparent
dark:group-hover:bg-gradient-to-r dark:group-hover:from-blue-500 dark:group-hover:to-cyan-500 dark:group-hover:bg-clip-text dark:group-hover:text-transparent
                    ">{step.title}</h4>
                    <p className="text-sm text-white/70 dark:text-slate-300 mt-0 text-left leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {index < workflowSteps.length - 1 && (
                  <motion.div
                    className="absolute left-6 top-full w-0.5 h-6 bg-gradient-to-b from-indigo-600 to-purple-600  transition-all
            dark:bg-gradient-to-b dark:from-blue-500  dark:to-cyan-500 dark:border-white/5 dark:text-white"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="group border border-slate-200 bg-white/5 backdrop-blur-sm dark:from-slate-800  rounded-2xl p-6 shadow-lg  hover:border-indigo-600  dark:border-indigo-700 dark:hover:border-cyan-500 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 transition-all h-full"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)" ,
                    // borderColor: "rgba(139, 92, 246, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-slate-200 group-hover:border-indigo-600 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg mx-auto dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40  transition-all
            dark:group-hover:bg-gradient-to-r dark:group-hover:from-blue-500  dark:group-hover:to-cyan-500 dark:group-hover:border-white/5 dark:group-hover:text-white "
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {index + 1}
                  </motion.div>

                  <div className="text-center">
                    <h4 className="font-semibold text-base text-slate-100 dark:text-slate-300 mb-3 min-h-[48px] flex items-center justify-center
                    group-hover:bg-gradient-to-r
                  group-hover:from-indigo-600
                  group-hover:to-purple-600
                  group-hover:bg-clip-text
                  group-hover:text-transparent

                    ">
                      {step.title}
                    </h4>
                    <p className="text-sm text-white/65 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 opacity-0"
                    whileHover={{ opacity: 1 }}
                  >
                    <CheckCircle2 className="text-green-500" size={20} />
                  </motion.div>
                </motion.div>

                {index % 3 < 2 && (
                  <motion.div
                    className="absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all
            dark:bg-gradient-to-b dark:from-blue-500  dark:to-cyan-500 dark:border-white/5 dark:text-white"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-purple-600 border-y-4 border-y-transparent transition-all
            dark:bg-gradient-to-r dark:from-blue-500  dark:to-cyan-500 dark:border-white/5 dark:text-white dark:border-cyan-500 dark:border-l-cyan-500 "
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-6 py-3  rounded-lg font-semibold bg-indigo-100 text-indigo-700 border border-indigo-300 transition-all
            dark:bg-gradient-to-r dark:from-blue-500  dark:to-cyan-500 dark:border-white/5 dark:text-white hover:bg-indigo-200 duration-200  shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </motion.div>

      <CertificationsSection />
      <CertificationsSection1 />


      {/* <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project, projectIndex) => (
          <motion.div key={project.id} variants={item} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

            <div className="group relative bg-white/5 backdrop-blur-sm dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 transition-all border border-slate-200  rounded-xl p-6 hover:border-indigo-500 dark:hover:border-cyan-300  duration-300 h-full flex flex-col shadow-lg hover:shadow-xl">
              <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:group-hover:border-cyan-300 dark:border-indigo-700">
                  <span className="text-xs text-indigo-700 dark:text-cyan-300 font-semibold uppercase">{project.complexity}</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-purple-700 dark:text-purple-300">{project.stage}</span>
                </div>
              </motion.div>

              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white dark:text-slate-300 dark:group-hover:text-cyan-300">{project.title}</h3>
              <p className="text-sm text-white/60 dark:text-slate-300 mb-6 flex-grow">{project.description}</p>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-white/60 dark:text-cyan-200 font-mono">Progress</span>
                  <span className="text-xs font-mono text-purple-600 dark:text-cyan-200">{project.progress}%</span>
                </div>
                <motion.div
                  className="w-full h-2 bg-slate-200 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:bg-indigo-800/40 transition-all rounded-full overflow-hidden border border-slate-300 "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all
            dark:bg-gradient-to-r dark:from-blue-500  dark:to-cyan-500 dark:border-white/5 dark:text-white rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.2 * projectIndex }}
                  />
                </motion.div>
              </div>

              <div className=" flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-100  text-indigo-700  border border-slate-200 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:group-hover:border-cyan-300  dark:group-hover:text-cyan-300  transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between mb-6 gap-1">
                {project.timeline.map((stage, index) => (
                  <motion.div
                    key={stage}
                    className={`flex-1 h-1 rounded-full ${
                      index <= project.currentStage ? "bg-gradient-to-r from-indigo-600 to-purple-600 transition-all dark:bg-gradient-to-r dark:from-blue-500  dark:to-cyan-500 dark:border-white/5 dark:text-white " : "bg-slate-200 dark:bg-slate-700"
                    }`}
                    whileInView={{ scaleX: 1 }}
                    initial={{ scaleX: 0 }}
                    transition={{ delay: 0.1 * index }}
                  />
                ))}
              </div>

              <motion.button
                className="w-full py-3 rounded-lg bg-indigo-100/30  border border-indigo-300 dark:bg-gradient-to-r dark:from-blue-500  dark:to-cyan-500 dark:border-indigo-700 text-white dark:hover:text-white hover:bg-indigo-200 hover:text-indigo-800 dark:hover:bg-indigo-800/40 transition-all font-semibold flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Project</span>
                <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div> */}

      <ProjectDisplay />

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >

        {[
          { label: "Projects Deployed", value: "3", icon: Code2 },
          { label: "Active Users", value: "10K+", icon: Zap },
          { label: "Development Hours", value: "2000+", icon: ArrowRight },
          { label: "Success Rate", value: "100%", icon: CheckCircle2 },
        ].map((stat, index) => {
          const Icon = stat.icon
          return (

            <motion.div
              key={stat.label}
              className={`group p-6 rounded-lg border border-slate-200 hover:border-cyan-300
                        bg-white/5 backdrop-blur-sm dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300  dark:hover:border-cyan-300    transition-all text-center shadow-lg
                        hover:shadow-xl `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="flex justify-center mb-3 group-hover:text-indigo-600 dark:hover:border-cyan-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Icon
                  className="text-white dark:border-indigo-700   dark:text-slate-300  dark:group-hover:border-cyan-300  dark:group-hover:text-cyan-300  transition-all group-hover:text-indigo-500 "
                  size={24}
                />
              </motion.div>

              <div className="
                  text-2xl font-bold text-white
                  dark:text-slate-300
                  dark:group-hover:text-cyan-300
                  group-hover:bg-gradient-to-r
                  group-hover:from-indigo-600
                  group-hover:to-purple-600
                  group-hover:bg-clip-text
                  group-hover:text-transparent
                  mb-2
                ">
                {stat.value}
              </div>

              <div className="text-sm text-white/70 dark:text-slate-300">
                {stat.label}
              </div>
            </motion.div>


          )
        })}

      </motion.div>

    </div>
  )
}
