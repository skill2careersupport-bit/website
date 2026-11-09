import { useEffect, useRef, useState } from 'react'
import participationCertificate from '../assets/participation-certificate.png'
import appreciationCertificate from '../assets/appreciation-certificate.png'
import webinarsHeroImage from '../assets/webinars-hero.jpg'

const pastWebinars = [
  { title: 'SQL Webinar', description: 'Explore core SQL concepts and practise how databases help organize and retrieve information.', topic: 'SQL', tone: 'cyan' },
  { title: 'Python Webinar', description: 'Get an approachable introduction to Python and see how programming can solve practical problems.', topic: 'Python', tone: 'blue' },
  { title: 'HTML & CSS Webinar', description: 'Learn the building blocks of the web and how HTML and CSS bring a page to life.', topic: 'Web development', tone: 'purple' },
  { title: 'AI Webinar', description: 'Discover the fundamentals of artificial intelligence and examples of how it is used in the real world.', topic: 'Artificial intelligence', tone: 'cyan' },
  { title: 'Git & GitHub Webinar', description: 'Understand version control and how developers use Git and GitHub to collaborate on projects.', topic: 'Version control', tone: 'blue' },
  { title: 'No-Code Website Webinar', description: 'See how no-code tools can help turn an idea into a simple website without traditional coding.', topic: 'No-code development', tone: 'purple' },
]

const feedback = [
  { quote: 'Everything was great.', name: 'Khushal Sachin Ghanekar', session: 'SQL Webinar', tone: 'cyan' },
  { quote: 'You are doing well.', name: 'Sonam Kumari', session: 'Python Webinar', tone: 'blue' },
  { quote: 'It is a great session.', name: 'Saatvik Bhardwaj', session: 'HTML & CSS Webinar', tone: 'purple' },
  { quote: 'It was awesome.', name: 'Rishika', session: 'AI Webinar', tone: 'cyan' },
  { quote: 'Overall the best.', name: 'Tanish Deepak Parab', session: 'Git & GitHub Webinar', tone: 'blue' },
  { quote: 'Thank you for the informative webinar. It was really helpful for beginners.', name: 'DHEERAJ CHAUHAN', session: 'No-Code Website Webinar', tone: 'purple' },
]

const certificates = [
  { title: 'Participation Certificate', image: participationCertificate },
  { title: 'Certificate of Appreciation', image: appreciationCertificate },
]

