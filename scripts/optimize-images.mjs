// One-off image optimizer: shrinks large source images in assets/ into web-ready
// WebP files under assets/optimized/. Run with: node scripts/optimize-images.mjs
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = path.join(root, 'assets')
const out = path.join(src, 'optimized')

const jobs = [
  { in: 'argus.png', out: 'argus.webp', width: 1200, quality: 80 },
  { in: 'brain-tu.png', out: 'brain-tu.webp', width: 1200, quality: 80 },
  { in: 'cerv.png', out: 'cerv.webp', width: 1200, quality: 80 },
  { in: 'profile-picture.jpeg', out: 'profile-picture.webp', width: 640, quality: 82 },
]

await mkdir(out, { recursive: true })

for (const job of jobs) {
  const dest = path.join(out, job.out)
  await sharp(path.join(src, job.in))
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(dest)
  const { size } = await sharp(dest).metadata().then(() => import('node:fs/promises')).then((fs) => fs.stat(dest))
  console.log(`${job.out.padEnd(24)} ${(size / 1024).toFixed(0)} kB`)
}
