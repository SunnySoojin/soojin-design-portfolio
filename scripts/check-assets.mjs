#!/usr/bin/env node
/**
 * Lists every image referenced in figma/asset-manifest.json that is missing
 * from /public/images, and every file in /public/images that no manifest key
 * references. Exit code 1 when anything is missing (use in CI if desired).
 *
 *   npm run assets:check
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const manifest = JSON.parse(readFileSync(join(root, 'figma', 'asset-manifest.json'), 'utf8'))
const imageRoot = join(root, manifest.imageRoot)

const keys = Object.keys(manifest.assets)
const missing = keys.filter((k) => !existsSync(join(imageRoot, `${k}.png`)))

function walk(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}
const present = walk(imageRoot).map((p) => relative(imageRoot, p).replace(/\\/g, '/'))
const orphans = present.filter((f) => !keys.includes(f.replace(/\.png$/, '')))

console.log(`Manifest assets: ${keys.length}`)
console.log(`Present:         ${keys.length - missing.length}`)
console.log(`Missing:         ${missing.length}`)
if (missing.length) {
  const byProject = {}
  for (const k of missing) {
    const [proj] = k.split('/')
    byProject[proj] = (byProject[proj] ?? 0) + 1
  }
  for (const [proj, n] of Object.entries(byProject)) console.log(`  - ${proj}: ${n} file(s)`)
  console.log('\nRun `FIGMA_TOKEN=… npm run figma:export` to download them, or place files manually at public/images/<key>.png')
}
if (orphans.length) {
  console.log(`\nFiles not referenced by the manifest (${orphans.length}):`)
  for (const o of orphans) console.log(`  - ${o}`)
}
process.exit(missing.length ? 1 : 0)
