import { useMemo, useState } from 'react'
import type { SearchResult } from '@/lib/docketUtils'
import { searchDockets } from '@/lib/docketUtils'

export const useSearch = () => {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    return searchDockets(query)
  }, [query])

  return {
    query,
    setQuery,
    results
  }
}
