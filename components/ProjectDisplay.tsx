'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
  ZoomIn
} from 'lucide-react'
import Image from 'next/image'
import { JSX, useEffect, useState } from 'react'
import ScrollTrigger from './scroll-trigger'

const projects = [
  {
    id: 1,
    title:
      'Customized Inventory Management Solution with Support and Installation Tickets Management System',
    description:
      'Customized Inventory Management for the client. He needed a system to manage his inventory along with support and installation tickets management. The system includes role based access control, items and category management, tracking items, ticket creation and management, and transaction features',
    status: 'deployed',
    stage: 'Completed',
    progress: 100,
    link: 'https://www.ims.coretechsolutions.in/',
    tags: [
      'React',
      'Material-UI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'REST API',
      'tailwindcss'
    ],
    complexity: 'High',
    timeline: ['Planning', 'Development', 'Testing', 'Deployment'],
    currentStage: 3,
    images: [
      '/projects/imsmain.webp',
      '/projects/1.png',
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
      '/projects/5.png',
      '/projects/6.png',
      '/projects/7.png',
      '/projects/8.png',
      '/projects/9.png',
      '/projects/10.png',
      '/projects/11.png',
      '/projects/12.png',
      '/projects/13.png',
      '/projects/14.png',
      '/projects/15.png',

      '/projects/16.png',
      '/projects/17.png',
      '/projects/18.png',
      '/projects/19.png',
      '/projects/20.png',
      '/projects/21.png',
      '/projects/22.png',
      '/projects/23.png',
      '/projects/24.png',
      '/projects/25.png',
      '/projects/26.png',
      '/projects/27.png',
      '/projects/28.png',
      '/projects/29.png',
      '/projects/30.png',
      '/projects/31.png',
      '/projects/32.png',
      '/projects/33.png',

      '/projects/34.png'
    ]
  },

  {
    id: 2,
    title: 'Movie Frontend Application',
    description:
      'A movie frontend application built with React that integrates with an external movie database API to fetch and display movie information, styled with Tailwind CSS and utilizing react-router-dom for seamless navigation.',
    status: 'deployed',
    stage: 'Completed',
    progress: 100,
    tags: ['React', 'API Intigration', 'react-router-dom', 'Tailwind CSS'],
    complexity: 'Very High',
    timeline: ['Planning', 'Development', 'Testing', 'Deployment'],
    currentStage: 3,
    link: 'https://react-movies-project-dusky.vercel.app/',
    images: [
      '/projects/0001.png',
      '/projects/0002.png',
      '/projects/0003.png',
      '/projects/0004.png',
      '/projects/0005.png',
      '/projects/0006.png',
      '/projects/0007.png',
      '/projects/0008.png',
      '/projects/0009.png',
      '/projects/00010.png',
      '/projects/00011.png',
      '/projects/00012.png',
      '/projects/00013.png',
      '/projects/00014.png',
      '/projects/00015.png',
      '/projects/00016.png',
      '/projects/00017.png',
      '/projects/00018.png',
      '/projects/00019.png'
    ]
  },
  {
    id: 3,
    title: 'Mini Tools Factory Website',
    description:
      ' A Mini Tools Factory website built with JavaScript that integrates various mini tools into a single platform, styled with Tailwind CSS and utilizing HTML and CSS for structure and design.',
    status: 'deployed',
    stage: 'Completed',
    progress: 100,
    tags: ['API Intigration', 'JavaScript', 'Tailwind CSS', 'CSS', 'HTML'],
    complexity: 'Very High',
    timeline: ['Planning', 'Development', 'Testing', 'Deployment'],
    currentStage: 3,
    link: 'https://mubaidjavaid.github.io/Mini_Tools_Factory_js/',
    images: [
      '/projects/00001.png',
      '/projects/00002.png',
      '/projects/00003.png',
      '/projects/00004.png',
      '/projects/00005.png',
      '/projects/00006.png',
      '/projects/00007.png'
    ]
  },
  {
    id: 4,
    title: 'Pokemon Website',
    description:
      ' A Pokemon website built with JavaScript that integrates with the PokeAPI to fetch and display Pokemon information, styled with Tailwind CSS and utilizing HTML and CSS for structure and design.',
    status: 'deployed',
    stage: 'Completed',
    progress: 100,
    tags: [
      'API Intigration',
      'JavaScript',
      'axios',
      'Tailwind CSS',
      'CSS',
      'HTML'
    ],
    complexity: 'Very High',
    timeline: ['Planning', 'Development', 'Testing', 'Deployment'],
    currentStage: 3,
    link: 'https://vercel.com/m-ubaid-javaids-projects/pokemon-project',
    images: ['/projects/000001.png', '/projects/000002.png']
  },
  {
    id: 5,
    title: 'Portfolio website',
    description:
      ' A modern portfolio website built with React, showcasing 3D animations and smooth transitions using Framer Motion and styled with Tailwind CSS.',
    status: 'deployed',
    stage: 'Production',
    progress: 100,
    tags: ['React', '3D Animations', 'Framer Motion', 'Tailwind CSS'],
    complexity: 'Very High',
    timeline: ['Planning', 'Development', 'Testing', 'Deployment'],
    currentStage: 3,
    link: 'https://createkaro.vercel.app/',
    images: [
      '/projects/001.png',
      '/projects/002.png',
      '/projects/003.png',
      '/projects/004.png',
      '/projects/005.png',
      '/projects/006.png',
      '/projects/007.png',
      '/projects/008.png'
    ]
  },
  {
    id: 6,
    title: 'Portfolio Website',
    //coustomized portfolio website to showcase projects and skills.
    description:
      'Customized portfolio website to showcase projects and skills.',
    status: 'deployed',
    stage: 'Completed',
    progress: 100,
    tags: ['JavaScript', 'Bootstrap', 'CSS', 'HTML'],
    complexity: 'High',
    timeline: ['Planning', 'Development', 'Testing', 'Deployment'],
    currentStage: 3,
    link: 'https://create-with.vercel.app/',
    images: [
      '/projects/01.png',
      '/projects/02.png',
      '/projects/03.png',
      '/projects/04.png',
      '/projects/05.png',
      '/projects/06.png',
      '/projects/07.png',
      '/projects/08.png',
      '/projects/09.png',
      '/projects/010.png',
      '/projects/011.png',
      '/projects/012.png',
      '/projects/013.png',
      '/projects/014.png',
      '/projects/015.png',

      '/projects/016.png',
      '/projects/017.png',
      '/projects/018.png',
      '/projects/019.png',
      '/projects/020.png',
      '/projects/021.png'
    ]
  }
]

