'use client'

import { motion } from 'framer-motion'
import type { DocketSection } from '@/types/docket'

interface SectionNavigationProps {
  sections: DocketSection[]
}

const SectionNavigation = ({ sections }: SectionNavigationProps) => {
  if (!sections.length) {
    return null
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-24 z-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[2rem] border border-white/10 bg-white/80 p-5 shadow-glass backdrop-blur-xl"
      aria-label="Docket section navigation"
    >
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-pinkAccent">Section Navigation</p>
      <div className="space-y-3">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block rounded-2xl border border-white/15 bg-slate-950/95 px-4 py-3 text-sm text-slate-200 transition hover:border-royalPurple hover:bg-royalPurple/10 hover:text-white"
          >
            <span className="mr-2 font-semibold text-slate-100">{index + 1}.</span>
            {section.heading}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}

export default SectionNavigation
