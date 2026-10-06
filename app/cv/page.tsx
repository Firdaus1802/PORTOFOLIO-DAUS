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
    <div className="min-h-screen bg-zinc-100/70 dark:bg-zinc-950 py-8 md:py-16 px-4 sm:px-6 print:p-0 print:bg-white text-zinc-800 dark:text-zinc-200 print:text-black font-sans antialiased selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-black">
      
      {/* Top Floating Action Bar (Hidden when Printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between gap-4 print:hidden bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-zinc-200/80 dark:border-zinc-800">
        <Link 
          href="/"
          className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors group"
        >
          <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Download / Cetak PDF
          </button>
        </div>
      </div>

      {/* Main CV Sheet (A4 / Executive Resume Canvas) */}
      <main className="max-w-4xl mx-auto bg-white dark:bg-zinc-900/90 print:bg-white print:dark:bg-white shadow-2xl print:shadow-none border border-zinc-200/80 dark:border-zinc-800 print:border-0 rounded-3xl print:rounded-none overflow-hidden p-8 sm:p-14 print:p-0">
        
        {/* Header Profile Section */}
        <header className="border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-8 mb-8 flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-8">
          <div className="flex-1 text-center sm:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-3 border border-emerald-500/20 print:hidden">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Junior Frontend Developer
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white print:text-black mb-2 uppercase">
              Firdaus Dhuha Prabowo
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-semibold text-zinc-600 dark:text-zinc-300 print:text-zinc-700 tracking-tight mb-4">
              Mahasiswa Universitas Gunadarma • <span className="font-bold text-zinc-900 dark:text-white print:text-black">IPK: 3.88 / 4.00</span>
            </p>

            {/* Contact Strip */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 text-xs font-medium text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-zinc-400 print:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Tangerang, Indonesia
              </span>
              <span>•</span>
              <a href="https://wa.me/6281315354397" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-zinc-400 print:text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +62 813-1535-4397
              </a>
              <span>•</span>
              <a href="mailto:Firdausdhuhaprabowo@gmail.com" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-zinc-400 print:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Firdausdhuhaprabowo@gmail.com
              </a>
              <span>•</span>
              <a href="https://github.com/Firdaus1802" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors font-mono">
                github.com/Firdaus1802
              </a>
            </div>
          </div>

          {/* Profile Photo Frame */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-700/80 print:border-zinc-400 shrink-0 bg-linear-to-b from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 shadow-md">
            <Image 
              src="/images/profile-firdaus.png" 
              alt="Firdaus Dhuha Prabowo" 
              fill 
              className="object-contain p-1.5" 
              priority
              unoptimized
            />
          </div>
        </header>

        {/* Section 01: Professional Summary */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-mono font-bold text-zinc-400 print:text-zinc-600 tracking-wider">01 //</span>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white print:text-black">
              Ringkasan Profesional
            </h2>
          </div>
          <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-300 print:text-zinc-800 leading-relaxed text-justify font-normal">
            Mahasiswa aktif Universitas Gunadarma dengan Indeks Prestasi Kumulatif (IPK) <strong>3.88</strong> yang berdedikasi mendalami ekosistem <strong>Frontend Web Development</strong> dan teknologi internet modern. Terbiasa membangun antarmuka web yang bersih, responsif, dan interaktif menggunakan <strong>JavaScript (ES6+)</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, dan <strong>Tailwind CSS</strong>. Memiliki pemahaman database & backend BaaS (<strong>Supabase</strong>, Node.js RESTful API, Python), komputasi awan (AWS & Azure AI), serta memegang berbagai sertifikasi kompetensi resmi terverifikasi dari Cisco, BNSP, dan Dicoding Indonesia.
          </p>
        </section>

        {/* Main Content Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:grid-cols-12">
          
          {/* Left Column (7 cols): Education & Projects */}
          <div className="md:col-span-7 print:col-span-7 space-y-8">
            
            {/* Section 02: Education */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold text-zinc-400 print:text-zinc-600 tracking-wider">02 //</span>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white print:text-black">
                  Riwayat Pendidikan
                </h2>
              </div>

              <div className="bg-zinc-50/70 dark:bg-zinc-800/40 print:bg-transparent p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 print:border-zinc-300 print:p-0">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white print:text-black">
                      Universitas Gunadarma
                    </h3>
                    <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
                      S1 Mahasiswa Aktif
                    </p>
                  </div>
                  <span className="text-[10px] font-bold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 print:bg-zinc-100 print:text-black px-2.5 py-1 rounded-full">
                    IPK: 3.88
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 print:text-zinc-600 mt-2 leading-relaxed">
                  Fokus akademik pada algoritma pemrograman, perancangan antarmuka pengguna (UI/UX), arsitektur sistem informasi, dan teknologi web.
                </p>
              </div>
            </section>

            {/* Section 03: Selected Projects */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold text-zinc-400 print:text-zinc-600 tracking-wider">03 //</span>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white print:text-black">
                  Pengalaman Proyek (Projects)
                </h2>
              </div>

              <div className="space-y-4">
                {/* Project 1: FinnzieJoki */}
                <div className="bg-zinc-50/70 dark:bg-zinc-800/40 print:bg-transparent p-4.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 print:border-zinc-300 print:p-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white print:text-black">
                      Finzie Joki Service — Web Platform
                    </h3>
                    <span className="text-[11px] font-bold text-zinc-500">2025</span>
                  </div>
                  <div className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 print:text-zinc-700 mb-2 font-mono">
                    Next.js • React • Tailwind CSS • Vercel
                  </div>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-800 space-y-1.5 list-disc ml-4 leading-relaxed">
                    <li>Merancang dan membangun antarmuka web modern & responsif untuk layanan game service Roblox (CDID, DDS, Eagle Nation).</li>
                    <li>Mengimplementasikan alur pemesanan terstruktur 4 langkah dan integrasi langsung ke WhatsApp untuk konfirmasi pesanan.</li>
                    <li>Melakukan deployment produksi di cloud platform Vercel dengan performa loading cepat.</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-zinc-200/50 dark:border-zinc-700/50 flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400 print:text-zinc-500">Live URL:</span>
                    <a href="https://finziejokiservice.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-zinc-900 dark:text-white print:text-black font-semibold underline">
                      finziejokiservice.vercel.app
                    </a>
                  </div>
                </div>

                {/* Project 2: Personal Portfolio */}
                <div className="bg-zinc-50/70 dark:bg-zinc-800/40 print:bg-transparent p-4.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 print:border-zinc-300 print:p-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white print:text-black">
                      Firdaus Interactive Portfolio Website
                    </h3>
                    <span className="text-[11px] font-bold text-zinc-500">2026</span>
                  </div>
                  <div className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 print:text-zinc-700 mb-2 font-mono">
                    Next.js • TypeScript • Tailwind CSS • Framer Motion • AI
                  </div>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-800 space-y-1.5 list-disc ml-4 leading-relaxed">
                    <li>Membangun website portofolio interaktif dengan animasi transisi halus, mode Gelap/Terang, dan showcase sertifikat terverifikasi.</li>
                    <li>Mengintegrasikan Chatbot AI Assistant cerdas untuk merespons pertanyaan pengunjung secara real-time.</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-zinc-200/50 dark:border-zinc-700/50 flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400 print:text-zinc-500">Repository:</span>
                    <a href="https://github.com/Firdaus1802" target="_blank" rel="noopener noreferrer" className="font-mono text-zinc-900 dark:text-white print:text-black font-semibold underline">
                      github.com/Firdaus1802
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column (5 cols): Technical Skills & Verified Certifications */}
          <div className="md:col-span-5 print:col-span-5 space-y-8">
            
            {/* Section 04: Technical Skills */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold text-zinc-400 print:text-zinc-600 tracking-wider">04 //</span>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white print:text-black">
                  Keahlian Teknis
                </h2>
              </div>

              <div className="space-y-3.5 text-xs">
                {/* Frontend */}
                <div className="bg-zinc-50/70 dark:bg-zinc-800/40 print:bg-transparent p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 print:border-0 print:p-0">
                  <span className="block font-bold text-zinc-900 dark:text-white print:text-black mb-1.5 text-[11px] uppercase tracking-wider">
                    Frontend Engineering:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive UI"].map((s, i) => (
                      <span key={i} className="bg-white dark:bg-zinc-900 print:bg-zinc-100 text-zinc-800 dark:text-zinc-200 print:text-black border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-md text-[10px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back-End & Database */}
                <div className="bg-zinc-50/70 dark:bg-zinc-800/40 print:bg-transparent p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 print:border-0 print:p-0">
                  <span className="block font-bold text-zinc-900 dark:text-white print:text-black mb-1.5 text-[11px] uppercase tracking-wider">
                    Back-End & Database:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {["Node.js", "Supabase", "RESTful API", "Postman", "Python"].map((s, i) => (
                      <span key={i} className="bg-white dark:bg-zinc-900 print:bg-zinc-100 text-zinc-800 dark:text-zinc-200 print:text-black border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-md text-[10px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cloud & AI */}
                <div className="bg-zinc-50/70 dark:bg-zinc-800/40 print:bg-transparent p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 print:border-0 print:p-0">
                  <span className="block font-bold text-zinc-900 dark:text-white print:text-black mb-1.5 text-[11px] uppercase tracking-wider">
                    Cloud & Generative AI:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {["Microsoft Azure AI", "AWS Cloud", "Prompt Flow & RAG"].map((s, i) => (
                      <span key={i} className="bg-white dark:bg-zinc-900 print:bg-zinc-100 text-zinc-800 dark:text-zinc-200 print:text-black border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-md text-[10px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-zinc-50/70 dark:bg-zinc-800/40 print:bg-transparent p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 print:border-0 print:p-0">
                  <span className="block font-bold text-zinc-900 dark:text-white print:text-black mb-1.5 text-[11px] uppercase tracking-wider">
                    Tools & Productivity:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {["Git", "GitHub", "VS Code", "Vercel", "Microsoft Office"].map((s, i) => (
                      <span key={i} className="bg-white dark:bg-zinc-900 print:bg-zinc-100 text-zinc-800 dark:text-zinc-200 print:text-black border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-md text-[10px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 05: Verified Licenses & Certifications */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold text-zinc-400 print:text-zinc-600 tracking-wider">05 //</span>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white print:text-black">
                  Sertifikasi & Lisensi
                </h2>
              </div>

              <div className="space-y-2.5 text-xs">
                {certificationsList.map((cert, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-zinc-50/70 dark:bg-zinc-800/30 print:bg-transparent border border-zinc-200/80 dark:border-zinc-800 print:border-0 print:p-0">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-zinc-900 dark:text-white print:text-black block text-[11px] leading-tight">
                        {cert.title}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-400 print:text-zinc-600 ml-2 whitespace-nowrap">
                        {cert.year}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-1 text-[10px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600">
                      <span>{cert.issuer}</span>
                      {cert.id && <span className="font-mono">{cert.id}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

        {/* Footer Note */}
        <footer className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 print:border-zinc-300 text-center text-[10px] text-zinc-400 print:text-zinc-600 font-mono">
          Dokumen Curriculum Vitae Resmi • Firdaus Dhuha Prabowo • Generated via Next.js Portfolio System
        </footer>

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
