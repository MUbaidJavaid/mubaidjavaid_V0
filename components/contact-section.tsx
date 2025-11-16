"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
    setFormData({ name: "", email: "", message: "" })
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
          <span className="text-white dark:text-indigo-300 dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:hover:bg-clip-text dark:hover:text-transparent">Let's Connect</span>
        </h2>
        <p className="text-lg text-white/70">Ready to collaborate on your next product or idea — let's get in touch.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div  className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

            <div className="group relative bg-white/5 backdrop-blur-sm dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-indigo-300  dark:hover:bg-indigo-800/40 transition-all border border-slate-200  rounded-xl p-6 hover:border-indigo-500 dark:hover:border-cyan-300  duration-300 h-full flex flex-col shadow-lg hover:shadow-xl">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.form
            onSubmit={handleSubmit}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-2 text-white dark:text-indigo-300 dark:group-hover:text-cyan-300">Name</label>
              <motion.input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/5 backdrop-blur-sm focus:border-primary/60 outline-none transition-colors placeholder:text-white/50 text-white dark:border-indigo-700 dark:bg-indigo-900/30    dark:hover:bg-indigo-800/40 dark:group-hover:border-cyan-300 "
                placeholder="Your name"
                whileFocus={{ scale: 1.02, borderColor: "rgba(99, 102, 241, 0.6)" }}
              />
            </motion.div>

            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-2 text-white dark:text-indigo-300 dark:group-hover:text-cyan-300">Email</label>
              <motion.input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/5 backdrop-blur-sm focus:border-primary/60 outline-none transition-colors placeholder:text-white/50 text-white dark:border-indigo-700 dark:bg-indigo-900/30    dark:hover:bg-indigo-800/40 dark:group-hover:border-cyan-300 "
                placeholder="your@email.com"
                whileFocus={{ scale: 1.02, borderColor: "rgba(99, 102, 241, 0.6)" }}
              />
            </motion.div>

            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-2 text-white dark:text-indigo-300 dark:group-hover:text-cyan-300">Message</label>
              <motion.textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/5 backdrop-blur-sm focus:border-2 focus:border-indigo-600    outline-none transition-colors resize-none h-32 placeholder:text-white/50 text-white dark:border-indigo-700 dark:bg-indigo-900/30    dark:hover:bg-indigo-800/40 dark:group-hover:border-cyan-300 "
                placeholder="Your message..."
                whileFocus={{ scale: 1.02, borderColor: "rgba(99, 102, 241, 0.6)" }}
              />
            </motion.div>

            <motion.button
              type="submit"
              variants={item}
              className="w-full py-4   rounded-lg font-semibold bg-indigo-100 text-indigo-700 border border-indigo-300  transition-all
            dark:bg-gradient-to-r dark:from-blue-500  dark:to-cyan-500 dark:border-white/5 dark:text-white
            hover:bg-indigo-200 duration-200  shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitted ? (
                <motion.div className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <CheckCircle size={20} />
                  <span>Message Sent!</span>
                </motion.div>
              ) : (
                <motion.div className="flex items-center gap-2" whileHover={{ gap: "12px" }}>
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
</div> 
</motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="group text-2xl font-bold mb-8 text-white dark:text-indigo-300 dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:hover:bg-clip-text dark:hover:text-transparent">Other Ways to Connect</h3>

          {[
            {
              icon: Mail,
              label: "Email",
              value: "hello@example.com",
              href: "mailto:hello@example.com",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/yourprofile",
              href: "https://linkedin.com",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "github.com/yourprofile",
              href: "https://github.com",
            },
          ].map((contact, idx) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="block p-6 rounded-lg border border-slate-200 bg-white/5 backdrop-blur-sm hover:border-indigo-600  transition-colors group soft-glow dark:border-indigo-700 dark:bg-indigo-900/30    dark:hover:bg-indigo-800/40 dark:hover:border-cyan-300"
                whileHover={{ x: 6 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div className="p-3 rounded-lg border border-slate-200 bg-white/5 backdrop-blur-sm group-hover:border-indigo-600 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 mt-1  dark:border-indigo-700 dark:bg-indigo-900/30    dark:hover:bg-indigo-800/40 dark:hover:border-cyan-300 dark:geroup-hover:bg-gradient-to-r dark:group-hover:from-blue-500 dark:group-hover:to-cyan-500" whileHover={{ scale: 1.1, rotate: 5 }}>
                    <Icon className="text-white
                    
                    " size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold md:font-semibold 
                    group-hover:bg-gradient-to-r 
                  group-hover:from-indigo-600 
                  group-hover:to-purple-600 
                  group-hover:bg-clip-text 
                  group-hover:text-transparent 
                    mb-1 text-white dark:text-indigo-300 dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:hover:bg-clip-text dark:hover:text-transparent dark:group-hover:text-cyan-300">{contact.label}</h4>
                    <p className="text-sm text-white/70 group-hover:text-accent dark:group-hover:text-cyan-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
        <ContactForm />
      </div>
    </div>
  )
}
