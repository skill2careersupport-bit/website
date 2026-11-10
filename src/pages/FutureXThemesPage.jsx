import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import futurexPoster from '../assets/futurex-project-themes-poster.webp'
import skill2careerLogo from '../assets/skill2career-futurex-logo.webp'
import futurexProjectThemes, { futurexRegistrationUrl } from '../data/futurexProjectThemes'

export default function FutureXThemesPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const cards = pageRef.current?.querySelectorAll('.futurex-theme-card')
    if (!cards?.length) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="futurex-themes-page" ref={pageRef}>
      <style>{`
        .futurex-themes-page {
          --fx-night: #041126;
          --fx-panel: rgba(7, 28, 57, .88);
          --fx-cyan: #3ceaff;
          --fx-blue: #1c91ff;
          --fx-gold: #ffca48;
          --fx-white: #f4f8ff;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #030b1d;
          color: var(--fx-white);
          font-family: 'Inter', 'Plus Jakarta Sans', sans-serif;
        }
        .futurex-themes-page::before,
        .futurex-themes-page::after {
          position: absolute;
          z-index: -1;
          inset: 0;
          content: '';
          pointer-events: none;
        }
        .futurex-themes-page::before {
          opacity: .48;
          background:
            radial-gradient(ellipse at 50% -12%, rgba(19, 113, 237, .42), transparent 49%),
            radial-gradient(ellipse at 100% 48%, rgba(0, 205, 255, .13), transparent 36%),
            radial-gradient(ellipse at 0% 78%, rgba(239, 177, 42, .08), transparent 35%);
          background-size: 130% 120%;
          animation: fx-atmosphere 16s ease-in-out infinite alternate;
        }
        .futurex-themes-page::after {
          opacity: .17;
          background-image:
            linear-gradient(rgba(49, 156, 255, .2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(49, 156, 255, .2) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(to bottom, black, transparent 92%);
        }
        .futurex-themes-shell { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
        .futurex-themes-hero { position: relative; padding: 48px 0 62px; }
        .futurex-themes-back { display: inline-flex; align-items: center; gap: 9px; color: #a9c5e7; font-size: .86rem; font-weight: 700; transition: color .2s ease, transform .2s ease; }
        .futurex-themes-back:hover { color: var(--fx-cyan); transform: translateX(-3px); }
        .futurex-themes-hero-layout { display: grid; grid-template-columns: minmax(0, 1fr) 260px; align-items: center; gap: clamp(32px, 7vw, 92px); margin-top: 40px; }
        .futurex-themes-logo { width: 174px; height: auto; margin-bottom: 27px; padding: 9px 13px; border: 1px solid rgba(255,255,255,.7); border-radius: 12px; background: #fff; box-shadow: 0 0 30px rgba(37, 183, 255, .13); }
        .futurex-themes-kicker { display: flex; align-items: center; gap: 11px; color: var(--fx-gold); font-size: .72rem; font-weight: 900; letter-spacing: .2em; text-transform: uppercase; }
        .futurex-themes-kicker::before { width: 34px; height: 1px; background: currentColor; box-shadow: 0 0 12px currentColor; content: ''; }
        .futurex-themes-eyebrow { margin: 19px 0 0; color: #d9e8ff; font-size: clamp(1.02rem, 2.4vw, 1.4rem); font-weight: 850; letter-spacing: .18em; }
        .futurex-themes-title { margin: 4px 0 0; color: #fff; font-size: clamp(3.2rem, 9.5vw, 7rem); font-weight: 950; letter-spacing: -.075em; line-height: .96; text-shadow: 0 0 34px rgba(46, 160, 255, .2); }
        .futurex-themes-title span { color: var(--fx-gold); }
        .futurex-themes-subtitle { max-width: 700px; margin: 22px 0 0; color: #c4d5eb; font-size: clamp(1rem, 2.4vw, 1.28rem); font-weight: 600; line-height: 1.65; }
        .futurex-themes-subtitle strong { color: var(--fx-gold); }
        .futurex-theme-poster-frame { position: relative; width: 100%; padding: 6px; border: 1px solid rgba(255, 201, 72, .78); border-radius: 17px; background: linear-gradient(145deg, rgba(255,201,72,.19), rgba(11,70,139,.55) 54%, rgba(41,214,255,.22)); box-shadow: 0 0 22px rgba(255,194,61,.13), 0 0 48px rgba(0,137,255,.16); transform: rotate(1deg); transition: transform .35s ease, box-shadow .35s ease; }
        .futurex-theme-poster-frame:hover { transform: rotate(0) translateY(-4px); box-shadow: 0 0 28px rgba(255,194,61,.2), 0 0 58px rgba(0,137,255,.2); }
        .futurex-theme-poster { display: block; width: 100%; height: auto; border-radius: 11px; }
        .futurex-theme-poster-caption { margin: 10px 0 0; color: #96b5dc; font-size: .68rem; font-weight: 800; letter-spacing: .15em; text-align: center; text-transform: uppercase; }
        .futurex-themes-list { position: relative; padding: 48px 0 80px; background: linear-gradient(180deg, rgba(4,17,38,.68), rgba(4,15,34,.9)); }
        .futurex-themes-list::before { position: absolute; top: 0; right: 0; left: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(45,221,255,.7), rgba(255,202,72,.75), transparent); box-shadow: 0 0 18px rgba(45,221,255,.22); content: ''; }
        .futurex-themes-section-heading { margin: 0; color: #fff; font-size: clamp(1.7rem, 4vw, 2.6rem); font-weight: 900; letter-spacing: -.04em; }
        .futurex-themes-section-copy { margin: 10px 0 0; color: #99b1d0; font-size: .96rem; line-height: 1.65; }
        .futurex-theme-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-top: 32px; }
        .futurex-theme-card { --theme-index: 0; position: relative; display: grid; grid-template-columns: 58px minmax(0, 1fr); align-items: start; gap: 15px; min-height: 200px; padding: 22px; overflow: hidden; border: 1px solid rgba(38, 178, 255, .34); border-radius: 16px; background: linear-gradient(138deg, rgba(8, 39, 78, .92), rgba(5, 23, 50, .94) 64%, rgba(13, 34, 69, .88)); box-shadow: inset 0 1px rgba(255,255,255,.045), 0 11px 30px rgba(0,0,0,.19); opacity: 0; transform: translateY(18px); transition: opacity .55s ease, transform .55s cubic-bezier(.2,.8,.2,1), border-color .25s ease, box-shadow .25s ease; transition-delay: calc(var(--theme-index) * 35ms); }
        .futurex-theme-card.is-visible { opacity: 1; transform: translateY(0); }
        .futurex-theme-card::before { position: absolute; top: -1px; left: 18px; width: 58px; height: 2px; background: var(--fx-gold); box-shadow: 0 0 13px rgba(255,202,72,.8); content: ''; }
        .futurex-theme-card::after { position: absolute; right: -48px; bottom: -62px; width: 130px; height: 130px; border-radius: 50%; background: rgba(16, 149, 255, .12); filter: blur(28px); content: ''; transition: background .25s ease; }
        .futurex-theme-card:hover { z-index: 1; transform: translateY(-5px); border-color: rgba(255, 204, 76, .78); box-shadow: inset 0 1px rgba(255,255,255,.07), 0 0 0 1px rgba(255,202,72,.12), 0 16px 38px rgba(0,111,255,.19), 0 0 24px rgba(0,204,255,.1); }
        .futurex-theme-card:hover::after { background: rgba(255, 188, 50, .13); }
        .futurex-theme-icon-wrap { position: relative; display: grid; width: 58px; height: 58px; place-items: center; border: 1px solid rgba(45, 226, 255, .58); border-radius: 15px; background: linear-gradient(145deg, rgba(18, 175, 255, .19), rgba(5, 31, 72, .76)); box-shadow: inset 0 0 20px rgba(15,191,255,.1), 0 0 17px rgba(0,191,255,.1); }
        .futurex-theme-icon { font-size: 1.65rem; line-height: 1; filter: drop-shadow(0 0 8px rgba(64,222,255,.3)); }
        .futurex-theme-number { position: absolute; right: -6px; bottom: -7px; padding: 2px 5px; border: 1px solid rgba(255,201,72,.7); border-radius: 5px; background: #0a2141; color: var(--fx-gold); font-size: .56rem; font-weight: 900; letter-spacing: .06em; }
        .futurex-theme-content { position: relative; z-index: 1; min-width: 0; }
        .futurex-theme-title { margin: 2px 0 0; color: #f4f8ff; font-size: clamp(1rem, 2vw, 1.18rem); font-weight: 850; letter-spacing: -.025em; line-height: 1.4; }
        .futurex-theme-description { margin: 8px 0 0; color: #a9beda; font-size: .85rem; line-height: 1.62; }
        .futurex-theme-register { position: relative; z-index: 1; display: inline-flex; min-height: 38px; align-items: center; gap: 9px; margin-top: 15px; padding: 0 13px; border: 1px solid rgba(255,202,72,.68); border-radius: 9px; background: linear-gradient(100deg, rgba(255,198,62,.13), rgba(13,138,220,.16)); color: #ffe294; font-size: .76rem; font-weight: 900; letter-spacing: .04em; transition: color .2s ease, background .2s ease, box-shadow .2s ease, transform .2s ease; }
        .futurex-theme-register:hover { transform: translateY(-2px); background: linear-gradient(100deg, #f3bb3d, #ffd968); color: #08162d; box-shadow: 0 0 20px rgba(255,199,62,.24); }
        .futurex-themes-closing { position: relative; padding: 68px 0 76px; overflow: hidden; border-top: 1px solid rgba(39,194,255,.22); background: radial-gradient(ellipse at 50% 120%, rgba(15,119,255,.24), transparent 65%), #040d20; text-align: center; }
        .futurex-themes-closing::before { position: absolute; top: 0; left: 50%; width: min(600px, 80%); height: 1px; background: linear-gradient(90deg, transparent, var(--fx-gold), var(--fx-cyan), transparent); box-shadow: 0 0 20px rgba(48,221,255,.35); content: ''; transform: translateX(-50%); }
        .futurex-themes-closing h2 { max-width: 850px; margin: 0 auto; color: #fff; font-size: clamp(1.8rem, 5vw, 3.3rem); font-weight: 900; letter-spacing: -.05em; line-height: 1.18; }
        .futurex-themes-closing h2 span { color: var(--fx-gold); }
        .futurex-themes-closing-copy { margin: 14px auto 0; color: #a8bdd9; font-size: .96rem; line-height: 1.65; }
        .futurex-themes-main-cta { display: inline-flex; min-height: 54px; align-items: center; justify-content: center; gap: 11px; margin-top: 26px; padding: 0 23px; border: 1px solid rgba(255,222,131,.8); border-radius: 12px; background: linear-gradient(105deg, #e8ad33, #ffd765 52%, #ffbf3e); color: #091a33; font-size: .92rem; font-weight: 950; box-shadow: 0 0 24px rgba(255,194,55,.2), inset 0 1px rgba(255,255,255,.6); transition: transform .2s ease, box-shadow .2s ease; }
        .futurex-themes-main-cta:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(255,194,55,.32), 0 0 34px rgba(255,194,55,.2); }
        .futurex-theme-register:focus-visible, .futurex-themes-main-cta:focus-visible, .futurex-themes-back:focus-visible { outline: 3px solid var(--fx-cyan); outline-offset: 4px; }
        @media (max-width: 760px) {
          .futurex-themes-hero { padding: 34px 0 46px; }
          .futurex-themes-hero-layout { grid-template-columns: minmax(0, 1fr) 190px; gap: 25px; margin-top: 30px; }
          .futurex-themes-logo { width: 150px; margin-bottom: 22px; }
          .futurex-theme-grid { gap: 12px; }
          .futurex-theme-card { grid-template-columns: 50px minmax(0, 1fr); gap: 12px; min-height: 190px; padding: 17px; }
          .futurex-theme-icon-wrap { width: 50px; height: 50px; }
        }
        @media (max-width: 600px) {
          .futurex-themes-shell { width: min(100% - 32px, 480px); }
          .futurex-themes-hero { padding: 28px 0 40px; }
          .futurex-themes-hero-layout { grid-template-columns: 1fr; gap: 25px; margin-top: 26px; }
          .futurex-themes-logo { width: 142px; margin-bottom: 21px; }
          .futurex-themes-title { font-size: clamp(3.35rem, 16vw, 5.2rem); }
          .futurex-theme-poster-frame { width: min(100%, 290px); justify-self: center; }
          .futurex-themes-list { padding: 38px 0 56px; }
          .futurex-theme-grid { grid-template-columns: 1fr; gap: 12px; margin-top: 24px; }
          .futurex-theme-card { grid-template-columns: 56px minmax(0, 1fr); min-height: 0; padding: 18px; }
          .futurex-theme-icon-wrap { width: 56px; height: 56px; }
          .futurex-themes-closing { padding: 55px 0 62px; }
          .futurex-themes-main-cta { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .futurex-themes-page::before { animation: none; }
          .futurex-theme-card { opacity: 1; transform: none; transition: none; }
          .futurex-theme-poster-frame, .futurex-theme-register, .futurex-themes-main-cta, .futurex-themes-back { transition: none; }
        }
        @keyframes fx-atmosphere { from { background-position: 0% 0%, 100% 0%, 0% 100%; } to { background-position: 100% 40%, 0% 100%, 100% 0%; } }
      `}</style>

      <header className="futurex-themes-hero">
        <div className="futurex-themes-shell">
          <Link className="futurex-themes-back" to="/programs"><span aria-hidden="true">←</span> Back to Upcoming Programs</Link>
          <div className="futurex-themes-hero-layout">
            <div>
              <img className="futurex-themes-logo" src={skill2careerLogo} alt="Skill2Career" width="468" height="419" />
              <div className="futurex-themes-kicker">Innovation begins with an idea</div>
              <p className="futurex-themes-eyebrow">PROJECT THEMES</p>
              <h1 className="futurex-themes-title">FUTURE<span>X</span> 2026</h1>
              <p className="futurex-themes-subtitle">Choose <strong>ANY ONE</strong> of the following themes and turn your ideas into impactful solutions!</p>
            </div>
            <figure className="futurex-theme-poster-frame">
              <img className="futurex-theme-poster" src={futurexPoster} alt="Official FutureX 2026 project themes poster" width="768" height="960" fetchPriority="high" />
              <figcaption className="futurex-theme-poster-caption">Official FutureX 2026 themes poster</figcaption>
            </figure>
          </div>
        </div>
      </header>

      <section className="futurex-themes-list" aria-labelledby="futurex-themes-section-heading">
        <div className="futurex-themes-shell">
          <div className="futurex-themes-kicker">Choose a challenge. Shape what’s next.</div>
          <h2 className="futurex-themes-section-heading" id="futurex-themes-section-heading">10 directions. Countless ways to make an impact.</h2>
          <p className="futurex-themes-section-copy">Pick the theme that inspires your team, then turn a real-world challenge into a thoughtful solution.</p>

          <div className="futurex-theme-grid">
            {futurexProjectThemes.map((theme, index) => (
              <article
                className="futurex-theme-card"
                key={theme.title}
                style={{ '--theme-index': index }}
              >
                <div className="futurex-theme-icon-wrap" aria-hidden="true">
                  <span className="futurex-theme-icon">{theme.icon}</span>
                  <span className="futurex-theme-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="futurex-theme-content">
                  <h3 className="futurex-theme-title">{theme.title}</h3>
                  <p className="futurex-theme-description">{theme.description}</p>
                  <a
                    className="futurex-theme-register"
                    href={futurexRegistrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Register for FutureX 2026 with theme: ${theme.title}`}
                  >
                    Register Now <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="futurex-themes-closing">
        <div className="futurex-themes-shell">
          <h2>Choose your theme. Build your solution. <span>Create an impact.</span></h2>
          <p className="futurex-themes-closing-copy">Bring your idea to FutureX 2026 and make it matter.</p>
          <a className="futurex-themes-main-cta" href={futurexRegistrationUrl} target="_blank" rel="noopener noreferrer">
            Register for FutureX 2026 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  )
}
