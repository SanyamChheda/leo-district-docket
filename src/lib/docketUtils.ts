import type { DocketData } from '@/types/docket'
import docketMap from '@/data/docketMap'

export const getAllDockets = (): DocketData[] => Object.values(docketMap)

export const getDocketBySlug = (slug: string): DocketData | null => docketMap[slug] ?? null

export interface SearchResult {
  docketSlug: string
  docketTitle: string
  excerpt: string
  sectionId?: string
  sectionHeading?: string
}

const snippet = (text: string, query: string): string => {
  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const index = lowerText.indexOf(lowerQuery)

  if (index === -1) {
    return ''
  }

  const start = Math.max(0, index - 40)
  const end = Math.min(text.length, index + lowerQuery.length + 40)
  return `${start > 0 ? '…' : ''}${text.slice(start, end)}${end < text.length ? '…' : ''}`
}

export const searchDockets = (query: string): SearchResult[] => {
  if (!query.trim()) {
    return []
  }

  const lowerQuery = query.toLowerCase()
  const results: SearchResult[] = []

  Object.values(docketMap).forEach((docket) => {
    if (docket.title.toLowerCase().includes(lowerQuery) || docket.shortDescription.toLowerCase().includes(lowerQuery)) {
      results.push({
        docketSlug: docket.slug,
        docketTitle: docket.title,
        excerpt: snippet(docket.shortDescription, query) || docket.shortDescription
      })
    }

    docket.sections.forEach((section) => {
      if (
        section.heading.toLowerCase().includes(lowerQuery) ||
        section.content.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          docketSlug: docket.slug,
          docketTitle: docket.title,
          excerpt: snippet(section.content, query) || section.heading,
          sectionId: section.id,
          sectionHeading: section.heading
        })
      }
    })
  })

  return results
}
