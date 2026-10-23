import earthImage from '../assets/earth-space.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function HomePage() {
  const carouselRef = useRef(null)
  const isInteractingRef = useRef(false)
  const lastScrollLeftRef = useRef(0)

  const categories = [
    {
      title: 'Career Guidance',
      description: 'Discover your strengths and find a clear direction for the road ahead.',
      href: '#career-guidance',
      iconTone: 'bg-blue-50 text-primary group-hover:bg-primary',
      linkTone: 'text-primary',
      icon: <><circle cx="12" cy="7" r="3" /><path d="M5 20a7 7 0 0 1 14 0M17 4.5a3 3 0 0 1 0 5.1M19 13a5 5 0 0 1 2 4" /></>,
    },
    {
      title: 'Coding & Programming',
      description: 'Learn to think like a builder and create with the language of technology.',
      href: '#coding',
      iconTone: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500',
      linkTone: 'text-cyan-600',
      icon: <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />,
    },
    {
      title: 'AI & Emerging Technology',
      description: 'Explore the ideas and tools shaping how we learn, work, and innovate.',
      href: '#ai-technology',
      iconTone: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600',
      linkTone: 'text-violet-600',
      icon: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /><circle cx="12" cy="12" r="4" /><path d="M14.5 9.5 17 7" /></>,
    },
    {
      title: 'College Readiness',
      description: 'Prepare for college life with stronger habits, choices, and confidence.',
      href: '#college-readiness',
      iconTone: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500',
      linkTone: 'text-amber-600',
      icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V5a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 5.5v14Z" /><path d="M8 7h7M8 11h7" /></>,
    },
    {
      title: 'Future-Ready Skills',
      description: 'Grow the communication, problem-solving, and digital skills tomorrow demands.',
      href: '#future-skills',
      iconTone: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500',
      linkTone: 'text-emerald-600',
      icon: <><path d="M12 3 4 7l8 4 8-4-8-4Z" /><path d="m4 12 8 4 8-4M4 17l8 4 8-4" /></>,
    },
    {
      title: 'Webinars & Workshops',
      description: 'Learn from mentors and industry voices through practical, live experiences.',
      href: '#events',
      iconTone: 'bg-rose-50 text-rose-600 group-hover:bg-rose-500',
      linkTone: 'text-rose-600',
      icon: <><rect height="14" rx="2" width="18" x="3" y="5" /><path d="m10 9 5 3-5 3V9ZM7 19v2M17 19v2" /></>,
    },
  ]

  const renderCategoryCards = (isDuplicate = false) => categories.map((category) => (
    <article
      className="programs-carousel__card group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_22px_45px_rgba(37,99,235,0.13)]"
      key={`${isDuplicate ? 'duplicate-' : ''}${category.title}`}
    >
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${category.iconTone} transition group-hover:text-white`}>
        <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">{category.icon}</svg>
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug text-navy">{category.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
      <a href={category.href} tabIndex={isDuplicate ? -1 : undefined} className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold transition group-hover:gap-3 ${category.linkTone}`}>
        Learn More <span aria-hidden="true">→</span>
      </a>
    </article>
  ))

  useEffect(() => {
    const carousel = carouselRef.current
    const firstGroup = carousel?.querySelector('.programs-carousel__group')
    const track = carousel?.querySelector('.programs-carousel__track')
    if (!carousel || !firstGroup || !track) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hoverCapable = window.matchMedia('(hover: hover)')
    const getLoopDistance = () => {
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
      return firstGroup.getBoundingClientRect().width + gap
    }

    carousel.scrollLeft = 0
    lastScrollLeftRef.current = carousel.scrollLeft

    let frameId
    let previousTime
    let pendingScroll = 0
    const animate = (time) => {
      if (previousTime === undefined) previousTime = time
      const elapsed = Math.min(time - previousTime, 50)
      previousTime = time

      const isHovered = hoverCapable.matches && carousel.matches(':hover')
      const hasFocus = carousel.contains(document.activeElement)
      if (!reducedMotion.matches && !isInteractingRef.current && !isHovered && !hasFocus) {
        pendingScroll += elapsed * 0.03
        if (pendingScroll >= 1) {
          carousel.scrollLeft = Math.round(carousel.scrollLeft + pendingScroll)
          pendingScroll = 0
          const loopDistance = getLoopDistance()
          if (carousel.scrollLeft >= loopDistance) carousel.scrollLeft -= loopDistance
          lastScrollLeftRef.current = carousel.scrollLeft
        }
      }

      frameId = window.requestAnimationFrame(animate)
    }

    const handleScroll = () => {
      pendingScroll = 0
      const loopDistance = getLoopDistance()
      const currentScrollLeft = carousel.scrollLeft
      if (currentScrollLeft >= loopDistance && currentScrollLeft > lastScrollLeftRef.current) {
        carousel.scrollLeft = currentScrollLeft - loopDistance
      } else if (currentScrollLeft <= 0 && currentScrollLeft < lastScrollLeftRef.current) {
        carousel.scrollLeft = currentScrollLeft + loopDistance
      }
      lastScrollLeftRef.current = carousel.scrollLeft
    }

    carousel.addEventListener('scroll', handleScroll, { passive: true })
    frameId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frameId)
      carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <section
        id="home"
        className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-slate-950"
      >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${earthImage})`, backgroundPosition: 'center right' }}
      />
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />
      <div aria-hidden="true" className="hero-network pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <svg className="h-full w-full" viewBox="0 0 1000 700" preserveAspectRatio="none" fill="none">
          <g className="hero-network__lines" stroke="#67e8f9" strokeWidth="1.2">
            <path d="M560 155 C675 110 745 168 835 120" />
            <path d="M560 155 C610 245 690 270 760 235" />
            <path d="M760 235 C820 190 865 220 930 185" />
            <path d="M760 235 C740 335 805 390 900 365" />
            <path d="M560 155 C520 255 580 360 650 420" />
            <path d="M650 420 C735 455 820 435 900 365" />
            <path d="M650 420 C610 500 690 570 785 545" />
          </g>
          <g className="hero-network__nodes" fill="#a5f3fc" stroke="#22d3ee" strokeWidth="2">
            <circle cx="560" cy="155" r="4" />
            <circle cx="835" cy="120" r="3" />
            <circle cx="760" cy="235" r="5" />
            <circle cx="930" cy="185" r="3" />
            <circle cx="900" cy="365" r="4" />
            <circle cx="650" cy="420" r="5" />
            <circle cx="785" cy="545" r="3" />
          </g>
          <g className="hero-network__particles" fill="#fff">
            <circle r="2"><animateMotion dur="8s" repeatCount="indefinite" path="M560 155 C610 245 690 270 760 235" /></circle>
            <circle r="1.5"><animateMotion dur="11s" repeatCount="indefinite" path="M650 420 C735 455 820 435 900 365" /></circle>
            <circle r="1.5"><animateMotion dur="9s" repeatCount="indefinite" path="M560 155 C675 110 745 168 835 120" /></circle>
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-100/80 bg-slate-950/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_18px_rgba(6,182,212,0.16)]">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_0_4px_rgba(6,182,212,0.15)]" />
            Your future starts here
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[4.4rem]">
            Build Skills. <span className="text-white">Discover Careers.</span> Be Ready for College.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/90 sm:text-lg">
            Skill2Career helps 11th, 12th, and college students gain career clarity, build future-ready skills, and take confident steps toward the opportunities ahead.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/programs" className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-blue-700">
              Explore Programs
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/webinars" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary">
              Upcoming Events
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/20 pt-5 text-xs font-semibold text-slate-300">
            <span><strong className="mr-1 text-lg text-white">11th–12th</strong> students</span>
            <span><strong className="mr-1 text-lg text-white">College</strong> ready</span>
            <span><strong className="mr-1 text-lg text-white">1:1</strong> guidance</span>
          </div>
        </div>
      </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-8 bg-cyan" />
              Why Skill2Career?
              <span className="h-px w-8 bg-cyan" />
            </div>
            <h2 className="text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl">
              The Gap Between Education and Career
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Students often reach college without enough career clarity, practical exposure, or future-ready skills. Skill2Career helps close that gap with the direction and experiences they need to move forward with confidence.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="m12 8 1.7 3.3L17 13l-3.3 1.7L12 18l-1.7-3.3L7 13l3.3-1.7L12 8Z" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">Career Clarity</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Understand your strengths, interests, and the paths that fit your future.</p>
            </article>

            <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_20px_45px_rgba(6,182,212,0.12)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 18h16M6 18V9l6-4 6 4v9M9 18v-4h6v4M8 10h.01M12 10h.01M16 10h.01" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">Practical Skills</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Build real-world abilities that turn classroom learning into confident action.</p>
            </article>

            <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_45px_rgba(124,58,237,0.12)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M8 10h.01M12 10h.01M16 10h.01" /><path d="M19 5h2v4" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">Industry Exposure</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Meet the people, ideas, and experiences that make career possibilities feel real.</p>
            </article>

            <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_20px_45px_rgba(245,158,11,0.12)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3M5.6 18.4l2.1-2.1M18.4 18.4l-2.1-2.1M21 12h-3M18.4 5.6l-2.1 2.1M12 18v3" /><circle cx="12" cy="12" r="4" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">Future Readiness</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Develop the mindset and momentum to adapt, learn, and thrive in what comes next.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="programs" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                <span className="h-px w-8 bg-cyan" />
                Explore our programs
              </div>
              <h2 className="text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl">Skills That Prepare You for the Future</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Focused learning experiences to help you make informed choices, build practical confidence, and take your next step with purpose.
              </p>
            </div>
            <div className="hidden text-right text-sm font-semibold text-slate-400 lg:block">Learn by doing. Grow with direction.</div>
          </div>

          <style>{`
            .programs-carousel {
              overflow-x: auto;
              overflow-y: hidden;
              overscroll-behavior-x: contain;
              scrollbar-color: #cbd5e1 transparent;
              scrollbar-width: thin;
              -webkit-overflow-scrolling: touch;
              touch-action: pan-x pan-y;
            }
            .programs-carousel:focus-visible {
              outline: 3px solid rgba(37, 99, 235, .35);
              outline-offset: 4px;
            }
            .programs-carousel__track,
            .programs-carousel__group {
              display: flex;
              width: max-content;
              gap: 16px;
            }
            .programs-carousel__group {
              flex: 0 0 auto;
            }
            .programs-carousel__card {
              display: flex;
              width: clamp(260px, 28vw, 300px);
              min-height: 270px;
              flex: 0 0 clamp(260px, 28vw, 300px);
              flex-direction: column;
            }
            .programs-carousel__card a:focus-visible {
              border-radius: 4px;
              outline: 3px solid rgba(37, 99, 235, .35);
              outline-offset: 4px;
            }
            @media (prefers-reduced-motion: reduce) {
              .programs-carousel__card {
                transition: none;
              }
            }
          `}</style>
          <div
            aria-label="Explore programs"
            className="programs-carousel mt-12 rounded-3xl lg:mt-16"
            onKeyDown={(event) => {
              if (event.target !== event.currentTarget) return
              if (event.key === 'ArrowRight') {
                event.preventDefault()
                event.currentTarget.scrollLeft += 316
              } else if (event.key === 'ArrowLeft') {
                event.preventDefault()
                event.currentTarget.scrollLeft -= 316
              }
            }}
            onPointerCancel={(event) => {
              if (event.pointerType === 'touch') isInteractingRef.current = false
            }}
            onPointerDown={(event) => {
              if (event.pointerType === 'touch') isInteractingRef.current = true
            }}
            onPointerUp={(event) => {
              if (event.pointerType === 'touch') isInteractingRef.current = false
            }}
            ref={carouselRef}
            role="region"
            tabIndex={0}
          >
            <div className="programs-carousel__track">
              <div className="programs-carousel__group">{renderCategoryCards()}</div>
              <div aria-hidden="true" className="programs-carousel__group">{renderCategoryCards(true)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="trust-section relative overflow-hidden bg-[#030712] py-20 text-white sm:py-24 lg:py-28">
        <style>{`
          .trust-section { isolation: isolate; }
          .trust-section::before { content: ''; position: absolute; inset: 0; z-index: -2; opacity: .48; background-image: radial-gradient(circle at 12% 20%, rgba(103,232,249,.7) 0 1px, transparent 1.5px), radial-gradient(circle at 78% 18%, rgba(255,255,255,.5) 0 1px, transparent 1.5px), radial-gradient(circle at 62% 76%, rgba(167,139,250,.45) 0 1px, transparent 1.5px); background-size: 260px 220px, 370px 300px, 460px 360px; animation: trust-stars 24s linear infinite; }
          .trust-section::after { content: ''; position: absolute; inset: 0; z-index: -1; background: radial-gradient(circle at 84% 12%, rgba(37,99,235,.24), transparent 28%), linear-gradient(180deg, rgba(3,7,18,.35), rgba(3,7,18,.96)); }
          .trust-card { border: 1px solid rgba(125,211,252,.2); background: linear-gradient(145deg, rgba(15,31,58,.78), rgba(7,14,31,.72)); box-shadow: inset 0 1px rgba(255,255,255,.06), 0 18px 50px rgba(0,0,0,.2); backdrop-filter: blur(18px); transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease; }
          .trust-card:hover { transform: translateY(-6px); border-color: rgba(103,232,249,.62); box-shadow: 0 0 28px rgba(34,211,238,.16), 0 20px 55px rgba(0,0,0,.28); }
          .trust-reveal { animation: trust-reveal .7s ease both; }
          .trust-reveal:nth-child(2) { animation-delay: .08s; }.trust-reveal:nth-child(3) { animation-delay: .16s; }.trust-reveal:nth-child(4) { animation-delay: .24s; }
          @keyframes trust-stars { to { background-position: 260px 220px, -370px 300px, 460px -360px; } }
          @keyframes trust-reveal { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
          @media (prefers-reduced-motion: reduce) { .trust-section::before, .trust-reveal { animation: none; } .trust-card { transition: none; } }
        `}</style>
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              <span className="h-px w-8 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
              Built for the journey
              <span className="h-px w-8 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">Why Students Trust Skill2Career</h2>
            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">Built by students, for students — with practical learning, clear guidance, and opportunities that help you move forward.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-400/10 text-sm font-black text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.14)]">01</div><h3 className="mt-6 text-xl font-bold text-white">Student-Led</h3><p className="mt-3 text-sm leading-7 text-slate-300">We understand the challenges students face because we are building this journey with students.</p></article>
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/40 bg-blue-400/10 text-sm font-black text-blue-200 shadow-[0_0_20px_rgba(96,165,250,0.14)]">02</div><h3 className="mt-6 text-xl font-bold text-white">Practical Learning</h3><p className="mt-3 text-sm leading-7 text-slate-300">Learn skills through workshops, webinars, projects, and real-world learning experiences.</p></article>
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/40 bg-violet-400/10 text-sm font-black text-violet-200 shadow-[0_0_20px_rgba(167,139,250,0.14)]">03</div><h3 className="mt-6 text-xl font-bold text-white">Career-Focused</h3><p className="mt-3 text-sm leading-7 text-slate-300">Get guidance that helps you understand your options and make confident career decisions.</p></article>
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-400/10 text-sm font-black text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.14)]">04</div><h3 className="mt-6 text-xl font-bold text-white">Future-Ready</h3><p className="mt-3 text-sm leading-7 text-slate-300">Build the technical, creative, and professional skills needed for tomorrow's opportunities.</p></article>
          </div>

          <div className="mx-auto mt-20 max-w-3xl text-center lg:mt-28"><h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">What Students Say</h3></div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="text-4xl font-black leading-none text-cyan-300">“</div><p className="mt-4 text-base leading-8 text-slate-200">Everything was great.</p><div className="mt-7 border-t border-white/10 pt-5"><p className="font-bold text-white">Khushal Sachin Ghanekar</p><p className="mt-1 text-sm text-cyan-200">SQL Webinar</p></div></article>
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="text-4xl font-black leading-none text-blue-300">“</div><p className="mt-4 text-base leading-8 text-slate-200">You are doing well.</p><div className="mt-7 border-t border-white/10 pt-5"><p className="font-bold text-white">Sonam Kumari</p><p className="mt-1 text-sm text-blue-200">Python Webinar</p></div></article>
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="text-4xl font-black leading-none text-violet-300">“</div><p className="mt-4 text-base leading-8 text-slate-200">It is a great session.</p><div className="mt-7 border-t border-white/10 pt-5"><p className="font-bold text-white">Saatvik Bhardwaj</p><p className="mt-1 text-sm text-violet-200">HTML &amp; CSS</p></div></article>
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="text-4xl font-black leading-none text-cyan-300">“</div><p className="mt-4 text-base leading-8 text-slate-200">It was awesome.</p><div className="mt-7 border-t border-white/10 pt-5"><p className="font-bold text-white">Rishika</p><p className="mt-1 text-sm text-cyan-200">AI Webinar</p></div></article>
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="text-4xl font-black leading-none text-blue-300">“</div><p className="mt-4 text-base leading-8 text-slate-200">Overall the best.</p><div className="mt-7 border-t border-white/10 pt-5"><p className="font-bold text-white">Tanish Deepak Parab</p><p className="mt-1 text-sm text-blue-200">Git and GitHub Webinar</p></div></article>
            <article className="trust-card trust-reveal rounded-3xl p-7"><div className="text-4xl font-black leading-none text-violet-300">“</div><p className="mt-4 text-base leading-8 text-slate-200">Thank you for the informative webinar. It was really helpful for beginners.</p><div className="mt-7 border-t border-white/10 pt-5"><p className="font-bold text-white">DHEERAJ CHAUHAN</p><p className="mt-1 text-sm text-violet-200">No-Code Website Webinar</p></div></article>
          </div>
        </div>
      </section>

      <section id="community" className="relative overflow-hidden bg-gradient-to-br from-[#0f2d69] via-primary to-cyan py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 text-center sm:px-8 lg:px-10">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
            <span className="h-px w-8 bg-cyan-200" />
            Find your people
            <span className="h-px w-8 bg-cyan-200" />
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Stay Connected. Keep Growing.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
            Join the Skill2Career community to meet curious learners, discover new opportunities, and keep building momentum toward your future.
          </p>
          <a href="https://chat.whatsapp.com/E8gcofln72DKXFbHZ4vsDd" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-50">
            Join Our Community
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  )
}
