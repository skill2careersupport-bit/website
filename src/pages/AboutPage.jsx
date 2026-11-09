import earthImage from '../assets/earth-space.jpg'
import aboutGirlImage from '../assets/about-girl.png'
import teamGroupImage from '../assets/team-group.png'
import logarakshikaImage from '../assets/logarakshika.png'
import kamaliniImage from '../assets/kamalini.png'
import arshiyaImage from '../assets/arshiya.png'
import { useEffect, useRef } from 'react'

const goals = [
  { title: 'Career Clarity', description: 'Help students make informed career decisions.', tone: 'teal' },
  { title: 'Future-Ready Skills', description: 'Build technical and future-ready skills.', tone: 'blue' },
  { title: 'College and Industry Readiness', description: 'Prepare students for college and industry.', tone: 'purple' },
  { title: 'Learning Community', description: 'Create a supportive learning community.', tone: 'orange' },
]

const values = [
  { title: 'Innovation', description: 'Ideas, people, and progress moving forward together.', tone: 'teal', icon: 'M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2m0-14-2 2M7 17l-2 2M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z' },
  { title: 'Collaboration', description: 'Working together with students and institutions to create opportunities.', tone: 'green', icon: 'M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm11 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { title: 'Continuous Learning', description: 'Encouraging curiosity, improvement, and lifelong learning.', tone: 'gold', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V5a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 5.5v14ZM8 7h8M8 11h6' },
  { title: 'Student Success', description: 'Keeping student growth and development at the centre of everything we do.', tone: 'blue', icon: 'M12 3 14.8 8.7 21 9.6l-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z' },
]
const desktopPuzzlePaths = [
  'M0 0H320V76C350 76 350 124 320 124V240H184C184 270 136 270 136 240H0Z',
  'M30 0H350V240H184C184 270 136 270 136 240H30V124H60C60 110 60 90 60 76H30Z',
  'M0 30H136C136 60 184 60 184 30H320V76C350 76 350 124 320 124V270H0Z',
  'M30 30H136C136 60 184 60 184 30H350V270H0V124H60C60 110 60 90 60 76H30Z',
]
const mobilePuzzlePaths = [
  'M0 0H320V240H184C184 270 136 270 136 240H0Z',
  'M0 30H136C136 60 184 60 184 30H320V240H184C184 270 136 270 136 240H0Z',
  'M0 30H136C136 60 184 60 184 30H320V240H184C184 270 136 270 136 240H0Z',
  'M0 30H136C136 60 184 60 184 30H320V240H0Z',
]
const teamMembers = [
  { name: 'Logarakshika A', role: 'CTO & Co-Founder', image: logarakshikaImage, linkedin: 'https://www.linkedin.com/in/logarakshikaa/' },
  { name: 'Kamalini D', role: 'CMO & Co-Founder', image: kamaliniImage, linkedin: 'https://www.linkedin.com/in/kamalini-d/' },
  { name: 'Arshiya Samreen K', role: 'CGO & Co-Founder', image: arshiyaImage, linkedin: 'https://www.linkedin.com/in/arshiya-samreen-661269316/' },
]

function SectionLabel({ children }) {
  return <div className="about-label"><span />{children}<span /></div>
}

