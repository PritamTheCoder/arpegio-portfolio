export type PostCategory =
  | 'Paper Breakdowns'
  | 'Experiment Notes'
  | 'Implementation Lessons'
  | 'AI Engineering'

export interface Post {
  title: string
  category: PostCategory
  date: string
  excerpt: string
  href?: string
}

// Seed posts here when ready. Empty array renders the "coming soon" state.
export const posts: Post[] = []

export const postsEmptyNote =
  'Writing in progress — paper breakdowns, experiment notes, and engineering write-ups coming soon.'
