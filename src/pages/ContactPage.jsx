import { useState } from 'react'

export default function ContactPage() {
  const [submission, setSubmission] = useState({ status: 'idle', message: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmission({ status: 'submitting', message: '' })

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })
      const contentType = response.headers.get('content-type') || ''
      const result = contentType.includes('application/json') ? await response.json() : null

      if (!response.ok) {
        throw new Error(result?.error || 'The contact service is unavailable. Please try again later.')
      }
      if (!result?.success) {
        throw new Error('The contact service is unavailable. Please try again later.')
      }

      form.reset()
      setSubmission({
        status: 'success',
        message: 'Thank you for your message or suggestion! Your message has been sent successfully. Our team will contact you soon.',
      })
    } catch (error) {
      setSubmission({
        status: 'error',
        message: error instanceof Error ? error.message : 'Unable to send your message. Please try again.',
      })
    }
  }

  return (
    <div className="contact-page">
      <style>{`
        .contact-page { --contact-cyan: #67e8f9; min-height: 100%; overflow: hidden; background: #030712; color: #e5eefb; }
        .contact-stars { background-image: radial-gradient(circle at 12% 20%, rgba(103,232,249,.72) 0 1px, transparent 1.5px), radial-gradient(circle at 76% 14%, rgba(255,255,255,.52) 0 1px, transparent 1.5px), radial-gradient(circle at 51% 65%, rgba(167,139,250,.48) 0 1px, transparent 1.5px); background-size: 270px 220px, 340px 280px, 410px 320px; animation: contact-drift 24s linear infinite; }
        .contact-grid { background-image: linear-gradient(rgba(103,232,249,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.055) 1px, transparent 1px); background-size: 54px 54px; }
        .contact-container { position: relative; z-index: 2; width: min(1060px, calc(100% - 40px)); margin: 0 auto; }
        .contact-hero { min-height: 620px; display: flex; align-items: center; overflow: hidden; background: radial-gradient(circle at 78% 28%, rgba(37,99,235,.22), transparent 31%), #020617; }
        .contact-content { padding: 115px 0 105px; }
        .contact-label { display: inline-flex; align-items: center; gap: 10px; color: var(--contact-cyan); font-size: 11px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
        .contact-label span { width: 30px; height: 1px; background: currentColor; box-shadow: 0 0 10px currentColor; }
        .contact-title { max-width: 760px; margin: 22px 0 0; color: white; font-size: clamp(3rem, 7vw, 6.4rem); line-height: .98; letter-spacing: -.04em; font-weight: 900; }
        .contact-lede { max-width: 680px; margin: 28px 0 0; color: #c7d7ed; font-size: clamp(1.05rem, 2vw, 1.28rem); line-height: 1.8; }
        .contact-layout { display: grid; grid-template-columns: 1.1fr .9fr; gap: 22px; padding: 0 0 120px; }
        .contact-card { border: 1px solid rgba(125,211,252,.2); border-radius: 18px; background: linear-gradient(145deg, rgba(15,31,58,.78), rgba(7,14,31,.72)); box-shadow: inset 0 1px rgba(255,255,255,.06), 0 18px 55px rgba(0,0,0,.2); backdrop-filter: blur(18px); }
        .contact-form { padding: 30px; }
        .contact-form h2, .contact-connect h2 { margin: 0; color: white; font-size: 1.5rem; }
        .contact-field { display: flex; flex-direction: column; gap: 8px; margin-top: 20px; }
        .contact-field label { color: #c7d7ed; font-size: .85rem; font-weight: 700; }
        .contact-field input, .contact-field textarea { width: 100%; border: 1px solid rgba(125,211,252,.2); border-radius: 10px; background: rgba(2,6,23,.56); padding: 12px 14px; color: white; font: inherit; outline: none; }
        .contact-field input:focus, .contact-field textarea:focus { border-color: var(--contact-cyan); box-shadow: 0 0 0 3px rgba(103,232,249,.1); }
        .contact-field textarea { min-height: 145px; resize: vertical; }
        .contact-button { display: inline-flex; align-items: center; gap: 10px; margin-top: 24px; border: 1px solid rgba(103,232,249,.55); border-radius: 999px; padding: 13px 21px; color: #04111f; background: var(--contact-cyan); font-size: .9rem; font-weight: 800; transition: transform .25s ease, box-shadow .25s ease; }
        .contact-button:hover { transform: translateY(-3px); box-shadow: 0 0 30px rgba(34,211,238,.4); }
        .contact-button:disabled { cursor: wait; opacity: .7; }
        .contact-status { margin-top: 16px; font-size: .9rem; line-height: 1.6; }
        .contact-status--success { color: #86efac; }
        .contact-status--error { color: #fca5a5; }
        .contact-connect { align-self: start; padding: 30px; }
        .contact-connect p { margin-top: 15px; color: #a9bad3; line-height: 1.8; }
        @media (max-width: 800px) { .contact-container { width: min(100% - 32px, 600px); }.contact-content { padding: 95px 0; }.contact-layout { grid-template-columns: 1fr; } }
        @keyframes contact-drift { to { background-position: 60px 40px, -40px 50px, 30px -35px; } }
        @media (prefers-reduced-motion: reduce) { .contact-page *, .contact-page *::before, .contact-page *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }
      `}</style>
      <section className="contact-hero"><div className="contact-stars absolute inset-0" aria-hidden="true" /><div className="contact-grid absolute inset-0 opacity-50" aria-hidden="true" /><div className="contact-container"><div className="contact-content"><div className="contact-label"><span />Start a conversation<span /></div><h1 className="contact-title">Contact Skill2Career</h1><p className="contact-lede">Have a question, idea, or want to connect with us? We&apos;d love to hear from you.</p></div><div className="contact-layout"><form className="contact-card contact-form" onSubmit={handleSubmit}><h2>Send a message</h2><div className="contact-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} required /></div><div className="contact-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required /></div><div className="contact-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" maxLength={5000} required /></div><button className="contact-button" type="submit" disabled={submission.status === 'submitting'}>{submission.status === 'submitting' ? 'Sending…' : 'Send Message'} <span aria-hidden="true">-&gt;</span></button>{submission.message && <p className={`contact-status ${submission.status === 'success' ? 'contact-status--success' : ''} ${submission.status === 'error' ? 'contact-status--error' : ''}`} role={submission.status === 'error' ? 'alert' : 'status'} aria-live="polite">{submission.message}</p>}</form><aside className="contact-card contact-connect"><h2>Let&apos;s Connect</h2><p>Use the form to send a message. Official contact details will be shared here when available.</p></aside></div></div></section>
    </div>
  )
}
