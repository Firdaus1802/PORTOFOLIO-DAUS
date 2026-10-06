import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "@/styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000"),
  title: {
    default: "Firdaus | Portfolio",
    template: "%s | Firdaus Portfolio",
  },
  description: "Personal portfolio of Firdaus Dhuha Prabowo, a Junior Frontend Developer and Web Enthusiast passionate about modern web technologies and responsive design.",
  keywords: ["Firdaus", "Portfolio", "Junior Frontend Developer", "Frontend Enthusiast", "Web Development", "Frontend", "Next.js", "React", "JavaScript", "Tailwind CSS"],
  authors: [{ name: "Firdaus Dhuha Prabowo" }],
  creator: "Firdaus Dhuha Prabowo",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Firdaus | Portfolio",
    description: "Personal portfolio of Firdaus Dhuha Prabowo, a Junior Frontend Developer and Web Enthusiast passionate about modern web technologies and responsive design.",
    siteName: "Firdaus Portfolio",
    images: [
      {
        url: "/images/profile-firdaus.jpg",
        width: 1200,
        height: 630,
        alt: "Firdaus Dhuha Prabowo Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firdaus Dhuha Prabowo | Portfolio",
    description: "Personal portfolio of Firdaus Dhuha Prabowo, a Junior Frontend Developer and Web Enthusiast passionate about modern web technologies and responsive design.",
    images: ["/images/profile-firdaus.jpg"],
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

