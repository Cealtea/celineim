import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkIcon } from '@/components/Icons'
import logoEtteilla from '@/images/logos/etteilla.png'
// import logoCosmos from '@/images/logos/cosmos.svg'
// import logoHelioStream from '@/images/logos/helio-stream.svg'
// import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
// import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Etteilla Foundation',
    description:
      'Leading nonprofit dedicated to preserving and promoting the rich cultural heritage of playing cards.',
    link: "https://etteilla.org",
    otherLinks: [{ href: 'https://etteilla.org', label: 'etteilla.org' }],
    logo: logoEtteilla,
  }
]


export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made. Projects I’ve worked on.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made. Projects I’ve worked on."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. 
      Many of them are closed-source but I have recently started to open source more code on my github page. If you see something that piques your interest, check out the websites."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt={project.name}
                className="h-10 w-10 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link} target='_blank' rel='noopener'>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {project.otherLinks.map((link) => (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-purple-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{link.label}</span>
              </p>
            ))}

          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
