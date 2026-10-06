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
    <div className="min-h-screen bg-[#f0f2f5] py-6 sm:py-10 px-2 sm:px-4 print:p-0 print:bg-white text-[#222222] font-sans antialiased">
      
      {/* Top Floating Action Bar (Hidden when Printing) */}
      <div className="max-w-[820px] mx-auto mb-5 flex items-center justify-between gap-4 print:hidden bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-sm border border-zinc-200">
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

      {/* Kontainer Lembar Resume Formal Klasik (A4 Single/Clean Sheet) */}
      <main 
        className="max-w-[820px] mx-auto bg-white shadow-xl print:shadow-none border border-[#e0e0e0] print:border-0 p-8 sm:p-11 print:p-8 text-[#222222] leading-[1.45]"
        style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      >
        
        {/* ================= 1. HEADER PROFIL ================= */}
        <header className="flex flex-row items-center gap-6 pb-4 border-b border-[#333333]">
          {/* Photo Box */}
          <div className="w-[105px] h-[125px] border border-[#cccccc] bg-[#e2e8f0] shrink-0 overflow-hidden relative shadow-sm">
            <Image 
              src="/images/profile-firdaus.png" 
              alt="Firdaus Dhuha Prabowo"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Header Details */}
          <div className="grow">
            <h1 className="text-[22px] sm:text-[24px] font-black tracking-[1px] text-[#111111] uppercase leading-tight">
              FIRDAUS DHUHA PRABOWO
            </h1>
            <p className="text-[12px] font-medium text-[#555555] mt-0.5">
              Junior Frontend Developer
            </p>
            
            <div className="w-full h-[1px] bg-[#333333] my-2.5"></div>
            
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] font-semibold text-[#111111] mb-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[#555555]">Phone:</span>
                <a href="https://wa.me/6281315354397" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  +62 813-1535-4397
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#555555]">Email:</span>
                <a href="mailto:Firdausdhuhaprabowo@gmail.com" className="hover:underline">
                  Firdausdhuhaprabowo@gmail.com
                </a>
              </div>
            </div>
            
            <div className="text-[10.5px] text-[#666666] flex flex-wrap items-center gap-1.5 pt-0.5">
              <span>18 Februari 2006</span>
              <span className="text-[#aaaaaa]">•</span>
              <span>20 Tahun</span>
              <span className="text-[#aaaaaa]">•</span>
              <span>Tangerang, Banten, Indonesia</span>
              <span className="text-[#aaaaaa]">•</span>
              <a href="https://github.com/Firdaus1802" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">
                github.com/Firdaus1802
              </a>
            </div>
          </div>
        </header>

        {/* ================= 2. ABOUT ME ================= */}
        <section className="mt-5">
          <h2 className="text-[12px] font-black tracking-[1px] text-[#111111] uppercase border-b-[1.5px] border-[#222222] pb-0.5 mb-2">
            ABOUT ME
          </h2>
          <p className="text-[11px] text-[#333333] leading-[1.6] text-justify">
            Mahasiswa aktif Universitas Gunadarma dengan Indeks Prestasi Kumulatif (IPK) <strong>3.88</strong> yang berfokus mendalam pada ekosistem <strong>Frontend Web Development</strong> dan arsitektur web modern. Berpengalaman membangun antarmuka web yang bersih, responsif, dan interaktif menggunakan <strong>JavaScript (ES6+)</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, dan <strong>Tailwind CSS</strong>. Memiliki pemahaman database & backend BaaS (<strong>Supabase</strong>, Node.js RESTful API, Python), komputasi awan (AWS & Azure AI), serta memegang berbagai sertifikasi kompetensi resmi dari Cisco, BNSP, dan Dicoding Indonesia.
          </p>
        </section>

        {/* ================= 3. EXPERIENCE & PROJECTS ================= */}
        <section className="mt-5">
          <h2 className="text-[12px] font-black tracking-[1px] text-[#111111] uppercase border-b-[1.5px] border-[#222222] pb-0.5 mb-2.5">
            EXPERIENCE & PROJECTS
          </h2>
          
          {/* Project 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] print:grid-cols-[160px_1fr] gap-2 sm:gap-4 mb-3">
            <div>
              <span className="block text-[11px] font-bold text-[#111111]">2025</span>
              <span className="block text-[10px] text-[#666666]">Vercel Deployment</span>
            </div>
            <div>
              <h3 className="text-[11.5px] font-bold text-[#111111]">
                Frontend Developer & Creator
              </h3>
              <p className="text-[10.5px] text-[#555555] font-medium mb-1">
                Finzie Joki Service (Roblox Service Platform)
              </p>
              <ul className="list-disc pl-4 text-[10.5px] text-[#333333] space-y-0.5">
                <li>Membangun platform layanan game service Roblox 100% manual dengan antarmuka modern dan responsif.</li>
                <li>Merancang katalog layanan terstruktur, flow pemesanan 4 langkah interaktif, dan direct order WhatsApp admin.</li>
                <li>Implementasi performa tinggi menggunakan Next.js, React, dan Tailwind CSS (Live: <a href="https://finziejokiservice.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">finziejokiservice.vercel.app</a>).</li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] print:grid-cols-[160px_1fr] gap-2 sm:gap-4">
            <div>
              <span className="block text-[11px] font-bold text-[#111111]">2026</span>
              <span className="block text-[10px] text-[#666666]">Open Source / Repo</span>
            </div>
            <div>
              <h3 className="text-[11.5px] font-bold text-[#111111]">
                Frontend & AI Integrator
              </h3>
              <p className="text-[10.5px] text-[#555555] font-medium mb-1">
                Interactive Portfolio Website & AI Assistant
              </p>
              <ul className="list-disc pl-4 text-[10.5px] text-[#333333] space-y-0.5">
                <li>Mengembangkan web portofolio interaktif dengan animasi halus, dark/light mode, dan credential viewer terverifikasi.</li>
                <li>Mengintegrasikan Chatbot AI Assistant cerdas untuk merespons pertanyaan pengunjung secara real-time.</li>
                <li>Source code tersedia publik: <a href="https://github.com/Firdaus1802/PORTOFOLIO-DAUS" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">github.com/Firdaus1802/PORTOFOLIO-DAUS</a>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 4. EDUCATION & CERTIFICATIONS ================= */}
        <section className="mt-5">
          <h2 className="text-[12px] font-black tracking-[1px] text-[#111111] uppercase border-b-[1.5px] border-[#222222] pb-0.5 mb-2.5">
            EDUCATION & CERTIFICATIONS
          </h2>
          
          {/* Education */}
          <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] print:grid-cols-[160px_1fr] gap-2 sm:gap-4 mb-3">
            <div>
              <span className="block text-[11px] font-bold text-[#111111]">2024 - Sekarang</span>
              <span className="block text-[10px] text-[#666666]">Universitas Gunadarma</span>
            </div>
            <div>
              <h3 className="text-[11.5px] font-bold text-[#111111]">
                S1 - Sistem Informasi
              </h3>
              <p className="text-[10.5px] text-[#555555] font-medium mb-1">
                Indeks Prestasi Kumulatif (IPK): 3.88 / 4.00
              </p>
              <ul className="list-disc pl-4 text-[10.5px] text-[#333333]">
                <li>Fokus studi pada rekayasa perangkat lunak, sistem basis data, pemrograman web modern, dan algoritma.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] print:grid-cols-[160px_1fr] gap-2 sm:gap-4">
            <div>
              <span className="block text-[11px] font-bold text-[#111111]">2024 - 2026</span>
              <span className="block text-[10px] text-[#666666]">Sertifikasi Resmi</span>
            </div>
            <div>
              <h3 className="text-[11.5px] font-bold text-[#111111]">
                Cisco, BNSP, Raharja & Dicoding Indonesia
              </h3>
              <p className="text-[10.5px] text-[#555555] font-medium mb-1">
                4 Lisensi & Sertifikasi Kompetensi Terverifikasi
              </p>
              <ul className="list-disc pl-4 text-[10.5px] text-[#333333] space-y-0.5">
                <li><strong>Cisco Networking Academy:</strong> Cybersecurity Fundamentals (2026)</li>
                <li><strong>BNSP Indonesia:</strong> Junior Office Operator (No. Reg: 10458184)</li>
                <li><strong>Universitas Raharja:</strong> Uji Kompetensi Ms. Office (2024)</li>
                <li><strong>Dicoding Indonesia:</strong> 7x Sertifikasi (JavaScript, Node.js REST API, Python, Cloud AI)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 5. SKILLS ================= */}
        <section className="mt-5">
          <h2 className="text-[12px] font-black tracking-[1px] text-[#111111] uppercase border-b-[1.5px] border-[#222222] pb-0.5 mb-2">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 print:grid-cols-4 gap-3 text-[10.5px] text-[#333333]">
            <div>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>React.js & Next.js</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>Tailwind CSS</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive UI Design</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>Supabase BaaS</li>
                <li>Node.js REST API</li>
                <li>Python Programming</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>Cloud AI (Azure/AWS)</li>
                <li>Git & GitHub</li>
                <li>Ms. Office (BNSP)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 6. LANGUAGES & KEY FOCUS ================= */}
        <section className="mt-5">
          <h2 className="text-[12px] font-black tracking-[1px] text-[#111111] uppercase border-b-[1.5px] border-[#222222] pb-0.5 mb-2">
            LANGUAGES & INTERESTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 text-[10.5px] text-[#333333]">
            <div>
              <p><strong>Languages:</strong> Bahasa Indonesia (Native), English (Working Proficiency)</p>
            </div>
            <div>
              <p><strong>Interests:</strong> Modern Web Architecture, Cloud Computing & AI, E-Sports Platform</p>
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}
