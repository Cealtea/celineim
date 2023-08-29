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
  TwitterIcon,
} from '@/components/SocialIcons'
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

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="white dark:text-zinc-800"
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function DiscordIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 -28.5 256 256" aria-hidden="true" {...props}>
      <path fill="#5865F2" d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fillRule="nonzero"></path>
    </svg>
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
              our cat <a className="text-purple-300 hover:text-purple-400" href="https://instagram.com/nikifromthebay" target='_blank' rel='noopener'>Niki</a>.</p>
            <p>I have a wide range of interests from animals and health and fitness to software and hardware  security, electric cars, video games, electronic music or shooting guns!
            </p>
            <p>
              Since I was a kid, I was crazy about animals that's why I decided to build PetSquare, my first startup.
              PetSquare was a web search engine dedicated to animal owners. PetSquare was created to help pet and animal owners
               to find good products and places.
            </p>
            <p>
              Soon after I moved to the US I attended my first DEF CON in Las Vegas and I fell in in love with hacking and security.
              I gave <a className="text-purple-300 hover:text-purple-400" href="https://youtu.be/7AAilkNRQAw?si=KWv9the_KbiDaHjP" target='_blank' rel='noopener'>my first talk at DEF CON 22</a> about video games and another talk on <a className="text-purple-300 hover:text-purple-400" href="https://youtu.be/bU6bosBN5D0?si=BCv5o02PlGDKFmtL" target='_blank' rel='noopener'>cheating at poker at DEF CON 24</a>.
            </p>
            <p>
              Since shutting down my startup I have been focus on non profit work, I created <a className="text-purple-300 hover:text-purple-400" href="https://cysectech.org" target='_blank' rel='noopener'>Cyber Security Technologies Foundation</a>, a 501c3 non profit
              organization dedicated to enabling a trustworthy cyberworld for all.
              Our main product: <a className="text-purple-300 hover:text-purple-400" href="https://truetesting.org" target='_blank' rel='noopener'>TrueTesting</a> is focused on testing and recommending products that you can buy online without conflict of interests.
            </p>
            <p>
              Today, I’m a full stack developer looking for a new opportunity and improving my frontend skills an online museum for vintage playing cards created by <a className="text-purple-300 hover:text-purple-400" href="https://etteilla.org" target='_blank' rel='noopener'>Etteilla Foundation</a>. 
            </p>
            <p>
              Today, I’m a full stack developer looking for a new opportunity and improving my frontend skills an online museum for vintage playing cards created by <a className="text-purple-300 hover:text-purple-400" href="https://etteilla.org" target='_blank' rel='noopener'>Etteilla Foundation</a>. 
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/celinefabrybursztein/"
              icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>

            <SocialLink href="https://github.com/Cealtea" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://instagram.com/cealtea" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://soundcloud.com/aelixia" icon={SoundcloudIcon} className="mt-4">
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
