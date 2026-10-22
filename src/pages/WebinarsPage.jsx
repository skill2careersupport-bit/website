const pastWebinars = [
  { title: 'SQL Webinar', description: 'An introductory session focused on SQL concepts and practical database learning.', topic: 'SQL', tone: 'cyan' },
  { title: 'Python Webinar', description: 'A practical introduction to Python programming and its applications.', topic: 'Python', tone: 'blue' },
  { title: 'HTML & CSS Webinar', description: 'A beginner-friendly session covering the fundamentals of building and styling websites.', topic: 'Web development', tone: 'purple' },
  { title: 'AI Webinar', description: 'An introductory session exploring artificial intelligence and its real-world applications.', topic: 'Artificial intelligence', tone: 'cyan' },
  { title: 'Git & GitHub Webinar', description: 'A practical session introducing version control and collaboration using Git and GitHub.', topic: 'Version control', tone: 'blue' },
  { title: 'No-Code Website Webinar', description: 'A practical session showing how websites can be created using no-code tools.', topic: 'No-code development', tone: 'purple' },
]

const feedback = [
  { quote: 'Everything was great.', name: 'Khushal Sachin Ghanekar', session: 'SQL Webinar', tone: 'cyan' },
  { quote: 'You are doing well.', name: 'Sonam Kumari', session: 'Python Webinar', tone: 'blue' },
  { quote: 'It is a great session.', name: 'Saatvik Bhardwaj', session: 'HTML & CSS Webinar', tone: 'purple' },
  { quote: 'It was awesome.', name: 'Rishika', session: 'AI Webinar', tone: 'cyan' },
  { quote: 'Overall the best.', name: 'Tanish Deepak Parab', session: 'Git & GitHub Webinar', tone: 'blue' },
  { quote: 'Thank you for the informative webinar. It was really helpful for beginners.', name: 'DHEERAJ CHAUHAN', session: 'No-Code Website Webinar', tone: 'purple' },
]

export default function WebinarsPage() {
  return (
    <div className="webinars-page">
      <style>{`
        .webinars-page { --webinars-cyan: #67e8f9; --webinars-blue: #60a5fa; --webinars-purple: #a78bfa; min-height: 100%; overflow: hidden; background: #030712; color: #e5eefb; }
        .webinars-stars { background-image: radial-gradient(circle at 12% 20%, rgba(103,232,249,.72) 0 1px, transparent 1.5px), radial-gradient(circle at 76% 14%, rgba(255,255,255,.52) 0 1px, transparent 1.5px), radial-gradient(circle at 51% 65%, rgba(167,139,250,.48) 0 1px, transparent 1.5px); background-size: 270px 220px, 340px 280px, 410px 320px; animation: webinars-drift 24s linear infinite; }
        .webinars-grid { background-image: linear-gradient(rgba(103,232,249,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.055) 1px, transparent 1px); background-size: 54px 54px; mask-image: linear-gradient(to bottom, black, transparent 80%); }
        .webinars-container { position: relative; z-index: 2; width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .webinars-hero { min-height: 550px; display: flex; align-items: center; overflow: hidden; background: radial-gradient(circle at 82% 35%, rgba(37,99,235,.22), transparent 30%), #020617; }
        .webinars-hero::after { content: ''; position: absolute; width: 430px; height: 430px; right: -145px; top: 72px; border: 1px solid rgba(103,232,249,.16); border-radius: 50%; box-shadow: 0 0 0 34px rgba(103,232,249,.025), 0 0 0 68px rgba(167,139,250,.025); }
        .webinars-hero__content { max-width: 760px; padding: 112px 0 102px; }
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
        @media (max-width: 900px) { .webinars-cards { grid-template-columns: 1fr; } }
        @media (max-width: 700px) { .webinars-container { width: min(100% - 32px, 600px); }.webinars-hero { min-height: 520px; }.webinars-hero__content { padding: 92px 0; }.webinars-section--deep { padding-top: 40px; } }
        @keyframes webinars-drift { to { background-position: 60px 40px, -40px 50px, 30px -35px; } }
        @media (prefers-reduced-motion: reduce) { .webinars-page *, .webinars-page *::before, .webinars-page *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }
      `}</style>
      <section className="webinars-hero">
        <div className="webinars-stars absolute inset-0" aria-hidden="true" />
        <div className="webinars-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="webinars-container"><div className="webinars-hero__content"><div className="webinars-label"><span />Skill2Career Sessions<span /></div><h1 className="webinars-title">Webinars &amp; Workshops</h1><p className="webinars-lede">Learn from practical sessions designed to give students knowledge beyond the classroom.</p></div></div>
      </section>
      <section className="webinars-section webinars-section--deep"><div className="webinars-container"><div className="webinars-label"><span />Past Sessions<span /></div><h2 className="webinars-heading">Past Webinars</h2><p className="webinars-copy">Explore the sessions Skill2Career has conducted to help students learn practical and future-ready skills.</p><div className="webinars-cards">{pastWebinars.map((webinar, index) => <article className={`webinars-card webinars-card--${webinar.tone}`} key={webinar.title}><div className="webinars-card__icon">0{index + 1}</div><h2>{webinar.title}</h2><p>{webinar.description}</p><p className="webinars-card__topic">{webinar.topic}</p><div className="webinars-card__status">Past Webinar</div></article>)}</div></div></section>

      <section className="webinars-section"><div className="webinars-container"><div className="webinars-label"><span />Student Feedback<span /></div><h2 className="webinars-heading">What Students Say</h2><p className="webinars-copy">Feedback from students who attended our webinars and learning sessions.</p><div className="webinars-feedback-grid">{feedback.map((entry) => <article className={`webinars-card webinars-card--${entry.tone} webinars-feedback-card`} key={entry.name}><div className="webinars-card__icon">“</div><p className="webinars-quote">{entry.quote}</p><h2>{entry.name}</h2><p>{entry.session}</p></article>)}</div></div></section>
    </div>
  )
}
