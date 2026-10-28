import manifest from '../../figma/asset-manifest.json'

export interface ManifestAsset {
  node: string
  frame: string
  name: string
  w: number
  h: number
}

export const assetManifest = manifest as {
  fileKey: string
  fileName: string
  imageRoot: string
  assets: Record<string, ManifestAsset>
}

/** Public URL (relative to Vite base) of an exported Figma image. */
export function assetSrc(key: string): string {
  return `/images/${key}.png`
}

/** Figma metadata for an asset key (dimensions, node id). */
export function assetMeta(key: string): ManifestAsset | undefined {
  return assetManifest.assets[key]
}
