import earthImage from '../assets/earth-space.jpg'
import teamGroupImage from '../assets/team-group.png'
import logarakshikaImage from '../assets/logarakshika.png'
import kamaliniImage from '../assets/kamalini.png'
import arshiyaImage from '../assets/arshiya.png'

const goals = [
  'Help students make informed career decisions.',
  'Build technical and future-ready skills.',
  'Prepare students for college and industry.',
  'Create a supportive learning community.',
]

const values = ['Innovation', 'Collaboration', 'Continuous Learning', 'Student Success']
const teamMembers = [
  { name: 'Logarakshika A', role: 'Co-Founder', image: logarakshikaImage, linkedin: 'https://www.linkedin.com/in/logarakshikaa/' },
  { name: 'Kamalini D', role: 'Co-Founder', image: kamaliniImage, linkedin: 'https://www.linkedin.com/in/kamalini-d/' },
  { name: 'Arshiya Samreen K', role: 'Co-Founder', image: arshiyaImage, linkedin: 'https://www.linkedin.com/in/arshiya-samreen-661269316/' },
]

function SectionLabel({ children }) {
  return <div className="about-label"><span />{children}<span /></div>
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <style>{`
        .about-page { --about-cyan: #67e8f9; --about-blue: #60a5fa; --about-purple: #a78bfa; background: #030712; color: #e5eefb; overflow: hidden; }
        .about-page section { position: relative; }
        .about-stars { background-image: radial-gradient(circle at 12% 20%, rgba(103,232,249,.7) 0 1px, transparent 1.5px), radial-gradient(circle at 76% 14%, rgba(255,255,255,.5) 0 1px, transparent 1.5px), radial-gradient(circle at 51% 65%, rgba(167,139,250,.45) 0 1px, transparent 1.5px), radial-gradient(circle at 90% 78%, rgba(96,165,250,.45) 0 1px, transparent 1.5px); background-size: 270px 220px, 340px 280px, 410px 320px, 500px 390px; animation: about-drift 22s linear infinite; }
        .about-grid { background-image: linear-gradient(rgba(103,232,249,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.06) 1px, transparent 1px); background-size: 54px 54px; mask-image: linear-gradient(to bottom, black, transparent 75%); }
        .about-container { position: relative; z-index: 2; width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .about-hero { min-height: 620px; display: flex; align-items: center; overflow: hidden; background: #020617; }
        .about-hero__earth { position: absolute; inset: 0; background-size: cover; background-position: center right; opacity: .72; }
        .about-hero__shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(2,6,23,.98) 0%, rgba(2,6,23,.82) 43%, rgba(2,6,23,.28) 100%); }
        .about-hero__content { max-width: 650px; padding: 110px 0 100px; }
        .about-label { display: inline-flex; align-items: center; gap: 10px; color: var(--about-cyan); font-size: 11px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
        .about-label span { width: 30px; height: 1px; background: currentColor; box-shadow: 0 0 10px currentColor; }
        .about-title { margin: 22px 0 0; color: white; font-size: clamp(3rem, 7vw, 6.8rem); line-height: .98; letter-spacing: -.04em; font-weight: 900; }
        .about-lede { max-width: 640px; margin: 26px 0 0; color: #dbeafe; font-size: clamp(1.05rem, 2vw, 1.35rem); line-height: 1.8; }
        .about-section { padding: 110px 0; background: #050b1a; }
        .about-section--deep { background: #030712; }
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
        .about-team-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 48px; }.about-profile { min-height: 420px; padding: 18px; text-align: center; transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease; }.about-profile:hover { transform: translateY(-4px); border-color: rgba(103,232,249,.55); box-shadow: 0 0 30px rgba(34,211,238,.12), inset 0 1px rgba(255,255,255,.09); }.about-profile__image-wrap { height: 320px; display: flex; align-items: flex-end; justify-content: center; overflow: hidden; border-radius: 13px; }.about-profile__image { display: block; width: 100%; height: 100%; object-fit: contain; object-position: center bottom; transition: transform .4s ease, filter .4s ease; }.about-profile__image-wrap:hover .about-profile__image { transform: scale(1.06); filter: drop-shadow(0 0 12px rgba(103,232,249,.22)); }.about-profile h3 { margin: 20px 0 0; color: white; font-size: 1.05rem; }.about-profile p { margin: 6px 0 0; color: #7dd3fc; font-size: .85rem; font-weight: 700; }
        .about-cta { overflow: hidden; background: #020617; }.about-cta__earth { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: .34; }.about-cta__shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(2,6,23,.95), rgba(2,6,23,.58), rgba(2,6,23,.85)); }.about-cta__content { position: relative; z-index: 2; padding: 110px 0; text-align: center; }.about-cta .about-heading { max-width: 620px; margin: 14px auto 0; text-wrap: balance; }.about-cta__actions { display: flex; justify-content: center; align-items: center; gap: 14px; margin-top: 30px; }
        .about-button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 50px; padding: 14px 22px; border: 1px solid rgba(103,232,249,.55); border-radius: 999px; color: #04111f; background: var(--about-cyan); font-size: .9rem; font-weight: 800; box-shadow: 0 0 25px rgba(34,211,238,.2); transition: transform .25s ease, box-shadow .25s ease; }.about-button:hover { transform: translateY(-3px); box-shadow: 0 0 35px rgba(34,211,238,.5); }.about-button--ghost { color: white; background: rgba(15,31,58,.65); }
        @media (max-width: 1000px) { .about-team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 800px) { .about-container { width: min(100% - 32px, 600px); }.about-hero { min-height: 600px; }.about-hero__earth { background-position: 64% center; opacity: .5; }.about-hero__shade { background: linear-gradient(90deg, rgba(2,6,23,.94), rgba(2,6,23,.7)); }.about-hero__content { padding: 95px 0; }.about-two-col { grid-template-columns: 1fr; gap: 45px; }.about-glass-grid { grid-template-columns: 1fr; }.about-profile { min-height: 400px; }.about-profile__image-wrap { height: 300px; } }
        @media (max-width: 1000px) { .about-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }.about-feature-card:nth-child(4), .about-feature-card:nth-child(5) { grid-column: auto; } }
        @media (max-width: 600px) { .about-team-grid, .about-feature-grid { grid-template-columns: 1fr; }.about-feature-card, .about-feature-card:nth-child(4), .about-feature-card:nth-child(5) { grid-column: auto; }.about-cta__actions { flex-direction: column; }.about-button { width: min(100%, 260px); } }
        @keyframes about-feature-reveal { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .about-page *, .about-page *::before, .about-page *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; } }
      `}</style>

      <section className="about-hero">
        <div className="about-stars absolute inset-0" aria-hidden="true" /><div className="about-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="about-hero__earth" style={{ backgroundImage: `url(${earthImage})` }} aria-hidden="true" /><div className="about-hero__shade" aria-hidden="true" />
        <div className="about-container"><div className="about-hero__content"><SectionLabel>About Skill2Career</SectionLabel><h1 className="about-title">About Skill2Career</h1><p className="about-lede">Empowering students with career clarity, practical skills, and confidence for the future.</p></div></div>
      </section>

      <section className="about-section"><div className="about-container about-two-col"><div><SectionLabel>Our story</SectionLabel><h2 className="about-heading">Who We Are</h2><p className="about-copy mt-6">Skill2Career is a student-led EdTech initiative dedicated to helping 11th, 12th, and college students bridge the gap between school and higher education. Through career guidance, webinars, workshops, and practical learning, we prepare students with the knowledge and skills needed to succeed.</p></div><img className="about-team-photo" src={teamGroupImage} alt="Skill2Career team" /></div></section>

      <section className="about-section about-section--deep"><div className="about-container"><SectionLabel>North star</SectionLabel><h2 className="about-heading">Our Mission &amp; Vision</h2><div className="about-glass-grid"><article className="about-glass about-card"><div className="about-card__icon">M</div><h3>Mission</h3><p>To bridge the gap between school and college by equipping students with career awareness, practical knowledge, and future-ready skills.</p></article><article className="about-glass about-card"><div className="about-card__icon">V</div><h3>Vision</h3><p>To empower every student with the confidence, clarity, and skills needed to build a successful career.</p></article></div></div></section>

      <section className="about-section"><div className="about-container"><SectionLabel>Purpose in practice</SectionLabel><h2 className="about-heading">Our Goals</h2><div className="about-glass-grid">{goals.map((goal, index) => <article className="about-glass about-card" key={goal}><div className="about-card__icon">0{index + 1}</div><p>{goal}</p></article>)}</div></div></section>

      <section className="about-section about-section--deep"><div className="about-container"><SectionLabel>What guides us</SectionLabel><h2 className="about-heading">Our Core Values</h2><div className="about-glass-grid">{values.map((value) => <article className="about-glass about-card" key={value}><div className="about-card__icon">✦</div><h3>{value}</h3><p>Ideas, people, and progress moving forward together.</p></article>)}</div></div></section>

      <section className="about-section"><div className="about-container"><SectionLabel>The people behind the work</SectionLabel><h2 className="about-heading">Meet Our Team</h2><div className="about-team-grid">{teamMembers.map((member) => <a className="about-glass about-profile" href={member.linkedin} target="_blank" rel="noopener noreferrer" key={member.name}><div className="about-profile__image-wrap"><img className="about-profile__image" src={member.image} alt={member.name} /></div><h3>{member.name}</h3><p>{member.role}</p></a>)}</div></div></section>

      <section className="about-section about-section--deep"><div className="about-container"><SectionLabel>What moves students forward</SectionLabel><h2 className="about-heading">Why Students Choose Skill2Career</h2><p className="about-copy mt-5 max-w-2xl">More than learning — we help students understand where they are going and how to get there.</p><div className="about-feature-grid"><article className="about-glass about-card about-feature-card"><div className="about-card__icon">✦</div><h3>Student-Led Approach</h3><p>Built with a deep understanding of the challenges students face.</p></article><article className="about-glass about-card about-feature-card"><div className="about-card__icon">↗</div><h3>Practical Learning</h3><p>Learn through workshops, webinars, projects, and real-world experiences.</p></article><article className="about-glass about-card about-feature-card"><div className="about-card__icon">◎</div><h3>Career-Focused Guidance</h3><p>Understand career options and make confident decisions about your future.</p></article><article className="about-glass about-card about-feature-card"><div className="about-card__icon">◇</div><h3>Future-Ready Skills</h3><p>Develop technical and professional skills for a rapidly changing world.</p></article><article className="about-glass about-card about-feature-card"><div className="about-card__icon">⊙</div><h3>Supportive Community</h3><p>Connect, learn, and grow with other students on the same journey.</p></article></div></div></section>

      <section className="about-section about-section--deep"><div className="about-container"><SectionLabel>Student feedback</SectionLabel><h2 className="about-heading">What Students Say</h2><div className="about-glass-grid"><article className="about-glass about-card"><div className="about-card__icon">“</div><p>Everything was great.</p><h3>Khushal Sachin Ghanekar</h3><p>SQL Webinar</p></article><article className="about-glass about-card"><div className="about-card__icon">“</div><p>You are doing well.</p><h3>Sonam Kumari</h3><p>Python Webinar</p></article><article className="about-glass about-card"><div className="about-card__icon">“</div><p>It is a great session.</p><h3>Saatvik Bhardwaj</h3><p>HTML &amp; CSS Webinar</p></article><article className="about-glass about-card"><div className="about-card__icon">“</div><p>It was awesome.</p><h3>Rishika</h3><p>AI Webinar</p></article><article className="about-glass about-card"><div className="about-card__icon">“</div><p>Overall the best.</p><h3>Tanish Deepak Parab</h3><p>Git &amp; GitHub Webinar</p></article><article className="about-glass about-card"><div className="about-card__icon">“</div><p>Thank you for the informative webinar. It was really helpful for beginners.</p><h3>DHEERAJ CHAUHAN</h3><p>No-Code Website Webinar</p></article></div></div></section>

      <section className="about-cta"><div className="about-cta__earth" style={{ backgroundImage: `url(${earthImage})` }} aria-hidden="true" /><div className="about-cta__shade" aria-hidden="true" /><div className="about-stars absolute inset-0" aria-hidden="true" /><div className="about-container about-cta__content"><SectionLabel>Start your next chapter</SectionLabel><h2 className="about-heading mx-auto">Ready to Build Your Future?</h2><p className="about-copy mx-auto mt-5 max-w-2xl">Join Skill2Career and take the first step toward career clarity and future-ready skills.</p><div className="about-cta__actions"><a className="about-button" href="/#programs">Explore Programs <span aria-hidden="true">→</span></a><a className="about-button about-button--ghost" href="https://chat.whatsapp.com/E8gcofln72DKXFbHZ4vsDd" target="_blank" rel="noopener noreferrer">Join Our Community <span aria-hidden="true">→</span></a></div></div></section>
    </div>
  )
}
