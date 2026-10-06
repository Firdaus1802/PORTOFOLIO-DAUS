"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import GlareHover from "@/components/GlareHover"

export default function Experience() {
  const [isOpen, setIsOpen] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("All")

  // Prevent scrolling when modal is open
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
      <section id="certifications" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Credentials & Achievements</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Certifications & Licenses</h3>
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    suppressHydrationWarning
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      filter === cat
                        ? "bg-text-primary text-background shadow-md"
                        : "bg-thirdary text-text-secondary hover:text-text-primary hover:bg-text-secondary/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeDown>

        {/* Responsive Grid View */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => (
            <FadeUp key={`cert-${cert.index}`}>
              <GlareHover className="group flex flex-col h-full bg-background border border-text-secondary/20 hover:border-text-primary/50 rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl">
                {/* Certificate Clean Frame Preview */}
                <div className="relative aspect-16/11 bg-text-secondary/5 border-b border-text-secondary/10 p-3 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm border border-text-secondary/15 bg-white dark:bg-zinc-950">
                    <Image 
                      src={cert.imagePath} 
                      alt={cert.title} 
                      fill 
                      className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.03]" 
                    />
                  </div>
                  
                  {/* Numbering Badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md border border-text-secondary/20 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest text-text-secondary shadow-sm">
                    {String(cert.index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col grow relative">
                  {/* Issuer & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-text-secondary flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-bold text-text-secondary/80">{cert.date}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg md:text-xl font-bold text-text-primary tracking-tight leading-snug mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-text-primary group-hover:to-text-secondary transition-all duration-300">
                    {cert.title}
                  </h4>

                  {/* Skills / Topics */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] font-bold bg-thirdary text-text-primary px-2.5 py-1 rounded-md border border-text-secondary/10 uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-text-secondary/10">
                    <button 
                      suppressHydrationWarning 
                      className="text-xs font-bold tracking-[0.15em] uppercase text-text-primary flex items-center gap-2 group/btn" 
                      onClick={() => setIsOpen(cert.index)}
                    >
                      View Certificate
                      <span className="w-6 h-0.5 bg-text-primary group-hover/btn:w-10 transition-all duration-300"></span>
                    </button>

                    {cert.credentialUrl && (
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 border border-text-secondary/20 rounded-full text-text-secondary hover:text-background hover:bg-text-primary hover:border-text-primary transition-all duration-300"
                        title="Open Credential Link"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </GlareHover>
            </FadeUp>
          ))}
        </div>

        {/* Modal View */}
        <AnimatePresence>
          {isOpen !== null && activeCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.3 }} 
                className="absolute inset-0 bg-background/90 backdrop-blur-md" 
                onClick={() => setIsOpen(null)} 
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
                    <h4 className="text-xl md:text-2xl font-black text-text-primary tracking-tight">{activeCert.title}</h4>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">{activeCert.issuer} • {activeCert.date}</span>
                  </div>
                  <button 
                    suppressHydrationWarning 
                    className="text-text-secondary hover:text-text-primary transition-colors p-2 bg-text-secondary/5 rounded-full" 
                    onClick={() => setIsOpen(null)}
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-5 md:p-8 overflow-y-auto grow custom-scrollbar">
                  {/* Certificate Image Banner */}
                  <div className="relative aspect-16/11 w-full rounded-2xl overflow-hidden border border-text-secondary/15 mb-6 bg-white dark:bg-zinc-950 flex items-center justify-center shadow-lg">
                    <Image src={activeCert.imagePath} alt={activeCert.title} fill className="object-contain p-2" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pb-6 border-b border-text-secondary/10">
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Issued By & Date</span>
                      <span className="text-sm font-bold bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10">
                        {activeCert.issuer} ({activeCert.date})
                      </span>
                      {activeCert.credentialId && (
                        <div className="mt-3">
                          <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-1">ID Kredensial</span>
                          <span className="text-xs font-mono font-bold text-text-primary bg-text-secondary/10 px-2.5 py-1 rounded">
                            {activeCert.credentialId}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Skills & Competencies</span>
                      <div className="flex flex-wrap gap-2">
                        {activeCert.skills.map((skill, i) => (
                          <span key={i} className="text-xs font-bold bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider">
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

                {/* Modal Footer */}
                <div className="p-5 md:p-6 border-t border-text-secondary/10 flex gap-4 bg-background relative z-30">
                  {activeCert.credentialUrl ? (
                    <a 
                      href={activeCert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ cursor: "pointer" }}
                      className="flex-1 text-center font-bold text-sm tracking-widest uppercase bg-text-primary text-background py-3.5 rounded-xl hover:-translate-y-0.5 transition-transform duration-300 cursor-pointer pointer-events-auto"
                    >
                      Verify Live Credential
                    </a>
                  ) : (
                    <div className="flex-1 text-center font-bold text-xs tracking-wider uppercase text-text-secondary py-3 bg-thirdary rounded-xl border border-text-secondary/10">
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
    index: 1,
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
    index: 2,
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
    index: 3,
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
    index: 4,
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
    index: 5,
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
    index: 6,
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
    index: 7,
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
    index: 8,
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
    index: 9,
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
