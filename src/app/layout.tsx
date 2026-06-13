import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leo District 3231 A2 Schooling Portal 2026–27',
  description: 'A premium schooling portal for Leo District 3231 A2 with dynamic docket pages and leadership training content.',
  metadataBase: new URL('https://leo-district-3231-a2-schooling-portal.vercel.app')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  )
}
