import react from '@vitejs/plugin-react'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { defineConfig } from 'vite'
import { pageMetadata, siteUrl, socialMetadata } from './src/seo.js'

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }
    return entities[character]
  })
}

function renderMetadata({ path: routePath, title, description }) {
  const canonicalUrl = `${siteUrl}${routePath}`
  const escapedTitle = escapeHtml(title)
  const escapedDescription = escapeHtml(description)

  return [
    `<title>${escapedTitle}</title>`,
    `<meta name="description" content="${escapedDescription}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:title" content="${escapedTitle}" />`,
    `<meta property="og:description" content="${escapedDescription}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Skill2Career" />',
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:image" content="${socialMetadata.image}" />`,
    `<meta property="og:image:width" content="${socialMetadata.imageWidth}" />`,
    `<meta property="og:image:height" content="${socialMetadata.imageHeight}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(socialMetadata.imageAlt)}" />`,
    `<meta name="twitter:card" content="${socialMetadata.twitterCard}" />`,
    `<meta name="twitter:title" content="${escapedTitle}" />`,
    `<meta name="twitter:description" content="${escapedDescription}" />`,
    `<meta name="twitter:image" content="${socialMetadata.image}" />`,
  ].join('\n    ')
}

function replaceMetadataBlock(html, metadata) {
  const metadataBlock = /<!-- seo-metadata-start -->[\s\S]*?<!-- seo-metadata-end -->/g
  const matches = [...html.matchAll(metadataBlock)]
  if (matches.length !== 1) {
    throw new Error(`Expected one SEO metadata block, found ${matches.length}.`)
  }
  return html.replace(metadataBlock, renderMetadata(metadata))
}

function routeMetadataPages() {
  return {
    name: 'route-metadata-pages',
    transformIndexHtml(html) {
      const homeMetadata = renderMetadata(pageMetadata[0])
      if (!html.includes('<!-- seo-metadata -->')) {
        throw new Error('SEO metadata placeholder is missing from index.html.')
      }
      return html.replace(
        '<!-- seo-metadata -->',
        `<!-- seo-metadata-start -->\n    ${homeMetadata}\n    <!-- seo-metadata-end -->`,
      )
    },
    async writeBundle(outputOptions) {
      const outputDirectory = outputOptions.dir
      if (!outputDirectory) {
        throw new Error('Vite build output directory is required to generate route metadata pages.')
      }

      const outputRoot = path.resolve(outputDirectory)
      const indexPath = path.join(outputRoot, 'index.html')
      const homepage = await readFile(indexPath, 'utf8')

      for (const { path: routePath, title, description } of pageMetadata) {
        if (routePath === '/') continue

        const routeMetadata = { path: routePath, title, description }
        const html = replaceMetadataBlock(homepage, routeMetadata)

        const pageDirectory = path.join(outputRoot, routePath.slice(1))
        await mkdir(pageDirectory, { recursive: true })
        await writeFile(path.join(pageDirectory, 'index.html'), html)
      }

      await writeFile(indexPath, replaceMetadataBlock(homepage, pageMetadata[0]))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), routeMetadataPages()],
})
