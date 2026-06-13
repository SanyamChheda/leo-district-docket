'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { docketList } from '@/data/docketMap'

const links = [
  { label: 'Home', href: '/' },
  ...docketList.map((docket) => ({ label: docket.title, href: `/docket/${docket.slug}` }))
]

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold uppercase tracking-[0.22em] text-deepPurple">
          <img src="/leo club logo.png" alt="Leo Logo" className="h-10 w-10 rounded-full object-cover" />
          <span>Leo District 3231 A2</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-royalPurple"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-deepPurple shadow-sm transition hover:border-royalPurple hover:text-royalPurple md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-white/95 px-6 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-3 py-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-lavender hover:text-royalPurple"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
