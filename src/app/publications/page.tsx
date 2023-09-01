import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkIcon } from '@/components/Icons'
import logoEtteilla from '@/images/logos/etteilla.png'
import logoTrueTesting from '@/images/logos/truetesting.jpg'
import logoPetSquare from '@/images/logos/petsquare.png'
import logoElie from '@/images/logos/elie.jpg'
import logoDefcon from '@/images/logos/defcon.jpg'
import { TextLink } from '@/components/Links'

const projects = [
  {
    name: 'Cheating at Poker James Bond Style - DEF CON 24',
    description:
      'Ever dreamed of cleaning up at poker, but afraid that you are not good enough to do it on your own? Fear not! The chinese underground got you covered with high-tech concealed cheating devices that automatically read marked cards and whisper them in your ear through an ear-piece.',
    otherLinks: [{ href: 'https://youtu.be/bU6bosBN5D0', label: 'Talk on Youtube' }],
    logo: logoDefcon,
  },
  {
    name: 'I am a legend: Hacking Hearthstone - DEF CON 22',
    description:
      'Want to become a legend at Hearthstone -- Blizzard’s blockbuster collecting card game -- or simply learn how to play better? Then pull up a chair by the hearth and join us for a talk about Hearthstone mechanics and how to improve your chance of winning using machine learning and data mining.',
    otherLinks: [{ href: 'https://youtu.be/7AAilkNRQAw', label: 'Talk on Youtube' }],
    logo: logoDefcon,
  }
]


export const metadata: Metadata = {
  title: 'Talks and Publications',
  description: 'Things I’ve published in academia and talked about at industry conferences.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Talks and Publications."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. 
      Many of them are closed-source but I have recently started to open source more code on my github page. If you see something that piques your interest, check out the websites."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
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
              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-100 transition group-hover:scale-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="absolute -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{project.name}</span>
            </h2>
            <Card.Description>{project.description}</Card.Description>

              {project.otherLinks.map((link) => (
                <p className="relative z-10 flex text-sm font-medium text-zinc-400 transition dark:text-zinc-500">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <TextLink href={link.href}>{link.label}</TextLink>
                </p>
              ))}
            
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
