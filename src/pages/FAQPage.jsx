const questions = [
  {
    question: 'What skills can I learn through Skill2Career?',
    answer: 'Skill2Career offers opportunities to explore technical and non-technical skills through courses and learning resources, helping learners develop their knowledge and career-related skills.',
  },
  {
    question: 'Do I need prior knowledge to enroll in a course?',
    answer: 'Anyone interested in learning can explore courses on Skill2Career. However, some courses may have specific prerequisites. Please check the individual course description before enrolling.',
  },
  {
    question: 'Are the courses free or paid?',
    answer: 'Skill2Career offers both free and paid courses. Please check the details of each course to find out whether any fees apply.',
  },
  {
    question: 'Can I learn at my own pace?',
    answer: 'Learning flexibility depends on the course. Some courses allow self-paced learning, while others follow a fixed schedule. Please check the course details for more information.',
  },
  {
    question: 'Will I receive a certificate after completing a course?',
    answer: 'Yes, a certificate is available for every course. Please refer to the individual course details for the applicable completion requirements.',
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-[70vh] bg-[#030712] px-5 py-20 text-[#e5eefb] sm:px-8 sm:py-24">
      <section className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">Support</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Find answers to common questions about learning with Skill2Career.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {questions.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-sky-200/20 bg-gradient-to-br from-[#0f1f3a]/80 to-[#070e1f]/80 p-5 shadow-[inset_0_1px_rgba(255,255,255,0.04)] transition-colors open:border-cyan-300/50 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-bold text-white marker:hidden">
                {question}
                <span aria-hidden="true" className="shrink-0 text-2xl font-normal text-cyan-300 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl border-t border-white/10 pt-4 leading-7 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
