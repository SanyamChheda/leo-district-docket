'use client'

import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import type { DocketSection } from '@/types/docket'

interface ContentSectionProps {
  section: DocketSection
}

const ContentSection = ({ section }: ContentSectionProps) => {
  const isDias = section.id === 'dias'

  return (
    <motion.section
      id={section.id}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-150px' }}
      transition={{ duration: 0.55 }}
      className="rounded-[2rem] border border-white/10 bg-white/90 p-8 shadow-glass backdrop-blur-xl"
    >
      <h3 className="text-2xl font-semibold text-slate-950">{section.heading}</h3>
      <div className="mt-5 leading-8 text-slate-700">
        <ReactMarkdown
          components={{
            strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
            p: ({ node, ...props }) => <p className="mt-5" {...props} />,
            img: ({ node, ...props }) => (
              isDias ? (
                <img className="mt-5 w-full object-cover" {...props} />
              ) : (
                <img className="mt-5 h-96 w-64 rounded-lg border border-slate-200 object-contain inline-block mx-2" {...props} />
              )
            )
          }}
        >
          {section.content.split('\n').map((line) => line.trimStart()).join('\n')}
        </ReactMarkdown>
      </div>
    </motion.section>
  )
}

export default ContentSection
