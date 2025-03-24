import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackgroundGrid from "@/components/background-grid"
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FreelancerDevs | Web Development, UI/UX & Digital Marketing Experts",
  description: "Expert web development, UI/UX design, and digital marketing services to grow your business online. Build stunning websites, optimize for SEO, and drive engagement with our custom solutions.",
  icons: {
      href: "/favicon.ico",
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.png",
  },
  keywords: [
    "FreelancerDevs",
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO",
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "E-commerce Development",
    "Custom Software",
    "Branding",
    "Social Media Marketing",
    "PPC Advertising",
    "Website Optimization",
    "Conversion Rate Optimization",
    "Product Strategy",
    "Business Growth",
    "Automation Testing",
    "Quality Assurance",
  ],
  generator: "FreelancerDevs",
  creator: "FreelancerDevs",
  applicationName: "FreelancerDevs | Web Development & Digital Marketing Agency",
  openGraph: {
    title: "FreelancerDevs | Web Development & Digital Marketing Agency",
    description: "Expert web development, UI/UX design, and digital marketing services to grow your business online. Build stunning websites, optimize for SEO, and drive engagement with our custom solutions.",
    url: "https://stage.freelancerdevs.com",
    siteName: "FreelancerDevs",
    images: [
      {
        url: "https://stage.freelancerdevs.com/logo-og.svg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "FreelancerDevs | Web Development & Digital Marketing Agency",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@freelancerdevs", // Replace with your actual Twitter handle
    title: "FreelancerDevs - Web Development & Digital Marketing Agency",
    description:
      "FreelancerDevs offers high-quality web development, UI/UX design, and digital marketing services. Build, scale, and grow your business with our expert solutions.",
    images: ["https://stage.freelancerdevs.com/logo-og.svg"], // Replace with actual Twitter OG image
  },
  robots: "index, follow",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen bg-background text-foreground">
            <BackgroundGrid />
            <div className="relative z-10 flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                <div>
                  {children}
                  <SpeedInsights />
                  <Toaster />
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-5G5YZMHH1J" />
    </html>
  )
}



import './globals.css'
