import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SoundcloudIcon,
  DiscordIcon,
  MailIcon
} from '@/components/Icons'
import { TextLink } from '@/components/Links'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        rel="noopener"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-purple-400 dark:text-zinc-200 dark:hover:text-purple-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-purple-400" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}



export const metadata: Metadata = {
  title: 'About',
  description:
    "",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square ring-4 ring-purple-400 rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I am Celine, a french full stack developer based in Silicon Valley.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I live in Mountain View, California with my husband and
              our cat <TextLink href="https://instagram.com/nikifromthebay">Niki</TextLink>.</p>
            <p>I have a wide range of interests from animals and health and fitness to software and hardware  security, electric cars, video games, electronic music or shooting guns!
            </p>
            <p>
              Since I was a kid, I was crazy about animals that's why I decided to build PetSquare, my first startup.
              PetSquare was a web search engine dedicated to animal owners. PetSquare was created to help pet and animal owners
               to find good products and places for their animals.
            </p>
            <p>
              Soon after I moved to the US I attended my first DEF CON in Las Vegas and I fell in in love with hacking and security.
              I gave <TextLink href="https://youtu.be/7AAilkNRQAw?si=KWv9the_KbiDaHjP">my first talk at DEF CON 22</TextLink> about video games and another talk on <TextLink href="https://youtu.be/bU6bosBN5D0?si=BCv5o02PlGDKFmtL">cheating at poker at DEF CON 24</TextLink>.
            </p>
            <p>
              Since shutting down my startup I have been focused on non profit work, I created <TextLink href="https://cysectech.org">Cyber Security Technologies Foundation</TextLink>, a 501c3 non profit
              organization dedicated to enabling a trustworthy cyberworld for all.
              Our main product: <TextLink href="https://truetesting.org">TrueTesting</TextLink> is focused on testing and recommending products that you can buy online without conflict of interests.
            </p>
            <p>
              Today, I’m a full stack developer looking for a new opportunity. Meanwhile I am improving my frontend skills with React and Typescript on an online museum for vintage playing cards created by <TextLink href="https://etteilla.org">Etteilla Foundation</TextLink>. 
            </p>
            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href={process.env.LINKEDIN || ""}
              icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>

            <SocialLink href={process.env.GITHUB || ""} icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href={process.env.INSTAGRAM || ""} icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href={process.env.SOUNDCLOUD || ""} icon={SoundcloudIcon} className="mt-4">
              Follow on Soundcloud
            </SocialLink>
            <SocialLink
              href="mailto:contact@celine.im"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@celine.im
            </SocialLink>
            <SocialLink
              href="https://discord.com/users/Cealtea#9881"
              icon={DiscordIcon}
              className="mt-4">
              Discord:Cealtea#9881
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
