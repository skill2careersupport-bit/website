export default function ProgramsPage() {
  return (
    <div className="programs-page">
      <style>{`
        .programs-page { --programs-cyan: #67e8f9; --programs-blue: #60a5fa; --programs-purple: #a78bfa; min-height: 100%; overflow: hidden; background: #030712; color: #e5eefb; }
        .programs-page section { position: relative; }
        .programs-stars { background-image: radial-gradient(circle at 12% 20%, rgba(103,232,249,.72) 0 1px, transparent 1.5px), radial-gradient(circle at 76% 14%, rgba(255,255,255,.52) 0 1px, transparent 1.5px), radial-gradient(circle at 51% 65%, rgba(167,139,250,.48) 0 1px, transparent 1.5px), radial-gradient(circle at 90% 78%, rgba(96,165,250,.48) 0 1px, transparent 1.5px); background-size: 270px 220px, 340px 280px, 410px 320px, 500px 390px; animation: programs-drift 24s linear infinite; }
        .programs-grid { background-image: linear-gradient(rgba(103,232,249,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.055) 1px, transparent 1px); background-size: 54px 54px; mask-image: linear-gradient(to bottom, black, transparent 82%); }
        .programs-container { position: relative; z-index: 2; width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .programs-hero { min-height: 570px; display: flex; align-items: center; overflow: hidden; background: radial-gradient(circle at 82% 35%, rgba(37,99,235,.22), transparent 30%), #020617; }
        .programs-hero::after { content: ''; position: absolute; width: 430px; height: 430px; right: -145px; top: 72px; border: 1px solid rgba(103,232,249,.16); border-radius: 50%; box-shadow: 0 0 0 34px rgba(103,232,249,.025), 0 0 0 68px rgba(167,139,250,.025); }
        .programs-hero__content { max-width: 760px; padding: 115px 0 105px; }
        .programs-label { display: inline-flex; align-items: center; gap: 10px; color: var(--programs-cyan); font-size: 11px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
        .programs-label span { width: 30px; height: 1px; background: currentColor; box-shadow: 0 0 10px currentColor; }
        .programs-title { margin: 22px 0 0; color: white; font-size: clamp(3rem, 7vw, 6.6rem); line-height: .98; letter-spacing: -.04em; font-weight: 900; }
        .programs-lede { max-width: 680px; margin: 28px 0 0; color: #c7d7ed; font-size: clamp(1.05rem, 2vw, 1.28rem); line-height: 1.8; }
        .programs-section { padding: 108px 0 120px; background: #050b1a; }
        .programs-heading { max-width: 720px; margin: 14px 0 0; color: white; font-size: clamp(2.1rem, 4vw, 4rem); line-height: 1.05; letter-spacing: -.035em; font-weight: 900; }
        .programs-grid-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 48px; }
        .programs-glass { position: relative; overflow: hidden; border: 1px solid rgba(125,211,252,.18); border-radius: 18px; background: linear-gradient(145deg, rgba(15,31,58,.78), rgba(7,14,31,.72)); box-shadow: inset 0 1px rgba(255,255,255,.06), 0 18px 55px rgba(0,0,0,.2); backdrop-filter: blur(18px); }
        .programs-glass::after { content: ''; position: absolute; width: 130px; height: 130px; right: -62px; top: -70px; border-radius: 50%; background: rgba(103,232,249,.13); filter: blur(24px); }
        .programs-card { min-height: 350px; display: flex; flex-direction: column; padding: 28px; transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease; }
        .programs-card:hover { transform: translateY(-7px); border-color: rgba(103,232,249,.62); box-shadow: 0 0 34px rgba(34,211,238,.15), inset 0 1px rgba(255,255,255,.1); }
        .programs-card__icon { position: relative; z-index: 1; display: grid; place-items: center; width: 52px; height: 52px; border: 1px solid rgba(103,232,249,.38); border-radius: 15px; font-size: .8rem; font-weight: 900; letter-spacing: .08em; }
        .programs-card__icon--cyan { color: var(--programs-cyan); background: rgba(34,211,238,.08); box-shadow: 0 0 20px rgba(34,211,238,.12); }
        .programs-card__icon--blue { color: var(--programs-blue); background: rgba(96,165,250,.08); border-color: rgba(96,165,250,.38); box-shadow: 0 0 20px rgba(96,165,250,.12); }
        .programs-card__icon--purple { color: var(--programs-purple); background: rgba(167,139,250,.08); border-color: rgba(167,139,250,.38); box-shadow: 0 0 20px rgba(167,139,250,.12); }
        .programs-card h3 { position: relative; z-index: 1; margin: 28px 0 0; color: white; font-size: 1.25rem; line-height: 1.3; }
        .programs-card p { position: relative; z-index: 1; margin: 14px 0 0; color: #a9bad3; line-height: 1.75; }
        .programs-button { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 10px; width: fit-content; margin-top: auto; padding-top: 28px; color: var(--programs-cyan); font-size: .9rem; font-weight: 800; transition: gap .25s ease, color .25s ease; }
        .programs-button:hover { gap: 15px; color: white; }
        .programs-button span { font-size: 1.1rem; }
        .programs-webinars-section { position: relative; overflow: hidden; padding: 108px 0 120px; background: #030712; }
        .programs-coming-soon { max-width: 760px; margin: 0 auto; padding: 56px 28px; border: 1px solid rgba(125,211,252,.22); border-radius: 24px; background: linear-gradient(145deg, rgba(15,31,58,.82), rgba(7,14,31,.76)); box-shadow: 0 20px 65px rgba(0,0,0,.25), inset 0 1px rgba(255,255,255,.07); text-align: center; animation: programs-slide-pop .8s cubic-bezier(.2,.8,.2,1) both; }
        .programs-coming-soon h2 { margin: 18px 0 0; color: white; font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.05; letter-spacing: -.035em; font-weight: 900; }
        .programs-coming-soon p { margin: 18px 0 0; color: #a9bad3; font-size: 1.1rem; line-height: 1.8; }
        @media (max-width: 900px) { .programs-grid-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 700px) { .programs-container { width: min(100% - 32px, 600px); }.programs-hero { min-height: 540px; }.programs-hero__content { padding: 95px 0; }.programs-grid-cards { grid-template-columns: 1fr; }.programs-card { min-height: 315px; }.programs-coming-soon { padding: 42px 20px; } }
        @keyframes programs-drift { from { background-position: 0 0, 0 0, 0 0, 0 0; } to { background-position: 60px 40px, -40px 50px, 30px -35px, -25px 30px; } }
        @keyframes programs-slide-pop { from { opacity: 0; transform: translateY(28px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @media (prefers-reduced-motion: reduce) { .programs-page *, .programs-page *::before, .programs-page *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }
      `}</style>

      <section className="programs-hero">
        <div className="programs-stars absolute inset-0" aria-hidden="true" />
        <div className="programs-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="programs-container">
          <div className="programs-hero__content">
            <div className="programs-label"><span />Skill2Career Programs<span /></div>
            <h1 className="programs-title">Programs</h1>
            <p className="programs-lede">Explore practical learning experiences designed to help students build skills, discover opportunities, and prepare for the future.</p>
          </div>
        </div>
      </section>

      <section className="programs-webinars-section">
        <div className="programs-stars absolute inset-0" aria-hidden="true" />
        <div className="programs-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="programs-container">
          <div className="programs-coming-soon">
            <div className="programs-label"><span />Stay Tuned<span /></div>
            <h2>Programs Coming Soon</h2>
            <p>We&apos;re preparing exciting learning opportunities. Stay tuned!</p>
          </div>
        </div>
      </section>
    </div>
  )
}
