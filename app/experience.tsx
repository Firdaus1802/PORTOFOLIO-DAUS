"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"
import GlareHover from "@/components/GlareHover"

export default function Experience() {
  const [isOpen, setIsOpen] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("All")

  useEffect(() => {
    if (isOpen !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const categories = ["All", "Web & Code", "Cloud & AI", "Professional & Office"]

  const filteredCerts = certificateList.filter((cert) => {
    if (filter === "All") return true
    return cert.category === filter
  })

  const activeCert = certificateList.find((c) => c.index === isOpen)

  return (
    <>
      <section id="certifications" className="w-full max-w-7xl mx-auto py-24 md:py-32 bg-background relative border-t border-text-secondary/10 scroll-mt-28 md:scroll-mt-36">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Credentials & Achievements</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Certifications & Licenses</h3>
              
              <div className="relative p-1.5 bg-[#161618] dark:bg-[#161618] rounded-full border border-white/10 backdrop-blur-xl inline-flex flex-wrap items-center gap-1 shadow-inner">
                {categories.map((cat) => {
                  const isSelected = filter === cat
                  return (
                    <button
                      key={cat}
                      suppressHydrationWarning
                      onClick={() => setFilter(cat)}
                      className="relative px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer select-none outline-none focus:outline-none"
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeFilterPill"
                          className="absolute inset-0 bg-white dark:bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.25)] z-0"
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 35,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 transition-colors duration-200 ${
                          isSelected
                            ? "text-black dark:text-black font-extrabold"
                            : "text-[#8e8e93] hover:text-white font-medium"
                        }`}
                      >
                        {cat}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </FadeDown>

        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCerts.map((cert) => (
              <div
                key={`cert-${cert.index}`}
                className="w-full h-full"
              >
                <GlareHover className="group flex flex-col h-full bg-background/80 dark:bg-[#121216]/80 backdrop-blur-2xl border border-text-secondary/15 dark:border-white/10 hover:border-text-primary/40 rounded-[28px] overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="relative aspect-16/11 bg-text-secondary/5 dark:bg-white/[0.02] border-b border-text-secondary/10 p-3.5 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner border border-text-secondary/10 bg-white dark:bg-zinc-950 flex items-center justify-center">
                      <Image 
                        src={cert.imagePath} 
                        alt={cert.title} 
                        fill 
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]" 
                      />
                    </div>
                    
                    <div className="absolute top-5 right-5 bg-background/90 backdrop-blur-md border border-text-secondary/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-text-secondary shadow-sm">
                      {String(cert.index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-6 md:p-7 flex flex-col grow relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold tracking-wide uppercase text-text-secondary flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {cert.issuer}
                      </span>
                      <span className="text-[11px] font-mono font-medium text-text-secondary/80 bg-text-secondary/10 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-text-secondary/10">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="text-lg md:text-xl font-bold text-text-primary tracking-tight leading-snug mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-text-primary group-hover:to-text-secondary transition-all duration-300 line-clamp-2">
                      {cert.title}
                    </h4>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] font-medium bg-text-secondary/10 dark:bg-white/[0.06] text-text-primary px-3 py-1 rounded-full border border-text-secondary/10 dark:border-white/5 tracking-wide">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-text-secondary/10">
                      <button 
                        suppressHydrationWarning 
                        className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-text-primary hover:text-blue-500 transition-colors cursor-pointer group/btn" 
                        onClick={() => setIsOpen(cert.index)}
                      >
                        <span>View Certificate</span>
                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {cert.credentialUrl && (
                        <a 
                          href={cert.credentialUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-8 h-8 rounded-full border border-text-secondary/20 hover:border-text-primary flex items-center justify-center text-text-secondary hover:text-background hover:bg-text-primary transition-all duration-200"
                          title="Open Credential Link"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </GlareHover>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {isOpen !== null && activeCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.3 }} 
                className="absolute inset-0 bg-background/90 backdrop-blur-md" 
                onClick={() => setIsOpen(null)} 
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.95, y: 20 }} 
                transition={{ type: "spring", damping: 25, stiffness: 300 }} 
                className="bg-background/95 dark:bg-[#121216]/95 backdrop-blur-2xl border border-text-secondary/20 dark:border-white/10 rounded-[32px] w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative z-10"
              >
                <div className="flex justify-between items-center p-5 md:p-6 border-b border-text-secondary/10">
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-text-primary tracking-tight">{activeCert.title}</h4>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">{activeCert.issuer} • {activeCert.date}</span>
                  </div>
                  <button 
                    suppressHydrationWarning 
                    className="w-8 h-8 rounded-full bg-text-secondary/10 hover:bg-text-secondary/20 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer" 
                    onClick={() => setIsOpen(null)}
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                <div className="p-5 md:p-8 overflow-y-auto grow custom-scrollbar">
                  <div className="relative aspect-16/11 w-full rounded-2xl overflow-hidden border border-text-secondary/15 mb-6 bg-white dark:bg-zinc-950 flex items-center justify-center shadow-lg">
                    <Image src={activeCert.imagePath} alt={activeCert.title} fill className="object-contain p-2" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pb-6 border-b border-text-secondary/10">
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Issued By & Date</span>
                      <span className="text-xs font-semibold bg-text-secondary/10 text-text-primary px-3 py-1.5 rounded-full border border-text-secondary/10">
                        {activeCert.issuer} ({activeCert.date})
                      </span>
                      {activeCert.credentialId && (
                        <div className="mt-3">
                          <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-1">ID Kredensial</span>
                          <span className="text-xs font-mono font-bold text-text-primary bg-text-secondary/10 px-3 py-1 rounded-full border border-text-secondary/10">
                            {activeCert.credentialId}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Skills & Competencies</span>
                      <div className="flex flex-wrap gap-2">
                        {activeCert.skills.map((skill, i) => (
                          <span key={i} className="text-xs font-medium bg-text-secondary/10 dark:bg-white/[0.06] text-text-primary px-3 py-1 rounded-full border border-text-secondary/10 dark:border-white/5 uppercase tracking-wider">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Deskripsi Kompetensi</span>
                    <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed">
                      {activeCert.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 md:p-6 border-t border-text-secondary/10 flex gap-4 bg-background relative z-30">
                  {activeCert.credentialUrl ? (
                    <a 
                      href={activeCert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ cursor: "pointer" }}
                      className="flex-1 text-center font-bold text-sm tracking-widest uppercase bg-text-primary text-background py-3.5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer pointer-events-auto"
                    >
                      Verify Live Credential
                    </a>
                  ) : (
                    <div className="flex-1 text-center font-bold text-xs tracking-wider uppercase text-text-secondary py-3.5 bg-text-secondary/10 rounded-2xl border border-text-secondary/10">
                      ID Terverifikasi: {activeCert.credentialId}
                    </div>
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

const certificateList = [
  {
    index: 0,
    category: "Cloud & AI",
    issuer: "Dicoding Indonesia",
    title: "Belajar Machine Learning untuk Pemula",
    date: "Okt 2026",
    credentialId: "5076404",
    imagePath: "/images/certificates/cert-dicoding-machine-learning.jpg",
    shortDescription: "Sertifikasi kompetensi dasar Machine Learning, supervised & unsupervised learning, dan evaluasi performa model.",
    description: "Mempelajari konsep dasar machine learning, algoritma klasifikasi (Decision Tree, Random Forest) dan clustering (K-Means, PCA), data preprocessing, feature engineering, serta hyperparameter tuning menggunakan Scikit-Learn dan Python.",
    skills: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Scikit-Learn", "Python"],
    credentialUrl: "https://www.dicoding.com/academies/184/certificates/5076404",
  },
  {
    index: 1,
    category: "Cloud & AI",
    issuer: "Dicoding Indonesia",
    title: "Spec-Driven Development dengan Kiro",
    date: "Okt 2026",
    credentialId: "ERZR7YK3NZYV",
    imagePath: "/images/certificates/cert-dicoding-kiro.jpg",
    shortDescription: "Sertifikasi alur kerja pengembangan software berbasis spesifikasi (Spec-Driven Development) menggunakan Kiro Agentic IDE.",
    description: "Menerapkan paradigma Spec-Driven Development (SDD) untuk alur kerja AI-assisted development profesional, perancangan dokumen spesifikasi terstruktur, prompt engineering untuk SDD, serta implementasi fitur aplikasi web dari nol menggunakan Kiro Agentic IDE.",
    skills: ["Spec-Driven Development", "Kiro IDE", "Agentic AI", "Prompt Engineering", "Software Engineering"],
    credentialUrl: "https://www.dicoding.com/certificates/ERZR7YK3NZYV",
  },
  {
    index: 2,
    category: "Web & Code",
    issuer: "Cisco Networking Academy",
    title: "Introduction to Cybersecurity",
    date: "Feb 2026",
    imagePath: "/images/certificates/cert-cisco-cybersecurity.jpg",
    shortDescription: "Verified certification in Cybersecurity fundamentals, covering network defense, threat detection, and digital security.",
    description: "Earned a verified certification from Cisco in Cybersecurity. Strengthened core understanding of network security, threat detection, digital defense strategies, and fundamental principles of cybersecurity.",
    skills: ["Cybersecurity", "Network Security", "Threat Detection", "IT Security"],
    credentialUrl: "https://www.linkedin.com/posts/firdaus-dhuha-prabowo-091949386_introduction-to-cybersecurity-was-issued-activity-7428472074052124672-ghec",
  },
  {
    index: 3,
    category: "Web & Code",
    issuer: "Dicoding Indonesia",
    title: "Belajar Dasar Pemrograman JavaScript",
    date: "2024",
    credentialId: "07Z6JO4DJXQR",
    imagePath: "/images/certificates/cert-dicoding-js.jpg",
    shortDescription: "Sertifikasi kompetensi fundamental JavaScript, sintaks ES6+, modularisasi kode, dan automation testing.",
    description: "Mempelajari dasar-dasar JavaScript, dari fundamental sintaks, konsep pemrograman berbasis objek (OOP), fungsional programming, penanganan asynchronous (Promise & Async/Await), hingga automation testing.",
    skills: ["JavaScript (ES6+)", "OOP", "Async/Await", "Automation Testing"],
    credentialUrl: "https://www.dicoding.com/certificates/07Z6JO4DJXQR",
  },
  {
    index: 4,
    category: "Web & Code",
    issuer: "Dicoding Indonesia",
    title: "Belajar Back-End Pemula dengan JavaScript",
    date: "2024",
    credentialId: "53XEK21YVXRN",
    imagePath: "/images/certificates/cert-dicoding-backend.jpg",
    shortDescription: "Sertifikasi pembangunan RESTful API menggunakan Node.js, HTTP server, dan routing.",
    description: "Mempelajari dasar-dasar arsitektur backend, membangun RESTful API dari nol menggunakan Node.js, pengelolaan routing, database persistence, serta pengujian server API.",
    skills: ["Node.js", "RESTful API", "HTTP Server", "Back-End"],
    credentialUrl: "https://www.dicoding.com/certificates/53XEK21YVXRN",
  },
  {
    index: 5,
    category: "Web & Code",
    issuer: "Dicoding Indonesia",
    title: "Memulai Pemrograman dengan Python",
    date: "2024",
    credentialId: "MRZM621JKPYQ",
    imagePath: "/images/certificates/cert-dicoding-python.jpg",
    shortDescription: "Sertifikasi pemrograman Python dasar hingga pengenalan library populer.",
    description: "Mempelajari sintaks dasar Python, tipe data, struktur data (list, tuple, dictionary, set), kontrol alur, fungsi, serta manipulasi data.",
    skills: ["Python", "Data Structures", "Control Flow", "Programming"],
    credentialUrl: "https://www.dicoding.com/certificates/MRZM621JKPYQ",
  },
  {
    index: 6,
    category: "Cloud & AI",
    issuer: "Dicoding & Microsoft",
    title: "Membangun Aplikasi Gen AI dengan Azure",
    date: "2024",
    credentialId: "GRX5J7YRKX0M",
    imagePath: "/images/certificates/cert-dicoding-azure-genai.jpg",
    shortDescription: "Membangun aplikasi chat interaktif berbasis Language Model & Generative AI di Microsoft Azure.",
    description: "Menguasai fitur utama Azure AI Foundry, pengembangan Prompt Flow, dan arsitektur Retrieval-Augmented Generation (RAG) untuk membangun solusi AI modern.",
    skills: ["Generative AI", "Microsoft Azure", "Prompt Flow", "RAG", "LLM"],
    credentialUrl: "https://www.dicoding.com/certificates/GRX5J7YRKX0M",
  },
  {
    index: 7,
    category: "Cloud & AI",
    issuer: "Dicoding & AWS",
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    date: "2024",
    credentialId: "MRZM6R97RPYQ",
    imagePath: "/images/certificates/cert-dicoding-aws-genai.jpg",
    shortDescription: "Sertifikasi konsep cloud computing AWS dan penerapan model Generative AI di cloud.",
    description: "Mempelajari prinsip dasar komputasi awan, infrastruktur AWS, manajemen resource, dan pemanfaatan generative AI menggunakan layanan AWS.",
    skills: ["AWS Cloud", "Cloud Computing", "Generative AI", "AWS Bedrock"],
    credentialUrl: "https://www.dicoding.com/certificates/MRZM6R97RPYQ",
  },
  {
    index: 8,
    category: "Cloud & AI",
    issuer: "Dicoding & Microsoft",
    title: "Penerapan Data Science Microsoft Fabric",
    date: "2024",
    credentialId: "JLX15O22NZ72",
    imagePath: "/images/certificates/cert-dicoding-data-science.jpg",
    shortDescription: "Sertifikasi alur end-to-end data science dan Machine Learning di Microsoft Fabric.",
    description: "Mempelajari eksplorasi data, pembuatan model Machine Learning, validasi metrik, serta proses deployment dan monitoring model pada Microsoft Fabric.",
    skills: ["Data Science", "Microsoft Fabric", "Machine Learning", "Model Deployment"],
    credentialUrl: "https://www.dicoding.com/certificates/JLX15O22NZ72",
  },
  {
    index: 9,
    category: "Professional & Office",
    issuer: "BNSP Indonesia",
    title: "Junior Office Operator",
    date: "2024",
    credentialId: "10458184",
    imagePath: "/images/certificates/cert-bnsp-office.jpg",
    shortDescription: "Sertifikasi Standar Kompetensi Kerja Nasional Indonesia (BNSP) untuk aplikasi perkantoran.",
    description: "Sertifikasi resmi Badan Nasional Sertifikasi Profesi (BNSP) yang memvalidasi kompetensi profesional dalam penggunaan Microsoft Office, pengelolaan data dan dokumen, serta operasional perkantoran.",
    skills: ["Microsoft Office", "Administrasi Dokumen", "Manajemen Data", "BNSP"],
  },
  {
    index: 10,
    category: "Professional & Office",
    issuer: "Universitas Raharja",
    title: "Uji Kompetensi Ms. Office",
    date: "Feb 2024",
    credentialId: "450/ UKOM / RHJ / II / 2024",
    imagePath: "/images/certificates/cert-raharja-office.jpg",
    shortDescription: "Uji kompetensi terverifikasi penguasaan Microsoft Office dan analisis data spreadsheet.",
    description: "Uji kompetensi resmi penguasaan piranti lunak Microsoft Office (Excel, Word, PowerPoint) untuk kebutuhan analisis data, pengolahan spreadsheet, dan presentasi bisnis.",
    skills: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Spreadsheet"],
  },
  {
    index: 11,
    category: "Professional & Office",
    issuer: "Dicoding & DBS Foundation",
    title: "Introduction to Financial Literacy",
    date: "2024",
    credentialId: "JMZVVKDD3ZN9",
    imagePath: "/images/certificates/cert-dicoding-finance.jpg",
    shortDescription: "Sertifikasi literasi finansial Coding Camp Powered by DBS Foundation.",
    description: "Mempelajari perencanaan finansial, manajemen anggaran, mitigasi risiko keuangan, dan literasi digital dalam program Coding Camp DBS Foundation.",
    skills: ["Financial Planning", "Budgeting", "Risk Management"],
    credentialUrl: "https://www.dicoding.com/certificates/JMZVVKDD3ZN9",
  },
]