interface ProjectCardProps {
  project: typeof projects[0]
  projectIndex: number
  onImageClick: (project: typeof projects[0], imageIndex: number) => void
}

function ProjectCard ({
  project,
  projectIndex,
  onImageClick
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [isTitleExpanded, setIsTitleExpanded] = useState(false)

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying || !project.images.length) return

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % project.images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, project.images.length])

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsAutoPlaying(false)
    setCurrentImageIndex(prev => (prev + 1) % project.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsAutoPlaying(false)
    setCurrentImageIndex(
      prev => (prev - 1 + project.images.length) % project.images.length
    )
  }

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setIsAutoPlaying(false)
    setCurrentImageIndex(index)
  }

  // Check if title is long enough to need truncation
  const isLongTitle = project.title.length > 60

  return (
    <motion.div
      className='group relative'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl' />

      <div className='group relative bg-white/5 backdrop-blur-sm dark:border-indigo-700 dark:bg-indigo-900/30 dark:text-slate-300 dark:hover:bg-indigo-800/40 transition-all border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-500 dark:hover:border-cyan-300 duration-300 h-full flex flex-col shadow-lg hover:shadow-xl'>
        {/* Image Slider Section */}
        <div className='relative h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-100 dark:bg-slate-900'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className='relative w-full h-full'
            >
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className='object-cover'
                onError={e => {
                  const target = e.target as HTMLImageElement
                  target.src = `https://images.unsplash.com/photo-${
                    1500000000000 + project.id
                  }?w=800&h=600&fit=crop`
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none' />

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <motion.button
                onClick={prevImage}
                className='absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 backdrop-blur-lg border-b-2 border-white/70 dark:backdrop-blur-2xl  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300 transition-all shadow-lg z-10'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft
                  size={20}
                  className='text-slate-900 dark:text-white'
                />
              </motion.button>

              <motion.button
                onClick={nextImage}
                className='absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 backdrop-blur-lg border-b-2 border-white/70 dark:backdrop-blur-2xl  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300 transition-all shadow-lg z-10'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight
                  size={20}
                  className='text-slate-900 dark:text-white'
                />
              </motion.button>
            </>
          )}

          {/* Zoom In Icon */}
          <motion.button
            onClick={e => {
              e.stopPropagation()
              onImageClick(project, currentImageIndex)
            }}
            className='absolute top-3 right-3 p-2 rounded-full bg-white/5 backdrop-blur-lg border-b-2 border-white/70 dark:backdrop-blur-2xl  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300 transition-all shadow-lg z-10 opacity-0 group-hover:opacity-100'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ZoomIn size={18} className='text-slate-900 dark:text-white' />
          </motion.button>

          {/* Image Indicators */}
          {project.images.length > 1 && (
            <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center w-12 overflow-hidden gap-2 z-10'>
              {project.images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={e => goToImage(index, e)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className='p-6 flex flex-col flex-grow'>
          <motion.div className='mb-4' whileHover={{ scale: 1.05 }}>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:group-hover:border-cyan-300 dark:border-indigo-700'>
              <span className='text-xs text-indigo-700 dark:text-cyan-300 font-semibold uppercase'>
                {project.complexity}
              </span>
              <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
              <span className='text-xs text-purple-700 dark:text-purple-300'>
                {project.stage}
              </span>
            </div>
          </motion.div>

          {/* Title with Expandable Feature */}
          <div className='mb-3'>
            <motion.h3
              className={`text-lg md:text-xl font-semibold text-white dark:text-slate-300 dark:group-hover:text-cyan-300 transition-all duration-300 ${
                !isTitleExpanded && isLongTitle
                  ? 'line-clamp-1 cursor-pointer'
                  : ''
              }`}
              onClick={() =>
                isLongTitle && setIsTitleExpanded(!isTitleExpanded)
              }
              whileHover={isLongTitle ? { scale: 1.02 } : {}}
            >
              {project.title}
            </motion.h3>

            {/* Title Expand/Collapse Button */}
            {isLongTitle && (
              <button
                onClick={() => setIsTitleExpanded(!isTitleExpanded)}
                className='mt-1 text-purple-400 hover:text-purple-300 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium text-xs transition-colors flex items-center gap-1'
              >
                {isTitleExpanded ? (
                  <>
                    Show Less
                    <ChevronLeft size={12} className='rotate-90' />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronRight size={12} className='rotate-90' />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Read More Description Section */}
          <div className='mb-6 flex-grow'>
            <motion.p
              className={`text-sm text-white/60 dark:text-slate-300 transition-all duration-300 ${
                !isDescriptionExpanded ? 'line-clamp-2' : ''
              }`}
              layout
            >
              {project.description}
            </motion.p>

            {/* Description Read More/Less Button */}
            {project.description.length > 100 && (
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className='mt-2 text-purple-400 hover:text-purple-300 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium text-sm transition-colors flex items-center gap-1'
              >
                {isDescriptionExpanded ? (
                  <>
                    Show Less
                    <ChevronLeft size={14} className='rotate-90' />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronRight size={14} className='rotate-90' />
                  </>
                )}
              </button>
            )}
          </div>

          <div className='mb-6'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-xs text-white/60 dark:text-cyan-200 font-mono'>
                Progress
              </span>
              <span className='text-xs font-mono text-purple-600 dark:text-cyan-200'>
                {project.progress}%
              </span>
            </div>
            <motion.div
              className='w-full h-2 bg-slate-200 dark:border-indigo-700 dark:bg-indigo-900/30 dark:text-slate-300 dark:hover:bg-indigo-800/40 transition-all rounded-full overflow-hidden border border-slate-300'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.div
                className='h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 dark:border-white/5 dark:text-white rounded-full'
                initial={{ width: 0 }}
                whileInView={{ width: `${project.progress}%` }}
                transition={{ duration: 1.5, delay: 0.2 * projectIndex }}
              />
            </motion.div>
          </div>

          <div className='flex flex-wrap gap-2 mb-6'>
            {project.tags.map(tag => (
              <span
                key={tag}
                className='text-xs px-2 py-1 rounded bg-slate-100 text-indigo-700 border border-slate-200 dark:border-indigo-700 dark:bg-indigo-900/30 dark:text-slate-300 dark:group-hover:border-cyan-300 dark:group-hover:text-cyan-300 transition-all'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='flex justify-between mb-6 gap-1'>
            {project.timeline.map((stage, index) => (
              <motion.div
                key={stage}
                className={`flex-1 h-1 rounded-full ${
                  index <= project.currentStage
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 transition-all dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 dark:border-white/5 dark:text-white'
                    : 'bg-slate-200 dark:bg-slate-700'
                }`}
                whileInView={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
                transition={{ delay: 0.1 * index }}
              />
            ))}
          </div>

          <div className='flex flex-row gap-4 mt-auto'>
            {project.link && project.link.length > 0 && (
              <a href={project.link} target='_blank' className='w-full'>
                <motion.button
                  className='w-full py-3 rounded-lg bg-indigo-100/30 border border-indigo-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 dark:border-indigo-700 text-white dark:hover:text-white hover:bg-indigo-200 hover:text-indigo-800 dark:hover:bg-indigo-800/40 transition-all font-semibold flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Demo</span>
                  <ExternalLink
                    size={16}
                    className='group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform'
                  />
                </motion.button>
              </a>
            )}
            <a
              href='https://github.com/MUbaidJavaid'
              target='_blank'
              className='w-full'
            >
              <motion.button
                className='w-full py-3 rounded-lg bg-transparent text-white border-2 border-indigo-300 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-indigo-700
  dark:hover:bg-indigo-800/40 dark:hover:border-cyan-300 dark:hover:text-cyan-300 transition-all hover:bg-indigo-200 duration-200 flex items-center gap-2 shadow-sm hover:shadow-md transition-all font-semibold flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>GitHub</span>

                <Github
                  size={16}
                  className='group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform'
                />
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection (): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<
    typeof projects[0] | null
  >(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const handleImageClick = (
    project: typeof projects[0],
    imageIndex: number
  ) => {
    setSelectedProject(project)
    setModalImageIndex(imageIndex)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setModalImageIndex(0)
  }

  const nextModalImage = () => {
    if (!selectedProject) return
    setModalImageIndex(prev => (prev + 1) % selectedProject.images.length)
  }

  const prevModalImage = () => {
    if (!selectedProject) return
    setModalImageIndex(
      prev =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    )
  }

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0'>
        {projects.map((project, projectIndex) => (
          <ScrollTrigger
            key={project.id}
            animationType='scaleIn'
            delay={projectIndex * 0.1}
          >
            <ProjectCard
              key={project.id}
              project={project}
              projectIndex={projectIndex}
              onImageClick={handleImageClick}
            />
          </ScrollTrigger>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className='fixed inset-0 z-[1000] flex items-center justify-center my-auto p-4 bg-black/90 backdrop-blur-md  mt-20'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className='relative w-full max-w-6xl max-h-[80vh] bg-white/5 backdrop-blur-lg border-b-2 border-white/70 dark:backdrop-blur-2xl  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300 rounded-2xl overflow-hidden shadow-2xl'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                className='absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 backdrop-blur-lg border-b-2 border-white/70 dark:backdrop-blur-2xl  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300   transition-all shadow-lg'
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className='text-slate-900 dark:text-white' />
              </motion.button>

              {/* Modal Header */}
              <div className='absolute top-0 left-0 right-0 z-10 px-4 py-4 bg-gradient-to-b from-black/80 to-transparent'>
                <h3 className='text-xl font-bold text-white'>
                  {selectedProject.title}
                </h3>
                <p className='text-sm text-white/80'>
                  {selectedProject.description}
                </p>
              </div>

              {/* Image Slider */}
              <div className='relative h-[60vh] sm:h-[70vh] bg-white/5 backdrop-blur-lg border-b-2 border-white/70 dark:backdrop-blur-2xl  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={modalImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1 }}
                    className='relative w-full h-full'
                  >
                    <Image
                      src={selectedProject.images[modalImageIndex]}
                      alt={`${selectedProject.title} - Image ${
                        modalImageIndex + 1
                      }`}
                      fill
                      className='object-contain'
                      onError={e => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://images.unsplash.com/photo-${
                          1500000000000 + selectedProject.id
                        }?w=1200&h=800&fit=crop`
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevModalImage}
                      className='absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 backdrop-blur-lg border-b-2 border-white/70 dark:backdrop-blur-2xl  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300 transition-all shadow-xl z-10'
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft
                        size={28}
                        className='text-slate-900 dark:text-white'
                      />
                    </motion.button>

                    <motion.button
                      onClick={nextModalImage}
                      className='absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 backdrop-blur-lg border-b-2 border-white/70 dark:backdrop-blur-2xl  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300 transition-all shadow-xl z-10'
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight
                        size={28}
                        className='text-slate-900 dark:text-white'
                      />
                    </motion.button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {selectedProject.images.length > 1 && (
                <div className='p-4 bg-white/5 backdrop-blur-lg border-b-2 border-white/70 dark:backdrop-blur-2xl  dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-slate-300'>
                  <div className='flex items-center justify-center gap-2 overflow-x-auto pb-2'>
                    {selectedProject.images.map((image, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setModalImageIndex(index)}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === modalImageIndex
                            ? 'border-indigo-500 dark:border-cyan-500 shadow-lg'
                            : 'border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className='object-cover'
                          onError={e => {
                            const target = e.target as HTMLImageElement
                            target.src = `https://images.unsplash.com/photo-${
                              1500000000000 + selectedProject.id + index
                            }?w=200&h=200&fit=crop`
                          }}
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Counter */}
              <div className='absolute bottom-24 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm text-white text-sm font-medium'>
                {modalImageIndex + 1} / {selectedProject.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
