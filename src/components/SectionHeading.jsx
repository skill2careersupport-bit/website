export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p>}
    </div>
  )
}
