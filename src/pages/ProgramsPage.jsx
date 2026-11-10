import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import programsHeroImage from '../assets/programs-hero.jpg'
import futurexPoster from '../assets/futurex-2026-poster.webp'
import { futurexRegistrationUrl } from '../data/futurexProjectThemes'

export default function ProgramsPage() {
  const futurexSectionRef = useRef(null)
  const posterDialogRef = useRef(null)

  useEffect(() => {
    const section = futurexSectionRef.current
    if (!section) return undefined
    const reveal = section.querySelector('.futurex-reveal')
    if (!reveal) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      reveal.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        reveal.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.12 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="programs-page">
      <style>{`
        .programs-page { --programs-cyan: #67e8f9; --programs-blue: #60a5fa; --programs-purple: #a78bfa; min-height: 100%; overflow: hidden; background: #030712; color: #e5eefb; }
        .programs-page section { position: relative; }
        .programs-stars { background-image: radial-gradient(circle at 12% 20%, rgba(103,232,249,.72) 0 1px, transparent 1.5px), radial-gradient(circle at 76% 14%, rgba(255,255,255,.52) 0 1px, transparent 1.5px), radial-gradient(circle at 51% 65%, rgba(167,139,250,.48) 0 1px, transparent 1.5px), radial-gradient(circle at 90% 78%, rgba(96,165,250,.48) 0 1px, transparent 1.5px); background-size: 270px 220px, 340px 280px, 410px 320px, 500px 390px; animation: programs-drift 24s linear infinite; }
        .programs-grid { background-image: linear-gradient(rgba(103,232,249,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.055) 1px, transparent 1px); background-size: 54px 54px; mask-image: linear-gradient(to bottom, black, transparent 82%); }
        .programs-container { position: relative; z-index: 2; width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .programs-hero { isolation: isolate; min-height: 570px; display: flex; align-items: center; overflow: hidden; background-color: #f7fbf9; }
        .programs-hero::before { position: absolute; z-index: 1; inset: 0; content: ''; pointer-events: none; background-image: linear-gradient(rgba(255,255,255,.83), rgba(255,255,255,.83)), var(--programs-hero-image); background-size: cover; background-position: center; background-repeat: no-repeat; }
        .programs-hero::after { content: ''; position: absolute; width: 430px; height: 430px; right: -145px; top: 72px; border: 1px solid rgba(103,232,249,.16); border-radius: 50%; box-shadow: 0 0 0 34px rgba(103,232,249,.025), 0 0 0 68px rgba(167,139,250,.025); }
        .programs-hero__content { max-width: 760px; padding: 115px 0 105px; }
        .programs-label { display: inline-flex; align-items: center; gap: 10px; color: var(--programs-cyan); font-size: 11px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
        .programs-label span { width: 30px; height: 1px; background: currentColor; box-shadow: 0 0 10px currentColor; }
        .programs-title { margin: 22px 0 0; color: white; font-size: clamp(3rem, 7vw, 6.6rem); line-height: .98; letter-spacing: -.04em; font-weight: 900; }
        .programs-lede { max-width: 680px; margin: 28px 0 0; color: #c7d7ed; font-size: clamp(1.05rem, 2vw, 1.28rem); line-height: 1.8; }
        .programs-webinars-section { position: relative; overflow: hidden; padding: 48px 0 120px; background: #030712; }
        .programs-section-heading { margin: 16px 0 0; color: white; font-size: clamp(2rem, 4vw, 3.3rem); line-height: 1.08; letter-spacing: -.035em; font-weight: 900; }
        .programs-section-lede { max-width: 680px; margin: 16px 0 0; color: #a9bad3; font-size: 1.05rem; line-height: 1.75; }
        .futurex-section { isolation: isolate; padding: 82px 0 110px; background: radial-gradient(ellipse at 76% 38%, rgba(80,35,180,.23), transparent 38%), radial-gradient(ellipse at 22% 76%, rgba(0,193,255,.16), transparent 42%), #05091d; }
        .futurex-section::before, .futurex-section::after { position: absolute; z-index: -1; content: ''; pointer-events: none; }
        .futurex-section::before { inset: 0; opacity: .28; background-image: linear-gradient(rgba(81,160,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(81,160,255,.12) 1px, transparent 1px); background-size: 52px 52px; mask-image: linear-gradient(to bottom, transparent, black 24%, black 76%, transparent); }
        .futurex-section::after { width: 420px; height: 420px; top: 16%; left: -260px; border: 1px solid rgba(17,220,255,.28); border-radius: 50%; box-shadow: 0 0 0 30px rgba(17,220,255,.035), 0 0 0 64px rgba(17,220,255,.025); }
        .futurex-shell { position: relative; width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .futurex-layout { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(330px, .75fr); align-items: center; gap: clamp(32px, 6vw, 84px); }
        .futurex-copy { position: relative; z-index: 1; }
        .futurex-kicker { display: inline-flex; align-items: center; gap: 10px; padding: 9px 13px; border: 1px solid rgba(31,225,255,.32); border-radius: 999px; background: rgba(3,18,47,.72); color: #88f4ff; font-size: .72rem; font-weight: 850; letter-spacing: .16em; text-transform: uppercase; box-shadow: 0 0 24px rgba(0,211,255,.1); }
        .futurex-kicker::before { width: 7px; height: 7px; border-radius: 50%; background: #23f2ff; box-shadow: 0 0 12px #23f2ff; content: ''; }
        .futurex-title { margin: 28px 0 0; color: #fff; font-size: clamp(3.2rem, 7vw, 6.7rem); font-weight: 950; letter-spacing: -.075em; line-height: .86; text-transform: uppercase; }
        .futurex-title span { display: block; margin-top: 12px; color: transparent; background: linear-gradient(95deg, #1ef5ff, #7384ff 46%, #ff55d9 86%); background-clip: text; -webkit-background-clip: text; }
        .futurex-tagline { margin: 24px 0 0; color: #c6d4f2; font-size: clamp(1.02rem, 2vw, 1.22rem); line-height: 1.7; }
        .futurex-date { display: flex; align-items: center; gap: 14px; margin-top: 30px; padding: 16px 19px; border: 1px solid rgba(48,221,255,.27); border-radius: 16px; background: linear-gradient(110deg, rgba(0,204,255,.1), rgba(103,77,255,.1)); box-shadow: inset 0 0 24px rgba(0,204,255,.04); }
        .futurex-date__icon { display: grid; flex: 0 0 46px; width: 46px; height: 46px; place-items: center; border: 1px solid rgba(37,232,255,.45); border-radius: 13px; color: #58f5ff; font-size: 1.35rem; box-shadow: 0 0 18px rgba(0,217,255,.12); }
        .futurex-date__label { display: block; color: #8ca2cc; font-size: .68rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
        .futurex-date__value { display: block; margin-top: 3px; color: #fff; font-size: clamp(1.12rem, 2vw, 1.42rem); font-weight: 900; letter-spacing: -.02em; }
        .futurex-opportunity { position: relative; margin-top: 20px; padding: 18px 20px 18px 24px; overflow: hidden; border-left: 2px solid #fc4bdb; border-radius: 0 14px 14px 0; background: linear-gradient(90deg, rgba(255,57,211,.13), rgba(111,63,255,.05) 72%, transparent); color: #e4dff8; font-size: .98rem; line-height: 1.65; }
        .futurex-opportunity strong { color: #ff91ed; }
        .futurex-details { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin-top: 22px; }
        .futurex-detail { min-height: 86px; padding: 15px 16px; border: 1px solid rgba(110,150,255,.16); border-radius: 13px; background: rgba(11,20,50,.72); transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
        .futurex-detail:hover { transform: translateY(-3px); border-color: rgba(36,225,255,.48); box-shadow: 0 8px 26px rgba(0,188,255,.1); }
        .futurex-detail__label { display: block; color: #90a4d0; font-size: .68rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .futurex-detail__value { display: block; margin-top: 7px; color: #f7f8ff; font-size: .96rem; font-weight: 850; line-height: 1.35; }
        .futurex-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 25px; }
        .futurex-register, .futurex-themes-link { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; gap: 9px; padding: 0 19px; border-radius: 12px; font-size: .9rem; font-weight: 900; text-decoration: none; }
        .futurex-register { border: 1px solid rgba(70,232,255,.62); background: linear-gradient(105deg, #0879b7, #5149d6 58%, #a332a0); color: #fff; box-shadow: 0 0 24px rgba(0,195,255,.2), inset 0 1px rgba(255,255,255,.18); cursor: pointer; }
        .futurex-themes-link { border: 1px solid rgba(28,220,255,.5); background: rgba(0,193,255,.08); color: #a7f8ff; transition: background .2s ease, box-shadow .2s ease, transform .2s ease; }
        .futurex-themes-link:hover { transform: translateY(-2px); background: rgba(0,193,255,.16); box-shadow: 0 0 24px rgba(0,207,255,.18); }
        .futurex-register-note { flex-basis: 100%; margin: -2px 0 0; color: #8190b3; font-size: .78rem; }
        .futurex-poster-wrap { position: relative; width: 100%; max-width: 440px; justify-self: center; padding: 9px; border: 1px solid rgba(37,225,255,.52); border-radius: 25px; background: linear-gradient(145deg, rgba(25,231,255,.16), rgba(112,85,255,.12) 48%, rgba(255,49,212,.16)); box-shadow: 0 0 24px rgba(0,214,255,.17), 0 0 72px rgba(93,56,255,.17), inset 0 0 28px rgba(38,202,255,.08); animation: futurex-neon 5s ease-in-out infinite; }
        .futurex-poster-wrap::before { position: absolute; z-index: -1; inset: -18px; border: 1px solid rgba(46,191,255,.15); border-radius: 34px; content: ''; transform: rotate(2deg); }
        .futurex-poster-trigger { display: block; width: 100%; padding: 0; overflow: hidden; border: 0; border-radius: 17px; background: #07102b; cursor: zoom-in; }
        .futurex-poster-trigger:focus-visible, .futurex-dialog__close:focus-visible { outline: 3px solid #5df5ff; outline-offset: 4px; }
        .futurex-poster { display: block; width: 100%; height: auto; object-fit: contain; transition: transform .5s cubic-bezier(.2,.8,.2,1), filter .35s ease; }
        .futurex-poster-trigger:hover .futurex-poster { transform: scale(1.018); filter: brightness(1.08); }
        .futurex-poster-hint { position: absolute; right: 19px; bottom: 19px; padding: 8px 11px; border: 1px solid rgba(77,237,255,.33); border-radius: 999px; background: rgba(3,9,30,.82); color: #c2faff; font-size: .69rem; font-weight: 800; letter-spacing: .08em; pointer-events: none; }
        .futurex-reveal { opacity: 0; transform: translateY(28px); transition: opacity .75s ease, transform .75s cubic-bezier(.2,.8,.2,1); }
        .futurex-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .futurex-dialog { position: fixed; inset: 0; width: min(100% - 32px, 960px); max-width: none; max-height: 94vh; margin: auto; padding: 14px; overflow: auto; border: 1px solid rgba(68,226,255,.42); border-radius: 20px; background: #060b20; box-shadow: 0 24px 100px rgba(0,0,0,.7), 0 0 40px rgba(15,195,255,.16); }
        .futurex-dialog::backdrop { background: rgba(1,4,18,.88); backdrop-filter: blur(8px); }
        .futurex-dialog__close { display: block; margin: 0 0 12px auto; padding: 9px 14px; border: 1px solid rgba(86,222,255,.35); border-radius: 999px; background: #0e1935; color: #dffbff; font-weight: 800; cursor: pointer; }
        .futurex-dialog img { display: block; width: auto; max-width: 100%; max-height: calc(94vh - 76px); margin: 0 auto; object-fit: contain; border-radius: 10px; }
        @media (max-width: 900px) { .futurex-layout { grid-template-columns: minmax(0, 1fr) minmax(290px, .8fr); gap: 32px; }.futurex-title { font-size: clamp(3rem, 7vw, 5rem); } }
        @media (max-width: 700px) { .programs-container { width: min(100% - 32px, 600px); }.programs-hero { min-height: 540px; }.programs-hero__content { padding: 95px 0; }.programs-webinars-section { padding: 40px 0 88px; }.futurex-section { padding: 56px 0 76px; }.futurex-shell { width: min(100% - 32px, 560px); }.futurex-layout { grid-template-columns: 1fr; gap: 38px; }.futurex-title { margin-top: 22px; font-size: clamp(3.25rem, 16vw, 5.2rem); }.futurex-details { gap: 9px; }.futurex-detail { min-height: 80px; padding: 13px; }.futurex-poster-wrap { width: min(100%, 410px); }.futurex-actions { align-items: stretch; }.futurex-register, .futurex-themes-link { flex: 1 1 100%; }.futurex-register-note { margin-top: 2px; }.futurex-dialog { padding: 10px; } }
        @media (prefers-reduced-motion: reduce) { .futurex-reveal { opacity: 1; transform: none; transition: none; }.futurex-poster-wrap, .futurex-detail, .futurex-poster, .futurex-themes-link { animation: none !important; transition: none !important; } }
        @keyframes programs-drift { from { background-position: 0 0, 0 0, 0 0, 0 0; } to { background-position: 60px 40px, -40px 50px, 30px -35px, -25px 30px; } }
        @keyframes futurex-neon { 0%, 100% { border-color: rgba(37,225,255,.48); box-shadow: 0 0 22px rgba(0,214,255,.15), 0 0 62px rgba(93,56,255,.15), inset 0 0 24px rgba(38,202,255,.06); } 50% { border-color: rgba(255,76,220,.58); box-shadow: 0 0 26px rgba(0,214,255,.2), 0 0 74px rgba(255,55,216,.2), inset 0 0 30px rgba(38,202,255,.1); } }
        @media (prefers-reduced-motion: reduce) { .programs-page *, .programs-page *::before, .programs-page *::after { animation: none !important; scroll-behavior: auto !important; transition-duration: .01ms !important; } }
      `}</style>

      <section
        className="programs-hero"
        style={{ '--programs-hero-image': `url(${programsHeroImage})` }}
      >
        <div className="programs-stars absolute inset-0" aria-hidden="true" />
        <div className="programs-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="programs-container">
          <div className="programs-hero__content">
            <div className="programs-label"><span />Skill2Career Programs<span /></div>
            <h1 className="programs-title">Programs</h1>
            <p className="programs-lede">Choose a practical place to begin: build useful skills, explore new interests, and connect your learning with future possibilities.</p>
          </div>
        </div>
      </section>

      <section className="programs-webinars-section">
        <div className="programs-stars absolute inset-0" aria-hidden="true" />
        <div className="programs-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="futurex-section" ref={futurexSectionRef}>
          <div className="futurex-shell futurex-layout futurex-reveal">
            <div className="futurex-copy">
              <div className="futurex-kicker">Skill2Career presents · Online Ideathon</div>
              <h2 className="futurex-title">FutureX<span>2026</span></h2>
              <p className="futurex-tagline">Build. Think. Innovate. Turn real-world challenges into ideas that create impact.</p>

              <div className="futurex-date">
                <span className="futurex-date__icon" aria-hidden="true">⌁</span>
                <span><span className="futurex-date__label">Ideathon event date</span><span className="futurex-date__value">19th December 2026</span></span>
              </div>

              <div className="futurex-opportunity"><strong>Innovate together. Get recognized.</strong><br />Top 3 teams and 2 top performers will receive internship opportunities.</div>

              <div className="futurex-details" aria-label="Event details">
                <div className="futurex-detail"><span className="futurex-detail__label">Registration deadline</span><span className="futurex-detail__value">14th December 2026</span></div>
                <div className="futurex-detail"><span className="futurex-detail__label">Registration fee</span><span className="futurex-detail__value">₹49 per team</span></div>
                <div className="futurex-detail"><span className="futurex-detail__label">Team size</span><span className="futurex-detail__value">2–4 members</span></div>
                <div className="futurex-detail"><span className="futurex-detail__label">Eligibility</span><span className="futurex-detail__value">Open to everyone</span></div>
              </div>

              <div className="futurex-actions">
                <a className="futurex-register" href={futurexRegistrationUrl} target="_blank" rel="noopener noreferrer">Register Now <span aria-hidden="true">↗</span></a>
                <Link className="futurex-themes-link" to="/programs/futurex-2026/themes">Explore Ideathon Themes <span aria-hidden="true">↗</span></Link>
                <p className="futurex-register-note">Opens the FutureX information and themes page.</p>
              </div>
            </div>

            <div className="futurex-poster-wrap">
              <button
                className="futurex-poster-trigger"
                type="button"
                aria-label="View the FutureX 2026 poster in a larger view"
                onClick={() => posterDialogRef.current?.showModal()}
              >
                <img className="futurex-poster" src={futurexPoster} alt="Official FutureX 2026 Ideathon poster with event details and themes QR code" loading="lazy" decoding="async" />
              </button>
              <span className="futurex-poster-hint">Click to expand poster</span>
            </div>
          </div>
        </div>
      </section>

      <dialog
        ref={posterDialogRef}
        className="futurex-dialog"
        aria-label="FutureX 2026 official poster"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        <form method="dialog"><button className="futurex-dialog__close" type="submit">Close poster</button></form>
        <img src={futurexPoster} alt="Official FutureX 2026 Ideathon poster" loading="lazy" decoding="async" />
      </dialog>
    </div>
  )
}
