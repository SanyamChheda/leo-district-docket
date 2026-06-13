'use client'

import { motion } from 'framer-motion'

interface PageBannerProps {
  title: string
  description: string
}

const PageBanner = ({ title, description }: PageBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-[2rem] border border-white/10 bg-white/90 px-6 py-10 shadow-glass backdrop-blur-xl"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-pinkAccent">{title}</p>
      <p className="mt-4 text-3xl font-semibold text-slate-950">{description}</p>
    </motion.div>
  )
}

export default PageBanner
