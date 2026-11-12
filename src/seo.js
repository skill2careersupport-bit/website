export const siteUrl = 'https://www.skill2career.in.net'

export const pageMetadata = [
  {
    path: '/',
    title: 'Skill2Career | Acquire Skills. Build Careers.',
    description:
      'Skill2Career empowers students through career awareness, technology education, skill development programs, webinars and workshops.',
  },
  {
    path: '/about',
    title: 'About Skill2Career | Career Awareness & Skill Development',
    description:
      'Learn how Skill2Career helps students explore career pathways, develop practical skills, and prepare for future opportunities.',
  },
  {
    path: '/programs',
    title: 'Upcoming Programs | Skill2Career',
    description:
      'Explore upcoming Skill2Career programs for students, with practical learning experiences in technology, careers, and skill development.',
  },
  {
    path: '/programs/futurex-2026/themes',
    title: 'FutureX 2026 Project Themes | Skill2Career',
    description:
      'Explore the FutureX 2026 project themes and choose a challenge for your team to turn ideas into impactful solutions.',
  },
  {
    path: '/webinars',
    title: 'Past Programs & Webinars | Skill2Career',
    description:
      'Discover past Skill2Career programs, student webinars, workshops, learning resources, and moments of student recognition.',
  },
  {
    path: '/contact',
    title: 'Contact Skill2Career | Get in Touch',
    description:
      'Contact Skill2Career with questions, ideas, or partnership inquiries about student career awareness and skill development.',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions | Skill2Career',
    description:
      'Find answers to common questions about Skill2Career programs, webinars, learning sessions, participation, and certificates.',
  },
]

export function getPageMetadata(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  return pageMetadata.find(({ path }) => path === normalizedPath) ?? pageMetadata[0]
}
