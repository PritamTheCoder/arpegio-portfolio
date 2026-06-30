export type PaperStatus =
  | 'Published'
  | 'Under Review'
  | 'Preprint'
  | 'In Progress'

export interface Paper {
  title: string
  status: PaperStatus
  note?: string
}

// No papers published yet — entries will be added soon.
export const papers: Paper[] = []

export const papersEmptyNote =
  'Research papers, benchmarks, and manuscripts are on the way. Check back soon, or reach out to discuss ongoing work.'
