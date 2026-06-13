'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { DocketData } from '@/types/docket'

interface DocketCardProps {
  docket: DocketData
}

const DocketCard = ({ docket }: DocketCardProps) => {
  const expandedTitles: Record<string, string> = {
    'gmt': 'Global Membership Team',
    'glt': 'Global Leadership Team',
    'gst': 'Global Service Team',
    'get': 'Global Extension Team'
  }

  const isExpanded = Boolean(expandedTitles[docket.slug])
  const headerLabel = docket.title
  const title = isExpanded ? expandedTitles[docket.slug] : docket.title

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      className="group rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-glass backdrop-blur-xl transition"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-deepPurple/10 text-2xl">
          {docket.icon}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-pinkAccent">{headerLabel}</p>
          <h2 className="mt-3 text-xl font-semibold text-slate-900">{title}</h2>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">{docket.shortDescription}</p>
      <Link
        href={`/docket/${docket.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royalPurple transition group-hover:text-deepPurple"
      >
        View Docket
        <span aria-hidden="true">→</span>
      </Link>
    </motion.article>
  )
}

export default DocketCard
