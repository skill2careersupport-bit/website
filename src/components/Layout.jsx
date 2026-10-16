import { useState } from 'react'
import { Link } from 'react-router-dom'
import skill2careerLogo from '../assets/skill2career-logo.png'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Webinars', path: '/webinars' },
  { label: 'Contact', path: '/contact' },
]

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-slate-800">
      <header className="relative z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-[76px] items-center justify-between gap-6">
            <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
              <img src={skill2careerLogo} alt="Skill2Career" className="h-20 w-20 shrink-0 object-contain" />
            </Link>

            <nav className="hidden items-center gap-6 text-[13px] font-semibold text-slate-600 lg:flex xl:gap-7">
              {navItems.map((item) => (
                <Link key={item.label} to={item.path} className="transition hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-navy transition hover:border-primary hover:text-primary lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-5 flex-col gap-1.5">
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
              </span>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-slate-100 py-4 lg:hidden">
              <nav className="flex flex-col gap-1 text-sm font-semibold text-slate-600">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="rounded-lg px-3 py-2.5 transition hover:bg-blue-50 hover:text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1.2fr] lg:gap-10">
            <div className="max-w-sm">
              <Link to="/" className="inline-flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                <img src={skill2careerLogo} alt="Skill2Career" className="h-32 w-32 shrink-0 object-contain" />
              </Link>
              <p className="mt-4 text-sm font-semibold text-cyan-200">Bridging School to Career.</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Helping students build clarity, practical skills, and confidence for the opportunities ahead.
              </p>
              <div className="mt-6 flex items-center gap-3" aria-label="Social media links">
                <a href="https://www.linkedin.com/in/skill2career/" target="_blank" rel="noopener noreferrer" aria-label="Skill2Career on LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-xs font-black text-slate-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-navy">in</a>
                <a href="https://www.instagram.com/_skill2career_/" target="_blank" rel="noopener noreferrer" aria-label="Skill2Career on Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-xs font-black text-slate-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-navy">ig</a>
                <a href="https://x.com/skill2career" target="_blank" rel="noopener noreferrer" aria-label="Skill2Career on X" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-sm font-black text-slate-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-navy">X</a>
                <a href="https://medium.com/@skill2career.support/about" target="_blank" rel="noopener noreferrer" aria-label="Skill2Career on Medium" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-sm font-black text-slate-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-navy">M</a>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Quick Links</h2>
              <nav className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-300">
                <Link to="/" className="transition hover:text-cyan-200">Home</Link>
                <Link to="/about" className="transition hover:text-cyan-200">About</Link>
                <Link to="/programs" className="transition hover:text-cyan-200">Programs</Link>
                <Link to="/webinars" className="transition hover:text-cyan-200">Webinars</Link>
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Support Links</h2>
              <nav className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-300">
                <Link to="/contact" className="transition hover:text-cyan-200">Contact</Link>
                <Link to="/faq" className="transition hover:text-cyan-200">FAQ</Link>
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Stay in the loop</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">Get updates, upcoming events, and fresh opportunities in your inbox.</p>
              <form className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row" onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input id="newsletter-email" type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-full border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" />
                <button type="submit" className="rounded-full bg-cyan px-5 py-3 text-sm font-bold text-navy transition hover:bg-cyan-200">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="mt-14 border-t border-slate-700 pt-6 text-center text-xs text-slate-400">
            © 2026 Skill2Career. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
