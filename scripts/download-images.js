import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

// small helper to slugify titles
const slug = (s = '') => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const OUT_DIR = path.resolve(__dirname, '../src/assets/products')
const API = 'https://fakestoreapi.com/products'

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true })
  } catch (err) {
    console.error('Could not create dir', dir, err)
    throw err
  }
}

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await fs.writeFile(dest, buf)
}

async function main() {
  console.log('Fetching product list from API...')
  const res = await fetch(API)
  if (!res.ok) {
    console.error('Failed to fetch product list', res.status)
    process.exit(1)
  }

  const products = await res.json()
  await ensureDir(OUT_DIR)

  for (const p of products) {
    try {
      const url = new URL(p.image)
      const ext = path.extname(url.pathname) || '.jpg'
      const filename = `${p.id}-${slug(p.title)}${ext}`
      const outPath = path.join(OUT_DIR, filename)
      console.log('Downloading', p.image, '->', outPath)
      await download(p.image, outPath)
    } catch (err) {
      console.error('Error downloading image for product', p.id, err)
    }
  }

  console.log('Done. Images saved to', OUT_DIR)
}

main().catch(err => { console.error(err); process.exit(1) })