export default function WebinarsPage() {
  const certificatesRef = useRef(null)
  const certificateDialogRef = useRef(null)
  const [activeCertificate, setActiveCertificate] = useState(null)

  useEffect(() => {
    const section = certificatesRef.current
    if (!section) return undefined

    const cards = [...section.querySelectorAll('.webinars-certificate-card')]
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
    }, { threshold: 0.15 })

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const dialog = certificateDialogRef.current
    if (activeCertificate && dialog && !dialog.open) dialog.showModal()
  }, [activeCertificate])

  return (
    <div className="webinars-page">
      <style>{`
        .webinars-page { --webinars-cyan: #67e8f9; --webinars-blue: #60a5fa; --webinars-purple: #a78bfa; min-height: 100%; overflow: hidden; background: #030712; color: #e5eefb; }
        .webinars-stars { background-image: radial-gradient(circle at 12% 20%, rgba(103,232,249,.72) 0 1px, transparent 1.5px), radial-gradient(circle at 76% 14%, rgba(255,255,255,.52) 0 1px, transparent 1.5px), radial-gradient(circle at 51% 65%, rgba(167,139,250,.48) 0 1px, transparent 1.5px); background-size: 270px 220px, 340px 280px, 410px 320px; animation: webinars-drift 24s linear infinite; }
        .webinars-grid { background-image: linear-gradient(rgba(103,232,249,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.055) 1px, transparent 1px); background-size: 54px 54px; mask-image: linear-gradient(to bottom, black, transparent 80%); }
        .webinars-container { position: relative; z-index: 2; width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .webinars-hero { isolation: isolate; min-height: 570px; display: flex; align-items: center; justify-content: center; overflow: hidden; background-color: #f7fbf9; }
        .webinars-hero::before { position: absolute; z-index: 1; inset: 0; content: ''; pointer-events: none; background-image: linear-gradient(rgba(255,255,255,.83), rgba(255,255,255,.83)), var(--webinars-hero-image); background-size: cover; background-position: center; background-repeat: no-repeat; }
        .webinars-hero__content { max-width: 820px; margin-inline: auto; padding: 82px 0 74px; text-align: center; }
        .webinars-hero__content .webinars-label { justify-content: center; }
        .webinars-label { display: inline-flex; align-items: center; gap: 10px; color: var(--webinars-cyan); font-size: 11px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
        .webinars-label span { width: 30px; height: 1px; background: currentColor; box-shadow: 0 0 10px currentColor; }
        .webinars-title { margin: 22px 0 0; color: white; font-size: clamp(3rem, 7vw, 6.4rem); line-height: .98; letter-spacing: -.04em; font-weight: 900; }
        .webinars-lede { max-width: 680px; margin: 28px 0 0; color: #c7d7ed; font-size: clamp(1.05rem, 2vw, 1.28rem); line-height: 1.8; }
        .webinars-section { padding: 108px 0 120px; background: #050b1a; }
        .webinars-section--deep { padding-top: 48px; background: #030712; }
        .webinars-heading { max-width: 760px; margin: 14px 0 0; color: white; font-size: clamp(2.1rem, 4vw, 4rem); line-height: 1.05; letter-spacing: -.035em; font-weight: 900; }
        .webinars-copy { max-width: 720px; margin-top: 20px; color: #a9bad3; font-size: 1.05rem; line-height: 1.8; }
        .webinars-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 48px; }
        .webinars-card { position: relative; overflow: hidden; min-height: 260px; padding: 28px; border: 1px solid rgba(125,211,252,.18); border-radius: 18px; background: linear-gradient(145deg, rgba(15,31,58,.78), rgba(7,14,31,.72)); box-shadow: inset 0 1px rgba(255,255,255,.06), 0 18px 55px rgba(0,0,0,.2); backdrop-filter: blur(18px); transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease; }
        .webinars-card::after { content: ''; position: absolute; width: 125px; height: 125px; right: -60px; top: -64px; border-radius: 50%; background: rgba(103,232,249,.13); filter: blur(24px); }
        .webinars-card:hover { transform: translateY(-6px); border-color: rgba(103,232,249,.6); box-shadow: 0 0 32px rgba(34,211,238,.14), inset 0 1px rgba(255,255,255,.1); }
        .webinars-card__icon { position: relative; z-index: 1; display: grid; place-items: center; width: 52px; height: 52px; border: 1px solid rgba(103,232,249,.38); border-radius: 15px; color: var(--webinars-cyan); background: rgba(34,211,238,.08); font-size: .85rem; font-weight: 900; }
        .webinars-card--blue .webinars-card__icon { color: var(--webinars-blue); border-color: rgba(96,165,250,.38); background: rgba(96,165,250,.08); }
        .webinars-card--purple .webinars-card__icon { color: var(--webinars-purple); border-color: rgba(167,139,250,.38); background: rgba(167,139,250,.08); }
        .webinars-card h2 { position: relative; z-index: 1; margin: 26px 0 0; color: white; font-size: 1.35rem; }
        .webinars-card p { position: relative; z-index: 1; margin: 13px 0 0; color: #a9bad3; line-height: 1.8; }
        .webinars-card__status { position: relative; z-index: 1; display: inline-flex; width: fit-content; margin-top: 24px; border: 1px solid rgba(103,232,249,.3); border-radius: 999px; padding: 6px 10px; color: var(--webinars-cyan); background: rgba(34,211,238,.07); font-size: .7rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .webinars-card__topic { position: relative; z-index: 1; margin-top: 22px !important; color: var(--webinars-cyan) !important; font-size: .75rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .webinars-feedback-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 48px; }
        .webinars-feedback-card { min-height: 270px; }
        .webinars-feedback-card .webinars-card__icon { font-size: 2rem; line-height: 1; }
        .webinars-feedback-card h2 { margin-top: 22px; font-size: 1.05rem; }
        .webinars-feedback-card h2 + p { margin-top: 6px; color: var(--webinars-cyan); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
        .webinars-feedback-card .webinars-quote { margin-top: 18px; color: #e5eefb; font-size: 1rem; line-height: 1.8; }
        .webinars-certificates { padding: 88px 0 104px; background: #eaf4f1; }
        .webinars-certificates__intro { max-width: 720px; margin: 20px 0 0; color: #506971; font-size: 1.02rem; line-height: 1.8; }
        .webinars-certificates__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 38px; }
        .webinars-certificate-card { overflow: hidden; padding: 14px; border: 1px solid rgba(15,119,116,.15); border-radius: 20px; background: #fff; box-shadow: 0 18px 42px rgba(18,53,65,.09); opacity: 0; transform: translateY(20px); transition: opacity .55s ease, transform .55s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease, border-color .3s ease; }
        .webinars-certificate-card.is-visible { opacity: 1; transform: translateY(0); }
        .webinars-certificate-card:hover { transform: translateY(-6px); border-color: rgba(15,119,116,.4); box-shadow: 0 24px 48px rgba(18,53,65,.14); }
        .webinars-certificate-card__preview { display: block; width: 100%; padding: 0; overflow: hidden; border: 0; border-radius: 12px; background: #f2f8f6; cursor: zoom-in; }
        .webinars-certificate-card__preview:focus-visible, .webinars-certificate-dialog__close:focus-visible { outline: 3px solid #0f7774; outline-offset: 3px; }
        .webinars-certificate-card__image { display: block; width: 100%; aspect-ratio: 1.414; object-fit: cover; transition: transform .45s cubic-bezier(.2,.8,.2,1); }
        .webinars-certificate-card:hover .webinars-certificate-card__image { transform: scale(1.025); }
        .webinars-certificate-card h3 { margin: 18px 8px 8px; color: #123541; font-size: 1.1rem; font-weight: 800; }
        .webinars-certificate-dialog { position: fixed; inset: 0; width: min(100% - 32px, 1100px); max-width: none; max-height: min(92vh, 900px); margin: auto; padding: 16px; overflow: auto; border: 1px solid rgba(255,255,255,.2); border-radius: 18px; background: #123541; box-shadow: 0 24px 90px rgba(0,0,0,.4); }
        .webinars-certificate-dialog::backdrop { background: rgba(3,10,20,.82); backdrop-filter: blur(5px); }
        .webinars-certificate-dialog__close { display: block; margin: 0 0 12px auto; padding: 8px 14px; border: 1px solid rgba(255,255,255,.25); border-radius: 999px; color: white; background: rgba(255,255,255,.08); font-size: .875rem; font-weight: 700; cursor: pointer; transition: color .2s ease, background .2s ease; }
        .webinars-certificate-dialog__close:hover { color: #123541; background: #d19a1b; }
        .webinars-certificate-dialog img { display: block; width: 100%; height: auto; border-radius: 10px; }
        @media (max-width: 900px) { .webinars-cards, .webinars-feedback-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 900px) { .webinars-certificates__grid { gap: 16px; } }
        @media (max-width: 800px) { .webinars-hero { min-height: 420px; }.webinars-hero__content { padding: 70px 0 62px; } }
        @media (max-width: 700px) { .webinars-container { width: min(100% - 32px, 600px); }.webinars-hero { min-height: 480px; }.webinars-hero__content { padding: 72px 0; }.webinars-section { padding: 72px 0 84px; }.webinars-section--deep { padding-top: 36px; }.webinars-cards, .webinars-feedback-grid { grid-template-columns: 1fr; gap: 14px; margin-top: 32px; }.webinars-card { padding: 24px; } }
        @media (max-width: 700px) { .webinars-certificates { padding: 68px 0 80px; }.webinars-certificates__grid { grid-template-columns: 1fr; gap: 16px; margin-top: 28px; }.webinars-certificate-card { padding: 12px; }.webinars-certificate-dialog { padding: 10px; } }
        @keyframes webinars-drift { to { background-position: 60px 40px, -40px 50px, 30px -35px; } }
        @media (prefers-reduced-motion: reduce) { .webinars-page *, .webinars-page *::before, .webinars-page *::after { animation: none !important; scroll-behavior: auto !important; transition-duration: .01ms !important; } }
      `}</style>
      <section
        className="webinars-hero"
        style={{ '--webinars-hero-image': `url(${webinarsHeroImage})` }}
      >
        <div className="webinars-stars absolute inset-0" aria-hidden="true" />
        <div className="webinars-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="webinars-container"><div className="webinars-hero__content"><div className="webinars-label"><span />Skill2Career Sessions<span /></div><h1 className="webinars-title">Webinars &amp; Workshops</h1><p className="webinars-lede">Learn by doing, ask questions, and explore ideas that connect classroom knowledge with practical skills.</p></div></div>
      </section>
      <section className="webinars-section webinars-section--deep"><div className="webinars-container"><div className="webinars-label"><span />Past Sessions<span /></div><h2 className="webinars-heading">Past Webinars</h2><p className="webinars-copy">Revisit hands-on sessions that introduced students to useful tools, new ideas, and skills they can continue practising.</p><div className="webinars-cards">{pastWebinars.map((webinar, index) => <article className={`webinars-card webinars-card--${webinar.tone}`} key={webinar.title}><div className="webinars-card__icon">0{index + 1}</div><h2>{webinar.title}</h2><p>{webinar.description}</p><p className="webinars-card__topic">{webinar.topic}</p><div className="webinars-card__status">Past Webinar</div></article>)}</div></div></section>

      <section className="webinars-section"><div className="webinars-container"><div className="webinars-label"><span />Student Feedback<span /></div><h2 className="webinars-heading">What Students Say</h2><p className="webinars-copy">Feedback from students who attended our webinars and learning sessions.</p><div className="webinars-feedback-grid">{feedback.map((entry) => <article className={`webinars-card webinars-card--${entry.tone} webinars-feedback-card`} key={entry.name}><div className="webinars-card__icon">“</div><p className="webinars-quote">{entry.quote}</p><h2>{entry.name}</h2><p>{entry.session}</p></article>)}</div></div></section>

      <section className="webinars-certificates" ref={certificatesRef} aria-labelledby="webinars-certificates-heading">
        <div className="webinars-container">
          <div className="webinars-label"><span />Celebrating student achievement<span /></div>
          <h2 className="webinars-heading" id="webinars-certificates-heading">Certificates &amp; Student Recognition</h2>
          <p className="webinars-certificates__intro">We recognise students for taking part, completing learning activities, and showing dedication. These certificates celebrate their participation and achievements along the way.</p>
          <div className="webinars-certificates__grid">
            {certificates.map((certificate) => (
              <article className="webinars-certificate-card" key={certificate.title}>
                <button
                  type="button"
                  className="webinars-certificate-card__preview"
                  onClick={() => setActiveCertificate(certificate)}
                  aria-label={`Enlarge ${certificate.title}`}
                >
                  <img className="webinars-certificate-card__image" src={certificate.image} alt={`${certificate.title} preview`} />
                </button>
                <h3>{certificate.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <dialog
        ref={certificateDialogRef}
        className="webinars-certificate-dialog"
        aria-label={activeCertificate?.title ?? 'Certificate preview'}
        onClose={() => setActiveCertificate(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        {activeCertificate && (
          <>
            <form method="dialog">
              <button type="submit" className="webinars-certificate-dialog__close">Close preview</button>
            </form>
            <img src={activeCertificate.image} alt={activeCertificate.title} />
          </>
        )}
      </dialog>
    </div>
  )
}
