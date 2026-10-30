"use client"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const currentProject = projects[currentIndex]

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  const goToSlide = useCallback((idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1)
    setCurrentIndex(idx)
  }, [currentIndex])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, selectedProject])

  return (
    <>
      <section id="projects" className="w-full max-w-7xl mx-auto py-24 md:py-32 bg-background relative border-t border-text-secondary/10">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-14 w-full">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-text-secondary/10">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-3">Archive & Works</h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Featured Projects</h3>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-extrabold text-text-secondary font-mono tracking-widest">
                  <span className="text-text-primary text-lg">0{currentIndex + 1}</span> / 0{projects.length}
                </span>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevSlide}
                    aria-label="Previous Project"
                    className="p-3 rounded-xl border border-text-secondary/20 hover:border-text-primary bg-background hover:bg-text-secondary/10 text-text-primary transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button 
                    onClick={nextSlide}
                    aria-label="Next Project"
                    className="p-3 rounded-xl border border-text-secondary/20 hover:border-text-primary bg-background hover:bg-text-secondary/10 text-text-primary transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeDown>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <FadeUp delay={0.1}>
              <div className="relative aspect-16/10 w-full rounded-3xl overflow-hidden border border-text-secondary/20 bg-text-secondary/5 shadow-2xl group">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentProject.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 40 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setSelectedProject(currentProject)}
                  >
                    <Image 
                      src={currentProject.imagePath} 
                      alt={currentProject.title} 
                      fill 
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" 
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md border border-text-secondary/20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-text-secondary shadow-md flex items-center gap-1.5 pointer-events-none">
                  <svg className={`w-3.5 h-3.5 ${currentProject.badgeColor}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>{currentProject.badge}</span>
                </div>

                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md border border-text-secondary/20 px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-text-primary shadow-md pointer-events-none">
                  {currentProject.number}
                </div>

                <div className="absolute inset-y-0 left-3 flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevSlide()
                    }}
                    aria-label="Previous Slide"
                    className="p-2.5 rounded-full bg-background/80 backdrop-blur-md border border-text-secondary/20 hover:border-text-primary text-text-primary hover:bg-background transition-all duration-300 shadow-lg hover:scale-110 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>

                <div className="absolute inset-y-0 right-3 flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextSlide()
                    }}
                    aria-label="Next Slide"
                    className="p-2.5 rounded-full bg-background/80 backdrop-blur-md border border-text-secondary/20 hover:border-text-primary text-text-primary hover:bg-background transition-all duration-300 shadow-lg hover:scale-110 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {projects.map((item, idx) => {
                  const isActive = idx === currentIndex
                  return (
                    <button
                      key={item.id}
                      onClick={() => goToSlide(idx)}
                      className={`p-3 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col gap-1 ${
                        isActive
                          ? "bg-text-primary text-background border-text-primary shadow-md scale-[1.02]"
                          : "bg-background border-text-secondary/20 text-text-secondary hover:border-text-primary/50 hover:text-text-primary"
                      }`}
                    >
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isActive ? "text-background/80" : "text-text-secondary"}`}>
                        {item.number} • {item.createdAt}
                      </span>
                      <span className="text-xs font-bold truncate">
                        {item.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-5 flex flex-col h-full">
            <FadeUp delay={0.2}>
              <div className="h-full bg-background border border-text-secondary/20 hover:border-text-primary/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-text-secondary/10">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-text-secondary flex items-center gap-1.5">
                          <svg className={`w-3.5 h-3.5 ${currentProject.badgeColor}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {currentProject.badge}
                        </span>
                        <span className="text-xs font-mono font-bold bg-thirdary text-text-primary px-3 py-1 rounded-full border border-text-secondary/10">
                          {currentProject.createdAt}
                        </span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight leading-snug mb-2">
                        {currentProject.title}
                      </h4>

                      <span className="text-xs font-mono font-bold text-text-secondary/80 block mb-4">
                        {currentProject.liveDomain}
                      </span>

                      <p className="text-sm text-text-secondary font-medium leading-relaxed mb-6">
                        {currentProject.fullDescription}
                      </p>

                      <div className="mb-6">
                        <span className="text-[11px] font-bold tracking-widest text-text-secondary uppercase block mb-3">Fitur Utama</span>
                        <ul className="space-y-2.5">
                          {currentProject.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-text-primary">
                              <span className="text-blue-500 font-black mt-0.5">&rarr;</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <span className="text-[11px] font-bold tracking-widest text-text-secondary uppercase block mb-2">Technologies</span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentProject.tech.map((skill, i) => (
                            <span key={i} className="text-[10px] font-bold bg-thirdary text-text-primary px-2.5 py-1 rounded-md border border-text-secondary/10 uppercase tracking-wider">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-text-secondary/10 flex flex-wrap gap-3">
                      <a 
                        href={currentProject.liveDemoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 min-w-[150px] text-center font-bold text-xs sm:text-sm tracking-widest uppercase bg-text-primary text-background py-3.5 px-4 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>{currentProject.liveDemoUrl.includes("github.com") ? "View on GitHub" : "Open Live Demo"}</span>
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>

                      <button 
                        onClick={() => setSelectedProject(currentProject)}
                        className="px-4 py-3.5 border border-text-secondary/20 hover:border-text-primary text-text-primary rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-text-secondary/10 cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Details</span>
                      </button>

                      {currentProject.apkUrl && (
                        <a 
                          href={currentProject.apkUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-4 py-3.5 border border-text-secondary/20 hover:border-text-primary text-text-primary bg-thirdary/60 hover:bg-thirdary rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                          title="Download APK"
                        >
                          <span>APK</span>
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      )}

                      <button 
                        type="button"
                        aria-disabled="true"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={(e) => e.preventDefault()}
                        className="px-4 py-3.5 border border-text-secondary/20 text-text-primary/50 rounded-xl font-bold text-xs uppercase tracking-wider cursor-not-allowed select-none outline-none opacity-60"
                        title="Private Source Code"
                      >
                        <span>Source</span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeUp>
          </div>
        </div>

        <FadeUp>
          <div className="mt-14 flex justify-center w-full px-6">
            <button 
              type="button"
              aria-disabled="true"
              onMouseDown={(e) => e.preventDefault()}
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-3 px-8 py-4 bg-background border border-text-secondary/20 text-text-primary hover:border-text-primary hover:bg-text-secondary/10 hover:-translate-y-0.5 rounded-xl font-bold tracking-widest text-sm uppercase transition-all duration-300 ease-out cursor-not-allowed select-none outline-none focus:outline-none shadow-sm"
            >
              <span className="select-none pointer-events-none">View My Project</span>
              <svg className="w-5 h-5 pointer-events-none select-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </FadeUp>

        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.3 }} 
                className="absolute inset-0 bg-background/90 backdrop-blur-md" 
                onClick={() => setSelectedProject(null)} 
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.95, y: 20 }} 
                transition={{ type: "spring", damping: 25, stiffness: 300 }} 
                className="bg-background border border-text-secondary/20 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative z-10"
              >
                <div className="flex justify-between items-center p-5 md:p-6 border-b border-text-secondary/10">
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-text-primary tracking-tight">{selectedProject.title}</h4>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">{selectedProject.liveDomain} • {selectedProject.createdAt}</span>
                  </div>
                  <button 
                    suppressHydrationWarning 
                    className="text-text-secondary hover:text-text-primary transition-colors p-2 bg-text-secondary/5 rounded-full cursor-pointer" 
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                <div className="p-5 md:p-8 overflow-y-auto grow custom-scrollbar">
                  <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-text-secondary/15 mb-6 bg-text-secondary/5 shadow-lg">
                    <Image src={selectedProject.imagePath} alt={selectedProject.title} fill className="object-cover object-top" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pb-6 border-b border-text-secondary/10">
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Year & Status</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10">{selectedProject.createdAt}</span>
                        <span className="text-xs font-bold bg-green-500/10 text-green-500 px-3 py-1.5 rounded-lg border border-green-500/20">Live Active</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
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
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-3">Fitur Utama</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center bg-thirdary/50 p-3 rounded-xl border border-text-secondary/5">
                          <span className="text-blue-500 mr-2.5 font-black">&rarr;</span>
                          <span className="text-xs md:text-sm font-bold text-text-primary uppercase tracking-wide">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 md:p-6 border-t border-text-secondary/10 flex flex-col sm:flex-row flex-wrap gap-3 bg-background relative z-30">
                  <a 
                    href={selectedProject.liveDemoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 min-w-[160px] text-center font-bold text-sm tracking-widest uppercase bg-text-primary text-background py-3.5 px-4 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{selectedProject.liveDemoUrl.includes("github.com") ? "View on GitHub" : "Open Live Demo"}</span>
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <button 
                    type="button"
                    aria-disabled="true"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => e.preventDefault()}
                    className="flex-1 min-w-[160px] flex justify-center items-center gap-2 text-center font-bold text-sm tracking-widest uppercase border border-text-secondary/20 text-text-primary hover:border-text-primary hover:bg-text-secondary/10 hover:-translate-y-0.5 transition-all duration-300 py-3.5 px-4 rounded-xl cursor-not-allowed select-none outline-none focus:outline-none"
                  >
                    <span className="select-none pointer-events-none">Source Code</span>
                    <svg className="w-4 h-4 pointer-events-none select-none shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </button>

                  {selectedProject.apkUrl && (
                    <a 
                      href={selectedProject.apkUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 min-w-[160px] flex justify-center items-center gap-2 text-center font-bold text-sm tracking-widest uppercase border border-text-secondary/20 hover:border-text-primary bg-thirdary/60 hover:bg-thirdary text-text-primary hover:-translate-y-0.5 transition-all duration-300 py-3.5 px-4 rounded-xl cursor-pointer shadow-sm group"
                    >
                      <span>Download APK</span>
                      <svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

interface ProjectItem {
  id: string
  number: string
  title: string
  badge: string
  badgeColor: string
  shortDescription: string
  fullDescription: string
  createdAt: string
  liveDomain: string
  imagePath: string
  features: string[]
  tech: string[]
  githubUrl?: string
  liveDemoUrl: string
  apkUrl?: string
}

const projects: ProjectItem[] = [
  {
    id: "bank-customer-ml",
    number: "01",
    title: "Bank Customer Segmentation & Machine Learning Pipeline",
    badge: "GITHUB REPOSITORY • MACHINE LEARNING PIPELINE",
    badgeColor: "text-blue-500",
    shortDescription: "Pipeline Machine Learning end-to-end untuk segmentasi nasabah bank (K-Means & PCA) dan prediksi cluster klasifikasi (Random Forest & Decision Tree) dengan akurasi 100%.",
    fullDescription: "Proyek Machine Learning end-to-end yang mengintegrasikan analisis segmentasi nasabah perbankan (Unsupervised Learning) dan pemodelan klasifikasi prediktif (Supervised Learning). Menjalankan pipeline komprehensif mulai dari Exploratory Data Analysis (EDA), pembersihan data & outlier handling (IQR), feature scaling (StandardScaler), penentuan cluster optimal (Elbow Method & Silhouette Score), reduksi dimensi 2D dengan PCA, hingga evaluasi model klasifikasi (Decision Tree vs Random Forest) yang dioptimasi dengan 5-Fold Cross Validation GridSearchCV, menghasilkan akurasi 100% pada data uji.",
    createdAt: "2026",
    liveDomain: "github.com/Firdaus1802/DICODING-MACHINE-LEARNING",
    imagePath: "/images/project-machine-learning.png",
    features: [
      "Segmentasi Nasabah (K-Means Clustering & KElbowVisualizer)",
      "Reduksi Dimensi 2D dengan Principal Component Analysis (PCA)",
      "Pembersihan Data, IQR Outlier Handling & StandardScaler",
      "Model Klasifikasi Decision Tree & Random Forest",
      "Hyperparameter Tuning dengan GridSearchCV (5-Fold CV)",
      "Evaluasi Metrik Akurasi 100%, Precision, Recall & F1-Score",
    ],
    tech: ["Python", "Scikit-Learn", "K-Means", "Random Forest", "PCA", "GridSearchCV", "Pandas", "NumPy"],
    githubUrl: "https://github.com/Firdaus1802/DICODING-MACHINE-LEARNING",
    liveDemoUrl: "https://github.com/Firdaus1802/DICODING-MACHINE-LEARNING",
  },
  {
    id: "apriorimart",
    number: "02",
    title: "AprioriMart",
    badge: "VERCEL DEPLOYMENT • FLUTTER MOBILE & WEB",
    badgeColor: "text-blue-500",
    shortDescription: "Aplikasi Market Basket Analysis berbasis mobile dan web dengan Algoritma Apriori, simulasi kasir real-time, pengujian data latih/uji, dan proteksi Google R8.",
    fullDescription: "AprioriMart adalah aplikasi Market Basket Analysis & Recommendation System berbasis mobile dan web yang menerapkan Algoritma Apriori untuk menemukan pola asosiasi pembelian konsumen (association rules) pada dataset transaksi retail (Groceries Dataset). Aplikasi ini dilengkapi dengan simulasi kasir interaktif untuk mendemonstrasikan strategi cross-selling dan product bundling secara real-time, partisi dataset dinamis (100%, 80:20, 70:30, 60:40), analisis aturan asosiasi otomatis (Support, Confidence, Lift Ratio) secara client-side, manajemen dataset CSV/JSON, serta proteksi keamanan Google R8 ProGuard (0/68 Clean Bebas Malware di VirusTotal).",
    createdAt: "2026",
    liveDomain: "data-mining-universitas-gunadarma.vercel.app",
    imagePath: "/images/project-data-mining.png",
    features: [
      "Analisis Aturan Asosiasi (Algoritma Apriori)",
      "Kalkulasi Client-Side Support, Confidence & Lift",
      "Simulasi Kasir & Rekomendasi Cross-Selling Real-Time",
      "Pengujian Partisi Data Latih & Uji (100%, 80:20, 70:30, 60:40)",
      "Manajemen Dataset Fleksibel (Import CSV/JSON & Manual)",
      "Proteksi Google R8 Obfuscation (0/68 Clean VirusTotal)",
    ],
    tech: ["Flutter", "Dart", "Google R8", "Algoritma Apriori", "Vercel", "GitHub"],
    githubUrl: "",
    liveDemoUrl: "https://data-mining-universitas-gunadarma.vercel.app",
    apkUrl: "https://github.com/Firdaus1802/data-mining-universitas-gunadarma/releases/download/v1.0.0/AprioriMart-v1.0.0.apk",
  },
  {
    id: "finzie",
    number: "03",
    title: "Finzie Joki Service",
    badge: "VERCEL DEPLOYMENT • WEB APP",
    badgeColor: "text-blue-500",
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
    githubUrl: "",
    liveDemoUrl: "https://finziejokiservice.vercel.app/",
  },
]
