export const siteUrl = 'https://www.skill2career.in.net'

export const pageMetadata = [
  {
    path: '/',
    title: 'Skill2Career – Acquire Skills. Build Careers.',
    description:
      'Explore Skill2Career for career awareness, technology education, skill development, webinars and student learning opportunities.',
  },
  {
    path: '/about',
    title: 'About Skill2Career – Our Mission & Vision',
    description:
      'Discover Skill2Career, a growing EdTech platform helping students explore career opportunities, develop essential skills and understand emerging technologies.',
  },
  {
    path: '/programs',
    title: 'Upcoming Programs & Workshops – Skill2Career',
    description:
      'Explore upcoming Skill2Career webinars, workshops and student programs designed to build practical knowledge and future-ready skills.',
  },
  {
    path: '/programs/futurex-2026/themes',
    title: 'FutureX 2026 Ideathon – Project Themes',
    description:
      'Explore the FutureX 2026 Ideathon project themes by Skill2Career. Discover innovation challenges and opportunities to present impactful ideas.',
  },
  {
    path: '/webinars',
    title: 'Past Webinars & Workshops – Skill2Career',
    description:
      'Explore previous Skill2Career webinars and workshops, discover what students learned and see highlights from our learning sessions.',
  },
  {
    path: '/contact',
    title: 'Contact Skill2Career – Get in Touch',
    description:
      'Connect with Skill2Career for program enquiries, institutional collaborations, workshops and student learning opportunities.',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions – Skill2Career',
    description:
      'Find answers to common questions about Skill2Career, our programs, webinars, workshops, registrations and learning opportunities.',
  },
]

export function getPageMetadata(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  return pageMetadata.find(({ path }) => path === normalizedPath) ?? pageMetadata[0]
}
