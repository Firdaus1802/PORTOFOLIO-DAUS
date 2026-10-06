"use client"
import Link from "next/link"
import Image from "next/image"

export default function CVPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 py-6 sm:py-10 px-2 sm:px-4 print:p-0 print:bg-white text-zinc-800 font-sans antialiased">
      
      {/* Top Floating Action Bar (Hidden when Printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between gap-4 print:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
        <Link 
          href="/"
          className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors group cursor-pointer"
        >
          <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span>Kembali ke Archive</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            style={{ cursor: "pointer" }}
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-black dark:hover:bg-zinc-100 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Download / Cetak PDF (A4)
          </button>
        </div>
      </div>

      {/* Main CV Sheet (Executive 2-Column Balanced Architecture) */}
      <main 
        className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none border border-zinc-200 print:border-0 rounded-2xl print:rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 text-zinc-800 print:min-h-[297mm]"
        style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      >
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: Seamless Premium Slate Sidebar (col-span-4 / 34%) */}
        {/* ======================================================== */}
        <div 
          className="md:col-span-4 print:col-span-4 bg-[#181B22] text-white p-6 sm:p-7 flex flex-col justify-between space-y-6 print:bg-[#181B22] print:text-white print:p-6"
          style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
        >
          
          <div className="space-y-6">
            
            {/* Header: Photo, Name & Title */}
            <div className="flex flex-col items-center text-center pt-1">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white/90 overflow-hidden shadow-2xl bg-zinc-900 mb-4 ring-4 ring-white/10">
                <Image 
                  src="/images/profile-firdaus.png" 
                  alt="Firdaus Dhuha Prabowo" 
                  fill 
                  className="object-contain p-1" 
                  priority
                  unoptimized
                />
              </div>

              <h1 className="text-base sm:text-lg font-black uppercase tracking-wider text-white leading-snug">
                Firdaus Dhuha Prabowo
              </h1>
              
              <div className="mt-1.5 inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[9.5px] font-bold tracking-[0.18em] uppercase text-zinc-300">
                Junior Frontend Developer
              </div>
            </div>

            {/* Section: CONTACT ME */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3 pb-1.5 border-b border-white/15">
                <div className="w-5 h-5 rounded-full bg-white text-[#181B22] flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                  Contact Me
                </h2>
              </div>

              <div className="space-y-2.5 text-[10px] text-zinc-300 font-medium">
                {/* Phone / WA */}
                <a 
                  href="https://wa.me/6281315354397" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ cursor: "pointer" }} 
                  className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group"
                >
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+62 813-1535-4397</span>
                </a>

                {/* Email */}
                <a 
                  href="mailto:Firdausdhuhaprabowo@gmail.com" 
                  style={{ cursor: "pointer" }} 
                  className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group"
                >
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">Firdausdhuhaprabowo@gmail.com</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <svg className="w-3.5 h-3.5 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Tangerang, Banten, Indonesia</span>
                </div>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/firdaus-dhuha-prabowo-091949386/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ cursor: "pointer" }} 
                  className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group"
                >
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-2.239-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="truncate">in/firdaus-dhuha-prabowo</span>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/Firdaus1802" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ cursor: "pointer" }} 
                  className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group font-mono text-[9.5px]"
                >
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="truncate">github.com/Firdaus1802</span>
                </a>
              </div>
            </div>

            {/* Section: EDUCATION */}
            <div>
              <div className="flex items-center gap-2 mb-3 pb-1.5 border-b border-white/15">
                <div className="w-5 h-5 rounded-full bg-white text-[#181B22] flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                  Education
                </h2>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/10 space-y-1">
                <h3 className="font-bold text-white text-[11px] uppercase tracking-wide leading-snug">
                  Universitas Gunadarma
                </h3>
                <p className="text-zinc-300 text-[10px]">S1 - Sistem Informasi</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    IPK: 3.88 / 4.00
                  </span>
                  <span className="text-[9px] text-zinc-400 font-mono">2024 - Sekarang</span>
                </div>
              </div>
            </div>

            {/* Section: LANGUAGES */}
            <div>
              <div className="flex items-center gap-2 mb-2.5 pb-1.5 border-b border-white/15">
                <div className="w-5 h-5 rounded-full bg-white text-[#181B22] flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                  Languages
                </h2>
              </div>

              <ul className="text-[10px] text-zinc-300 space-y-1.5 font-medium">
                <li className="flex items-center justify-between">
                  <span>Indonesian</span>
                  <span className="text-zinc-400 text-[9px]">Native</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>English</span>
                  <span className="text-zinc-400 text-[9px]">Working Proficiency</span>
                </li>
              </ul>
            </div>

            {/* Section: KEY FOCUS */}
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/15">
                <div className="w-5 h-5 rounded-full bg-white text-[#181B22] flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                  Key Focus
                </h2>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="text-[9px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded-md border border-white/10">Frontend Dev</span>
                <span className="text-[9px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded-md border border-white/10">Next.js & React</span>
                <span className="text-[9px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded-md border border-white/10">Supabase BaaS</span>
                <span className="text-[9px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded-md border border-white/10">Cloud & AI</span>
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: Executive Crisp White Canvas (col-span-8 / 66%) */}
        {/* ======================================================== */}
        <div className="md:col-span-8 print:col-span-8 bg-white text-zinc-800 p-6 sm:p-8 flex flex-col justify-between space-y-4 print:p-6 print:bg-white">
          
          {/* 1. ABOUT ME */}
          <section>
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b-2 border-zinc-900">
              <div className="w-5 h-5 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900">
                About Me
              </h2>
            </div>
            <p className="text-[10.5px] text-zinc-600 leading-relaxed text-justify">
              Mahasiswa aktif Universitas Gunadarma dengan Indeks Prestasi Kumulatif (IPK) <strong>3.88</strong> yang berfokus mendalam pada ekosistem <strong>Frontend Web Development</strong> dan arsitektur web modern. Berpengalaman membangun antarmuka web yang bersih, responsif, dan interaktif menggunakan <strong>JavaScript (ES6+)</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, dan <strong>Tailwind CSS</strong>. Memiliki pemahaman database & backend BaaS (<strong>Supabase</strong>, Node.js RESTful API, Python), komputasi awan (AWS & Azure AI), serta memegang berbagai sertifikasi kompetensi resmi dari Cisco, BNSP, dan Dicoding Indonesia.
            </p>
          </section>

          {/* 2. JOB EXPERIENCE & PROJECTS */}
          <section>
            <div className="flex items-center gap-2 mb-2.5 pb-1.5 border-b-2 border-zinc-900">
              <div className="w-5 h-5 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900">
                Job Experience & Projects
              </h2>
            </div>

            <div className="space-y-3">
              {/* Project 1: Finzie Joki Service */}
              <div className="border-l-2 border-zinc-900 pl-3 relative">
                <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-zinc-900"></div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[11px] font-black text-zinc-900 uppercase">
                    Finzie Joki Service (Roblox Service Platform)
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-500 font-mono">2025</span>
                </div>
                <div className="text-[9px] font-semibold text-zinc-500 font-mono mb-1">
                  Next.js • React • Tailwind CSS • Vercel
                </div>
                <ul className="text-[10px] text-zinc-600 space-y-0.5 list-disc ml-3 leading-relaxed">
                  <li>Membangun platform layanan game service Roblox 100% manual dengan UI modern responsif.</li>
                  <li>Merancang katalog terstruktur, flow pemesanan 4 langkah, dan integrasi direct order WhatsApp admin.</li>
                </ul>
                <div className="mt-1 text-[9px] flex items-center gap-1.5">
                  <span className="text-zinc-400 font-medium">Live Demo:</span>
                  <a href="https://finziejokiservice.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }} className="font-mono text-blue-600 font-bold hover:underline cursor-pointer">
                    finziejokiservice.vercel.app
                  </a>
                </div>
              </div>

              {/* Project 2: Interactive Portfolio & AI */}
              <div className="border-l-2 border-zinc-900 pl-3 relative">
                <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-zinc-900"></div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[11px] font-black text-zinc-900 uppercase">
                    Interactive Portfolio Website & AI Assistant
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-500 font-mono">2026</span>
                </div>
                <div className="text-[9px] font-semibold text-zinc-500 font-mono mb-1">
                  Next.js • TypeScript • Tailwind CSS • Framer Motion • Edge AI
                </div>
                <ul className="text-[10px] text-zinc-600 space-y-0.5 list-disc ml-3 leading-relaxed">
                  <li>Membangun portofolio interaktif dengan animasi halus dan credential certificate viewer terverifikasi.</li>
                  <li>Mengintegrasikan Chatbot AI Assistant cerdas untuk merespons pertanyaan pengunjung secara real-time.</li>
                </ul>
                <div className="mt-1 text-[9px] flex items-center gap-1.5">
                  <span className="text-zinc-400 font-medium">Source Code:</span>
                  <a href="https://github.com/Firdaus1802/PORTOFOLIO-DAUS" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }} className="font-mono text-blue-600 font-bold hover:underline cursor-pointer">
                    github.com/Firdaus1802/PORTOFOLIO-DAUS
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 3. LICENSES & CERTIFICATIONS (Elegant 2x2 Grid with Verification Badges) */}
          <section>
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b-2 border-zinc-900">
              <div className="w-5 h-5 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900">
                Licenses & Certifications
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[9.5px]">
              {/* Cert 1 */}
              <div className="border border-zinc-200 rounded-xl p-2.5 bg-zinc-50/70 flex items-start gap-2">
                <div className="w-4 h-4 rounded bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 leading-tight">Cybersecurity Fundamentals</h4>
                  <p className="text-zinc-500 text-[8.5px]">Cisco Networking Academy • 2026</p>
                </div>
              </div>

              {/* Cert 2 */}
              <div className="border border-zinc-200 rounded-xl p-2.5 bg-zinc-50/70 flex items-start gap-2">
                <div className="w-4 h-4 rounded bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 leading-tight">Junior Office Operator</h4>
                  <p className="text-zinc-500 text-[8.5px]">BNSP Indonesia • ID: 10458184</p>
                </div>
              </div>

              {/* Cert 3 */}
              <div className="border border-zinc-200 rounded-xl p-2.5 bg-zinc-50/70 flex items-start gap-2">
                <div className="w-4 h-4 rounded bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 leading-tight">Uji Kompetensi Ms. Office</h4>
                  <p className="text-zinc-500 text-[8.5px]">Universitas Raharja • 2024</p>
                </div>
              </div>

              {/* Cert 4 */}
              <div className="border border-zinc-200 rounded-xl p-2.5 bg-zinc-50/70 flex items-start gap-2">
                <div className="w-4 h-4 rounded bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 leading-tight">7x Certified Developer</h4>
                  <p className="text-zinc-500 text-[8.5px]">Dicoding (JS, Node.js API, Python, Cloud AI)</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. TECHNICAL SKILLS */}
          <section>
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b-2 border-zinc-900">
              <div className="w-5 h-5 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900">
                Skills & Competencies
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-xs">
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-zinc-800 mb-0.5">
                    <span>React.js & Next.js</span>
                    <span className="text-zinc-400 text-[9px] font-mono">95%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-zinc-900 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-zinc-800 mb-0.5">
                    <span>JavaScript (ES6+) & TypeScript</span>
                    <span className="text-zinc-400 text-[9px] font-mono">90%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-zinc-900 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-zinc-800 mb-0.5">
                    <span>Tailwind CSS & Responsive UI</span>
                    <span className="text-zinc-400 text-[9px] font-mono">95%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-zinc-900 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-zinc-800 mb-0.5">
                    <span>Supabase & Node.js REST API</span>
                    <span className="text-zinc-400 text-[9px] font-mono">85%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-zinc-900 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-zinc-800 mb-0.5">
                    <span>Python & Cloud AI (Azure/AWS)</span>
                    <span className="text-zinc-400 text-[9px] font-mono">85%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-zinc-900 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-zinc-800 mb-0.5">
                    <span>Git, GitHub & Office (BNSP)</span>
                    <span className="text-zinc-400 text-[9px] font-mono">90%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-zinc-900 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

      </main>

    </div>
  )
}
