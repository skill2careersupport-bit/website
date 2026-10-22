import brochure from '../assets/power-bi-webinar-brochure.png'
import excelBrochure from '../assets/excel-data-analysis-webinar-brochure.png'
import portfolioBrochure from '../assets/portfolio-website-webinar-brochure.png'

const registrationUrl = 'https://unstop.com/p/webinar-on-power-bi-for-beginners-skill2career-1773070'
const excelRegistrationUrl = 'https://unstop.com/o/xAJREW7?lb=usepFZPJ&utm_medium=Share&utm_source=workshops&utm_campaign=Skillaca68127'
const portfolioRegistrationUrl = 'https://unstop.com/o/aq6T21l?lb=usepFZPJ&utm_medium=Share&utm_source=workshops&utm_campaign=Skillaca68127'

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
        .programs-webinars-section { position: relative; overflow: hidden; padding: 48px 0 120px; background: #030712; }
        .programs-section-heading { margin: 16px 0 0; color: white; font-size: clamp(2rem, 4vw, 3.3rem); line-height: 1.08; letter-spacing: -.035em; font-weight: 900; }
        .programs-section-lede { max-width: 680px; margin: 16px 0 0; color: #a9bad3; font-size: 1.05rem; line-height: 1.75; }
        .programs-featured-card { position: relative; display: grid; grid-template-columns: minmax(260px, .82fr) minmax(0, 1.18fr); margin-top: 42px; overflow: hidden; border: 1px solid rgba(125,211,252,.22); border-radius: 26px; background: linear-gradient(145deg, rgba(15,31,58,.94), rgba(7,14,31,.96)); box-shadow: 0 28px 90px rgba(0,0,0,.35), inset 0 1px rgba(255,255,255,.08); color: inherit; text-decoration: none; isolation: isolate; transition: transform .35s cubic-bezier(.2,.8,.2,1), border-color .35s ease, box-shadow .35s ease; animation: programs-slide-pop .75s .1s cubic-bezier(.2,.8,.2,1) both; }
        .programs-featured-card::before { position: absolute; z-index: -1; inset: 0; content: ''; pointer-events: none; background: radial-gradient(circle at 100% 0, rgba(103,232,249,.13), transparent 34%), radial-gradient(circle at 50% 100%, rgba(96,165,250,.08), transparent 42%); opacity: .7; transition: opacity .35s ease; }
        .programs-featured-card:hover { transform: translateY(-8px); border-color: rgba(103,232,249,.66); box-shadow: 0 32px 95px rgba(8,145,178,.16), 0 0 0 1px rgba(103,232,249,.12), inset 0 1px rgba(255,255,255,.12); }
        .programs-featured-card:hover::before { opacity: 1; }
        .programs-featured-card:active { transform: translateY(-2px) scale(.995); }
        .programs-featured-card:focus-visible { outline: 3px solid var(--programs-cyan); outline-offset: 5px; }
        .programs-brochure { position: relative; display: grid; place-items: center; min-height: 100%; padding: 28px; overflow: hidden; background: radial-gradient(ellipse at 50% 50%, rgba(34,211,238,.14), transparent 70%), rgba(2,6,23,.65); }
        .programs-brochure::after { position: absolute; inset: 0; content: ''; pointer-events: none; background: linear-gradient(135deg, rgba(103,232,249,.08), transparent 42%, rgba(167,139,250,.08)); }
        .programs-brochure img { display: block; width: min(100%, 370px); height: 100%; max-height: 700px; object-fit: contain; border-radius: 12px; box-shadow: 0 22px 60px rgba(0,0,0,.48); transition: transform .55s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease; }
        .programs-featured-card:hover .programs-brochure img { transform: scale(1.025) rotate(-.4deg); box-shadow: 0 28px 75px rgba(0,0,0,.58), 0 0 30px rgba(34,211,238,.12); }
        .programs-card-content { padding: clamp(26px, 4vw, 48px); }
        .programs-card-kicker { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
        .programs-live-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border: 1px solid rgba(103,232,249,.25); border-radius: 999px; background: rgba(34,211,238,.08); color: var(--programs-cyan); font-size: .72rem; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
        .programs-live-badge::before { width: 7px; height: 7px; border-radius: 50%; background: currentColor; box-shadow: 0 0 12px currentColor; content: ''; animation: programs-pulse 1.8s ease-in-out infinite; }
        .programs-card-date { color: #a9bad3; font-size: .88rem; font-weight: 700; }
        .programs-card-title { margin: 22px 0 0; color: white; font-size: clamp(1.75rem, 3vw, 2.55rem); line-height: 1.08; letter-spacing: -.035em; font-weight: 900; }
        .programs-card-description { margin: 16px 0 0; color: #b7c7dd; font-size: .98rem; line-height: 1.75; }
        .programs-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 21px; }
        .programs-meta span { padding: 9px 12px; border: 1px solid rgba(148,163,184,.18); border-radius: 10px; background: rgba(15,23,42,.68); color: #dbeafe; font-size: .82rem; font-weight: 700; }
        .programs-detail-heading { margin: 28px 0 0; color: white; font-size: .98rem; font-weight: 850; }
        .programs-attendees { display: flex; flex-wrap: wrap; gap: 8px; margin: 13px 0 0; padding: 0; list-style: none; }
        .programs-attendees li { padding: 8px 10px; border: 1px solid rgba(125,211,252,.14); border-radius: 999px; background: rgba(8,47,73,.28); color: #c4d7ec; font-size: .78rem; line-height: 1.35; }
        .programs-why { margin: 11px 0 0; color: #a9bad3; font-size: .9rem; line-height: 1.75; }
        .programs-card-footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 18px; margin-top: 30px; padding-top: 22px; border-top: 1px solid rgba(148,163,184,.16); }
        .programs-motto { color: #cbd5e1; font-size: .74rem; font-weight: 800; letter-spacing: .12em; }
        .programs-register { display: inline-flex; align-items: center; gap: 11px; padding: 13px 17px; border: 1px solid rgba(103,232,249,.4); border-radius: 12px; background: linear-gradient(110deg, rgba(8,145,178,.26), rgba(37,99,235,.22)); color: white; font-size: .9rem; font-weight: 850; box-shadow: 0 0 24px rgba(34,211,238,.08); transition: gap .25s ease, background .25s ease, box-shadow .25s ease; }
        .programs-register span { color: var(--programs-cyan); font-size: 1.1rem; }
        .programs-featured-card:hover .programs-register { gap: 16px; background: linear-gradient(110deg, rgba(8,145,178,.42), rgba(37,99,235,.35)); box-shadow: 0 0 28px rgba(34,211,238,.15); }
        @media (max-width: 900px) { .programs-grid-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 800px) { .programs-featured-card { grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); }.programs-brochure { padding: 20px; }.programs-card-content { padding: 28px; } }
        @media (max-width: 700px) { .programs-container { width: min(100% - 32px, 600px); }.programs-hero { min-height: 540px; }.programs-hero__content { padding: 95px 0; }.programs-grid-cards { grid-template-columns: 1fr; }.programs-card { min-height: 315px; }.programs-webinars-section { padding: 40px 0 88px; }.programs-featured-card { grid-template-columns: 1fr; border-radius: 20px; }.programs-brochure { min-height: 0; padding: 22px; }.programs-brochure img { width: min(100%, 350px); max-height: 540px; }.programs-card-content { padding: 25px 21px; }.programs-card-footer { align-items: flex-start; flex-direction: column; } }
        @keyframes programs-drift { from { background-position: 0 0, 0 0, 0 0, 0 0; } to { background-position: 60px 40px, -40px 50px, 30px -35px, -25px 30px; } }
        @keyframes programs-slide-pop { from { opacity: 0; transform: translateY(28px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes programs-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .5; transform: scale(.72); } }
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
          <div className="programs-label"><span />Featured Program<span /></div>
          <h2 className="programs-section-heading">Turn raw data into real insights.</h2>
          <p className="programs-section-lede">Join us for a beginner-friendly live webinar to explore Microsoft Power BI, create interactive dashboards, and discover how businesses turn data into useful insights.</p>

          <a
            className="programs-featured-card"
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register for Webinar on Power BI for Beginners on Unstop; opens in a new tab"
          >
            <div className="programs-brochure">
              <img src={brochure} alt="Webinar on Power BI for Beginners event brochure" />
            </div>
            <div className="programs-card-content">
              <div className="programs-card-kicker">
                <span className="programs-live-badge">Online · Live Webinar</span>
                <span className="programs-card-date">1st November 2026</span>
              </div>
              <h3 className="programs-card-title">Webinar on POWER BI FOR BEGINNERS</h3>
              <p className="programs-card-description">Join Skill2Career for a beginner-friendly live webinar to explore Microsoft Power BI, visualize data, create interactive dashboards, and discover how businesses turn raw data into meaningful insights.</p>

              <div className="programs-meta" aria-label="Webinar details">
                <span>1 hour</span>
                <span>E-Certificate of Participation</span>
              </div>

              <h4 className="programs-detail-heading">Who can attend?</h4>
              <ul className="programs-attendees">
                <li>Class 11 and Class 12 students</li>
                <li>First-year college students</li>
                <li>Students exploring Data Analyst or Business Analyst careers</li>
                <li>Anyone interested in learning Power BI</li>
              </ul>

              <h4 className="programs-detail-heading">Why join?</h4>
              <p className="programs-why">Learn how to transform raw data into meaningful insights through a live Power BI demonstration. Explore charts, interactive dashboards, filters, and business metrics while discovering how data visualization supports smarter decisions. Get introduced to practical Power BI concepts and take your first step toward a career in Data Analytics or Business Intelligence.</p>

              <div className="programs-card-footer">
                <span className="programs-motto">Skill2Career — ACQUIRE SKILLS. BUILD CAREERS.</span>
                <span className="programs-register">Register on Unstop <span aria-hidden="true">↗</span></span>
              </div>
            </div>
          </a>

          <div className="programs-label" style={{ marginTop: 64 }}><span />Next Program<span /></div>
          <h2 className="programs-section-heading">From Raw Data to Real Insights</h2>
          <p className="programs-section-lede">Learn data analysis with Excel in a beginner-friendly live webinar. Organize datasets, create charts, and uncover meaningful insights.</p>

          <a
            className="programs-featured-card"
            href={excelRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register for From Raw Data to Real Insights — Learn Data Analysis with Excel on Unstop; opens in a new tab"
          >
            <div className="programs-brochure">
              <img src={excelBrochure} alt="From Raw Data to Real Insights Excel webinar brochure" />
            </div>
            <div className="programs-card-content">
              <div className="programs-card-kicker">
                <span className="programs-live-badge">Online · Live Webinar</span>
                <span className="programs-card-date">3 November 2026</span>
              </div>
              <h3 className="programs-card-title">From Raw Data to Real Insights — Learn Data Analysis with Excel!</h3>
              <p className="programs-card-description">Join Skill2Career for a beginner-friendly live webinar to learn Microsoft Excel, explore basic data analysis techniques, organize and analyze datasets, visualize data using charts, and discover meaningful insights from raw data.</p>

              <div className="programs-meta" aria-label="Webinar details">
                <span>1 hour</span>
                <span>E-Certificate of Participation, subject to participation criteria</span>
              </div>

              <h4 className="programs-detail-heading">Who can attend?</h4>
              <ul className="programs-attendees">
                <li>Class 11 and Class 12 students</li>
                <li>First-year college students</li>
                <li>Beginners interested in Data Analytics</li>
                <li>Students exploring Data Analyst or Business Analyst careers</li>
                <li>Anyone interested in learning Excel for data analysis</li>
              </ul>

              <h4 className="programs-detail-heading">Why join?</h4>
              <p className="programs-why">Learn how to turn raw data into meaningful insights using Microsoft Excel through a beginner-friendly live demonstration. Discover how to organize data, perform basic analysis, create charts, and identify useful patterns. Get access to learning resources and a sample dataset to practise your skills. Take your first step toward a career in Data Analytics or Business Intelligence!</p>

              <div className="programs-card-footer">
                <span className="programs-motto">Skill2Career — ACQUIRE SKILLS. BUILD CAREERS.</span>
                <span className="programs-register">Register on Unstop <span aria-hidden="true">↗</span></span>
              </div>
            </div>
          </a>

          <div className="programs-label" style={{ marginTop: 64 }}><span />Next Program<span /></div>
          <h2 className="programs-section-heading">Build Your First Portfolio Website in 60 Minutes</h2>
          <p className="programs-section-lede">Join Skill2Career Academy for a beginner-friendly live webinar to explore web development and learn the basics of HTML and CSS.</p>

          <a
            className="programs-featured-card"
            href={portfolioRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register for Build Your First Portfolio Website in 60 Minutes on Unstop; opens in a new tab"
          >
            <div className="programs-brochure">
              <img src={portfolioBrochure} alt="Build Your First Portfolio Website in 60 Minutes webinar brochure" />
            </div>
            <div className="programs-card-content">
              <div className="programs-card-kicker">
                <span className="programs-live-badge">Online · Live Webinar</span>
                <span className="programs-card-date">31st October 2026 (Saturday)</span>
              </div>
              <h3 className="programs-card-title">Build Your First Portfolio Website in 60 Minutes</h3>
              <p className="programs-card-description">Join Skill2Career Academy for a beginner-friendly live webinar to explore web development, learn the basics of HTML and CSS, and discover how to build your own personal portfolio website. Gain practical insights into website design and take your first step toward a career in web development.</p>

              <div className="programs-meta" aria-label="Webinar details">
                <span>1 hour</span>
                <span>E-Certificate of Participation, if confirmed by Skill2Career Academy</span>
              </div>

              <h4 className="programs-detail-heading">Who can attend?</h4>
              <ul className="programs-attendees">
                <li>Class 9 to Class 12 students</li>
                <li>College students and freshers</li>
                <li>Biology and non-technical students</li>
                <li>Beginners interested in coding and web development</li>
                <li>Anyone exploring a career in technology</li>
              </ul>

              <h4 className="programs-detail-heading">Why join?</h4>
              <p className="programs-why">Learn how to create your first personal portfolio website through a beginner-friendly live demonstration. Explore HTML and CSS, understand how to structure and style a webpage, and discover how to showcase your skills, projects, and interests professionally. Get practical website-building tips and guidance to take your first step toward a career in web development.</p>

              <div className="programs-card-footer">
                <span className="programs-motto">Skill2Career — ACQUIRE SKILLS. BUILD CAREERS.</span>
                <span className="programs-register">Register on Unstop <span aria-hidden="true">↗</span></span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
