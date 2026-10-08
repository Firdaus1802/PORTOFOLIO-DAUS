import { NextRequest, NextResponse } from "next/server"
export const runtime = 'edge'
import OpenAI from 'openai'

interface HistoryEntry {
  role: "system" | "user" | "assistant"
  content: string
}

function getSmartFallbackResponse(query: string): string {
  const q = query.toLowerCase()

  if (
    q.includes("proyek") || 
    q.includes("projek") || 
    q.includes("project") || 
    q.includes("karya") || 
    q.includes("finzie") || 
    q.includes("joki") || 
    q.includes("roblox") || 
    q.includes("portofolio proyek") || 
    q.includes("arsitektur kode") || 
    q.includes("unggulan") || 
    q.includes("pilihan") || 
    q.includes("web yang dibuat") || 
    q.includes("aplikasi")
  ) {
    return `Berikut proyek unggulan yang dibangun dan dikembangkan oleh Firdaus Dhuha Prabowo:

1. **Finzie Joki Service (Roblox Service Platform)**
• **Tautan Demo:** [finziejokiservice.vercel.app](https://finziejokiservice.vercel.app/)
• **Arsitektur & Tech Stack:** Next.js, React.js, Tailwind CSS, Vercel Cloud Deployment.
• **Fitur & Solusi:** Platform layanan game service Roblox 100% manual dengan UI modern responsif, katalog layanan terstruktur, flow pemesanan interaktif 4 langkah, dan integrasi WhatsApp admin.

2. **Interactive Portfolio Website & AI Assistant**
• **Tautan Kode:** [github.com/Firdaus1802/PORTOFOLIO-DAUS](https://github.com/Firdaus1802/PORTOFOLIO-DAUS)
• **Arsitektur & Tech Stack:** Next.js, TypeScript, Tailwind CSS, Framer Motion, Edge AI.
• **Fitur & Solusi:** Web portofolio interaktif dengan animasi halus, credential viewer terverifikasi, dan Chatbot AI Assistant cerdas.`
  }

  if (
    q.includes("profil") || 
    q.includes("akademik") || 
    q.includes("latar belakang") || 
    q.includes("umur") || 
    q.includes("usia") || 
    q.includes("lahir") || 
    q.includes("tanggal lahir") || 
    q.includes("tgl lahir") || 
    q.includes("kapan lahir") || 
    q.includes("ulang tahun") || 
    q.includes("birthday") || 
    q.includes("gunadarma") || 
    q.includes("kuliah") || 
    q.includes("kampus") || 
    q.includes("pendidikan") || 
    q.includes("ipk") || 
    q.includes("gpa") || 
    q.includes("jurusan") || 
    q.includes("sekolah") || 
    q.includes("mahasiswa")
  ) {
    return `**Profil & Latar Belakang Akademik Firdaus Dhuha Prabowo:**
• **Pendidikan:** Mahasiswa aktif S1 Sistem Informasi di Universitas Gunadarma dengan IPK **3.88 / 4.00**.
• **Kelahiran & Usia:** Lahir pada **18 Februari 2006** di Wonosari, Yogyakarta (berusia 20 tahun).
• **Domisili:** Wonosari, Yogyakarta, Indonesia.
• **Fokus Keahlian:** Frontend Web Development, arsitektur Next.js & React, integrasi backend Supabase & Node.js, serta komputasi awan.`
  }

  if (
    q.includes("tech stack") || 
    q.includes("stack") || 
    q.includes("database") || 
    q.includes("backend") || 
    q.includes("back-end") || 
    q.includes("back end") || 
    q.includes("frontend") || 
    q.includes("front-end") || 
    q.includes("front end") || 
    q.includes("supabase") || 
    q.includes("node") || 
    q.includes("api") || 
    q.includes("rest") || 
    q.includes("postman") || 
    q.includes("python") || 
    q.includes("react") || 
    q.includes("next") || 
    q.includes("javascript") || 
    q.includes("typescript") || 
    q.includes("tailwind") || 
    q.includes("css") || 
    q.includes("html") || 
    q.includes("keahlian") || 
    q.includes("kemampuan") || 
    q.includes("alat") || 
    q.includes("spesialisasi") || 
    q.includes("bisa apa") || 
    q.includes("skill")
  ) {
    return `**Spesialisasi Tech Stack & Database Firdaus:**
• **Frontend Engineering:** React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Framer Motion.
• **Backend & Database:** Supabase (PostgreSQL BaaS, Auth, Storage), Node.js RESTful API, Postman API Testing, Python.
• **Cloud & Artificial Intelligence:** Microsoft Azure AI, AWS Cloud Infrastructure, Generative AI Integration.
• **Development Tools:** Git, GitHub, VS Code, Vercel, Microsoft Office (Sertifikasi BNSP).`
  }

  if (
    q.includes("sertifikat") || 
    q.includes("sertifikasi") || 
    q.includes("certificate") || 
    q.includes("lisensi") || 
    q.includes("cisco") || 
    q.includes("bnsp") || 
    q.includes("raharja") || 
    q.includes("dicoding") || 
    q.includes("kredensial") || 
    q.includes("industri")
  ) {
    return `Firdaus memiliki **10 lisensi dan sertifikasi kompetensi resmi terverifikasi**:
• **Cisco Networking Academy:** Introduction to Cybersecurity (2026)
• **BNSP Indonesia:** Junior Office Operator (ID: 10458184)
• **Universitas Raharja:** Uji Kompetensi Ms. Office (ID: 450/UKOM/RHJ/II/2024)
• **Dicoding Indonesia:** Dasar Pemrograman JavaScript (ID: \`07Z6JO4DJXQR\`)
• **Dicoding Indonesia:** Back-End Pemula dengan JavaScript (ID: \`53XEK21YVXRN\`)
• **Dicoding Indonesia:** Memulai Pemrograman dengan Python (ID: \`MRZM621JKPYQ\`)
• **Dicoding & Microsoft:** Membangun Aplikasi Gen AI dengan Azure (ID: \`GRX5J7YRKX0M\`)
• **Dicoding & AWS:** Dasar Cloud dan Gen AI di AWS (ID: \`MRZM6R97RPYQ\`)
• **Dicoding & Microsoft:** Penerapan Data Science Microsoft Fabric (ID: \`JLX15O22NZ72\`)
• **Dicoding & DBS Foundation:** Introduction to Financial Literacy (ID: \`JMZVVKDD3ZN9\`)`
  }

  if (
    q.includes("cv") || 
    q.includes("resume") || 
    q.includes("curriculum vitae") || 
    q.includes("download cv") || 
    q.includes("cetak cv") || 
    q.includes("pdf") || 
    q.includes("berkas") || 
    q.includes("dossier") || 
    q.includes("lamaran")
  ) {
    return `Berkas resmi **Curriculum Vitae (CV)** Firdaus Dhuha Prabowo dapat diakses langsung pada halaman [**Curriculum Vitae**](/cv).

Halaman tersebut telah dioptimasi dalam format executive 2-kolom dan siap dicetak / disimpan dalam format standar A4.`
  }

  if (
    q.includes("kontak") || 
    q.includes("contact") || 
    q.includes("jejaring") || 
    q.includes("saluran") || 
    q.includes("email") || 
    q.includes("wa") || 
    q.includes("whatsapp") || 
    q.includes("telepon") || 
    q.includes("no hp") || 
    q.includes("nomor") || 
    q.includes("hubungi") || 
    q.includes("linkedin") || 
    q.includes("github") || 
    q.includes("instagram") || 
    q.includes("sosmed") || 
    q.includes("social")
  ) {
    return `Berikut saluran komunikasi dan jaringan profesional resmi Firdaus Dhuha Prabowo:
• **WhatsApp:** +62 813-1535-4397 (Tersedia via menu Kontak)
• **Email:** firdausdhuhaprabowo@gmail.com
• **LinkedIn:** [linkedin.com/in/firdaus-dhuha-prabowo-091949386/](https://www.linkedin.com/in/firdaus-dhuha-prabowo-091949386/)
• **GitHub:** [github.com/Firdaus1802](https://github.com/Firdaus1802)
• **Instagram:** [@frdsdhuha_](https://www.instagram.com/frdsdhuha_)`
  }

  if (
    q.includes("asal") || 
    q.includes("tinggal") || 
    q.includes("domisili") || 
    q.includes("lokasi") || 
    q.includes("rumah") || 
    q.includes("tempat tinggal") || 
    q.includes("wonosari") ||
    q.includes("yogyakarta") ||
    q.includes("jogja") ||
    q.includes("tangerang")
  ) {
    return "Firdaus berasal dan saat ini berdomisili di **Wonosari, Yogyakarta, Indonesia**."
  }

  if (
    q.includes("hobi") || 
    q.includes("minat") || 
    q.includes("suka apa") || 
    q.includes("passion") || 
    q.includes("kegiatan") || 
    q.includes("aktivitas")
  ) {
    return "Firdaus berfokus pada eksplorasi arsitektur web modern (Next.js & React), pengembangan backend BaaS (Supabase & Node.js), komputasi awan, serta perancangan antarmuka digital yang presisi."
  }

  if (
    q.includes("kamu siapa") ||
    q.includes("siapa kamu") ||
    q.includes("siapa anda") ||
    q.includes("anda siapa") ||
    q.includes("kamu apa") ||
    q.includes("who are you") ||
    q.includes("siapa bot") ||
    q.includes("bot apa") ||
    q.includes("asisten")
  ) {
    return `Saya adalah **Firdaus Assistant**, asisten AI pribadi yang bertugas mewakili dan menyajikan informasi resmi seputar Firdaus Dhuha Prabowo (Junior Frontend Developer & mahasiswa aktif Universitas Gunadarma, IPK 3.88).

Silakan pilih direktori informasi yang ingin Anda akses:
• **Profil & Latar Belakang Akademik**
• **Portofolio Proyek & Arsitektur Kode**
• **Spesialisasi Tech Stack & Database**
• **Lisensi & Sertifikasi Industri Resmi**
• **Curriculum Vitae (CV) Resmi**
• **Saluran Kontak & Jaringan Profesional**`
  }

  if (
    q.includes("halo") || 
    q.includes("hai") || 
    q.includes("hello") || 
    q.includes("hi") || 
    q.includes("pagi") || 
    q.includes("siang") || 
    q.includes("sore") || 
    q.includes("malam") || 
    q.includes("assalam") || 
    q.includes("permisi") ||
    q.includes("selamat datang")
  ) {
    return `Selamat datang. Saya adalah **Firdaus Assistant**, asisten AI pribadi yang bertugas mewakili dan menyajikan informasi resmi seputar Firdaus Dhuha Prabowo (Junior Frontend Developer & mahasiswa aktif Universitas Gunadarma, IPK 3.88).

Silakan pilih direktori informasi yang ingin Anda akses:
• **Profil & Latar Belakang Akademik** (Gunadarma IPK 3.88)
• **Portofolio Proyek & Arsitektur Kode** (Finzie Joki Platform)
• **Spesialisasi Tech Stack & Database** (React, Next.js, Supabase, Node.js)
• **Lisensi & Sertifikasi Industri Resmi** (10 Lisensi Terverifikasi)
• **Curriculum Vitae (CV) Resmi** (Tersedia Format Cetak A4)
• **Saluran Kontak & Jaringan Profesional** (WhatsApp, LinkedIn, Email)`
  }

  return `Selamat datang. Saya adalah **Firdaus Assistant**, asisten AI pribadi yang bertugas mewakili dan menyajikan informasi resmi seputar Firdaus Dhuha Prabowo (Junior Frontend Developer & mahasiswa aktif Universitas Gunadarma, IPK 3.88).

Silakan pilih direktori informasi yang ingin Anda akses:
• **Profil & Latar Belakang Akademik**
• **Portofolio Proyek & Arsitektur Kode**
• **Spesialisasi Tech Stack & Database**
• **Lisensi & Sertifikasi Industri Resmi**
• **Curriculum Vitae (CV) Resmi**
• **Saluran Kontak & Jaringan Profesional**`
}

