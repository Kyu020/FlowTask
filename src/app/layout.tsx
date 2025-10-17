import "./globals.css"
import Navbar from "@/components/navbar"
// import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'FlowTask',
  description: 'A modern web app built with Next.js 13+',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
