#!/usr/bin/env node
/**
 * Export the original artwork from the Figma file into /public/images.
 *
 * Usage:
 *   FIGMA_TOKEN=figd_xxx npm run figma:export            # all missing assets
 *   FIGMA_TOKEN=figd_xxx npm run figma:export -- --force  # re-download everything
 *   FIGMA_TOKEN=figd_xxx npm run figma:export -- ai-brick # only keys starting with "ai-brick"
 *
 * Get a personal access token at Figma → Settings → Security → Personal access tokens
 * (scope: File content → Read). Never commit the token.
 *
 * Strategy (preserves the ORIGINAL uploaded image, uncropped, whenever one exists):
 *   1. GET /v1/files/:key/nodes?ids=…  → find each node's IMAGE fill → imageRef
 *   2. GET /v1/files/:key/images        → imageRef → original download URL
 *   3. Nodes without an image fill (vector art) fall back to a 2× PNG render via /v1/images.
 */
import { readFileSync, existsSync, mkdirSync, writeFileSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const manifestPath = join(root, 'figma', 'asset-manifest.json')
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))

const token = process.env.FIGMA_TOKEN
if (!token) {
  console.error('✖ FIGMA_TOKEN is not set. Create one at https://www.figma.com/settings → Personal access tokens.')
  process.exit(1)
}

const args = process.argv.slice(2)
const force = args.includes('--force')
const prefix = args.find((a) => !a.startsWith('--'))
const outRoot = join(root, manifest.imageRoot)
const fileKey = manifest.fileKey
const API = 'https://api.figma.com'

const headers = { 'X-Figma-Token': token }

async function figma(path) {
  const res = await fetch(`${API}${path}`, { headers })
  if (!res.ok) throw new Error(`${path} → HTTP ${res.status} ${await res.text()}`)
  return res.json()
}

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`download ${url} → HTTP ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, buf)
  return buf.length
}

/** Depth-first search for the first IMAGE fill in a node subtree. */
function findImageRef(node) {
  for (const fill of node.fills ?? []) if (fill.type === 'IMAGE' && fill.imageRef && fill.visible !== false) return fill.imageRef
  for (const child of node.children ?? []) {
    const ref = findImageRef(child)
    if (ref) return ref
  }
  return null
}

const entries = Object.entries(manifest.assets).filter(([key]) => !prefix || key.startsWith(prefix))
const todo = entries.filter(([key]) => force || !existsSync(join(outRoot, `${key}.png`)))
console.log(`Manifest: ${entries.length} assets · to download: ${todo.length}`)
if (todo.length === 0) process.exit(0)

// 1) node data (chunks of 50 ids)
const nodes = {}
for (let i = 0; i < todo.length; i += 50) {
  const ids = todo.slice(i, i + 50).map(([, a]) => a.node).join(',')
  const data = await figma(`/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(ids)}&depth=3`)
  Object.assign(nodes, data.nodes)
}

// 2) original image urls
const { meta } = await figma(`/v1/files/${fileKey}/images`)
const imageUrls = meta?.images ?? {}

// 3) render fallbacks
const needRender = []
let ok = 0
for (const [key, a] of todo) {
  const node = nodes[a.node]?.document
  const ref = node ? findImageRef(node) : null
  const dest = join(outRoot, `${key}.png`)
  if (ref && imageUrls[ref]) {
    try {
      const bytes = await download(imageUrls[ref], dest)
      ok++
      console.log(`✔ ${key}  (original, ${(bytes / 1024).toFixed(0)} KB)`)
    } catch (e) {
      console.warn(`⚠ ${key}: original failed (${e.message}); will render`)
      needRender.push([key, a])
    }
  } else {
    needRender.push([key, a])
  }
}

if (needRender.length) {
  for (let i = 0; i < needRender.length; i += 50) {
    const chunk = needRender.slice(i, i + 50)
    const ids = chunk.map(([, a]) => a.node).join(',')
    const data = await figma(`/v1/images/${fileKey}?ids=${encodeURIComponent(ids)}&format=png&scale=2`)
    for (const [key, a] of chunk) {
      const url = data.images?.[a.node]
      const dest = join(outRoot, `${key}.png`)
      if (!url) {
        console.warn(`✖ ${key}: no render URL for node ${a.node}`)
        continue
      }
      const bytes = await download(url, dest)
      ok++
      console.log(`✔ ${key}  (render @2x, ${(bytes / 1024).toFixed(0)} KB)`)
    }
  }
}

console.log(`\nDone: ${ok}/${todo.length} files written to ${outRoot}`)
const big = todo.filter(([key]) => existsSync(join(outRoot, `${key}.png`)) && statSync(join(outRoot, `${key}.png`)).size > 1_500_000)
if (big.length) console.log(`ℹ ${big.length} files exceed 1.5 MB — consider running \`npm run images:optimize\` before committing.`)
