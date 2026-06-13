'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SearchBar from '@/components/SearchBar'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,90,174,0.2),_transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(91,42,134,0.7),rgba(59,19,89,0.95))]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mx-auto mb-8 max-w-[360px]">
            <img src="/passion ignites purpose.png" alt="Passion Ignites Purpose" className="h-auto w-full object-contain" />
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-pinkAccent/90">District Schooling Portal</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl">Leo District 3231 A2</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">Passion Ignites Purpose — a premium portal delivering leadership, onboarding, and district training for 2026–27.</p>
        </motion.div>

        <SearchBar />
      </div>
    </section>
  )
}

export default HeroSection
