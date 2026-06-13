'use client'

import { motion } from 'framer-motion'
import type { TeamMember } from '@/types/docket'

interface TeamCardProps {
  member: TeamMember
}

const TeamCard = ({ member }: TeamCardProps) => {
  const [phone, email] = member.contact.split('|').map((value) => value.trim())

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex flex-col items-center gap-3 bg-slate-950 px-5 py-5 text-center">
        <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-slate-800 shadow-inner">
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-700 text-3xl text-white/90">👤</div>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white">{member.name}</h3>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-400">{member.districtPosition}</p>
        </div>
      </div>

      <div className="space-y-3 p-4 text-sm text-slate-600">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4">
          <p className="font-semibold text-slate-900">Home Club</p>
          <p className="mt-2 text-sm text-slate-700">{member.homeClub}</p>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4">
          <p className="font-semibold text-slate-900">Phone</p>
          <p className="mt-2 text-sm text-slate-700">{phone}</p>
          <p className="mt-4 font-semibold text-slate-900">Email</p>
          <p className="mt-2 text-sm text-slate-700">{email}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default TeamCard
