// Empties dist/ before an Astro build.
//
// Why this exists: on Node 25 + OneDrive (Windows), OneDrive briefly locks the
// freshly-synced dist/_astro folder. Astro's emptyDir hits EPERM and falls back to
// fs.rmdirSync({ recursive: true }) — an option Node 25 removed — which crashes the
// build. We pre-empty dist ourselves with fs.rmSync (Node-25 safe) and generous
// retries so OneDrive has time to release its lock, leaving Astro nothing to remove.
import { existsSync, readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const dir = 'dist'
if (existsSync(dir)) {
  for (const entry of readdirSync(dir)) {
    rmSync(join(dir, entry), {
      recursive: true,
      force: true,
      maxRetries: 20,
      retryDelay: 300,
    })
  }
}
