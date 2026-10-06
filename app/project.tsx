"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import GlareHover from "@/components/GlareHover"

export default function Project() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const project = featuredProject

  return (
    <>
      <section id="projects" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Portfolio</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Selected Projects</h3>
            </div>
          </div>
        </FadeDown>

        {/* Project Card Container */}
        <div className="max-w-xl mx-auto px-6">
          <FadeUp>
            <GlareHover className="group flex flex-col h-full bg-background border border-text-secondary/20 hover:border-text-primary/50 rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl">
              
              {/* Image Frame Preview */}
              <div className="relative aspect-16/10 bg-text-secondary/5 border-b border-text-secondary/10 p-3 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm border border-text-secondary/15 bg-background">
                  <Image 
                    src={project.imagePath} 
                    alt={project.title} 
                    fill 
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" 
                    priority
                  />
                </div>
                
                {/* Numbering Badge */}
                <div className="absolute top-5 right-5 bg-background/90 backdrop-blur-md border border-text-secondary/20 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest text-text-secondary shadow-sm">
                  01
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-7 flex flex-col grow relative">
                {/* Issuer / Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-text-secondary flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    VERCEL DEPLOYMENT • WEB APP
                  </span>
                  <span className="text-[11px] font-bold text-text-secondary/80">{project.createdAt}</span>
                </div>

                {/* Title */}
                <h4 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight leading-snug mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-text-primary group-hover:to-text-secondary transition-all duration-300">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-text-secondary font-medium leading-relaxed mb-5 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((skill, i) => (
                    <span key={i} className="text-[10px] font-bold bg-thirdary text-text-primary px-2.5 py-1 rounded-md border border-text-secondary/10 uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-text-secondary/10">
                  <button 
                    suppressHydrationWarning 
                    className="text-xs font-bold tracking-[0.15em] uppercase text-text-primary flex items-center gap-2 group/btn cursor-pointer" 
                    onClick={() => setIsOpen(true)}
                  >
                    View Details
                    <span className="w-6 h-0.5 bg-text-primary group-hover/btn:w-10 transition-all duration-300"></span>
                  </button>

                  <a 
                    href={project.liveDemoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 border border-text-secondary/20 rounded-full text-text-secondary hover:text-background hover:bg-text-primary hover:border-text-primary transition-all duration-300 cursor-pointer"
                    title="Open Live Website"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </GlareHover>
          </FadeUp>
        </div>

        {/* GitHub Repositories Link */}
        <FadeUp>
          <div className="mt-16 flex justify-center w-full px-6">
            <a 
              href="https://github.com/Firdaus1802/PORTOFOLIO-DAUS" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-background border border-text-secondary/20 text-text-primary hover:border-text-primary hover:bg-text-primary hover:text-background rounded-xl font-bold tracking-widest text-sm uppercase transition-all duration-300 ease-out group hover:-translate-y-1.5 hover:scale-[1.02] shadow-sm hover:shadow-xl cursor-pointer"
            >
              <span>Visit My GitHub</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </FadeUp>

        {/* Modal View */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.3 }} 
                className="absolute inset-0 bg-background/90 backdrop-blur-md" 
                onClick={() => setIsOpen(false)} 
              />

              {/* Modal Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.95, y: 20 }} 
                transition={{ type: "spring", damping: 25, stiffness: 300 }} 
                className="bg-background border border-text-secondary/20 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative z-10"
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-5 md:p-6 border-b border-text-secondary/10">
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-text-primary tracking-tight">{project.title}</h4>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">{project.liveDomain} • {project.createdAt}</span>
                  </div>
                  <button 
                    suppressHydrationWarning 
                    className="text-text-secondary hover:text-text-primary transition-colors p-2 bg-text-secondary/5 rounded-full" 
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-5 md:p-8 overflow-y-auto grow custom-scrollbar">
                  {/* Screenshot Banner */}
                  <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-text-secondary/15 mb-6 bg-text-secondary/5 shadow-lg">
                    <Image src={project.imagePath} alt={project.title} fill className="object-cover object-top" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pb-6 border-b border-text-secondary/10">
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Year & Status</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10">{project.createdAt}</span>
                        <span className="text-xs font-bold bg-green-500/10 text-green-500 px-3 py-1.5 rounded-lg border border-green-500/20">Live Active</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs font-bold bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Deskripsi Proyek</span>
                    <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-3">Fitur Utama</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center bg-thirdary/50 p-3 rounded-xl border border-text-secondary/5">
                          <span className="text-blue-500 mr-2.5 font-black">&rarr;</span>
                          <span className="text-xs md:text-sm font-bold text-text-primary uppercase tracking-wide">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-5 md:p-6 border-t border-text-secondary/10 flex flex-col sm:flex-row gap-4 bg-background">
                  <a 
                    href={project.liveDemoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center font-bold text-sm tracking-widest uppercase bg-text-primary text-background py-3.5 rounded-xl hover:-translate-y-0.5 transition-transform duration-300 cursor-pointer pointer-events-auto select-none relative z-30"
                  >
                    Open Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex justify-center items-center gap-2 text-center font-bold text-sm tracking-widest uppercase border-2 border-text-secondary/20 text-text-primary hover:border-text-primary hover:bg-text-primary hover:text-background hover:-translate-y-0.5 transition-all duration-300 py-3.5 rounded-xl cursor-pointer pointer-events-auto select-none relative z-30"
                  >
                    Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

const featuredProject = {
  title: "Finzie Joki Service",
  shortDescription: "Platform website penyedia layanan jasa joki & game service dengan antarmuka modern dan responsif, dibangun dengan Next.js, React, dan di-deploy di Vercel.",
  fullDescription: "Finzie Joki Service adalah platform web application yang dirancang untuk menyediakan layanan game service Roblox terpercaya. Dibangun dengan Next.js, React, dan Tailwind CSS, menghadirkan antarmuka responsif modern, alur pemesanan jelas, serta integrasi pemesanan dan deployment di Vercel.",
  createdAt: "2025",
  liveDomain: "finziejokiservice.vercel.app",
  imagePath: "/images/project-finzie-live.jpg",
  features: [
    "Modern Responsive User Interface",
    "Game Service Catalog & Information",
    "Fast Performance with Next.js",
    "Vercel Cloud Deployment",
  ],
  tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Vercel"],
  githubUrl: "https://github.com/Firdaus1802/PORTOFOLIO-DAUS",
  liveDemoUrl: "https://finziejokiservice.vercel.app/",
}
