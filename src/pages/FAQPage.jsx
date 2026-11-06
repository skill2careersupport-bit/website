const questions = [
  {
    question: 'What skills can I learn through Skill2Career?',
    answer: 'Explore technical and non-technical learning opportunities designed to build practical skills, broaden your perspective, and help you take a confident next step.',
  },
  {
    question: 'Do I need prior knowledge to enroll in a course?',
    answer: 'Many sessions welcome beginners, while some courses may have specific prerequisites. Check each course description to find the right place to begin.',
  },
  {
    question: 'Are the courses free or paid?',
    answer: 'Both free and paid courses may be available. Review the individual course details for current pricing before enrolling.',
  },
  {
    question: 'Can I learn at my own pace?',
    answer: 'Learning format depends on the course. Some offerings are self-paced; live sessions and workshops follow a set schedule. Check the course details before you join.',
  },
  {
    question: 'Will I receive a certificate after completing a course?',
    answer: 'Certificate availability and eligibility can vary by course or session. Refer to its details for the applicable participation or completion requirements.',
  },
]

export default function FAQPage() {
  return (
    <main className="faq-page min-h-[70vh] bg-[#f2f8f6] px-5 py-20 text-[#123541] sm:px-8 sm:py-24">
      <section className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">A clear place to start</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Get the details you need to choose a learning path and take your next step with confidence.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {questions.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-teal-900/10 bg-white p-5 shadow-[0_12px_35px_rgba(18,53,65,0.07)] transition-colors open:border-primary/50 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-bold text-navy marker:hidden">
                {question}
                <span aria-hidden="true" className="shrink-0 text-2xl font-normal text-amber-600 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl border-t border-teal-900/10 pt-4 leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
