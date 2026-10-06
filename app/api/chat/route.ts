import { NextRequest, NextResponse } from "next/server"
export const runtime = 'edge'
import OpenAI from 'openai'

interface HistoryEntry {
  role: "system" | "user" | "assistant"
  content: string
}

function getSmartFallbackResponse(query: string): string {
  const q = query.toLowerCase()

  // 1. Umur, Tanggal Lahir, Usia
  if (
    q.includes("umur") || 
    q.includes("usia") || 
    q.includes("lahir") || 
    q.includes("tanggal lahir") || 
    q.includes("tgl lahir") || 
    q.includes("kapan lahir") || 
    q.includes("ulang tahun") || 
    q.includes("birthday") || 
    q.includes("berapakah umur") || 
    q.includes("berapa umur")
  ) {
    return "Firdaus Dhuha Prabowo lahir pada tanggal **18 Februari 2006** di Tangerang, dan saat ini berusia **20 tahun** (per tahun 2026)."
  }

  // 2. Asal, Domisili, Lokasi, Tempat Tinggal
  if (
    q.includes("asal") || 
    q.includes("tinggal") || 
    q.includes("domisili") || 
    q.includes("lokasi") || 
    q.includes("rumah") || 
    q.includes("tempat tinggal") || 
    q.includes("kota") || 
    q.includes("tangerang")
  ) {
    return "Firdaus berasal dan saat ini berdomisili di **Tangerang, Banten, Indonesia**."
  }

  // 3. Pendidikan, Kuliah, Kampus, IPK, Semester
  if (
    q.includes("kuliah") || 
    q.includes("kampus") || 
    q.includes("pendidikan") || 
    q.includes("ipk") || 
    q.includes("gpa") || 
    q.includes("gunadarma") || 
    q.includes("jurusan") || 
    q.includes("sekolah") || 
    q.includes("mahasiswa")
  ) {
    return "Firdaus adalah mahasiswa aktif di **Universitas Gunadarma** dengan IPK yang sangat baik yaitu **3.88 / 4.00**, fokus pada pengembangan sistem informasi dan pemrograman antarmuka web modern."
  }

  // 4. Proyek, Karya, Finzie, Roblox, Joki
  if (
    q.includes("projek") || 
    q.includes("project") || 
    q.includes("karya") || 
    q.includes("finzie") || 
    q.includes("joki") || 
    q.includes("roblox") || 
    q.includes("web yang dibuat") || 
    q.includes("aplikasi")
  ) {
    return "Proyek utama yang dibangun Firdaus adalah **Finzie Joki Service** ([finziejokiservice.vercel.app](https://finziejokiservice.vercel.app/)):\n- **Deskripsi**: Platform web penyedia layanan jasa joki game Roblox (CDID, DDS, Eagle Nation) 100% pengerjaan manual.\n- **Teknologi**: Next.js, React.js, Tailwind CSS, dan Vercel Cloud Deployment.\n- **Fitur**: Antarmuka modern responsif, katalog layanan game, alur pemesanan 4 langkah, dan integrasi WhatsApp."
  }

  // 5. Back-End, Node.js, Supabase, Database, API, Postman, Python
  if (
    q.includes("backend") || 
    q.includes("back-end") || 
    q.includes("back end") || 
    q.includes("supabase") || 
    q.includes("database") || 
    q.includes("db") || 
    q.includes("node") || 
    q.includes("api") || 
    q.includes("rest") || 
    q.includes("postman") || 
    q.includes("server")
  ) {
    return "Untuk bidang **Back-End & Database**, Firdaus menguasai:\n- **Supabase**: Backend-as-a-Service, database PostgreSQL, auth & storage.\n- **Node.js**: Membangun web service dan RESTful API dari dasar.\n- **RESTful API Architecture**: Penanganan routing, HTTP request, dan respons JSON.\n- **Postman**: Pengujian dan automation testing API.\n- **Python**: Struktur data, logika pemrograman, dan pengolahan data.\nSemua keahlian ini telah divalidasi melalui sertifikasi resmi Dicoding Indonesia."
  }

  // 6. Frontend, React, Next.js, JavaScript, Tailwind, CSS, HTML
  if (
    q.includes("frontend") || 
    q.includes("front-end") || 
    q.includes("front end") || 
    q.includes("react") || 
    q.includes("next") || 
    q.includes("javascript") || 
    q.includes("tailwind") || 
    q.includes("css") || 
    q.includes("html") || 
    q.includes("framer")
  ) {
    return "Keahlian utama **Frontend Web Development** Firdaus meliputi:\n- **Framework & Libs**: React.js, Next.js, Framer Motion.\n- **Bahasa & Styling**: JavaScript (ES6+), Tailwind CSS, HTML5, CSS3 modern.\n- **Fokus**: Pembuatan tampilan web yang bersih, cepat, ramah pengguna (UI/UX), dan responsif di smartphone maupun desktop."
  }

  // 7. Tech Stack umum, Keterampilan, Skill, Bahasa Pemrograman
  if (
    q.includes("skill") || 
    q.includes("tech") || 
    q.includes("stack") || 
    q.includes("keahlian") || 
    q.includes("bahasa") || 
    q.includes("bisa apa") || 
    q.includes("kemampuan")
  ) {
    return "Daftar Tech Stack & Keahlian Firdaus:\n1. **Frontend**: React.js, Next.js, JavaScript, Tailwind CSS, HTML5, CSS3, Framer Motion.\n2. **Back-End & Database**: Node.js, Supabase, RESTful API, Postman, Python.\n3. **Cloud & AI**: Microsoft Azure AI, AWS Cloud Infrastructure.\n4. **Tools**: Git, GitHub, VS Code, Vercel, Microsoft Office (BNSP Certified)."
  }

  // 8. Sertifikat, Sertifikasi, Lisensi, Cisco, BNSP, Dicoding, Raharja
  if (
    q.includes("sertifikat") || 
    q.includes("sertifikasi") || 
    q.includes("certificate") || 
    q.includes("lisensi") || 
    q.includes("cisco") || 
    q.includes("bnsp") || 
    q.includes("raharja") || 
    q.includes("dicoding") || 
    q.includes("kredensial")
  ) {
    return "Firdaus memiliki **10 sertifikasi resmi terverifikasi**:\n• **Cisco**: Introduction to Cybersecurity (2026)\n• **BNSP Indonesia**: Junior Office Operator (ID: 10458184)\n• **Universitas Raharja**: Uji Kompetensi Ms. Office (2024)\n• **Dicoding**: Dasar Pemrograman JavaScript (ID: `07Z6JO4DJXQR`)\n• **Dicoding**: Back-End Pemula JavaScript (ID: `53XEK21YVXRN`)\n• **Dicoding**: Pemrograman dengan Python (ID: `MRZM621JKPYQ`)\n• **Dicoding & Microsoft**: Gen AI di Azure (ID: `GRX5J7YRKX0M`)\n• **Dicoding & AWS**: Dasar Cloud & Gen AI AWS (ID: `MRZM6R97RPYQ`)\n• **Dicoding & Microsoft**: Data Science Fabric (ID: `JLX15O22NZ72`)\n• **Dicoding & DBS**: Financial Literacy (ID: `JMZVVKDD3ZN9`)"
  }

  // 9. CV, Resume, Download CV, PDF, Lamaran Kerja
  if (
    q.includes("cv") || 
    q.includes("resume") || 
    q.includes("download cv") || 
    q.includes("cetak cv") || 
    q.includes("pdf") || 
    q.includes("lamaran")
  ) {
    return "Anda dapat melihat dan mengunduh berkas CV resmi Firdaus langsung pada halaman [**Curriculum Vitae**](/cv). Halaman tersebut telah dioptimasi untuk cetak / simpan dalam format standar A4."
  }

  // 10. Kontak, WhatsApp, Email, Instagram, LinkedIn, No HP
  if (
    q.includes("kontak") || 
    q.includes("contact") || 
    q.includes("email") || 
    q.includes("wa") || 
    q.includes("whatsapp") || 
    q.includes("hubungi") || 
    q.includes("telepon") || 
    q.includes("no hp") || 
    q.includes("nomor") || 
    q.includes("instagram") || 
    q.includes("linkedin") || 
    q.includes("github") || 
    q.includes("sosmed")
  ) {
    return "Berikut saluran komunikasi resmi Firdaus:\n• **WhatsApp**: [+62 813-1535-4397](https://wa.me/6281315354397)\n• **Email**: [Firdausdhuhaprabowo@gmail.com](mailto:Firdausdhuhaprabowo@gmail.com)\n• **LinkedIn**: [Firdaus Dhuha Prabowo](https://www.linkedin.com/in/firdaus-dhuha-prabowo-091949386/)\n• **Instagram**: [@frdsdhuha_](https://www.instagram.com/frdsdhuha_)\n• **GitHub**: [github.com/Firdaus1802](https://github.com/Firdaus1802)"
  }

  // 11. Minat, Hobi, Tertarik, Passion
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

  // 12. Sapaan / Greeting
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
    return `Selamat datang. Saya Firdaus Dhuha Prabowo, Junior Frontend Developer berbasis di Tangerang dan mahasiswa aktif Universitas Gunadarma (IPK 3.88). Saya berfokus pada arsitektur web modern, performa tinggi, dan antarmuka digital yang presisi.

Silakan pilih direktori informasi yang ingin Anda akses:
• **Profil & Latar Belakang Akademik** (Gunadarma IPK 3.88)
• **Portofolio Proyek & Arsitektur Kode** (Finzie Joki Platform)
• **Spesialisasi Tech Stack & Database** (React, Next.js, Supabase, Node.js)
• **Lisensi & Sertifikasi Industri Resmi** (10 Lisensi Terverifikasi)
• **Curriculum Vitae (CV) Resmi** (Tersedia Format Cetak A4)
• **Saluran Kontak & Jaringan Profesional** (WhatsApp, LinkedIn, Email)`
  }

  // 13. Default Friendly Overview
  return `Selamat datang. Saya Firdaus Dhuha Prabowo, Junior Frontend Developer berbasis di Tangerang dan mahasiswa aktif Universitas Gunadarma (IPK 3.88). Saya berfokus pada arsitektur web modern, performa tinggi, dan antarmuka digital yang presisi.

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
