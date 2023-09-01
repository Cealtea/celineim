import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkIcon } from '@/components/Icons'
import logoEtteilla from '@/images/logos/etteilla.png'
import logoTrueTesting from '@/images/logos/truetesting.jpg'
import logoPetSquare from '@/images/logos/petsquare.png'
import logoElie from '@/images/logos/elie.jpg'
import logoWebSecLab from '@/images/logos/webseclab.png'
import { TextLink } from '@/components/Links'

const projects = [
  {
    name: 'Etteilla Foundation',
    description:
      'Leading nonprofit dedicated to preserving and promoting the rich cultural heritage of playing cards.',
    otherLinks: [{ href: 'https://etteilla.org', label: 'https://etteilla.org' }],
    logo: logoEtteilla,
  },
  {
    name: 'TrueTesting',
    description:
      'Independent product recommendations you can trust. Rigorously tests online products to provide you conflict of interest free recommendations that will work for your use cases and will be safe to use. TrueTesting is an initiave of Cyber Security Technologies Foundation',
    otherLinks: [{ href: 'https://truetesting.org', label: 'https://truetesting.org' }, { href: 'https://cysectech.org', label: 'https://cysectech.org' }],
    logo: logoTrueTesting,
  },
  {
    name: 'PetSquare',
    description:
      'Search engine for Animal owners. It was my first startup project. Unfortunately the website is no longer available',
    otherLinks: [],
    logo: logoPetSquare,
  },
  {
    name: 'Elie Bursztein’s personal website',
    description:
      'Elie Bursztein leads Google’s anti-abuse research team, which invents transformative solutions that help protect users against online threats.',
    otherLinks: [{ href: 'https://elie.net', label: 'https://elie.net' }],
    logo: logoElie,
  },
  {
    name: 'WebSecLab - a security education workbench',
    description:
      'Webseclab is  a virtual-machine-based web-application security student laboratory, comprising a LAMP (Linux, Apache, MySQL, PHP) stack, a variety of development tools, and the three most popular browsers for the Linux platform.',
    otherLinks: [{ href: '/papers/webseclab-security-education-workbench.pdf', label: 'Research paper in pdf' }],
    logo: logoWebSecLab,
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
        className="grid grid-cols-1 gap-x-20 gap-y-20 sm:grid-cols-2"
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
              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-100 bg-zinc-50 opacity-100 transition group-hover:scale-105 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
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
