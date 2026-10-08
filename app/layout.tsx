import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "@/styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? (process.env.NEXT_PUBLIC_BASE_URL.startsWith("http") ? process.env.NEXT_PUBLIC_BASE_URL : `https://${process.env.NEXT_PUBLIC_BASE_URL}`)
  : process.env.RAILWAY_PUBLIC_DOMAIN
  ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Firdaus Dhuha Prabowo | Junior Frontend Developer Portfolio",
    template: "%s | Firdaus Dhuha Prabowo",
  },
  description: "Portofolio Firdaus Dhuha Prabowo, Junior Frontend Developer & mahasiswa Universitas Gunadarma. Fokus pada pengembangan web modern Next.js dan React.",
  keywords: [
    "Firdaus Dhuha Prabowo",
    "Firdaus",
    "Junior Frontend Developer",
    "Frontend Developer Indonesia",
    "Universitas Gunadarma",
    "Sistem Informasi Gunadarma",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Web Portfolio",
    "Finzie Joki Service"
  ],
  authors: [{ name: "Firdaus Dhuha Prabowo", url: "https://github.com/Firdaus1802" }],
  creator: "Firdaus Dhuha Prabowo",
  publisher: "Firdaus Dhuha Prabowo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Firdaus Dhuha Prabowo | Junior Frontend Developer",
    description: "Junior Frontend Developer & mahasiswa Universitas Gunadarma. Spesialisasi web modern dengan Next.js, React, & Tailwind.",
    siteName: "Firdaus Dhuha Prabowo Portfolio",
    images: [
      {
        url: "/images/profile-firdaus.png",
        width: 800,
        height: 800,
        alt: "Firdaus Dhuha Prabowo - Junior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firdaus Dhuha Prabowo | Junior Frontend Developer",
    description: "Junior Frontend Developer & mahasiswa Universitas Gunadarma. Spesialisasi web modern dengan Next.js, React, & Tailwind.",
    images: ["/images/profile-firdaus.png"],
    creator: "@Firdaus1802",
  },
  icons: {
    icon: "/images/profile-firdaus.png",
    shortcut: "/images/profile-firdaus.png",
    apple: "/images/profile-firdaus.png",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ZbLhiilDbtLDyIx5eH6Jeoe1jPkXNKId-LhXG1HhLWA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

