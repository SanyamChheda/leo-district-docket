'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSearch } from '@/hooks/useSearch'

const SearchBar = () => {
  const { query, setQuery, results } = useSearch()

  const hasResults = useMemo(() => query.trim().length > 0 && results.length > 0, [query, results])

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-[2rem] border border-white/20 bg-slate-950/80 p-6 shadow-glass backdrop-blur-xl">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-pinkAccent">Search</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Quick access for every docket item</h2>
          <p className="mt-2 max-w-2xl text-slate-400">Search docket names, section headings, or content and jump directly to the right page.</p>
        </div>

        <label className="relative block">
          <span className="sr-only">Search portal content</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dockets, topics, or content..."
            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-royalPurple focus:ring-2 focus:ring-royalPurple/20"
          />
        </label>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mt-6">
          {query.trim().length === 0 ? (
            <p className="text-sm text-slate-400">Start typing to search docket names and content.</p>
          ) : hasResults ? (
            <div className="grid gap-4">
              {results.map((result) => (
                <Link
                  key={`${result.docketSlug}-${result.sectionId ?? 'root'}`}
                  href={result.sectionId ? `/docket/${result.docketSlug}#${result.sectionId}` : `/docket/${result.docketSlug}`}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-royalPurple/70 hover:bg-white/10"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-pinkAccent">{result.docketTitle}</p>
                  <p className="mt-2 text-base text-white">{result.sectionHeading ?? 'Docket overview'}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{result.excerpt}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-400">No results found. Try a different keyword.</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default SearchBar