export async function POST(req: NextRequest) {
  try {
    const { text, history = [] }: { text: string; history: HistoryEntry[] } = await req.json()

    if (!text) {
      return NextResponse.json({ success: false, message: "Pesan tidak boleh kosong" }, { status: 400 })
    }

    const apiKey = process.env.NVIDIA_APIKEY
    if (!apiKey) {
      const fallbackText = getSmartFallbackResponse(text)
      return new Response(fallbackText, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache",
        },
      })
    }

    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: 'https://integrate.api.nvidia.com/v1',
    })

    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      ...history,
      { role: "user", content: text }
    ];

    const completion = await openai.chat.completions.create({
      model: "thinkingmachines/inkling",
      messages: messages,
      temperature: 0.7,
      max_tokens: 2048,
      stream: true
    })

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const content = chunk.choices?.[0]?.delta?.content || '';
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      }
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive"
      }
    });

  } catch (error) {
    console.error("Chat API Error, using fallback:", error)
    try {
      const body = await req.json().catch(() => ({ text: "" }))
      const fallbackText = getSmartFallbackResponse(body.text || "")
      return new Response(fallbackText, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      })
    } catch {
      return NextResponse.json({ success: false, message: "Gagal memproses pesan." }, { status: 500 })
    }
  }
}
