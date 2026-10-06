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
    <div className="min-h-screen bg-zinc-200/80 dark:bg-zinc-950 py-6 sm:py-10 px-3 sm:px-6 print:p-0 print:bg-white text-zinc-800 dark:text-zinc-200 font-sans antialiased">
      
      {/* Top Floating Action Bar (Hidden when Printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between gap-4 print:hidden bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-zinc-300/80 dark:border-zinc-800">
        <Link 
          href="/"
          className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span>Kembali ke Portofolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-black dark:hover:bg-zinc-100 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Cetak / Simpan PDF (A4)
          </button>
        </div>
      </div>

      {/* Main CV Sheet (Executive 2-Column Sidebar Layout as in Reference) */}
      <main className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none border border-zinc-300/80 print:border-0 rounded-2xl print:rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 text-zinc-800">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: Dark Charcoal Slate Sidebar (col-span-4 / 35%) */}
        {/* ======================================================== */}
        <div className="md:col-span-5 print:col-span-5 bg-[#1E2229] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6 print:bg-[#1E2229] print:text-white print:p-6" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}>
          
          {/* Top Header & Photo Arch */}
          <div className="space-y-6">
            
            {/* Name & Title Header */}
            <div className="text-center pt-2">
              <h1 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white leading-tight">
                Firdaus Dhuha Prabowo
              </h1>
              <p className="text-[11px] sm:text-xs font-bold text-zinc-400 tracking-[0.2em] uppercase mt-1">
                Junior Frontend Developer
              </p>
            </div>

            {/* Profile Photo Arch Dome Container */}
            <div className="flex justify-center">
              <div className="relative w-36 h-40 bg-[#282D36] rounded-t-[48px] rounded-b-2xl p-2.5 flex flex-col items-center justify-center border border-white/10 shadow-lg">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-3 border-white shadow-xl bg-zinc-800">
                  <Image 
                    src="/images/profile-firdaus.png" 
                    alt="Firdaus Dhuha Prabowo" 
                    fill 
                    className="object-contain p-1" 
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Section: CONTACT ME */}
            <div className="pt-2">
              <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-white/15">
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white">
                  Contact Me
                </h2>
              </div>

              <div className="space-y-2.5 text-[11px] text-zinc-300 font-medium">
                {/* Phone / WA */}
                <a href="https://wa.me/6281315354397" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+62 813-1535-4397</span>
                </a>

                {/* Email */}
                <a href="mailto:Firdausdhuhaprabowo@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">Firdausdhuhaprabowo@gmail.com</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Tangerang, Banten, Indonesia</span>
                </div>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/firdaus-dhuha-prabowo-091949386/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-2.239-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="truncate">in/firdaus-dhuha-prabowo</span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/Firdaus1802" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group font-mono">
                  <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>github.com/Firdaus1802</span>
                </a>
              </div>
            </div>

            {/* Section: EDUCATION (Arch Card) */}
            <div className="bg-[#282D36] rounded-2xl p-4 border border-white/10 shadow-md">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h2 className="text-xs font-black uppercase tracking-wider text-white">
                  Education
                </h2>
              </div>
              <div className="space-y-1 text-xs">
                <h3 className="font-bold text-white text-[13px]">Universitas Gunadarma</h3>
                <p className="text-zinc-300 text-[11px]">S1 - Sistem Informasi</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    IPK: 3.88 / 4.00
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">2024 - Sekarang</span>
                </div>
              </div>
            </div>

            {/* Section: LICENSES & CERTIFICATIONS */}
            <div>
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-white/15">
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white">
                  Certifications
                </h2>
              </div>

              <div className="space-y-2 text-[10px] text-zinc-300">
                {certificationsList.map((cert, idx) => (
                  <div key={idx} className="pb-1.5 border-b border-white/5 last:border-0">
                    <div className="flex justify-between items-start text-white font-semibold">
                      <span className="leading-snug">{cert.title}</span>
                      <span className="text-zinc-400 ml-1 text-[9px] font-mono shrink-0">{cert.year}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400 text-[9px] mt-0.5">
                      <span>{cert.issuer}</span>
                      {cert.id && <span className="font-mono text-zinc-400">{cert.id}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: Crisp White Content Canvas (col-span-8 / 65%) */}
        {/* ======================================================== */}
        <div className="md:col-span-7 print:col-span-7 bg-white text-zinc-800 p-6 sm:p-9 space-y-7 print:p-6 print:bg-white">
          
          {/* Section: ABOUT ME */}
          <section>
            <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b-2 border-zinc-900">
              <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-zinc-900">
                About Me
              </h2>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed text-justify">
              Mahasiswa aktif Universitas Gunadarma dengan Indeks Prestasi Kumulatif (IPK) <strong>3.88</strong> yang berdedikasi mendalami ekosistem <strong>Frontend Web Development</strong> dan arsitektur web modern. Berpengalaman membangun antarmuka web yang bersih, cepat, dan responsif menggunakan <strong>JavaScript (ES6+)</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, dan <strong>Tailwind CSS</strong>. Memiliki pemahaman database & backend BaaS (<strong>Supabase</strong>, Node.js RESTful API, Python), komputasi awan (AWS & Azure AI), serta memegang berbagai sertifikasi kompetensi resmi dari Cisco, BNSP, dan Dicoding Indonesia.
            </p>
          </section>

          {/* Section: FEATURED PROJECTS & EXPERIENCE */}
          <section>
            <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b-2 border-zinc-900">
              <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-zinc-900">
                Job Experience & Projects
              </h2>
            </div>

            <div className="space-y-4">
              {/* Project 1: Finzie Joki Service */}
              <div className="border-l-2 border-zinc-300 pl-3.5 relative">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900"></div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-xs font-bold text-zinc-900 uppercase">
                    Finzie Joki Service (Roblox Service Platform)
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-500 font-mono">2025</span>
                </div>
                <div className="text-[10px] font-semibold text-zinc-500 font-mono mb-1.5">
                  Next.js • React • Tailwind CSS • Vercel
                </div>
                <ul className="text-[11px] text-zinc-600 space-y-1 list-disc ml-3.5 leading-relaxed">
                  <li>Membangun platform website layanan game service Roblox (CDID, DDS, Eagle Nation) 100% pengerjaan manual.</li>
                  <li>Merancang UI modern responsif dengan katalog game dan alur pemesanan interaktif 4 langkah.</li>
                  <li>Mengintegrasikan direct order routing WhatsApp admin dan deployment Vercel.</li>
                </ul>
                <div className="mt-2 text-[10px] flex items-center gap-1.5">
                  <span className="text-zinc-400 font-medium">Live Demo:</span>
                  <a href="https://finziejokiservice.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-blue-600 font-bold hover:underline cursor-pointer">
                    finziejokiservice.vercel.app
                  </a>
                </div>
              </div>

              {/* Project 2: Interactive Portfolio & AI */}
              <div className="border-l-2 border-zinc-300 pl-3.5 relative">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900"></div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-xs font-bold text-zinc-900 uppercase">
                    Interactive Portfolio Website & AI Assistant
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-500 font-mono">2026</span>
                </div>
                <div className="text-[10px] font-semibold text-zinc-500 font-mono mb-1.5">
                  Next.js • TypeScript • Tailwind CSS • Framer Motion • Edge AI
                </div>
                <ul className="text-[11px] text-zinc-600 space-y-1 list-disc ml-3.5 leading-relaxed">
                  <li>Membangun website portofolio interaktif dengan animasi transisi halus dan showcase sertifikat terverifikasi.</li>
                  <li>Mengintegrasikan Chatbot AI Assistant cerdas untuk merespons pertanyaan pengunjung secara real-time.</li>
                </ul>
                <div className="mt-2 text-[10px] flex items-center gap-1.5">
                  <span className="text-zinc-400 font-medium">Source Code:</span>
                  <a href="https://github.com/Firdaus1802/PORTOFOLIO-DAUS" target="_blank" rel="noopener noreferrer" className="font-mono text-blue-600 font-bold hover:underline cursor-pointer">
                    github.com/Firdaus1802/PORTOFOLIO-DAUS
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section: TECHNICAL SKILLS */}
          <section>
            <div className="flex items-center gap-2.5 mb-3 pb-2 border-b-2 border-zinc-900">
              <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-zinc-900">
                Skills & Competencies
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              <div>
                <span className="block font-bold text-zinc-900 text-[11px] uppercase tracking-wider mb-1">
                  Frontend Engineering:
                </span>
                <p className="text-[11px] text-zinc-600 leading-snug">
                  React.js, Next.js, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5, CSS3, Responsive UI.
                </p>
              </div>

              <div>
                <span className="block font-bold text-zinc-900 text-[11px] uppercase tracking-wider mb-1">
                  Back-End & Database:
                </span>
                <p className="text-[11px] text-zinc-600 leading-snug">
                  Supabase (BaaS), Node.js, RESTful API Architecture, Postman, Python.
                </p>
              </div>

              <div>
                <span className="block font-bold text-zinc-900 text-[11px] uppercase tracking-wider mb-1">
                  Cloud & Generative AI:
                </span>
                <p className="text-[11px] text-zinc-600 leading-snug">
                  Microsoft Azure AI, AWS Cloud Infrastructure, Prompt Flow & RAG.
                </p>
              </div>

              <div>
                <span className="block font-bold text-zinc-900 text-[11px] uppercase tracking-wider mb-1">
                  Tools & Productivity:
                </span>
                <p className="text-[11px] text-zinc-600 leading-snug">
                  Git, GitHub, VS Code, Vercel, Microsoft Office (BNSP Certified).
                </p>
              </div>
            </div>
          </section>

          {/* Section: LANGUAGES & HOBBIES (2 Columns) */}
          <section className="grid grid-cols-2 gap-4 pt-1">
            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-zinc-300">
                <svg className="w-3.5 h-3.5 text-zinc-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xs font-black uppercase tracking-wider text-zinc-900">
                  Languages
                </h3>
              </div>
              <ul className="text-[11px] text-zinc-600 space-y-1">
                <li className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                  <span><strong>Indonesian:</strong> Native</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                  <span><strong>English:</strong> Working Proficiency</span>
                </li>
              </ul>
            </div>

            {/* Hobbies / Interests */}
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-zinc-300">
                <svg className="w-3.5 h-3.5 text-zinc-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h3 className="text-xs font-black uppercase tracking-wider text-zinc-900">
                  Hobbies & Interests
                </h3>
              </div>
              <ul className="text-[11px] text-zinc-600 space-y-1">
                <li className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                  <span>Modern Web Development</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                  <span>Cloud Computing & AI</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                  <span>Gaming & E-Sports Service</span>
                </li>
              </ul>
            </div>
          </section>

        </div>

      </main>

    </div>
  )
}

