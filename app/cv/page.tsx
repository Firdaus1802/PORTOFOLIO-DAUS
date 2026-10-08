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
    <div className="min-h-screen bg-[#eaedf2] py-6 sm:py-9 px-2 sm:px-4 print:p-0 print:bg-white text-[#1a1a1a] font-sans antialiased">
      
      <div className="max-w-205 mx-auto mb-4 flex items-center justify-between gap-4 print:hidden bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-sm border border-zinc-200">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-black transition-colors group cursor-pointer"
        >
          <div className="w-6 h-6 rounded-md bg-zinc-100 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
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
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-95"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Cetak / Simpan PDF (A4)
          </button>
        </div>
      </div>

      <main 
        className="max-w-205 mx-auto bg-white shadow-xl print:shadow-none border border-[#d5dbe3] print:border-0 p-8 sm:p-11 print:p-6 text-[#1a1a1a] leading-normal"
        style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      >
        <header className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 pb-4 border-b border-[#333333]">
          <div className="w-27 h-32.5 border-[1.5px] border-[#333333] bg-[#f1f5f9] shrink-0 overflow-hidden relative shadow-sm">
            <Image 
              src="/images/profile-firdaus.png" 
              alt="Firdaus Dhuha Prabowo"
              fill
              className="object-cover object-[50%_12%]"
              priority
            />
          </div>
          
          <div className="grow text-center sm:text-left w-full">
            <h1 className="text-xl sm:text-2xl font-black tracking-wider text-[#0f172a] uppercase leading-tight">
              FIRDAUS DHUHA PRABOWO
            </h1>
            <p className="text-xs font-semibold text-[#555555] mt-0.5 tracking-wide">
              Junior Frontend Developer & Undergraduate Student
            </p>
            
            <div className="w-full h-px bg-[#333333] my-2"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs font-medium text-[#1a1a1a] mb-1.5 text-left">
              <div className="flex items-center gap-2">
                <span className="text-[#64748b] w-3 text-center">📞</span>
                <span className="filter blur-xs hover:blur-none transition-all duration-300 select-text cursor-pointer" title="Arahkan kursor untuk memperjelas">+62 813-1535-4397</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#64748b] w-3 text-center">✉</span>
                <span className="text-[#1a1a1a] filter blur-xs hover:blur-none transition-all duration-300 select-text cursor-pointer" title="Arahkan kursor untuk memperjelas">
                  firdausdhuhaprabowo@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#64748b] w-3 text-center">📍</span>
                <span>Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#64748b] w-3 text-center">🔗</span>
                <a href="https://github.com/Firdaus1802" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] hover:underline">
                  github.com/Firdaus1802
                </a>
              </div>
            </div>

            <div className="text-[10px] text-[#64748b] flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-0.5">
              <span>18 Februari 2006</span>
              <span className="text-[#94a3b8]">•</span>
              <span>20 Tahun</span>
              <span className="text-[#94a3b8]">•</span>
              <span>Canada</span>
            </div>
          </div>
        </header>

        <section className="mt-4">
          <h2 className="text-xs font-black tracking-wider text-[#0f172a] uppercase border-b-2 border-[#222222] pb-0.5 mb-2">
            ABOUT ME
          </h2>
          <p className="text-xs text-[#262626] leading-relaxed text-justify">
            Mahasiswa aktif program studi <strong>S1 Sistem Informasi</strong> dengan Indeks Prestasi Kumulatif (IPK) <strong>3.88 / 4.00</strong>. Berfokus mendalam pada <strong>Frontend Web Development</strong> dan arsitektur aplikasi berbasis web modern. Terampil membangun antarmuka web yang rapi, cepat, responsif, dan interaktif menggunakan <strong>JavaScript (ES6+)</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, dan <strong>Tailwind CSS</strong>. Memiliki pemahaman yang solid dalam integrasi backend BaaS (<strong>Supabase</strong>, RESTful API Node.js, Python), komputasi awan, serta memegang sertifikasi kompetensi resmi dari Cisco Networking Academy, BNSP, dan Dicoding Indonesia.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-xs font-black tracking-wider text-[#0f172a] uppercase border-b-2 border-[#222222] pb-0.5 mb-2.5">
            EXPERIENCE & PROJECTS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-[145px_1fr] print:grid-cols-[145px_1fr] gap-1 sm:gap-4 mb-3">
            <div>
              <span className="block text-xs font-extrabold text-[#0f172a]">2025</span>
              <span className="block text-[10px] text-[#64748b]">Vercel Deployment</span>
            </div>
            <div>
              <div className="mb-0.5">
                <h3 className="text-xs font-extrabold text-[#0f172a] inline">
                  Frontend Developer & Creator
                </h3>
                <span className="text-xs font-semibold text-[#555555] inline ml-1.5 before:content-['—_'] before:text-[#94a3b8]">
                  Finzie Joki Service (Roblox Service Platform)
                </span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#333333] space-y-0.5 leading-normal">
                <li>Membangun platform layanan game service Roblox 100% manual dengan antarmuka modern, interaktif, dan fully-responsive.</li>
                <li>Merancang katalog produk dinamis, flow pemesanan 4 langkah terstruktur, serta direct-order WhatsApp ke admin.</li>
                <li>Mengoptimalkan performa web dengan Next.js, React, dan Tailwind CSS (Live: <a href="https://finziejokiservice.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] hover:underline">finziejokiservice.vercel.app</a>).</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[145px_1fr] print:grid-cols-[145px_1fr] gap-1 sm:gap-4">
            <div>
              <span className="block text-xs font-extrabold text-[#0f172a]">2026</span>
              <span className="block text-[10px] text-[#64748b]">Open Source Project</span>
            </div>
            <div>
              <div className="mb-0.5">
                <h3 className="text-xs font-extrabold text-[#0f172a] inline">
                  Frontend & AI Integrator
                </h3>
                <span className="text-xs font-semibold text-[#555555] inline ml-1.5 before:content-['—_'] before:text-[#94a3b8]">
                  Interactive Portfolio Website & AI Assistant
                </span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#333333] space-y-0.5 leading-normal">
                <li>Mengembangkan website portofolio interaktif dengan animasi halus, sistem dark/light mode, dan credential viewer terverifikasi.</li>
                <li>Mengintegrasikan Chatbot AI Assistant cerdas untuk merespons pertanyaan pengunjung secara real-time.</li>
                <li>Repositori kode terbuka: <a href="https://github.com/Firdaus1802/PORTOFOLIO-DAUS" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] hover:underline">github.com/Firdaus1802/PORTOFOLIO-DAUS</a>.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-xs font-black tracking-wider text-[#0f172a] uppercase border-b-2 border-[#222222] pb-0.5 mb-2">
            EDUCATION
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-[145px_1fr] print:grid-cols-[145px_1fr] gap-1 sm:gap-4">
            <div>
              <span className="block text-xs font-extrabold text-[#0f172a]">2024 - Sekarang</span>
              <span className="block text-[10px] text-[#64748b] filter blur-xs hover:blur-none transition-all duration-300 cursor-pointer select-text" title="Arahkan kursor untuk memperjelas">Universitas Gunadarma</span>
            </div>
            <div>
              <div className="mb-0.5">
                <h3 className="text-xs font-extrabold text-[#0f172a] inline filter blur-xs hover:blur-none transition-all duration-300 cursor-pointer select-text" title="Arahkan kursor untuk memperjelas">
                  Universitas Gunadarma
                </h3>
                <span className="text-xs font-semibold text-[#555555] inline ml-1.5 before:content-['—_'] before:text-[#94a3b8]">
                  S1 - Sistem Informasi (IPK: 3.88 / 4.00)
                </span>
              </div>
              <p className="text-xs text-[#333333] leading-normal mt-1">
                Fokus pembelajaran mencakup Rekayasa Perangkat Lunak, Sistem Basis Data Relasional, Pemrograman Web Modern, Algoritma & Struktur Data, serta Manajemen Sistem Informasi.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-xs font-black tracking-wider text-[#0f172a] uppercase border-b-2 border-[#222222] pb-0.5 mb-2">
            LICENSES & CERTIFICATIONS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-4 gap-y-2 text-xs">
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] font-extrabold text-[#0f172a] w-12 shrink-0">2026</span>
              <div className="flex flex-col">
                <strong className="font-bold text-[#0f172a]">Cisco Networking Academy</strong>
                <span className="text-[#555555] text-[10px]">Cybersecurity Fundamentals</span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] font-extrabold text-[#0f172a] w-12 shrink-0">2025</span>
              <div className="flex flex-col">
                <strong className="font-bold text-[#0f172a]">Badan Nasional Sertifikasi Profesi (BNSP)</strong>
                <span className="text-[#555555] text-[10px]">Junior Office Operator (No. Reg: 10458184)</span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] font-extrabold text-[#0f172a] w-12 shrink-0">2024</span>
              <div className="flex flex-col">
                <strong className="font-bold text-[#0f172a]">Universitas Raharja</strong>
                <span className="text-[#555555] text-[10px]">Uji Kompetensi Keahlian Microsoft Office</span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] font-extrabold text-[#0f172a] w-12 shrink-0">2024-2026</span>
              <div className="flex flex-col">
                <strong className="font-bold text-[#0f172a]">Dicoding Indonesia</strong>
                <span className="text-[#555555] text-[10px]">7x Sertifikasi (JavaScript, Node.js REST API, Python, Cloud AI)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-xs font-black tracking-wider text-[#0f172a] uppercase border-b-2 border-[#222222] pb-0.5 mb-2">
            TECHNICAL SKILLS
          </h2>
          
          <div className="flex flex-col gap-1 text-xs leading-normal">
            <div className="grid grid-cols-1 sm:grid-cols-[145px_1fr] print:grid-cols-[145px_1fr] gap-1 sm:gap-4">
              <span className="font-extrabold text-[#0f172a]">Frontend Web:</span>
              <span className="text-[#262626]">React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, Responsive UI</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[145px_1fr] print:grid-cols-[145px_1fr] gap-1 sm:gap-4">
              <span className="font-extrabold text-[#0f172a]">Backend & Database:</span>
              <span className="text-[#262626]">Supabase BaaS, Node.js, Express.js REST API, Python, PostgreSQL Basics</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[145px_1fr] print:grid-cols-[145px_1fr] gap-1 sm:gap-4">
              <span className="font-extrabold text-[#0f172a]">Cloud & AI Tools:</span>
              <span className="text-[#262626]">Microsoft Azure AI, AWS Cloud Computing Essentials, LLM API Integration, Vercel</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[145px_1fr] print:grid-cols-[145px_1fr] gap-1 sm:gap-4">
              <span className="font-extrabold text-[#0f172a]">Tools & Office:</span>
              <span className="text-[#262626]">Git, GitHub, Visual Studio Code, Postman, Microsoft Office Suite (BNSP Certified)</span>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-xs font-black tracking-wider text-[#0f172a] uppercase border-b-2 border-[#222222] pb-0.5 mb-2">
            LANGUAGES & INTERESTS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 text-xs text-[#262626]">
            <div>
              <strong>Languages:</strong> Bahasa Indonesia (Native), English (Working Proficiency)
            </div>
            <div>
              <strong>Interests:</strong> Modern Web Architecture, Cloud Computing & AI Ecosystem, E-Sports & Gaming Services
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}
