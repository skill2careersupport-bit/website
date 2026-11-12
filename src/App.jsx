import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import FutureXThemesPage from './pages/FutureXThemesPage'
import HomePage from './pages/HomePage'
import ProgramsPage from './pages/ProgramsPage'
import WebinarsPage from './pages/WebinarsPage'
import { getPageMetadata, siteUrl, socialMetadata } from './seo'

function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { path, title, description } = getPageMetadata(pathname)
    const canonicalUrl = `${siteUrl}${path}`

    document.title = title

    const setMetaContent = (selector, attribute, value, content) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, value)
        document.head.append(element)
      }
      element.setAttribute('content', content)
    }

    setMetaContent('meta[name="description"]', 'name', 'description', description)
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', title)
    setMetaContent('meta[property="og:description"]', 'property', 'og:description', description)
    setMetaContent('meta[property="og:type"]', 'property', 'og:type', 'website')
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMetaContent('meta[property="og:site_name"]', 'property', 'og:site_name', 'Skill2Career')
    setMetaContent('meta[property="og:image"]', 'property', 'og:image', socialMetadata.image)
    setMetaContent('meta[property="og:image:width"]', 'property', 'og:image:width', socialMetadata.imageWidth)
    setMetaContent('meta[property="og:image:height"]', 'property', 'og:image:height', socialMetadata.imageHeight)
    setMetaContent('meta[property="og:image:alt"]', 'property', 'og:image:alt', socialMetadata.imageAlt)
    setMetaContent('meta[name="twitter:card"]', 'name', 'twitter:card', socialMetadata.twitterCard)
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMetaContent('meta[name="twitter:image"]', 'name', 'twitter:image', socialMetadata.image)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.append(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [pathname])

  return null
}

function App() {
  return (
    <Layout>
      <PageMetadata />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/futurex-2026/themes" element={<FutureXThemesPage />} />
        <Route path="/webinars" element={<WebinarsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Layout>
  )
}

export default App