const certificationsList = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2026",
    id: "Verified",
  },
  {
    title: "Junior Office Operator",
    issuer: "BNSP Indonesia",
    year: "2024",
    id: "No: 10458184",
  },
  {
    title: "Uji Kompetensi Ms. Office",
    issuer: "Universitas Raharja",
    year: "2024",
    id: "No: 450/UKOM/2024",
  },
  {
    title: "Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2024",
    id: "07Z6JO4DJXQR",
  },
  {
    title: "Back-End Pemula JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2024",
    id: "53XEK21YVXRN",
  },
  {
    title: "Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2024",
    id: "MRZM621JKPYQ",
  },
  {
    title: "Membangun Gen AI Azure",
    issuer: "Dicoding & Microsoft",
    year: "2024",
    id: "GRX5J7YRKX0M",
  },
  {
    title: "Dasar Cloud & Gen AI AWS",
    issuer: "Dicoding & AWS",
    year: "2024",
    id: "MRZM6R97RPYQ",
  },
  {
    title: "Data Science Microsoft Fabric",
    issuer: "Dicoding & Microsoft",
    year: "2024",
    id: "JLX15O22NZ72",
  },
  {
    title: "Financial Literacy",
    issuer: "Dicoding & DBS Foundation",
    year: "2024",
    id: "JMZVVKDD3ZN9",
  },
]
