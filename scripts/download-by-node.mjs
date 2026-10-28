#!/usr/bin/env node
/**
 * Download Figma MCP asset URLs into /public/images using the manifest's node ids.
 *
 * Use this when the images come from the Figma MCP connector (get_design_context /
 * download_assets) rather than the REST API: those tools return one temporary URL per
 * node. Collect them into a JSON map { "<nodeId>": "<url>", … } and run:
 *
 *   node scripts/download-by-node.mjs path/to/node-urls.json
 *   node scripts/download-by-node.mjs path/to/node-urls.json --force   # overwrite existing files
 *
 * Every node id in the map is looked up in figma/asset-manifest.json and saved as
 * public/images/<key>.png. Unknown node ids and manifest keys with no URL are reported.
 * URLs from the connector expire (hours to days), so run this soon after collecting them.
 */
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const manifest = JSON.parse(readFileSync(join(root, 'figma', 'asset-manifest.json'), 'utf8'))
const outRoot = join(root, manifest.imageRoot)

const [mapPath, ...flags] = process.argv.slice(2)
if (!mapPath) {
  console.error('Usage: node scripts/download-by-node.mjs <node-urls.json> [--force]')
  process.exit(1)
}
const force = flags.includes('--force')
const urls = JSON.parse(readFileSync(resolve(mapPath), 'utf8'))

const byNode = new Map(Object.entries(manifest.assets).map(([key, a]) => [a.node, key]))
let ok = 0
const failed = []
const unknown = []

for (const [node, url] of Object.entries(urls)) {
  const key = byNode.get(node)
  if (!key) {
    unknown.push(node)
    continue
  }
  const dest = join(outRoot, `${key}.png`)
  if (existsSync(dest) && !force) {
    console.log(`· ${key} (exists)`)
    continue
  }
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    if (buf.length < 100 || buf.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
      // not a PNG (expired URL returns HTML) — keep going but flag it
      throw new Error(`not a PNG (${buf.length} bytes)`)
    }
    mkdirSync(dirname(dest), { recursive: true })
    writeFileSync(dest, buf)
    ok++
    console.log(`✔ ${key}  ${(buf.length / 1024).toFixed(0)} KB`)
  } catch (e) {
    failed.push(`${key} (${node}): ${e.message}`)
  }
}

const missing = Object.entries(manifest.assets).filter(([key]) => !existsSync(join(outRoot, `${key}.png`))).map(([k]) => k)
console.log(`\nDownloaded ${ok} · failed ${failed.length} · unknown node ids ${unknown.length} · still missing ${missing.length}/${Object.keys(manifest.assets).length}`)
if (failed.length) console.log('Failed:\n  ' + failed.join('\n  '))
if (unknown.length) console.log('Unknown node ids (not in manifest):\n  ' + unknown.join(', '))
if (missing.length) console.log('Still missing:\n  ' + missing.join('\n  '))
process.exit(failed.length ? 1 : 0)