export default function AboutPage() {
  const missionVisionRef = useRef(null)
  const missionVisionLinesRef = useRef([])
  const valuesSectionRef = useRef(null)
  const valuePieceRefs = useRef([])
  const goalsRoadmapRef = useRef(null)
  const goalCardRefs = useRef([])
  const goalPathRefs = useRef([])

  useEffect(() => {
    const section = valuesSectionRef.current
    const pieces = valuePieceRefs.current.filter(Boolean)
    if (!section || pieces.length !== values.length) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const clampProgress = (value) => Math.min(1, Math.max(0, value))
    const easeOut = (value) => 1 - ((1 - value) ** 3)
    let frameId = 0

    const updateAssembly = () => {
      frameId = 0
      if (reducedMotion.matches) {
        section.classList.add('about-values--reduced')
        return
      }

      section.classList.remove('about-values--reduced')
      const stickyOffset = Math.min(100, Math.max(72, window.innerHeight * 0.1))
      const scrollDistance = Math.max(1, section.offsetHeight - (window.innerHeight - stickyOffset))
      const sectionStart = section.getBoundingClientRect().top + window.scrollY - stickyOffset
      const progress = clampProgress((window.scrollY - sectionStart) / scrollDistance)
      const assembled = pieces.every((piece, index) => {
        const start = 0.08 + index * 0.13
        const pieceProgress = easeOut(clampProgress((progress - start) / 0.24))
        const direction = index % 2 === 0 ? -1 : 1
        const distance = piece.offsetWidth * 1.12 + 30
        piece.style.setProperty('--value-progress', `${pieceProgress}`)
        piece.style.setProperty('--value-offset', `${direction * distance * (1 - pieceProgress)}px`)
        piece.style.setProperty('--value-scale', `${0.92 + pieceProgress * 0.08}`)
        return pieceProgress >= 1
      })

      section.style.setProperty('--puzzle-glow', `${easeOut(clampProgress((progress - 0.78) / 0.2))}`)
      section.classList.toggle('about-values--assembled', assembled)
    }

    const scheduleAssembly = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateAssembly)
    }
    const handleMotionChange = () => scheduleAssembly()

    scheduleAssembly()
    window.addEventListener('scroll', scheduleAssembly, { passive: true })
    window.addEventListener('resize', scheduleAssembly)
    reducedMotion.addEventListener('change', handleMotionChange)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', scheduleAssembly)
      window.removeEventListener('resize', scheduleAssembly)
      reducedMotion.removeEventListener('change', handleMotionChange)
    }
  }, [])

  useEffect(() => {
    const section = missionVisionRef.current
    const lines = missionVisionLinesRef.current.filter(Boolean)
    if (!section || lines.length === 0) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const clampProgress = (value) => Math.min(1, Math.max(0, value))
    const rangeProgress = (value, start, end) => clampProgress((value - start) / (end - start))
    let frameId = 0

    const updateTimeline = () => {
      frameId = 0
      if (reducedMotion.matches) {
        section.classList.add('about-mission--reduced')
        lines.forEach((line) => {
          line.style.strokeDashoffset = '0'
        })
        return
      }

      section.classList.remove('about-mission--reduced')
      const stickyOffset = Math.min(100, Math.max(72, window.innerHeight * 0.1))
      const scrollDistance = Math.max(1, section.offsetHeight - (window.innerHeight - stickyOffset))
      const sectionStart = section.getBoundingClientRect().top + window.scrollY - stickyOffset
      const progress = clampProgress((window.scrollY - sectionStart) / scrollDistance)
      const targetProgress = rangeProgress(progress, 0, 0.16)
      const arrowProgress = rangeProgress(progress, 0.17, 0.43)
      const impactProgress = rangeProgress(progress, 0.43, 0.58)
      const cardProgress = rangeProgress(progress, 0.6, 0.84)
      const impactPulse = Math.sin(Math.PI * impactProgress)
      section.style.setProperty('--target-opacity', `${targetProgress}`)
      section.style.setProperty('--target-scale', `${(0.72 + targetProgress * 0.28) * (1 + impactPulse * 0.075)}`)
      section.style.setProperty('--impact-glow', `${impactPulse}`)
      section.style.setProperty('--ripple-progress', `${impactProgress}`)
      section.style.setProperty('--ripple-opacity', `${impactPulse}`)
      section.style.setProperty('--ripple-scale', `${0.35 + impactProgress * 1.4}`)
      section.style.setProperty('--arrow-opacity', `${rangeProgress(progress, 0.15, 0.2) * (1 - rangeProgress(progress, 0.43, 0.48))}`)
      section.style.setProperty('--arrow-x', `${(1 - arrowProgress) * 84}px`)
      section.style.setProperty('--arrow-y', `${(1 - arrowProgress) * -84}px`)
      section.style.setProperty('--card-progress', `${cardProgress}`)
      section.style.setProperty('--vision-offset-x', `${(1 - cardProgress) * 105}px`)
      section.style.setProperty('--mission-offset-x', `${(1 - cardProgress) * -105}px`)
      section.style.setProperty('--vision-offset-y', `${(1 - cardProgress) * 40}px`)
      section.style.setProperty('--mission-offset-y', `${(1 - cardProgress) * -40}px`)
      section.style.setProperty('--impact-blur', `${impactPulse * 18}px`)

      lines.forEach((line, index) => {
        const lineLength = index === 2 ? 620 : 120
        line.style.strokeDashoffset = `${lineLength * (1 - cardProgress)}`
      })
    }

    const scheduleTimeline = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateTimeline)
    }
    const handleMotionChange = () => scheduleTimeline()

    scheduleTimeline()
    window.addEventListener('scroll', scheduleTimeline, { passive: true })
    window.addEventListener('resize', scheduleTimeline)
    reducedMotion.addEventListener('change', handleMotionChange)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', scheduleTimeline)
      window.removeEventListener('resize', scheduleTimeline)
      reducedMotion.removeEventListener('change', handleMotionChange)
    }
  }, [])

  useEffect(() => {
    const roadmap = goalsRoadmapRef.current
    const pathClips = goalPathRefs.current.filter(Boolean)
    const cards = goalCardRefs.current.filter(Boolean)
    if (!roadmap || pathClips.length === 0 || cards.length === 0) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      pathClips.forEach((clip) => {
        clip.setAttribute('height', '1280')
      })
      return undefined
    }

    let frameId = 0
    const updateProgress = () => {
      frameId = 0
      const viewportHeight = window.innerHeight
      const roadmapRect = roadmap.getBoundingClientRect()
      const journeyProgress = Math.min(1, Math.max(0,
        (viewportHeight - roadmapRect.top) / (roadmapRect.height + viewportHeight),
      ))
      pathClips.forEach((clip) => {
        clip.setAttribute('height', `${1280 * journeyProgress}`)
      })

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        const revealProgress = Math.min(1, Math.max(0,
          (journeyProgress - index * 0.24) / 0.18,
        ))
        const distanceFromCenter = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight
        card.style.setProperty('--goal-reveal', `${revealProgress}`)
        const parallax = Math.max(-1, Math.min(1, distanceFromCenter))
        const direction = card.dataset.goalIndex % 2 === 0 ? -1 : 1
        card.style.setProperty('--goal-offset', `${(1 - revealProgress) * 30 - parallax * 8}px`)
        card.style.setProperty('--goal-rotation', `${(1 - revealProgress) * direction * 2 + parallax * 0.5}deg`)
        card.style.setProperty('--goal-scale', `${0.97 + revealProgress * 0.03}`)
      })

      roadmap.classList.add('about-goals__roadmap--animated')
    }
    const scheduleUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress)
    }
    const handleMotionChange = () => {
      if (reducedMotion.matches) {
        window.cancelAnimationFrame(frameId)
        frameId = 0
        roadmap.classList.remove('about-goals__roadmap--animated')
        pathClips.forEach((clip) => {
          clip.setAttribute('height', '1280')
        })
        cards.forEach((card) => {
          card.style.removeProperty('--goal-reveal')
          card.style.removeProperty('--goal-offset')
          card.style.removeProperty('--goal-rotation')
          card.style.removeProperty('--goal-scale')
        })
      } else {
        scheduleUpdate()
      }
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    reducedMotion.addEventListener('change', handleMotionChange)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      reducedMotion.removeEventListener('change', handleMotionChange)
    }
  }, [])

  return (
    <div className="about-page">
      <style>{`
        .about-page { --about-cyan: #67e8f9; --about-blue: #60a5fa; --about-purple: #a78bfa; background: #030712; color: #e5eefb; overflow: clip; }
        .about-page section { position: relative; }
        .about-stars { background-image: radial-gradient(circle at 12% 20%, rgba(103,232,249,.7) 0 1px, transparent 1.5px), radial-gradient(circle at 76% 14%, rgba(255,255,255,.5) 0 1px, transparent 1.5px), radial-gradient(circle at 51% 65%, rgba(167,139,250,.45) 0 1px, transparent 1.5px), radial-gradient(circle at 90% 78%, rgba(96,165,250,.45) 0 1px, transparent 1.5px); background-size: 270px 220px, 340px 280px, 410px 320px, 500px 390px; animation: about-drift 22s linear infinite; }
        .about-grid { background-image: linear-gradient(rgba(103,232,249,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.06) 1px, transparent 1px); background-size: 54px 54px; mask-image: linear-gradient(to bottom, black, transparent 75%); }
        .about-container { position: relative; z-index: 2; width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .about-hero { min-height: 500px; display: flex; align-items: center; overflow: hidden; background: #eef7f3; }
        .about-hero__earth { position: absolute; inset: -2%; background-size: cover; background-position: center 54%; opacity: .2; animation: about-hero-float 24s ease-in-out infinite alternate; will-change: transform; }
        .about-hero__shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(240,249,245,.08), rgba(240,249,245,.16)); }
        .about-hero__content { max-width: 820px; padding: 82px 0 74px; text-align: center; }
        .about-hero__content .about-label { justify-content: center; }
        .about-label { display: inline-flex; align-items: center; gap: 10px; color: var(--about-cyan); font-size: 11px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
        .about-label span { width: 30px; height: 1px; background: currentColor; box-shadow: 0 0 10px currentColor; }
        .about-title { margin: 18px 0 0; color: #123541; font-size: clamp(3rem, 7vw, 6rem); line-height: 1; letter-spacing: -.04em; font-weight: 900; }
        .about-lede { max-width: 680px; margin: 22px auto 0; color: #405f67; font-size: clamp(1.05rem, 2vw, 1.25rem); line-height: 1.75; }
        @keyframes about-hero-float { from { transform: translate3d(0, -4px, 0) scale(1.015); } to { transform: translate3d(0, 4px, 0) scale(1.04); } }
        @media (max-width: 800px) { .about-hero { min-height: 420px; }.about-hero__earth { background-position: center 52%; }.about-hero__content { padding: 70px 0 62px; } }
        @media (max-width: 600px) { .about-hero { min-height: 380px; }.about-hero__earth { inset: -1%; background-position: center 50%; }.about-hero__content { padding: 58px 0 50px; }.about-title { font-size: clamp(2.7rem, 12vw, 4rem); }.about-lede { margin-top: 18px; font-size: 1rem; line-height: 1.65; } }
        @media (prefers-reduced-motion: reduce) { .about-hero__earth { animation: none !important; transform: none !important; will-change: auto; } }
        .about-section { padding: 110px 0; background: #050b1a; }
        .about-section--deep { background: #030712; }
        .about-mission { position: relative; height: 280svh; min-height: 1800px; overflow: clip; padding: 0 !important; background: #edf6f3 !important; scroll-margin-top: 0; }
        .about-mission__inner { position: sticky; top: max(72px, 10svh); display: flex; min-height: calc(100svh - max(72px, 10svh)); flex-direction: column; justify-content: center; padding: 24px 0; }
        .about-mission__heading { position: relative; z-index: 1; text-align: center; }
        .about-mission__heading .about-label { color: #0f7774; }
        .about-mission__heading .about-label span { box-shadow: none; }
        .about-mission__heading .about-heading { margin-inline: auto; color: #123541; }
        .about-mission__roadmap { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) 260px minmax(0, 1fr); align-items: center; gap: 22px; max-width: 1080px; width: 100%; margin: 40px auto 0; }
        .about-mission__connectors { position: absolute; z-index: 0; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }
        .about-mission__connectors path { fill: none; stroke: rgba(15,119,116,.42); stroke-width: 2; stroke-linecap: round; stroke-dasharray: 120; stroke-dashoffset: 120; }
        .about-mission__connectors circle { fill: #d19a1b; opacity: var(--card-progress, 0); }
        .about-mission__card { position: relative; z-index: 1; min-height: 220px; padding: 30px; border: 1px solid rgba(15,119,116,.14); border-radius: 22px; background: rgba(255,255,255,.94); box-shadow: 0 18px 44px rgba(18,53,65,.09); opacity: var(--card-progress, 0); transition: box-shadow .25s ease; }
        .about-mission__card--vision { transform: translateX(var(--vision-offset-x, 105px)); }
        .about-mission__card--mission { transform: translateX(var(--mission-offset-x, -105px)); }
        .about-mission__card h3 { margin: 0; color: #123541; font-size: clamp(1.5rem, 2.2vw, 1.9rem); font-weight: 850; letter-spacing: -.025em; }
        .about-mission__card p { margin: 16px 0 0; color: #506971; font-size: 1rem; line-height: 1.8; }
        .about-mission__target { position: relative; z-index: 2; display: grid; place-items: center; width: 260px; aspect-ratio: 1; justify-self: center; opacity: var(--target-opacity, 0); transform: scale(var(--target-scale, .72)); filter: drop-shadow(0 14px 22px rgba(18,53,65,.12)) drop-shadow(0 0 var(--impact-blur, 0px) rgba(209,154,27,.56)); }
        .about-mission__target svg { display: block; width: 100%; overflow: visible; }
        .about-mission__ring { transform-box: fill-box; transform-origin: center; }
        .about-mission__arrow { transform: translate(var(--arrow-x, 84px), var(--arrow-y, -84px)); opacity: var(--arrow-opacity, 0); }
        .about-mission__impact { transform-box: fill-box; transform-origin: center; opacity: var(--ripple-opacity, 0); transform: scale(var(--ripple-scale, .35)); }
        @media (max-width: 900px) { .about-mission { height: 250svh; min-height: 1600px; }.about-mission__inner { width: min(100% - 40px, 1180px); margin-inline: auto; }.about-mission__roadmap { grid-template-columns: minmax(0,1fr) 210px minmax(0,1fr); gap: 12px; margin-top: 32px; }.about-mission__target { width: 210px; }.about-mission__card { min-height: 215px; padding: 24px; }.about-mission__card p { font-size: .94rem; } }
        @media (max-width: 650px) { .about-mission { height: 230svh; min-height: 1500px; }.about-mission__inner { width: min(100% - 32px, 600px); }.about-mission__roadmap { grid-template-columns: 1fr; gap: 0; max-width: 440px; margin: 12px auto 0; padding: 0 8px; }.about-mission__connectors--desktop { display: none; }.about-mission__connectors--mobile { display: block; }.about-mission__connectors--mobile path { stroke-dasharray: 620; }.about-mission__card { min-height: 0; padding: 18px 20px; }.about-mission__card--vision { transform: translateY(var(--vision-offset-y, 40px)); }.about-mission__card--mission { transform: translateY(var(--mission-offset-y, -40px)); }.about-mission__target { width: min(180px, 48vw); margin: 12px auto; }.about-mission__heading .about-heading { font-size: clamp(1.8rem, 8vw, 2.4rem); }.about-mission__card h3 { font-size: 1.35rem; }.about-mission__card p { margin-top: 8px; font-size: .9rem; line-height: 1.55; } }
        @media (min-width: 651px) { .about-mission__connectors--mobile { display: none; } }
        .about-mission--reduced { height: auto; min-height: 0; }
        .about-mission--reduced .about-mission__inner { position: relative; top: auto; min-height: 0; padding: 110px 0; }
        .about-mission--reduced .about-mission__target, .about-mission--reduced .about-mission__card { opacity: 1; transform: none; filter: none; }
        .about-mission--reduced .about-mission__arrow { opacity: 1; transform: none; }
        .about-mission--reduced .about-mission__connectors path { stroke-dashoffset: 0 !important; }
        @media (prefers-reduced-motion: reduce) { .about-mission__card, .about-mission__target, .about-mission__arrow, .about-mission__connectors path, .about-mission__connectors circle { transition: none; animation: none !important; } }
        .about-page .about-goals { overflow: hidden; background-color: #f5f7f5 !important; background-image: repeating-linear-gradient(to bottom, transparent 0, transparent 39px, rgba(18,53,65,.055) 40px, transparent 41px) !important; }
        .about-goals .about-label { color: #0f7774; }
        .about-goals .about-label span { box-shadow: none; }
        .about-goals .about-heading { color: #123541; }
        .about-goals__roadmap { position: relative; margin-top: 42px; }
        .about-goals__path { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }
        .about-goals__path path { fill: none; stroke: rgba(18,53,65,.26); stroke-width: 2; stroke-linecap: round; stroke-dasharray: 2 12; }
        .about-goals__path .about-goals__journey { stroke: #0f7774; stroke-width: 2.5; }
        .about-goals__path--mobile { display: none; }
        .about-goals__row { position: relative; z-index: 1; display: grid; min-height: 320px; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: center; }
        .about-goals__row:nth-of-type(even) .about-goal-note { grid-column: 2; }
        .about-goal-note { position: relative; width: min(440px, 88%); justify-self: start; border: 1px solid rgba(18,53,65,.08); border-radius: 22px; padding: 18px; background: rgba(255,255,255,.94); box-shadow: 0 22px 48px rgba(18,53,65,.13), 0 4px 12px rgba(18,53,65,.06); transform-origin: 50% 10%; }
        .about-goal-note:nth-child(odd) { transform: rotate(-1.6deg); }
        .about-goals__row:nth-of-type(even) .about-goal-note { justify-self: end; transform: rotate(1.7deg); }
        .about-goals__roadmap--animated .about-goal-note { opacity: var(--goal-reveal, 0); transform: translate3d(0, var(--goal-offset, 30px), 0) rotate(var(--goal-rotation, -2deg)) scale(var(--goal-scale, .97)); transition: opacity .16s linear, transform .16s linear, box-shadow .25s ease; }
        .about-goal-note__pin { position: absolute; z-index: 2; top: -13px; left: 50%; width: 25px; height: 25px; border: 3px solid rgba(255,255,255,.78); border-radius: 50%; background: var(--goal-accent); box-shadow: 0 4px 0 color-mix(in srgb, var(--goal-accent), #123541 18%), 0 8px 14px color-mix(in srgb, var(--goal-accent), transparent 62%); transform: translateX(-50%); }
        .about-goal-note__paper { min-height: 206px; border: 1px solid color-mix(in srgb, var(--goal-accent), transparent 78%); border-radius: 15px; padding: 28px 24px 24px; background: var(--goal-paper); }
        .about-goal-note__number { color: var(--goal-accent); font-size: .9rem; font-weight: 800; letter-spacing: .12em; }
        .about-goal-note__paper h3 { margin: 12px 0 0; color: #123541; font-size: 1.25rem; line-height: 1.3; }
        .about-goal-note__paper p { margin: 10px 0 0; color: #506971; font-size: .95rem; line-height: 1.75; }
        .about-goal-note--teal { --goal-accent: #0f7774; --goal-paper: #e1f1ed; }
        .about-goal-note--blue { --goal-accent: #3c72bd; --goal-paper: #e7efff; }
        .about-goal-note--purple { --goal-accent: #8056b5; --goal-paper: #f1e9fa; }
        .about-goal-note--orange { --goal-accent: #cb7139; --goal-paper: #fff0e4; }
        @media (hover: hover) and (prefers-reduced-motion: no-preference) { .about-goal-note:hover { box-shadow: 0 28px 58px rgba(18,53,65,.18), 0 6px 16px rgba(18,53,65,.08); } }
        @media (max-width: 800px) { .about-goals { padding: 76px 0; }.about-goals__roadmap { margin-top: 30px; }.about-goals__row { min-height: 290px; } }
        @media (max-width: 600px) { .about-goals { padding: 60px 0; }.about-goals__roadmap { margin-top: 24px; }.about-goals__path--desktop { display: none; }.about-goals__path--mobile { display: block; }.about-goals__row { min-height: 0; padding: 34px 0 34px 30px; }.about-goal-note, .about-goals__row:nth-of-type(even) .about-goal-note { grid-column: 1 / -1; width: 100%; justify-self: stretch; transform: none; }.about-goals__roadmap--animated .about-goal-note, .about-goals__roadmap--animated .about-goals__row:nth-of-type(even) .about-goal-note { transform: translate3d(0, var(--goal-offset, 24px), 0) scale(var(--goal-scale, .98)); }.about-goal-note__paper { min-height: 190px; padding: 26px 20px 20px; } }
        @media (prefers-reduced-motion: reduce) { .about-goals__roadmap--animated .about-goal-note { opacity: 1; transform: none; transition: none; } }
        .about-page .about-values { position: relative; height: 210svh; min-height: 1500px; overflow: clip; padding: 0 !important; background: #eaf4f1 !important; }
        .about-values__inner { position: sticky; top: max(72px, 10svh); display: flex; width: min(100% - 40px, 1180px); min-height: calc(100svh - max(72px, 10svh)); flex-direction: column; justify-content: center; margin-inline: auto; padding: 28px 0; }
        .about-values__heading { position: relative; z-index: 1; text-align: center; }
        .about-values__heading .about-label { color: #0f7774; }
        .about-values__heading .about-label span { box-shadow: none; }
        .about-values__heading .about-heading { margin-inline: auto; color: #123541; }
        .about-values__puzzle { position: relative; display: grid; width: min(920px, 100%); grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 28px auto 0; isolation: isolate; filter: drop-shadow(0 20px 32px rgba(18,53,65,.08)); transition: filter .35s ease; }
        .about-values--assembled .about-values__puzzle { filter: drop-shadow(0 22px 34px rgba(15,119,116,.15)) drop-shadow(0 0 calc(var(--puzzle-glow, 0) * 18px) rgba(209,154,27,.2)); }
        .about-values__piece { position: relative; z-index: 1; display: grid; min-width: 0; aspect-ratio: 1.42; place-items: center; opacity: var(--value-progress, 0); transform: translate3d(var(--value-offset, 0px), 0, 0) scale(var(--value-scale, .92)); will-change: transform, opacity; }
        .about-values__piece:nth-child(2), .about-values__piece:nth-child(4) { z-index: 2; }
        .about-values__piece:nth-child(3) { z-index: 2; }
        .about-values__piece-svg { position: absolute; top: 0; left: 0; width: 109.375%; height: 112.5%; overflow: visible; pointer-events: none; }
        .about-values__piece:nth-child(2) .about-values__piece-svg--desktop, .about-values__piece:nth-child(4) .about-values__piece-svg--desktop { left: -9.375%; }
        .about-values__piece:nth-child(3) .about-values__piece-svg--desktop, .about-values__piece:nth-child(4) .about-values__piece-svg--desktop { top: -12.5%; }
        .about-values__piece-svg path { stroke: rgba(255,255,255,.92); stroke-width: 4; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
        .about-values__piece--teal path { fill: #d7eff0; }
        .about-values__piece--green path { fill: #e4efd7; }
        .about-values__piece--gold path { fill: #f9e7d8; }
        .about-values__piece--blue path { fill: #e9e1f4; }
        .about-values__piece-content { position: relative; z-index: 1; display: flex; width: min(76%, 310px); height: 76%; flex-direction: column; align-items: center; justify-content: center; padding: 18px 10px; text-align: center; }
        .about-values__icon { display: grid; width: 38px; height: 38px; flex: 0 0 auto; place-items: center; border: 1px solid currentColor; border-radius: 12px; background: rgba(255,255,255,.56); }
        .about-values__icon svg { width: 21px; height: 21px; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.7; }
        .about-values__piece--teal { color: #0f7774; }
        .about-values__piece--green { color: #48693d; }
        .about-values__piece--gold { color: #a45b2b; }
        .about-values__piece--blue { color: #684b91; }
        .about-values__piece-content h3 { margin: 10px 0 0; color: #123541; font-size: clamp(1.05rem, 1.65vw, 1.4rem); font-weight: 850; line-height: 1.2; }
        .about-values__piece-content p { max-width: 300px; margin: 8px 0 0; color: #405f67; font-size: clamp(.78rem, 1.05vw, .92rem); line-height: 1.55; }
        .about-values--reduced { height: auto; min-height: 0; }
        .about-values--reduced .about-values__inner { position: relative; top: auto; min-height: 0; padding: 110px 0; }
        .about-values--reduced .about-values__piece { opacity: 1; transform: none; }
        @media (max-width: 800px) { .about-values { height: 190svh; min-height: 1320px; }.about-values__inner { width: min(100% - 40px, 720px); }.about-values__puzzle { width: min(700px, 100%); margin-top: 24px; }.about-values__piece { aspect-ratio: 1.24; }.about-values__piece-content { width: 73%; height: 72%; padding: 12px 7px; }.about-values__icon { width: 34px; height: 34px; }.about-values__piece-content p { font-size: .78rem; line-height: 1.45; } }
        @media (max-width: 520px) { .about-values { height: 210svh; min-height: 1380px; }.about-values__inner { width: min(100% - 32px, 420px); }.about-values__heading .about-heading { font-size: clamp(1.8rem, 8vw, 2.4rem); }.about-values__puzzle { width: 100%; grid-template-columns: 1fr; margin-top: 18px; filter: drop-shadow(0 12px 20px rgba(18,53,65,.07)); }.about-values__piece { aspect-ratio: 1.6; }.about-values__piece-svg { width: 109.375%; height: 112.5%; }.about-values__piece-svg--desktop { display: none; }.about-values__piece-svg--mobile { display: block; }.about-values__piece:nth-child(n + 2) .about-values__piece-svg--mobile { top: -12.5%; }.about-values__piece-content { width: 78%; height: 78%; padding: 10px 8px; }.about-values__icon { width: 30px; height: 30px; border-radius: 10px; }.about-values__icon svg { width: 18px; height: 18px; }.about-values__piece-content h3 { margin-top: 6px; font-size: 1.02rem; }.about-values__piece-content p { max-width: 300px; margin-top: 4px; font-size: .76rem; line-height: 1.35; } }
        @media (min-width: 521px) { .about-values__piece-svg--mobile { display: none; } }
        @media (prefers-reduced-motion: reduce) { .about-values, .about-values__puzzle, .about-values__piece, .about-values__piece-svg { transition: none !important; animation: none !important; will-change: auto; } }
        .about-heading { max-width: 700px; margin: 14px 0 0; color: white; font-size: clamp(2.1rem, 4vw, 4rem); line-height: 1.05; letter-spacing: -.035em; font-weight: 900; }
        .about-copy { color: #a9bad3; font-size: 1.05rem; line-height: 1.9; }
        .about-two-col { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 90px; }
        .about-glass-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 48px; }
        .about-glass { position: relative; overflow: hidden; border: 1px solid rgba(125,211,252,.18); border-radius: 18px; background: linear-gradient(145deg, rgba(15,31,58,.76), rgba(7,14,31,.7)); box-shadow: inset 0 1px rgba(255,255,255,.06), 0 18px 55px rgba(0,0,0,.18); backdrop-filter: blur(18px); }
        .about-glass::after { content: ''; position: absolute; width: 100px; height: 100px; right: -45px; top: -55px; border-radius: 50%; background: rgba(103,232,249,.14); filter: blur(22px); }
        .about-glass:hover { border-color: rgba(103,232,249,.55); box-shadow: 0 0 30px rgba(34,211,238,.12), inset 0 1px rgba(255,255,255,.09); transform: translateY(-4px); }
        .about-card { padding: 30px; transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease; }
        .about-card__icon { display: grid; place-items: center; width: 46px; height: 46px; border: 1px solid rgba(103,232,249,.38); border-radius: 13px; color: var(--about-cyan); background: rgba(34,211,238,.08); font-weight: 900; box-shadow: 0 0 20px rgba(34,211,238,.12); }
        .about-card h3 { position: relative; z-index: 1; margin: 22px 0 0; color: white; font-size: 1.25rem; }
        .about-card p { position: relative; z-index: 1; margin: 12px 0 0; color: #a9bad3; line-height: 1.8; }
        .about-team-photo { display: block; width: 100%; height: auto; border: 1px solid rgba(103,232,249,.34); border-radius: 24px; box-shadow: 0 0 0 1px rgba(96,165,250,.12), 0 0 36px rgba(34,211,238,.2), 0 24px 70px rgba(0,0,0,.32); }
        .about-feature-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 18px; margin-top: 48px; }.about-feature-card { grid-column: span 2; animation: about-feature-reveal .7s ease both; }.about-feature-card:nth-child(2) { animation-delay: .08s; }.about-feature-card:nth-child(3) { animation-delay: .16s; }.about-feature-card:nth-child(4) { grid-column: 2 / span 2; animation-delay: .24s; }.about-feature-card:nth-child(5) { grid-column: 4 / span 2; animation-delay: .32s; }
        .about-team-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 48px; }
        .about-profile { min-height: 420px; padding: 18px; text-align: center; transition: transform .4s cubic-bezier(.2,.8,.2,1), border-color .3s ease, box-shadow .4s ease; }
        .about-profile:hover, .about-profile:focus-visible { transform: translateY(-8px); border-color: rgba(15,119,116,.55); box-shadow: 0 22px 42px rgba(18,53,65,.16), 0 0 24px rgba(15,119,116,.12); }
        .about-profile:focus-visible { outline: 3px solid #0f7774; outline-offset: 4px; }
        .about-profile__image-wrap { position: relative; height: 320px; display: flex; align-items: flex-end; justify-content: center; overflow: hidden; border-radius: 13px; }
        .about-profile__image-wrap::after { position: absolute; inset: 30% 0 0; content: ''; background: linear-gradient(transparent, rgba(18,53,65,.5)); opacity: 0; transition: opacity .35s ease; }
        .about-profile__image { display: block; width: 100%; height: 100%; object-fit: contain; object-position: center bottom; transition: transform .5s cubic-bezier(.2,.8,.2,1), filter .4s ease; }
        .about-profile:hover .about-profile__image, .about-profile:focus-visible .about-profile__image { transform: scale(1.06); filter: drop-shadow(0 0 12px rgba(15,119,116,.22)); }
        .about-profile:hover .about-profile__image-wrap::after, .about-profile:focus-visible .about-profile__image-wrap::after { opacity: 1; }
        .about-profile__linkedin { position: absolute; z-index: 1; right: 12px; bottom: 12px; left: 12px; padding: 10px 14px; border: 1px solid rgba(255,255,255,.5); border-radius: 999px; color: white; background: rgba(18,53,65,.88); font-size: .82rem; font-weight: 800; opacity: 0; transform: translateY(12px); transition: opacity .3s ease, transform .35s cubic-bezier(.2,.8,.2,1); }
        .about-profile:hover .about-profile__linkedin, .about-profile:focus-visible .about-profile__linkedin { opacity: 1; transform: translateY(0); }
        .about-profile h3 { margin: 20px 0 0; color: white; font-size: 1.05rem; }
        .about-profile p { margin: 6px 0 0; color: #7dd3fc; font-size: .85rem; font-weight: 700; }
        .about-cta { overflow: hidden; background: #020617; }.about-cta__earth { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: .34; }.about-cta__shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(2,6,23,.95), rgba(2,6,23,.58), rgba(2,6,23,.85)); }.about-cta__content { position: relative; z-index: 2; padding: 110px 0; text-align: center; }.about-cta .about-heading { max-width: 620px; margin: 14px auto 0; text-wrap: balance; }.about-cta__actions { display: flex; justify-content: center; align-items: center; gap: 14px; margin-top: 30px; }
        .about-button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 50px; padding: 14px 22px; border: 1px solid rgba(103,232,249,.55); border-radius: 999px; color: #04111f; background: var(--about-cyan); font-size: .9rem; font-weight: 800; box-shadow: 0 0 25px rgba(34,211,238,.2); transition: transform .25s ease, box-shadow .25s ease; }.about-button:hover { transform: translateY(-3px); box-shadow: 0 0 35px rgba(34,211,238,.5); }.about-button--ghost { color: white; background: rgba(15,31,58,.65); }
        @media (max-width: 1000px) { .about-team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 800px) { .about-container { width: min(100% - 32px, 600px); }.about-hero { min-height: 520px; }.about-hero__earth { background-position: 64% center; opacity: .5; }.about-hero__shade { background: linear-gradient(90deg, rgba(2,6,23,.94), rgba(2,6,23,.7)); }.about-hero__content { padding: 84px 0; }.about-section { padding: 76px 0; }.about-two-col { grid-template-columns: 1fr; gap: 36px; }.about-glass-grid { grid-template-columns: 1fr; margin-top: 32px; }.about-feature-grid, .about-team-grid { margin-top: 32px; }.about-profile { min-height: 370px; }.about-profile__image-wrap { height: 280px; }.about-cta__content { padding: 76px 0; } }
        @media (max-width: 1000px) { .about-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }.about-feature-card:nth-child(4), .about-feature-card:nth-child(5) { grid-column: auto; } }
        @media (max-width: 600px) { .about-container { width: min(100% - 32px, 600px); }.about-hero { min-height: 480px; }.about-hero__content { padding: 72px 0; }.about-section { padding: 60px 0; }.about-team-grid, .about-feature-grid { grid-template-columns: 1fr; gap: 14px; }.about-feature-card, .about-feature-card:nth-child(4), .about-feature-card:nth-child(5) { grid-column: auto; }.about-glass-grid { gap: 14px; }.about-card { padding: 24px; }.about-profile { min-height: 330px; }.about-profile__image-wrap { height: 240px; }.about-cta__content { padding: 64px 0; }.about-cta__actions { flex-direction: column; }.about-button { width: min(100%, 260px); } }
        @keyframes about-feature-reveal { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .about-page *, .about-page *::before, .about-page *::after { animation: none !important; scroll-behavior: auto !important; transition-duration: .01ms !important; } }
      `}</style>

      <section className="about-hero">
        <div className="about-stars absolute inset-0" aria-hidden="true" /><div className="about-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="about-hero__earth" style={{ backgroundImage: `url(${aboutGirlImage})` }} aria-hidden="true" /><div className="about-hero__shade" aria-hidden="true" />
        <div className="about-container"><div className="about-hero__content"><SectionLabel>ABOUT SKILL2CAREER</SectionLabel><h1 className="about-title">About Skill2Career</h1><p className="about-lede">We help students connect what they learn today with the choices and opportunities that shape tomorrow.</p></div></div>
      </section>

      <section className="about-section"><div className="about-container about-two-col"><div><SectionLabel>Our story</SectionLabel><h2 className="about-heading">Who We Are</h2><p className="about-copy mt-6">Skill2Career is a student-led EdTech initiative helping 11th, 12th, and college students bridge learning with future possibilities. Through career guidance, webinars, workshops, and hands-on learning, we help students build practical skills and make informed choices about what comes next.</p></div><img className="about-team-photo" src={teamGroupImage} alt="Skill2Career team" /></div></section>

      <section className="about-section about-section--deep about-mission" ref={missionVisionRef}><div className="about-container about-mission__inner">
        <div className="about-mission__heading"><SectionLabel>North star</SectionLabel><h2 className="about-heading">Our Mission &amp; Vision</h2></div>
        <div className="about-mission__roadmap">
          <svg className="about-mission__connectors about-mission__connectors--desktop" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true"><path ref={(element) => { missionVisionLinesRef.current[0] = element }} d="M 300 150 H 397" /><path ref={(element) => { missionVisionLinesRef.current[1] = element }} d="M 603 150 H 700" /><circle cx="300" cy="150" r="4" /><circle cx="700" cy="150" r="4" /></svg>
          <svg className="about-mission__connectors about-mission__connectors--mobile" viewBox="0 0 100 620" preserveAspectRatio="none" aria-hidden="true"><path ref={(element) => { missionVisionLinesRef.current[2] = element }} d="M 50 0 V 620" /><circle cx="50" cy="0" r="3" /><circle cx="50" cy="620" r="3" /></svg>
          <article className="about-mission__card about-mission__card--vision"><h3>Vision</h3><p>A future where every student can move forward with the confidence, clarity, and skills to shape a meaningful career.</p></article>
          <div className="about-mission__target" role="img" aria-label="Target representing Skill2Career's direction and aspirations">
            <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle className="about-mission__ring about-mission__ring--outer" cx="130" cy="130" r="112" fill="#DCEDE8" stroke="#0F7774" strokeWidth="3" />
              <circle cx="130" cy="130" r="88" fill="#F7FAF8" stroke="#123541" strokeWidth="3" />
              <circle className="about-mission__ring about-mission__ring--inner" cx="130" cy="130" r="63" fill="#E8F2EF" stroke="#0F7774" strokeWidth="3" />
              <circle cx="130" cy="130" r="38" fill="#FFF7E5" stroke="#D19A1B" strokeWidth="4" />
              <circle cx="130" cy="130" r="13" fill="#0F7774" />
              <circle className="about-mission__impact" cx="130" cy="130" r="20" fill="none" stroke="#D19A1B" strokeWidth="3" />
              <g className="about-mission__arrow" stroke="#123541" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M214 46 130 130" />
                <path d="m214 46-1 24 24-1-23-23Z" fill="#D19A1B" stroke="#123541" strokeWidth="3" />
                <path d="m122 138 10-18 8 8-18 10Z" fill="#123541" stroke="none" />
              </g>
            </svg>
          </div>
          <article className="about-mission__card about-mission__card--mission"><h3>Mission</h3><p>To connect school learning with the next step through career awareness, practical knowledge, and future-ready skills.</p></article>
        </div>
      </div></section>

      <section className="about-section about-goals"><div className="about-container"><SectionLabel>Purpose in practice</SectionLabel><h2 className="about-heading">Our Goals</h2><div className="about-goals__roadmap" ref={goalsRoadmapRef}>
        <svg className="about-goals__path about-goals__path--desktop" viewBox="0 0 1000 1280" preserveAspectRatio="none" aria-hidden="true"><defs><clipPath id="goals-journey-desktop"><rect ref={(element) => { goalPathRefs.current[0] = element }} width="1000" height="0" /></clipPath></defs><path d="M 330 155 C 500 190 500 420 670 465 S 500 730 330 775 S 500 1040 670 1085" /><path className="about-goals__journey" clipPath="url(#goals-journey-desktop)" d="M 330 155 C 500 190 500 420 670 465 S 500 730 330 775 S 500 1040 670 1085" /></svg>
        <svg className="about-goals__path about-goals__path--mobile" viewBox="0 0 100 1280" preserveAspectRatio="none" aria-hidden="true"><defs><clipPath id="goals-journey-mobile"><rect ref={(element) => { goalPathRefs.current[1] = element }} width="100" height="0" /></clipPath></defs><path d="M 10 40 C 38 150 10 220 10 340 S 38 510 10 640 S 38 800 10 940 S 38 1090 10 1240" /><path className="about-goals__journey" clipPath="url(#goals-journey-mobile)" d="M 10 40 C 38 150 10 220 10 340 S 38 510 10 640 S 38 800 10 940 S 38 1090 10 1240" /></svg>
        {goals.map((goal, index) => <div className="about-goals__row" key={goal.title}><article className={`about-goal-note about-goal-note--${goal.tone}`} data-goal-index={index} ref={(element) => { goalCardRefs.current[index] = element }}><span className="about-goal-note__pin" aria-hidden="true" /><div className="about-goal-note__paper"><span className="about-goal-note__number">0{index + 1}</span><h3>{goal.title}</h3><p>{goal.description}</p></div></article></div>)}
      </div></div></section>

      <section className="about-values" ref={valuesSectionRef} aria-labelledby="about-values-title">
        <div className="about-values__inner">
          <div className="about-values__heading">
            <SectionLabel>What guides us</SectionLabel>
            <h2 className="about-heading" id="about-values-title">Our Core Values</h2>
          </div>
          <div className="about-values__puzzle" aria-label="Four interconnected Skill2Career values">
            {values.map((value, index) => (
              <article
                className={`about-values__piece about-values__piece--${value.tone}`}
                key={value.title}
                ref={(element) => { valuePieceRefs.current[index] = element }}
                aria-label={`${value.title}: ${value.description}`}
              >
                <svg className="about-values__piece-svg about-values__piece-svg--desktop" viewBox="0 0 350 270" preserveAspectRatio="none" aria-hidden="true">
                  <path d={desktopPuzzlePaths[index]} />
                </svg>
                <svg className="about-values__piece-svg about-values__piece-svg--mobile" viewBox="0 0 350 270" preserveAspectRatio="none" aria-hidden="true">
                  <path d={mobilePuzzlePaths[index]} />
                </svg>
                <div className="about-values__piece-content">
                  <span className="about-values__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d={value.icon} /></svg>
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section"><div className="about-container"><SectionLabel>The people behind the work</SectionLabel><h2 className="about-heading">Meet Our Team</h2><div className="about-team-grid">{teamMembers.map((member) => <a className="about-glass about-profile" href={member.linkedin} target="_blank" rel="noopener noreferrer" key={member.name}><div className="about-profile__image-wrap"><img className="about-profile__image" src={member.image} alt={member.name} /><span className="about-profile__linkedin">View LinkedIn profile &rarr;</span></div><h3>{member.name}</h3><p>{member.role}</p></a>)}</div></div></section>

      <section className="about-section about-section--deep"><div className="about-container"><SectionLabel>What moves students forward</SectionLabel><h2 className="about-heading">Why Students Choose Skill2Career</h2><p className="about-copy mt-5 max-w-2xl">More than learning — we help students understand where they are going and how to get there.</p><div className="about-feature-grid"><article className="about-glass about-card about-feature-card"><div className="about-card__icon">✦</div><h3>Student-Led Approach</h3><p>Built with a deep understanding of the challenges students face.</p></article><article className="about-glass about-card about-feature-card"><div className="about-card__icon">↗</div><h3>Practical Learning</h3><p>Learn through workshops, webinars, projects, and real-world experiences.</p></article><article className="about-glass about-card about-feature-card"><div className="about-card__icon">◎</div><h3>Career-Focused Guidance</h3><p>Understand career options and make confident decisions about your future.</p></article><article className="about-glass about-card about-feature-card"><div className="about-card__icon">◇</div><h3>Future-Ready Skills</h3><p>Develop technical and professional skills for a rapidly changing world.</p></article><article className="about-glass about-card about-feature-card"><div className="about-card__icon">⊙</div><h3>Supportive Community</h3><p>Connect, learn, and grow with other students on the same journey.</p></article></div></div></section>

      <section className="about-cta"><div className="about-cta__earth" style={{ backgroundImage: `url(${earthImage})` }} aria-hidden="true" /><div className="about-cta__shade" aria-hidden="true" /><div className="about-stars absolute inset-0" aria-hidden="true" /><div className="about-container about-cta__content"><SectionLabel>Start your next chapter</SectionLabel><h2 className="about-heading mx-auto">Ready to Build Your Future?</h2><p className="about-copy mx-auto mt-5 max-w-2xl">Find a program, explore a new skill, and take one clear step toward your future.</p><div className="about-cta__actions"><a className="about-button" href="/#programs">Explore Programs <span aria-hidden="true">→</span></a><a className="about-button about-button--ghost" href="https://chat.whatsapp.com/E8gcofln72DKXFbHZ4vsDd" target="_blank" rel="noopener noreferrer">Join Our Community <span aria-hidden="true">→</span></a></div></div></section>
    </div>
  )
}
