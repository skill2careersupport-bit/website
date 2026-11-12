import react from '@vitejs/plugin-react'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { defineConfig } from 'vite'
import { pageMetadata, siteUrl } from './src/seo.js'

function routeMetadataPages() {
  return {
    name: 'route-metadata-pages',
    async writeBundle(outputOptions) {
      const outputDirectory = outputOptions.dir
      if (!outputDirectory) {
        throw new Error('Vite build output directory is required to generate route metadata pages.')
      }

      const outputRoot = path.resolve(outputDirectory)
      const homepage = await readFile(path.join(outputRoot, 'index.html'), 'utf8')

      for (const { path: routePath, title, description } of pageMetadata) {
        if (routePath === '/') continue

        const canonicalUrl = `${siteUrl}${routePath}`
        const html = homepage
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(
            /<meta\s+name="description"[\s\S]*?\/>/,
            `<meta name="description" content="${description}" />`,
          )
          .replace(/<link\s+rel="canonical"[^>]*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
          .replace(
            /<meta\s+property="og:title"[^>]*\/>/,
            `<meta property="og:title" content="${title}" />`,
          )
          .replace(
            /<meta\s+property="og:description"[\s\S]*?\/>/,
            `<meta property="og:description" content="${description}" />`,
          )
          .replace(
            /<meta\s+property="og:url"[^>]*\/>/,
            `<meta property="og:url" content="${canonicalUrl}" />`,
          )

        const pageDirectory = path.join(outputRoot, routePath.slice(1))
        await mkdir(pageDirectory, { recursive: true })
        await writeFile(path.join(pageDirectory, 'index.html'), html)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), routeMetadataPages()],
})
